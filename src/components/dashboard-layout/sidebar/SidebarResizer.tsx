import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Sidebar.module.scss'

interface SidebarResizerProps {
	setWidth: Dispatch<SetStateAction<number>>
}

const SidebarResizer: FC<SidebarResizerProps> = ({ setWidth }) => {
	const startResizing = () => {
		const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
			const newWidth = Math.max(220, Math.min(mouseMoveEvent.clientX, 360))

			setWidth(newWidth)
		}

		const stopResizing = () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', stopResizing)
		}

		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', stopResizing)
	}

	return (
		<div
			className={styles.resizer}
			onMouseDown={startResizing}
		/>
	)
}

export { SidebarResizer }
