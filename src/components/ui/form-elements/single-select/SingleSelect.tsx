import { useOutside } from '@/hooks/useOutside'

import { Badge } from '../../badge/Badge'

import styles from './SingleSelect.module.scss'

export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
	columns?: number
	children?: React.ReactNode
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect,
	columns = 1,
	children
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)

	const getLabel = () => data.find(item => item.value === value)?.label

	return (
		<div
			className={styles.singleSelect}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
				className={styles.button}
			>
				{children ? (
					children
				) : (
					<Badge
						className='capitalize'
						variant={value}
						color={isColorSelect ? value : undefined}
					>
						{getLabel() || 'Select'}
					</Badge>
				)}
			</button>
			{isShow && (
				<div
					className={styles.options}
					style={{
						top: 'calc(100% + .5rem)',
						...(columns > 1 && {
							gridTemplateColumns: `repeat(${columns}, 1fr)`
						})
					}}
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className={styles.option}
						>
							<Badge
								variant={item.value}
								color={isColorSelect ? item.value : undefined}
							>
								{item.label}
							</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
