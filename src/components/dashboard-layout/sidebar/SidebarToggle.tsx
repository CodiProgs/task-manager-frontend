import { MoveLeft, MoveRight } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Sidebar.module.scss'

interface SidebarToggleProps {
	isHidden: boolean
	setIsHidden: Dispatch<SetStateAction<boolean>>
}

const SidebarToggle: FC<SidebarToggleProps> = ({ isHidden, setIsHidden }) => {
	const toggleSidebar = () => {
		setIsHidden(!isHidden)
	}

	return (
		<button
			className={styles.sidebarToggle}
			onClick={toggleSidebar}
		>
			{isHidden ? <MoveRight size={16} /> : <MoveLeft size={16} />}
		</button>
	)
}

export { SidebarToggle }
