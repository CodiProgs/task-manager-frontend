import { useUpdateTaskMutation } from '@/__generated__/output'

export function useUpdateTask() {
	const [updateTask] = useUpdateTaskMutation()

	return { updateTask }
}
