import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_URL, PUBLIC_URL } from './config/url.config'
import { EnumCookie } from './services/cookie.service'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumCookie.RefreshToken)?.value

	const url = new URL(request.url)

	if (url.pathname === '/' && refreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_URL.HOME, request.url))
	} else if (url.pathname === '/') {
		return NextResponse.next()
	}

	const isAuthPage = request.url.includes(PUBLIC_URL.AUTH)

	if (isAuthPage) {
		if (refreshToken)
			return NextResponse.redirect(new URL(DASHBOARD_URL.HOME, request.url))

		return NextResponse.next()
	}

	if (refreshToken === undefined) {
		return NextResponse.redirect(new URL(PUBLIC_URL.AUTH, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/i/:path*', '/auth', '/']
}
