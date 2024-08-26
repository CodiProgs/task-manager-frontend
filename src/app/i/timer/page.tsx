import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constant'

import { PomodoroTimer } from './PomodoroTimer'

export const metadata: Metadata = {
	title: 'Pomodoro Timer',
	...NO_INDEX_PAGE
}

export default function TimerPage() {
	return (
		<div>
			<Heading>Pomodoro Timer</Heading>
			<PomodoroTimer />
		</div>
	)
}
