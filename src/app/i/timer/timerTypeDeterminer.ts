import { PomodoroType, TypePomodoro } from '@/__generated__/output'

interface ITimerTypeDeterminer {
	pomodoros: PomodoroType[]
	pomodoro: PomodoroType
	setType: (type: TypePomodoro) => void
	longBreakAfter: number
	workCount?: number
}

export function determineTimerType({
	pomodoros,
	pomodoro,
	longBreakAfter,
	workCount = 1,
	setType
}: ITimerTypeDeterminer) {
	if (
		pomodoro.type === TypePomodoro.Break ||
		pomodoro.type === TypePomodoro.LongBreak
	) {
		setType(TypePomodoro.Work)
	} else {
		for (let i = 1; i <= pomodoros.length - 1; i++) {
			if (pomodoros[i].type === TypePomodoro.Work) {
				workCount++

				if (workCount === longBreakAfter) {
					setType(TypePomodoro.LongBreak)
					break
				}
			}
			if (pomodoros[i].type === TypePomodoro.LongBreak) {
				if (pomodoro.type === TypePomodoro.Work) {
					setType(TypePomodoro.Break)
					break
				} else {
					setType(TypePomodoro.Work)
					break
				}
			}
		}
		if (workCount !== longBreakAfter) {
			setType(TypePomodoro.Break)
		}
	}
}
