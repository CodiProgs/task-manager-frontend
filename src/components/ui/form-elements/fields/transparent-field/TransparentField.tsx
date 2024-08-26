import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

import styles from './TransparentField.module.scss'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

type ITransparentField = TypeTransparentField & {
	error?: string
}

export const TransparentField = forwardRef<HTMLInputElement, ITransparentField>(
	({ error, className, ...rest }, ref) => {
		return (
			<div className={styles.transparentField}>
				<input
					className={cn(styles.input, className)}
					ref={ref}
					{...rest}
				/>
				{error && <p className={styles.error}>{error}</p>}
			</div>
		)
	}
)

TransparentField.displayName = 'TransparentField'
