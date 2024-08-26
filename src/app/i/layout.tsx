import { cookies } from 'next/headers'
import type { PropsWithChildren } from 'react'

import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout'

import { EnumCookie } from '@/services/cookie.service'

export default function Layout({ children }: PropsWithChildren) {
	const sidebarWidth = parseInt(
		cookies().get(EnumCookie.SidebarWidth)?.value ?? '300'
	)
	const sidebarIsHidden =
		cookies().get(EnumCookie.SidebarIsHidden)?.value === 'true'

	return (
		<DashboardLayout
			sidebarIsHidden={sidebarIsHidden}
			sidebarWidth={sidebarWidth}
		>
			{children}
		</DashboardLayout>
	)
}
