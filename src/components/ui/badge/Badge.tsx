import { FC, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import { getContrastColor } from '@/utils/get-contrast'

import { hexToRgb } from '../../../utils/hex-to-rgb'

import { Priority } from '@/__generated__/output'

interface IBadge {
	className?: string
	style?: React.CSSProperties
	color?: string
	variant?: string
}

const badge = tv({
	base: 'text-xs font-medium px-2 py-1 rounded w-full inline-block border border-fg/10 hover:bg-opacity-80 transition-colors',
	variants: {
		backgroundColor: {
			gray: 'bg-fg/5 hover:bg-fg/10',
			[Priority.Priority_1]: 'bg-[#D32F2F]',
			[Priority.Priority_2]: 'bg-[#FDD835]',
			[Priority.Priority_3]: 'bg-[#1E88E5]',
			[Priority.Priority_4]: 'bg-[#9E9E9E]'
		}
	},
	defaultVariants: {
		backgroundColor: 'gray'
	}
})

const Badge: FC<PropsWithChildren<IBadge>> = ({
	children,
	className,
	style,
	color,
	variant
}) => {
	const rgbColor = color ? hexToRgb(color) : undefined
	const contrastColor = color ? getContrastColor(rgbColor!) : undefined

	const isValidVariant = Object.values(Priority).includes(variant as Priority)

	return (
		<span
			className={badge({
				backgroundColor: isValidVariant ? (variant as Priority) : undefined,
				className
			})}
			style={{
				...style,
				backgroundColor: `rgba(${rgbColor}, 1)`,
				color: contrastColor
			}}
		>
			{children}
		</span>
	)
}

export { Badge }
