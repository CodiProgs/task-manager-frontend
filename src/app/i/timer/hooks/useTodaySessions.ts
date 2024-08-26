import { useEffect, useState } from 'react'

import { ITimerState } from '../timer.types'
import { determineTimerType } from '../timerTypeDeterminer'

import { useLoadSettings } from './useLoadSettings'
import {
	StatusPomodoro,
	TypePomodoro,
	useGetTodaySessionsQuery
} from '@/__generated__/output'

export function useTodaySessions({
	setActivePomodoro,
	setSecondsLeft,
	setType
}: ITimerState) {
	const { data, loading } = useGetTodaySessionsQuery()
	const { longBreakAfter } = useLoadSettings()

	const [pomodoros, setPomodoros] = useState(data?.getTodaySessions)

	useEffect(() => {
		if (data) {
			setPomodoros(data.getTodaySessions)
		}
	}, [data, loading])

	useEffect(() => {
		if (!loading && pomodoros && pomodoros.length > 0) {
			const firstPomodoro = pomodoros[0]

			if (
				[StatusPomodoro.Paused, StatusPomodoro.InProgress].includes(
					firstPomodoro.status
				) &&
				firstPomodoro.remainingSeconds !== 0
			) {
				setType(firstPomodoro.type)
				setSecondsLeft(firstPomodoro.remainingSeconds)
				setActivePomodoro(firstPomodoro)
				return
			}

			determineTimerType({
				pomodoros,
				setType,
				longBreakAfter: longBreakAfter || 4,
				pomodoro: firstPomodoro
			})
		} else if (!loading) {
			setType(TypePomodoro.Work)
		}
	}, [loading, pomodoros])

	return { pomodoros, loading }
}
