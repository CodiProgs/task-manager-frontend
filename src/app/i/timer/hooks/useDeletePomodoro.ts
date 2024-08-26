import {
	GetTodaySessionsDocument,
	PomodoroType,
	useDeletePomodoroMutation
} from '@/__generated__/output'

export function useDeletePomodoro() {
	const [deletePomodoro, { loading }] = useDeletePomodoroMutation({
		update: (cache, { data }) => {
			const existingPomodoros: { getTodaySessions: PomodoroType[] } | null =
				cache.readQuery({
					query: GetTodaySessionsDocument
				})

			cache.writeQuery({
				query: GetTodaySessionsDocument,
				data: {
					getTodaySessions:
						existingPomodoros?.getTodaySessions.filter(
							pomodoro => pomodoro.id !== data?.deletePomodoro.id
						) || []
				}
			})
		}
	})

	return { deletePomodoro, loadingDeletePomodoro: loading }
}
