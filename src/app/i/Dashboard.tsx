'use client'

import { FC } from 'react'

import styles from './Dashboard.module.scss'
import { PomodoroChart } from './PomodoroChart'
import { useStatisticsQuery } from '@/__generated__/output'

const Dashboard: FC = () => {
	const { data, loading } = useStatisticsQuery()

	return (
		<div className={styles.dashboard}>
			<div className={styles.statistics}>
				{loading ? (
					<div className={styles.skeleton}>
						<div className={styles.user}>
							<div className={styles.avatar} />
							<div className={styles.info}>
								<p className={styles.name} />
								<p className={styles.email} />
							</div>
						</div>
						<div className={styles.items}>
							{[...Array(4)].map((_, index) => (
								<div
									key={index}
									className={styles.item}
								>
									<div className={styles.label} />
									<div className={styles.value} />
								</div>
							))}
						</div>
					</div>
				) : (
					<>
						<div className={styles.user}>
							<div className={styles.avatar}>
								{data?.statistics.user?.name
									? data?.statistics.user.name[0]
									: 'A'}
							</div>
							<div className={styles.info}>
								{data?.statistics.user?.name && (
									<p className={styles.name}>{data?.statistics.user.name}</p>
								)}
								<p className={styles.name}>samuil</p>
								<p className={styles.email}>{data?.statistics.user?.email}</p>
							</div>
						</div>
						<div className={styles.items}>
							{data?.statistics.statistics.map((statistic, index) => (
								<div
									key={index}
									className={styles.item}
								>
									<p className={styles.label}>{statistic.label}</p>
									<p className={styles.value}>{statistic.value}</p>
								</div>
							))}
						</div>
					</>
				)}
				<PomodoroChart />
			</div>
		</div>
	)
}

export { Dashboard }
