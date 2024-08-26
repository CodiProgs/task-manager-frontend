'use client'

import cn from 'clsx'
import {
	FC,
	PropsWithChildren,
	ReactElement,
	cloneElement,
	useState
} from 'react'

import styles from './Hint.module.scss'

interface HintProps {
	message: string
	position?: 'top' | 'bottom' | 'left' | 'right'
	className?: string
}

const HintWrapper: FC<PropsWithChildren<HintProps>> = ({
	children,
	message,
	position = 'top',
	className
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const enhancedChildren = cloneElement(children as ReactElement, {
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false)
	})

	return (
		<div className={cn(styles.wrapper, className)}>
			{enhancedChildren}
			{isHovered && (
				<div className={cn(styles.hint, styles[position])}>{message}</div>
			)}
		</div>
	)
}

export { HintWrapper }
