import type { ITimerState } from '../timer.types'
import { determineTimerType } from '../timerTypeDeterminer'

import { useCreatePomodoro } from './useCreatePomodoro'
import { useDeletePomodoro } from './useDeletePomodoro'
import { useLoadSettings } from './useLoadSettings'
import { useUpdatePomodoro } from './useUpdatePomodoro'
import {
	PomodoroType,
	StatusPomodoro,
	TypePomodoro
} from '@/__generated__/output'

type TypeUseTimerActions = ITimerState & {
	pomodoros: PomodoroType[] | undefined
}

export function useTimerActions({
	activePomodoro,
	setIsRunning,
	secondsLeft,
	setActivePomodoro,
	activeType,
	setType,
	pomodoros
}: TypeUseTimerActions) {
	const { createPomodoro, loadingCreatePomodoro } = useCreatePomodoro()
	const { updatePomodoro, loadingUpdatePomodoro } = useUpdatePomodoro()
	const { deletePomodoro, loadingDeletePomodoro } = useDeletePomodoro()

	const { longBreakAfter } = useLoadSettings()

	const pauseHandler = () => {
		setIsRunning(false)
		document.title = 'Pomodoro Timer'
		if (!activePomodoro?.id) return

		updatePomodoro({
			variables: {
				id: activePomodoro?.id,
				input: {
					status:
						secondsLeft === 0
							? StatusPomodoro.Completed
							: StatusPomodoro.Paused,
					remainingSeconds: secondsLeft,
					type: activePomodoro.type
				}
			}
		})
	}

	const playHandler = () => {
		if (!activePomodoro?.id || activePomodoro?.type !== activeType) {
			if (activePomodoro?.type !== activeType && activePomodoro?.id) {
				updatePomodoro({
					variables: {
						id: activePomodoro.id,
						input: {
							status: StatusPomodoro.Skipped,
							remainingSeconds: secondsLeft,
							type: activePomodoro.type
						}
					}
				})
			}

			createPomodoro({
				variables: {
					input: {
						status: StatusPomodoro.InProgress,
						type: activeType ?? TypePomodoro.Work,
						totalSeconds: secondsLeft,
						remainingSeconds: secondsLeft
					}
				}
			})
		} else if (activePomodoro?.id) {
			updatePomodoro({
				variables: {
					id: activePomodoro.id,
					input: {
						status: StatusPomodoro.InProgress,
						remainingSeconds: secondsLeft,
						type: activePomodoro.type
					}
				}
			})
		}

		setIsRunning(true)
	}

	const nextPomodoroHandler = async () => {
		let removedPomodoro = activePomodoro

		if (!activePomodoro?.id) {
			const pomodoro = await createPomodoro({
				variables: {
					input: {
						status: StatusPomodoro.Skipped,
						type: activeType ?? TypePomodoro.Work,
						remainingSeconds: secondsLeft,
						totalSeconds: secondsLeft
					}
				}
			})
			removedPomodoro = pomodoro.data?.createPomodoro
		} else {
			updatePomodoro({
				variables: {
					id: activePomodoro?.id,
					input: {
						remainingSeconds: secondsLeft,
						status: StatusPomodoro.Skipped,
						type: activePomodoro.type
					}
				}
			})
		}

		if (removedPomodoro && pomodoros && pomodoros.length > 0) {
			determineTimerType({
				pomodoros: pomodoros,
				pomodoro: removedPomodoro,
				setType,
				longBreakAfter: longBreakAfter || 4,
				workCount: 2
			})
		}
	}

	const prevPomodoroHandler = () => {
		let index = 0

		if (activePomodoro && activePomodoro.id) {
			deletePomodoro({
				variables: {
					id: activePomodoro.id
				}
			})

			index = 1
		}
		if (pomodoros && pomodoros.length >= 1) {
			setActivePomodoro(pomodoros[index])
			setType(pomodoros[index].type)

			updatePomodoro({
				variables: {
					id: pomodoros[index].id,
					input: {
						status: StatusPomodoro.Paused,
						remainingSeconds: pomodoros[index].totalSeconds,
						type: pomodoros[index].type
					}
				}
			})
		}
	}

	return {
		loadingCreatePomodoro,
		loadingUpdatePomodoro,
		loadingDeletePomodoro,
		pauseHandler,
		playHandler,
		nextPomodoroHandler,
		prevPomodoroHandler
	}
}
