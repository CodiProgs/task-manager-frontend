import {
	TimeBlockType,
	TimeBlocksDocument,
	useDeleteTimeBlockMutation
} from '@/__generated__/output'

export function useDeleteTimeBlock() {
	const [deleteTimeBlock, { loading }] = useDeleteTimeBlockMutation({
		update: (cache, { data }) => {
			const existingBlocks: { timeBlocks: TimeBlockType[] } | null =
				cache.readQuery({
					query: TimeBlocksDocument
				})

			cache.writeQuery({
				query: TimeBlocksDocument,
				data: {
					timeBlocks:
						existingBlocks?.timeBlocks.filter(
							block => block.id !== data?.deleteTimeBlock.id
						) || []
				}
			})
		}
	})

	return { deleteTimeBlock, loadingDeleteTimeBlock: loading }
}
