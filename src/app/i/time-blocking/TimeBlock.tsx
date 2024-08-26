import cn from 'clsx'
import { Edit, GripVertical, Trash } from 'lucide-react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { Loader } from '@/components/ui/Loader'

import { getContrastColor } from '@/utils/get-contrast'
import { hexToRgb } from '@/utils/hex-to-rgb'

import styles from './TimeBlocking.module.scss'
import { useDeleteTimeBlock } from './hook/useDeleteTimeBlock'
import { useTimeBlockSortable } from './hook/useTimeBlockSortable'
import { TimeBlockDto, TimeBlockType } from '@/__generated__/output'

interface ITimeBlock {
	item: TimeBlockType
}

const TimeBlock: FC<ITimeBlock> = ({ item }) => {
	const { attributes, listeners, setNodeRef, style } = useTimeBlockSortable(
		item.id
	)
	const { reset } = useFormContext<TimeBlockDto>()
	const { deleteTimeBlock, loadingDeleteTimeBlock } = useDeleteTimeBlock()

	const rgbColor = hexToRgb(item.color)
	const contrastColor = getContrastColor(rgbColor!)

	return (
		<div
			ref={setNodeRef}
			style={style}
		>
			<div
				className={styles.block}
				style={{
					backgroundColor: item.color,
					color: contrastColor,
					height: `${item.duration}px`
				}}
			>
				<div className={styles.content}>
					<button
						{...attributes}
						{...listeners}
						aria-describedby='time-block'
					>
						<GripVertical className={styles.grip} />
					</button>
					<div>
						{item.name}{' '}
						<i className={styles.duration}>({item.duration} min.)</i>
					</div>
				</div>

				<div className={styles.actions}>
					<button
						onClick={() => {
							reset({
								id: item.id,
								color: item.color,
								duration: item.duration,
								name: item.name,
								order: item.order
							})
						}}
						className={styles.edit}
					>
						<Edit size={16} />
					</button>
					<button
						onClick={() => deleteTimeBlock({ variables: { id: item.id } })}
						className={styles.delete}
					>
						{loadingDeleteTimeBlock ? (
							<Loader
								className={cn('size-[16px]', `text-[${contrastColor}]`)}
							/>
						) : (
							<Trash size={16} />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export { TimeBlock }
