import { DragDropContext } from '@hello-pangea/dnd'
import cn from 'clsx'
import { FC } from 'react'

import { COLUMNS } from '../columns.data'
import { useTaskDnd } from '../hooks/useTaskDnd'
import { useTasks } from '../hooks/useTasks'

import { ListRowParent } from './ListRowParent'
import styles from './ListView.module.scss'

const ListView: FC = () => {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd({ setItems })

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={cn(styles.header, styles.row)}>
					<div>Task name</div>
					<div className='text-center'>Due date</div>
					<div className='text-center'>Priority</div>
					<div className='text-center'>Action</div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map(column => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	)
}

export { ListView }
