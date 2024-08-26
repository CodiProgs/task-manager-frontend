import { useEffect, useState } from 'react'

import { TimeBlockType, useTimeBlocksQuery } from '@/__generated__/output'

export function useTimeBlocks() {
	const { data, loading } = useTimeBlocksQuery()

	const [items, setItems] = useState<TimeBlockType[] | undefined>(
		data?.timeBlocks
	)

	useEffect(() => {
		const array = [...(data?.timeBlocks || [])].sort(
			(a, b) => a.order - b.order
		)
		setItems(array)
	}, [data])

	return { items, setItems, loading }
}
