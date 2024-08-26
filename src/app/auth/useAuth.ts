import { GraphQLErrorExtensions } from 'graphql'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { tokenService } from '@/services/token.service'

import { DASHBOARD_URL } from '@/config/url.config'

import { authVar } from '@/stores/auth.store'

import { AuthDto, useAuthMutation } from '@/__generated__/output'

export const useAuth = (reset: UseFormReset<AuthDto>) => {
	const [errors, setErrors] = useState<GraphQLErrorExtensions>({})

	const { push } = useRouter()

	const [mutate, { loading }] = useAuthMutation({
		onCompleted(data) {
			reset()

			tokenService.save(data.auth.accessToken)
			toast.success('Success')

			authVar(true)

			push(DASHBOARD_URL.HOME)
		},
		onError(error) {
			const extensions = error?.graphQLErrors?.[0]?.extensions
			extensions && setErrors(extensions)
		}
	})

	return { mutate, loading, errors, setErrors }
}
