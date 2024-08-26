import { GraphQLErrorExtensions } from 'graphql'
import { Dispatch, SetStateAction } from 'react'

import {
	TimeBlockType,
	TimeBlocksDocument,
	useCreateTimeBlockMutation
} from '@/__generated__/output'

export function useCreateTimeBlock(
	setErrors: Dispatch<SetStateAction<GraphQLErrorExtensions>>
) {
	const [createTimeBlock, { loading }] = useCreateTimeBlockMutation({
		onError(error) {
			const extensions = error?.graphQLErrors?.[0]?.extensions
			extensions && setErrors(extensions)
		},
		update: (cache, { data }) => {
			const existingBlocks: { timeBlocks: TimeBlockType[] } | null =
				cache.readQuery({
					query: TimeBlocksDocument
				})
			const newBlocks = [
				...(existingBlocks?.timeBlocks || []),
				data?.createTimeBlock
			]
			cache.writeQuery({
				query: TimeBlocksDocument,
				data: { timeBlocks: newBlocks }
			})
		}
	})

	return { createTimeBlock, loadingCreateTimeBlock: loading }
}
