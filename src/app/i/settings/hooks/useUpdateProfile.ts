import { GraphQLErrorExtensions } from 'graphql'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { useUpdateProfileMutation } from '@/__generated__/output'

export function useUpdateProfile() {
	const [errors, setErrors] = useState<GraphQLErrorExtensions>({})

	const [mutate, { loading }] = useUpdateProfileMutation({
		onCompleted: () => {
			toast.success('Profile updated')
		},
		onError(error) {
			const extensions = error?.graphQLErrors?.[0]?.extensions
			extensions && setErrors(extensions)
		}
	})

	return { mutate, loading, errors, setErrors }
}
