import {
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { Dispatch, SetStateAction } from 'react'

import {
	TimeBlockType,
	useUpdateTimeBlockOrdersMutation
} from '@/__generated__/output'

export function useTimeBlockDnd(
	items: TimeBlockType[] | undefined,
	setItems: Dispatch<SetStateAction<TimeBlockType[] | undefined>>
) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor)
	)

	const [mutate] = useUpdateTimeBlockOrdersMutation()

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event

		if (active.id !== over?.id && items) {
			const oldIndex = items.findIndex(item => item.id === active.id)
			const newIndex = items.findIndex(item => item.id === (over?.id || ''))

			if (oldIndex !== -1 && newIndex !== -1) {
				const newItems = arrayMove(items, oldIndex, newIndex)
				setItems(newItems)

				mutate({
					variables: {
						ids: newItems.map(item => item.id)
					}
				})
			}
		}
	}

	return { handleDragEnd, sensors }
}
