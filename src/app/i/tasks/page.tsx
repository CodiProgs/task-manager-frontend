import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { Heading } from '@/components/ui/heading/Heading'

import { EnumCookie } from '@/services/cookie.service'

import { NO_INDEX_PAGE } from '@/constants/seo.constant'

import { Tasks, TypeView } from './Tasks'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	const typeView =
		(cookies().get(EnumCookie.TypeView)?.value as TypeView) || 'list'

	return (
		<div>
			<Heading>Tasks</Heading>
			<Tasks initialType={typeView} />
		</div>
	)
}
