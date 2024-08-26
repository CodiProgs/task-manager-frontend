import cn from 'clsx'
import { FC, InputHTMLAttributes } from 'react'

import styles from './Checkbox.module.scss'

type TypeInput = InputHTMLAttributes<HTMLInputElement>
type TypeCheckbox = TypeInput & {
	extra?: string
}

const Checkbox: FC<TypeCheckbox> = ({ id, extra, ...rest }) => {
	return (
		<div className={styles.checkbox}>
			<label
				className={styles.container}
				htmlFor={id}
			>
				<input
					type='checkbox'
					className={cn('peer', styles.input, extra)}
					id={id}
					{...rest}
				/>
				<span
					className={cn(
						'text-bg opacity-0 peer-checked:opacity-100',
						styles.checkmark
					)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						stroke='currentColor'
						strokeWidth='1'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						></path>
					</svg>
				</span>
			</label>
		</div>
	)
}
export { Checkbox }
