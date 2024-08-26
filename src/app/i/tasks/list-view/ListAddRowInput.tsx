import { Dispatch, FC, SetStateAction } from 'react'

import styles from './ListView.module.scss'
import { Priority, TaskType } from '@/__generated__/output'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
}

const ListAddRowInput: FC<IListAddRowInput> = ({ filterDate, setItems }) => {
	const addRow = () => {
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
		<div className={styles.addRow}>
			<button onClick={addRow}>Add task</button>
		</div>
	)
}

export { ListAddRowInput }
