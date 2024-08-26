import { FC, useState } from 'react'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'

import { Loader } from '@/components/ui/Loader'
import { SingleSelect } from '@/components/ui/form-elements/single-select/SingleSelect'

import styles from './Dashboard.module.scss'
import { retentionPeriodOptions } from './settings/SettingsPomodoro'
import { useGetPomodoroStatisticsQuery } from '@/__generated__/output'

const CustomLabel = ({ x, y, width, value }: any) => {
	if (value === 0) {
		return null
	}

	return (
		<text
			x={x + width / 2}
			y={y}
			dy={-6}
			fill='rgba(var(--fg), .7)'
			textAnchor='middle'
		>
			{value}
		</text>
	)
}

const PomodoroChart: FC = () => {
	const { data, refetch, loading } = useGetPomodoroStatisticsQuery()

	const [value, setValue] = useState<number>(7)

	const onChange = (data: string) => {
		if (Number(data) === value) return
		if (loading) return

		setValue(Number(data))
		refetch({ days: Number(data) })
	}

	return (
		<div className={styles.chart}>
			<div className={styles.header}>
				<div className={styles.heading}>Pomodoro Statistics</div>
				<div>
					<SingleSelect
						data={retentionPeriodOptions.map(item => ({
							value: item.value,
							label: item.label
						}))}
						onChange={onChange}
						value={value ? value.toString() : ''}
					/>
				</div>
			</div>
			<div className={styles.container}>
				{loading ? (
					<div className={styles.loader}>
						<Loader />
					</div>
				) : (
					<ResponsiveContainer
						width='100%'
						height={300}
					>
						<LineChart
							barSize={50}
							data={data?.getPomodoroStatistics}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<YAxis
								axisLine={true}
								tickLine={false}
								tick={{ fill: 'rgba(var(--fg), .7)' }}
								tickFormatter={value => `${value}m`}
							/>
							<XAxis
								dataKey='date'
								tickLine={false}
								tickMargin={10}
							/>
							<Tooltip
								cursor={{
									fill: 'rgba(var(--fg), .1)'
								}}
								content={({ active, payload }) => {
									if (active && payload && payload.length) {
										return (
											<div className={styles.tooltip}>
												<p>{payload[0].payload.date}</p>
												<p>{payload[0].value} minutes</p>
												<p>{payload[0].payload.count} pomodoros</p>
											</div>
										)
									}
									return null
								}}
							/>
							<Line
								type={'monotone'}
								dataKey='minutes'
								className='fill-primary'
							/>
						</LineChart>
					</ResponsiveContainer>
				)}
			</div>
		</div>
	)
}

export { PomodoroChart }
