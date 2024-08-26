import { Draggable, Droppable } from '@hello-pangea/dnd'
import cn from 'clsx'
import 'dayjs/locale/ru'
import { Dispatch, FC, SetStateAction } from 'react'

import { FILTERS } from '../columns.data'
import { filterTasks } from '../filter-tasks'

import { ListAddRowInput } from './ListAddRowInput'
import { ListRow } from './ListRow'
import styles from './ListView.module.scss'
import { TaskType } from '@/__generated__/output'

interface IListRowParent {
	value: string
	label: string
	items: TaskType[] | undefined
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
}

const ListRowParent: FC<IListRowParent> = ({
	value,
	label,
	items,
	setItems
}) => {
	const filteredItems = filterTasks(items, value)

	if (value === 'overdue') {
		if (!filteredItems?.length) {
			return null
		}
	}
	return (
		<div
			className={cn(styles.parent, {
				[styles.overdue]: value === 'overdue'
			})}
		>
			<div className={styles.colHeading}>
				<div>{label}</div>
			</div>
			<Droppable droppableId={value}>
				{provided => (
					<div
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
										<ListRow
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

						{value !== 'completed' &&
							value !== 'overdue' &&
							!items?.some(item => !item.id) && (
								<ListAddRowInput
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

export { ListRowParent }
