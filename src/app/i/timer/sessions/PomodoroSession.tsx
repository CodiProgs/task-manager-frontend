import dayjs from 'dayjs'
import { FC } from 'react'

import { formatTime } from '../format-time'

import styles from './PomodoroSessions.module.scss'
import {
	PomodoroType,
	StatusPomodoro,
	TypePomodoro
} from '@/__generated__/output'

interface IPomodoroSession {
	session: PomodoroType
}

const PomodoroSession: FC<IPomodoroSession> = ({ session }) => {
	const { minutes, seconds } = formatTime(session.remainingSeconds)

	return (
		<div className={styles.row}>
			<div>{dayjs(session.createdAt).format('HH:mm')}</div>
			<div>
				<span className='mr-1'>
					{session.type === TypePomodoro.Work
						? '🍅'
						: session.type === TypePomodoro.Break
							? '☕'
							: session.type === TypePomodoro.LongBreak
								? '🌴'
								: '❓'}
				</span>
				{session.type
					.replace(/_/g, ' ')
					.toLowerCase()
					.replace(/^\w|\s\w/g, letter => letter.toUpperCase())}
			</div>
			<div>
				{minutes > 0 && `${minutes}m`} {seconds === 0 ? '0s' : `${seconds}s`}
			</div>
			<div
				style={{
					color:
						session.status === StatusPomodoro.Completed
							? '#4CAF50'
							: session.status === StatusPomodoro.InProgress
								? '#FF9800'
								: session.status === StatusPomodoro.Paused
									? '#2196F3'
									: session.status === StatusPomodoro.Skipped
										? '#9C27B0'
										: '#9E9E9E'
				}}
			>
				{session.status
					.replace(/_/g, ' ')
					.toLowerCase()
					.replace(/^\w|\s\w/g, letter => letter.toUpperCase())}
			</div>
		</div>
	)
}

export { PomodoroSession }
