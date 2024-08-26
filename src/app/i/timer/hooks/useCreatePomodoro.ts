import {
	GetTodaySessionsDocument,
	PomodoroType,
	useCreatePomodoroMutation
} from '@/__generated__/output'

export function useCreatePomodoro() {
	const [createPomodoro, { loading }] = useCreatePomodoroMutation({
		update: (cache, { data }) => {
			const existingPomodoros: { getTodaySessions: PomodoroType[] } | null =
				cache.readQuery({
					query: GetTodaySessionsDocument
				})

			const newPomodoros = [
				data?.createPomodoro,
				...(existingPomodoros?.getTodaySessions || [])
			]

			cache.writeQuery({
				query: GetTodaySessionsDocument,
				data: { getTodaySessions: newPomodoros }
			})
		}
	})

	return { createPomodoro, loadingCreatePomodoro: loading }
}
