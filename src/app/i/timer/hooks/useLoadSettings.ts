import { useProfile } from '@/hooks/useProfile'

export function useLoadSettings() {
	const { user, loading } = useProfile()

	return { ...user?.pomodoroSettings, loading }
}
