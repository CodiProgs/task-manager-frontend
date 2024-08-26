import { Metadata } from 'next'

export const NO_INDEX_PAGE: Metadata = {
	robots: { index: false, follow: false }
}

export const SITE_NAME = 'Task Manager'
export const SITE_DESCRIPTION = 'A simple task manager'
