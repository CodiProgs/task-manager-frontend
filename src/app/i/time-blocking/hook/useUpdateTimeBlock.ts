import { GraphQLErrorExtensions } from 'graphql'
import { Dispatch, SetStateAction } from 'react'

import { useUpdateTimeBlockMutation } from '@/__generated__/output'

export function useUpdateTimeBlock(
	setErrors: Dispatch<SetStateAction<GraphQLErrorExtensions>>
) {
	const [updateTimeBlock, { loading }] = useUpdateTimeBlockMutation({
		onError(error) {
			const extensions = error?.graphQLErrors?.[0]?.extensions
			extensions && setErrors(extensions)
		}
	})

	return { updateTimeBlock, loadingUpdateTimeBlock: loading }
}
