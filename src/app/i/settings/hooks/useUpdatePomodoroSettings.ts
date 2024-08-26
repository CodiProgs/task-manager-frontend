import { GraphQLErrorExtensions } from 'graphql'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { useUpdatePomodoroSettingsMutation } from '@/__generated__/output'

export function useUpdatePomodoroSettings() {
	const [errors, setErrors] = useState<GraphQLErrorExtensions>({})

	const [mutate, { loading }] = useUpdatePomodoroSettingsMutation({
		onCompleted: () => {
			toast.success('Settings updated')
		}
	})

	return {
		mutate,
		loading,
		errors,
		setErrors
	}
}
