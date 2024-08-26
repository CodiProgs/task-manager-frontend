'use client'

import cn from 'clsx'
import { FC } from 'react'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'

import styles from './Profile.module.scss'
import { ProfileMenu } from './ProfileMenu'

const HeaderProfile: FC = () => {
	const { user, loading } = useProfile()

	const { ref, isShow, setIsShow } = useOutside(false)

	return loading ? (
		<div className={styles.profile}>
			<div className={cn(styles.skeleton_name, styles.skeleton)} />
			<div className={cn(styles.avatar, styles.skeleton)} />
		</div>
	) : (
		<div
			className={styles.profile}
			ref={ref}
		>
			<div className={styles.name}>{user?.name}</div>
			<button
				className={styles.avatar}
				onClick={() => setIsShow(!isShow)}
			>
				{user?.name ? user.name[0] : 'A'}
			</button>
			{isShow && <ProfileMenu setIsShow={setIsShow} />}
		</div>
	)
}

export { HeaderProfile }
