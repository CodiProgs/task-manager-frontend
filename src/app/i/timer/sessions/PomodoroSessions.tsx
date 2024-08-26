import cn from 'clsx'
import { FC } from 'react'

import { PomodoroSession } from './PomodoroSession'
import styles from './PomodoroSessions.module.scss'
import { PomodoroType } from '@/__generated__/output'

interface IPomodoroSessions {
	sessions: PomodoroType[] | undefined
	loading: boolean
}

const PomodoroSessions: FC<IPomodoroSessions> = ({ sessions, loading }) => {
	return (
		<div>
			<div className={styles.heading}>Today's sessions</div>

			{loading ? (
				<div className={styles.sessions}>
					<div className={cn(styles.row, styles.header, styles.row_skeleton)} />
					{Array.from({ length: 3 }).map((_, index) => (
						<div
							className={cn(styles.row, styles.row_skeleton)}
							key={index}
						/>
					))}
				</div>
			) : sessions && sessions.length > 0 ? (
				<div className={styles.sessions}>
					<div className={cn(styles.row, styles.header)}>
						<div>Created at</div>
						<div>Type</div>
						<div>Left time</div>
						<div>Status</div>
					</div>
					{sessions?.map(session => (
						<PomodoroSession
							key={session.id}
							session={session}
						/>
					))}
				</div>
			) : (
				<div>No sessions today</div>
			)}
		</div>
	)
}

export { PomodoroSessions }
