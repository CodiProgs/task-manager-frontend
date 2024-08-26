'use client'

import { FC, PropsWithChildren } from 'react'

import { useCookie } from '@/hooks/useCookie'

import styles from './DashboardLayout.module.scss'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

interface IDashboardLayout {
	sidebarWidth: number
	sidebarIsHidden: boolean
}

const DashboardLayout: FC<PropsWithChildren<IDashboardLayout>> = ({
	children,
	sidebarIsHidden,
	sidebarWidth
}) => {
	const [sidebarWidthState, setSidebarWidthState] = useCookie({
		defaultValue: sidebarWidth,
		key: 'SidebarWidth'
	})

	const [sidebarIsHiddenState, setSidebarIsHiddenState] = useCookie({
		defaultValue: sidebarIsHidden,
		key: 'SidebarIsHidden'
	})

	return (
		<div>
			<Header />
			<Sidebar
				isHidden={sidebarIsHiddenState}
				width={sidebarWidthState}
				setWidth={setSidebarWidthState}
				setIsHidden={setSidebarIsHiddenState}
			/>
			<div
				style={{
					marginLeft: sidebarIsHiddenState ? '0' : `${sidebarWidthState}px`
				}}
				className={styles.content}
			>
				{children}
			</div>
		</div>
	)
}

export { DashboardLayout }
