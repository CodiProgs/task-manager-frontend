'use client'

import { FC } from 'react'

import styles from './Settings.module.scss'
import { SettingsPomodoro } from './SettingsPomodoro'
import { SettingsProfile } from './SettingsProfile'

const Settings: FC = () => {
	return (
		<div className={styles.settings}>
			<SettingsProfile />
			<SettingsPomodoro />
		</div>
	)
}

export { Settings }
