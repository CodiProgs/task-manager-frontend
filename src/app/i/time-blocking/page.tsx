import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constant'

import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Time Blocking',
	...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
	return (
		<div>
			<Heading>Time Blocking</Heading>
			<TimeBlocking />
		</div>
	)
}
