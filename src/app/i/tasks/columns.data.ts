import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import isoWeek from 'dayjs/plugin/isoWeek'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(utc)
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

export const FILTERS: Record<string, Dayjs> = {
	today: dayjs().utc().startOf('day'),
	tomorrow: dayjs().utc().add(1, 'day').startOf('day'),
	'on-this-week': dayjs().utc().endOf('isoWeek'),
	'on-next-week': dayjs()
		.utc()
		.startOf('isoWeek')
		.add(1, 'week')
		.startOf('day'),
	later: dayjs().utc().startOf('isoWeek').add(2, 'week').startOf('day')
}

export const COLUMNS = [
	{
		label: 'Overdue',
		value: 'overdue'
	},
	{
		label: 'Today',
		value: 'today'
	},
	{
		label: 'Tomorrow',
		value: 'tomorrow'
	},
	{
		label: 'On this week',
		value: 'on-this-week'
	},
	{
		label: 'On next week',
		value: 'on-next-week'
	},
	{
		label: 'Later',
		value: 'later'
	},
	{
		label: 'Completed',
		value: 'completed'
	}
]
