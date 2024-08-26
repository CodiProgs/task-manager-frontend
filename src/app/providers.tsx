import { cookies } from 'next/headers'
import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { ApolloClientProvider } from '@/providers/ApolloClientProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

import { EnumCookie } from '@/services/cookie.service'

import { ThemeType } from '@/contexts/theme.context'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const isAuth = !!cookies().get(EnumCookie.RefreshToken)
	const theme = (cookies().get(EnumCookie.Theme)?.value as ThemeType) || 'light'

	return (
		<ThemeProvider initialTheme={theme}>
			<ApolloClientProvider>
				<AuthProvider isAuth={isAuth}>
					<Toaster toastOptions={{ duration: 2500 }} />
					{children}
				</AuthProvider>
			</ApolloClientProvider>
		</ThemeProvider>
	)
}

export default Providers
