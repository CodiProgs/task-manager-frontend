import { useCreateTaskMutation } from '@/__generated__/output'

export function useCreateTask() {
	const [createTask] = useCreateTaskMutation()

	return { createTask }
}
