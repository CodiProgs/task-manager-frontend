import { TimeBlockType } from '@/__generated__/output'

export function calcHoursLeft(items: TimeBlockType[] | undefined) {
	const totalMinutes = items?.reduce((acc, item) => acc + item.duration, 0) || 0

	const minutesLeftInDay = 1440 - totalMinutes

	const hoursLeft = Math.floor(minutesLeftInDay / 60)
	const remainingMinutes = minutesLeftInDay % 60

	return { hoursLeft, remainingMinutes }
}
