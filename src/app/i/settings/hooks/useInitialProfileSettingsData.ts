import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import { UserDto } from '@/__generated__/output'

export function useInitialProfileSettingsData(reset: UseFormReset<UserDto>) {
	const { user } = useProfile()

	useEffect(() => {
		if (user?.pomodoroSettings) {
			reset({
				email: user.email,
				name: user.name || ''
			})
		}
	}, [user])
}
