'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'
import { SidebarResizer } from './SidebarResizer'
import { SidebarToggle } from './SidebarToggle'
import { ThemeToggleButton } from './ThemeToggleButton/ThemeToggleButton'
import { MENU } from './menu.data'

interface SidebarProps {
	width: number
	isHidden: boolean
	setWidth: Dispatch<SetStateAction<number>>
	setIsHidden: Dispatch<SetStateAction<boolean>>
}

const Sidebar: FC<SidebarProps> = ({
	isHidden,
	width,
	setWidth,
	setIsHidden
}) => {
	return isHidden ? (
		<div className={styles.sidebar}>
			<SidebarToggle
				isHidden={isHidden}
				setIsHidden={setIsHidden}
			/>
		</div>
	) : (
		<div
			className={styles.sidebar}
			style={{
				width: `${width}px`
			}}
		>
			<ul className={styles.menu}>
				{MENU.map((item, index) => (
					<SidebarItem
						key={index}
						icon={item.icon}
						link={item.link}
						name={item.name}
					/>
				))}
				<li className={styles.hr} />
				<ThemeToggleButton />
			</ul>
			<SidebarResizer setWidth={setWidth} />
			<SidebarToggle
				isHidden={isHidden}
				setIsHidden={setIsHidden}
			/>
		</div>
	)
}

export { Sidebar }
