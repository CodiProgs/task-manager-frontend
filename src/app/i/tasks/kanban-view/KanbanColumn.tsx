import { Draggable, Droppable } from '@hello-pangea/dnd'
import { Dispatch, FC, SetStateAction } from 'react'

import { FILTERS } from '../columns.data'
import { filterTasks } from '../filter-tasks'

import { KanbanAddCardInput } from './KanbanAddCardInput'
import { KanbanCard } from './KanbanCard'
import styles from './KanbanView.module.scss'
import { TaskType } from '@/__generated__/output'

interface IKanbanColumn {
	value: string
	label: string
	items: TaskType[] | undefined
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
}

const KanbanColumn: FC<IKanbanColumn> = ({ value, label, items, setItems }) => {
	const filteredItems = filterTasks(items, value)

	if (value === 'overdue') {
		if (!filteredItems?.length) {
			return null
		}
	}

	return (
		<div className={styles.column}>
			<div className={styles.colHeading}>{label}</div>
			<Droppable droppableId={value}>
				{provided => (
					<div
						className={styles.colBody}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						{filteredItems?.map((item, index) => (
							<Draggable
								key={item.id}
								draggableId={item.id}
								index={index}
							>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
									>
										<KanbanCard
											dragHandleProps={provided.dragHandleProps}
											key={item.id}
											item={item}
											setItems={setItems}
										/>
									</div>
								)}
							</Draggable>
						))}

						{provided.placeholder}

						{value !== 'completed' && !items?.some(item => !item.id) && (
							<KanbanAddCardInput
								setItems={setItems}
								filterDate={
									FILTERS[value] ? FILTERS[value].format() : undefined
								}
							/>
						)}
					</div>
				)}
			</Droppable>
		</div>
	)
}

export { KanbanColumn }
