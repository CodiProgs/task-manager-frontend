import { useEffect, useState } from 'react'

import { formatTime } from '../format-time'
import { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { PomodoroType, TypePomodoro } from '@/__generated__/output'

export function useTimer(): ITimerState {
	const { workInterval, breakInterval, longBreakInterval, loading } =
		useLoadSettings()

	const [isRunning, setIsRunning] = useState(false)
	const [secondsLeft, setSecondsLeft] = useState(1500)

	const [activePomodoro, setActivePomodoro] = useState<PomodoroType>()
	const [activeType, setActiveType] = useState<TypePomodoro>()

	const setType = (type: TypePomodoro) => {
		setActiveType(type)

		if (!loading) {
			setSecondsLeft(
				type === TypePomodoro.Work
					? workInterval! * 60
					: type === TypePomodoro.Break
						? breakInterval! * 60
						: longBreakInterval! * 60
			)
		}
	}

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null

		if (isRunning) {
			interval = setInterval(() => {
				setSecondsLeft(secondsLeft => secondsLeft - 1)
			}, 1000)

			const { minutes, seconds } = formatTime(secondsLeft)

			document.title = `${minutes}:${`${seconds < 10 ? '0' : ''}${seconds}`} - ${
				activeType &&
				activeType
					.replace(/_/g, ' ')
					.toLowerCase()
					.replace(/^\w|\s\w/g, letter => letter.toUpperCase())
			}`
		} else if (!isRunning && secondsLeft !== 0 && interval) {
			clearInterval(interval)
		}

		return () => {
			if (interval) clearInterval(interval)
		}
	}, [isRunning, secondsLeft, workInterval, activePomodoro])

	return {
		activePomodoro,
		isRunning,
		secondsLeft,
		activeType,
		setActivePomodoro,
		setIsRunning,
		setSecondsLeft,
		setType
	}
}
