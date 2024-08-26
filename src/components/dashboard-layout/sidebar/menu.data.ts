import { DASHBOARD_URL } from '@/config/url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: 'SquareKanban',
		link: DASHBOARD_URL.TASKS,
		name: 'Tasks'
	},
	{
		icon: 'Timer',
		link: DASHBOARD_URL.TIMER,
		name: 'Pomodoro'
	},
	{
		icon: 'CalendarRange',
		link: DASHBOARD_URL.TIME_BLOCKING,
		name: 'Time blocking'
	}
]
