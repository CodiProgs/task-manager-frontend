import cn from 'clsx'
import { FC } from 'react'

import { Button } from '@/components/ui/form-elements/button/Button'

import styles from './PomodoroTimer.module.scss'
import { TypePomodoro } from '@/__generated__/output'

interface IPomodoroTypes {
	activeType: TypePomodoro | undefined
	setType: (type: TypePomodoro) => void
}

const PomodoroTypes: FC<IPomodoroTypes> = ({ activeType, setType }) => {
	const typePomodoro: TypePomodoro[] = [
		TypePomodoro.Work,
		TypePomodoro.Break,
		TypePomodoro.LongBreak
	]

	return (
		<div className={styles.pomodoroTypes}>
			{Object.entries(typePomodoro).map(([key, value]) => (
				<Button
					variant='outline'
					key={key}
					className={cn(styles.type, activeType === value && styles.active)}
					onClick={() => setType(value)}
				>
					{value
						.replace(/_/g, ' ')
						.toLowerCase()
						.replace(/^\w|\s\w/g, letter => letter.toUpperCase())}
				</Button>
			))}
		</div>
	)
}

export { PomodoroTypes }
