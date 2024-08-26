import { createContext, useContext } from 'react'

export type ThemeType = 'light' | 'dark'

interface ThemeContextType {
	theme: ThemeType
	setTheme: (theme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
)

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
