import { useUpdatePomodoroMutation } from '@/__generated__/output'

export function useUpdatePomodoro() {
	const [updatePomodoro, { loading }] = useUpdatePomodoroMutation()

	return { updatePomodoro, loadingUpdatePomodoro: loading }
}
