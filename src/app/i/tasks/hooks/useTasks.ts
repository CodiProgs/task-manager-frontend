import { useEffect, useState } from 'react'

import { useTasksQuery } from '@/__generated__/output'

export function useTasks() {
	const { data } = useTasksQuery()

	const [items, setItems] = useState(data?.tasks || undefined)

	useEffect(() => {
		setItems(data?.tasks)
	}, [data?.tasks])

	return { items, setItems }
}
