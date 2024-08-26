import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

const Heading: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<h1 className={styles.heading}>{children}</h1>
			<div className={styles.underline}></div>
		</div>
	)
}

export { Heading }
