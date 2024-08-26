import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import cn from 'clsx'
import { FC } from 'react'

import { Loader } from '@/components/ui/Loader'

import { TimeBlock } from './TimeBlock'
import styles from './TimeBlocking.module.scss'
import { calcHoursLeft } from './calc-hours-left'
import { useTimeBlockDnd } from './hook/useTimeBlockDnd'
import { useTimeBlocks } from './hook/useTimeBlocks'

const TimeBlockingList: FC = () => {
	const { items, setItems, loading } = useTimeBlocks()
	const { handleDragEnd, sensors } = useTimeBlockDnd(items, setItems)

	if (loading)
		return (
			<div>
				<div className={styles.list}>
					<div className={styles.loader_items_wrapper}>
						<div className={cn(styles.loader_item, styles.block)} />
						<div className={cn(styles.loader_item, styles.block)} />
						<div className={cn(styles.loader_item, styles.block)} />
						<div className={cn(styles.loader_item, styles.block)} />
					</div>
				</div>
				<div className={styles.loader_hours_wrapper}>
					<Loader className={styles.loader_hours} /> hours and
					<Loader className={styles.loader_hours} /> minutes left for sleep`
				</div>
			</div>
		)

	const { hoursLeft, remainingMinutes } = calcHoursLeft(items)

	return (
		<div>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<div className={styles.list}>
					<SortableContext
						items={items || []}
						strategy={verticalListSortingStrategy}
					>
						{items?.length ? (
							items?.map(item => (
								<TimeBlock
									key={item.id}
									item={item}
								/>
							))
						) : (
							<div>Add the first time-block on the right form</div>
						)}
					</SortableContext>
				</div>
			</DndContext>
			<div>
				{hoursLeft > 0
					? `${hoursLeft} hours and ${remainingMinutes} minutes left for sleep`
					: 'No hours left for sleep'}
			</div>
		</div>
	)
}

export { TimeBlockingList }
