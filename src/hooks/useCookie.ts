import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { EnumCookie, cookieService } from '@/services/cookie.service'

interface IUseCookie<T> {
	key: keyof typeof EnumCookie
	defaultValue: T
}

/**
 * Custom React hook for managing cookies.
 *
 * This hook allows you to easily get and set cookies within your React application.
 * It uses the `js-cookie` library for cookie management and provides a simple interface
 * to interact with cookies. The hook ensures that the cookie value is kept in sync
 * with the state of the component using it.
 *
 * @template T The type of the value to be stored in the cookie.
 *
 * @param {IUseCookie<T>} params - The parameters for the hook.
 * @param {keyof typeof EnumCookie} params.key - The key of the cookie to manage. This should be a member of the `EnumCookie`.
 * @param {T} params.defaultValue - The default value to use for the state.
 *
 * @returns {[T, Dispatch<SetStateAction<T>>]} A stateful value, and a function to update it.
 *
 * @example
 * const [theme, setTheme] = useCookie<'light' | 'dark'>({
 *   key: 'theme',
 *   defaultValue: 'light',
 * });
 */
export function useCookie<T>({
	defaultValue,
	key
}: IUseCookie<T>): [T, Dispatch<SetStateAction<T>>] {
	const isMounted = useRef(false)
	const [value, setValue] = useState<T>(defaultValue)

	useEffect(() => {
		const item = cookieService.get(key)
		if (item) {
			setValue(JSON.parse(item) as T)
		}

		return () => {
			isMounted.current = false
		}
	}, [key])

	useEffect(() => {
		if (isMounted.current) {
			cookieService.set(key, value as string)
		} else {
			isMounted.current = true
		}
	}, [key, value])

	return [value, setValue]
}
