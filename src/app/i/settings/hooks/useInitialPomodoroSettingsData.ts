import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import { PomodoroSettingsDto } from '@/__generated__/output'

export function useInitialPomodoroSettingsData(
	reset: UseFormReset<PomodoroSettingsDto>
) {
	const { user } = useProfile()

	useEffect(() => {
		if (user?.pomodoroSettings) {
			reset(user.pomodoroSettings)
		}
	}, [user])
}
