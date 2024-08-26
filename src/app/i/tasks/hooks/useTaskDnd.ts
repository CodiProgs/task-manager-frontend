import { DropResult } from '@hello-pangea/dnd'
import { Dispatch, SetStateAction } from 'react'

import { FILTERS } from '../columns.data'

import { useUpdateTask } from './useUpdateTask'
import { TaskType } from '@/__generated__/output'

interface IUseTaskDnd {
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
}

export function useTaskDnd({ setItems }: IUseTaskDnd) {
	const { updateTask } = useUpdateTask()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId

		if (destinationColumnId === result.source.droppableId) return

		if (destinationColumnId === 'completed') {
			updateTask({
				variables: {
					id: result.draggableId,
					input: {
						isCompleted: true
					}
				}
			})

			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format()

		updateTask({
			variables: {
				id: result.draggableId,
				input: {
					createdAt: newCreatedAt,
					isCompleted: false
				}
			}
		})

		setItems(prevItems => {
			if (!prevItems) return prevItems

			const item = prevItems.find(item => item.id === result.draggableId)

			if (!item) return prevItems

			const newItems = prevItems.filter(item => item.id !== result.draggableId)

			return [...newItems, { ...item, createdAt: newCreatedAt }]
		})
	}

	return { onDragEnd }
}
