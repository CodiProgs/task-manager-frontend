import { LayoutDashboard, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, FC, SetStateAction } from 'react'

import { authService } from '@/services/auth.service'

import { DASHBOARD_URL } from '@/config/url.config'

import styles from './Profile.module.scss'

interface IProfileMenu {
	setIsShow: Dispatch<SetStateAction<boolean>>
}

const ProfileMenu: FC<IProfileMenu> = ({ setIsShow }) => {
	const { push } = useRouter()

	return (
		<div className={styles.menu}>
			<nav>
				<ul onClick={() => setIsShow(false)}>
					<li>
						<Link
							href={DASHBOARD_URL.HOME}
							className={styles.item}
						>
							<LayoutDashboard />
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							href={DASHBOARD_URL.SETTINGS}
							className={styles.item}
						>
							<Settings />
							Settings
						</Link>
					</li>
					<li>
						<button
							className={styles.item}
							onClick={() => authService.logout(push)}
						>
							<LogOut />
							Logout
						</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export { ProfileMenu }
