import {
	TaskType,
	TasksDocument,
	useDeleteTaskMutation
} from '@/__generated__/output'

export function useDeleteTask() {
	const [deleteTask, { loading }] = useDeleteTaskMutation({
		update: (cache, { data }) => {
			const existingTasks: { tasks: TaskType[] } | null = cache.readQuery({
				query: TasksDocument
			})

			cache.writeQuery({
				query: TasksDocument,
				data: {
					tasks:
						existingTasks?.tasks.filter(
							task => task.id !== data?.deleteTask.id
						) || []
				}
			})
		}
	})

	return { deleteTask, loadingDeleteTask: loading }
}
