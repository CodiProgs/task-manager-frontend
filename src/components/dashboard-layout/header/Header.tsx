import { ClipboardCheck } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import { SITE_NAME } from '@/constants/seo.constant'

import { DASHBOARD_URL } from '@/config/url.config'

import styles from './Header.module.scss'
import { HeaderProfile } from './Profile/Profile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href={DASHBOARD_URL.HOME}>
					<ClipboardCheck />
					{SITE_NAME}
				</Link>
			</div>
			<HeaderProfile />
		</header>
	)
}

export { Header }
