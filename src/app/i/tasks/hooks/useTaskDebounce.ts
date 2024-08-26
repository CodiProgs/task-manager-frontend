import debounce from 'lodash.debounce'
import { useCallback } from 'react'

import { useCreateTask } from './useCreateTask'
import { useUpdateTask } from './useUpdateTask'
import { CreateTaskDto, UpdateTaskDto } from '@/__generated__/output'

interface IUseTaskDebounce {
	itemId: string
}

export function useTaskDebounce({ itemId }: IUseTaskDebounce) {
	const { createTask } = useCreateTask()
	const { updateTask } = useUpdateTask()

	const debouncedCreateTask = useCallback(
		debounce((formData: CreateTaskDto & { id?: string }) => {
			const { id, ...restFormData } = formData
			createTask({
				variables: {
					input: {
						...restFormData
					}
				}
			})
		}, 444),
		[]
	)

	const debouncedUpdateTask = useCallback(
		debounce((formData: UpdateTaskDto) => {
			updateTask({
				variables: {
					id: itemId,
					input: {
						...formData
					}
				}
			})
		}, 444),
		[]
	)

	return {
		debouncedCreateTask,
		debouncedUpdateTask
	}
}
