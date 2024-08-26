'use client'

import { FC, useEffect } from 'react'

import { Loader } from '@/components/ui/Loader'

import { PomodoroNavigation } from './PomodoroNavigation'
import styles from './PomodoroTimer.module.scss'
import { PomodoroTypes } from './PomodoroTypes'
import { formatTime } from './format-time'
import { useLoadSettings } from './hooks/useLoadSettings'
import { useTimer } from './hooks/useTimer'
import { useTodaySessions } from './hooks/useTodaySessions'
import { useUpdatePomodoro } from './hooks/useUpdatePomodoro'
import { PomodoroSessions } from './sessions/PomodoroSessions'
import { determineTimerType } from './timerTypeDeterminer'
import { StatusPomodoro, TypePomodoro } from '@/__generated__/output'

const PomodoroTimer: FC = () => {
	const timerState = useTimer()

	const { pomodoros, loading } = useTodaySessions(timerState)

	const { minutes, seconds } = formatTime(timerState.secondsLeft)

	const { longBreakAfter, workInterval, breakInterval } = useLoadSettings()

	const { updatePomodoro } = useUpdatePomodoro()

	useEffect(() => {
		if (timerState.secondsLeft > 0) return

		timerState.setIsRunning(false)
		document.title = 'Pomodoro Timer'

		const audio = new Audio('/alarm-clock.mp3')
		audio.play().catch(error => console.error('Error playing audio:', error))

		if (timerState.activePomodoro && timerState.activePomodoro?.id) {
			updatePomodoro({
				variables: {
					id: timerState.activePomodoro?.id,
					input: {
						status: StatusPomodoro.Completed,
						remainingSeconds: 0,
						type: timerState.activeType || TypePomodoro.Work
					}
				}
			})

			determineTimerType({
				pomodoro: timerState.activePomodoro,
				pomodoros: pomodoros || [],
				setType: timerState.setType,
				longBreakAfter: longBreakAfter || 4
			})
		}
	}, [timerState.secondsLeft, workInterval, breakInterval])

	return (
		<div className={styles.pomodoroTimer}>
			<div className={styles.timer}>
				<PomodoroTypes
					activeType={timerState.activeType}
					setType={timerState.setType}
				/>

				<div className={styles.time}>
					<span className={styles.minutes}>{minutes}</span>
					<span className={styles.colon}>:</span>
					<span
						className={styles.seconds}
					>{`${seconds < 10 ? '0' : ''}${seconds}`}</span>
				</div>

				{loading ? (
					<Loader />
				) : (
					<>
						<PomodoroNavigation
							timerState={timerState}
							pomodoros={pomodoros}
						/>
					</>
				)}
			</div>

			<div className={styles.sessions}>
				<PomodoroSessions
					sessions={pomodoros}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export { PomodoroTimer }
