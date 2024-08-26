import { Dispatch, FC, SetStateAction } from 'react'

import styles from './KanbanView.module.scss'
import { Priority, TaskType } from '@/__generated__/output'

interface IKanbanAddCardInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
}

const KanbanAddCardInput: FC<IKanbanAddCardInput> = ({
	filterDate,
	setItems
}) => {
	const addCard = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate,
					priority: Priority.Priority_4
				}
			]
		})
	}
	return (
		<div className={styles.addCard}>
			<button onClick={addCard}>Add task</button>
		</div>
	)
}

export { KanbanAddCardInput }
