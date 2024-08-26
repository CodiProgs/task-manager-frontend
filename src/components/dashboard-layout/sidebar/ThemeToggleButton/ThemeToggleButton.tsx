import cn from 'clsx'
import { Palette } from 'lucide-react'
import { FC } from 'react'

import { HintWrapper } from '@/components/ui/hint/Hint'

import styles from './ThemeToggleButton.module.scss'
import { useTheme } from '@/contexts/theme.context'

const ThemeToggleButton: FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<Palette className={styles.icon} />
				<span>Dark theme</span>
				<HintWrapper
					className={styles.toggleWrapper}
					message={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
				>
					<button
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						className={cn(
							styles.toggle,
							theme === 'light' ? styles.toggleLight : styles.toggleDark
						)}
					/>
				</HintWrapper>
			</div>
		</li>
	)
}

export { ThemeToggleButton }
