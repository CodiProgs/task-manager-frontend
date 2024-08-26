import type { Dispatch, SetStateAction } from 'react'

import { PomodoroType, TypePomodoro } from '@/__generated__/output'

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activePomodoro: PomodoroType | undefined
	activeType: TypePomodoro | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActivePomodoro: Dispatch<SetStateAction<PomodoroType | undefined>>
	setType: (type: TypePomodoro) => void
}
