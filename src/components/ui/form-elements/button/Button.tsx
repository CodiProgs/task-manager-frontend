import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

interface IButton extends TypeButton {
	variant?: 'primary' | 'outline'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'primary',
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: variant === 'primary',
				[styles.outline]: variant === 'outline'
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export { Button }
