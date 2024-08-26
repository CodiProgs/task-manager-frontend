import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import utc from 'dayjs/plugin/utc'

import { FILTERS } from './columns.data'
import { TaskType } from '@/__generated__/output'

dayjs.extend(utc)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export const filterTasks = (tasks: TaskType[] | undefined, value: string) => {
	switch (value) {
		case 'overdue':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isBefore(FILTERS.today, 'day') &&
					!item.isCompleted
			)

		case 'today':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isSame(FILTERS.today, 'day') &&
					!item.isCompleted
			)

		case 'tomorrow':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isSame(FILTERS.tomorrow, 'day') &&
					!item.isCompleted
			)

		case 'on-this-week':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isAfter(FILTERS.tomorrow, 'day') &&
					dayjs(item.createdAt).isSameOrBefore(FILTERS['on-this-week']) &&
					!item.isCompleted
			)

		case 'on-next-week':
			return tasks?.filter(
				item =>
					dayjs(item.createdAt).isSameOrAfter(FILTERS['on-next-week']) &&
					dayjs(item.createdAt).isBefore(
						FILTERS['on-next-week'].add(1, 'week')
					) &&
					!item.isCompleted
			)

		case 'later':
			return tasks?.filter(
				item =>
					(dayjs(item.createdAt).isSameOrAfter(FILTERS['later']) ||
						!item.createdAt) &&
					!item.isCompleted
			)

		case 'completed':
			return tasks?.filter(item => item.isCompleted)

		default:
			return []
	}
}
