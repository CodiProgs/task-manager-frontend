import cn from 'clsx'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOutside'

import styles from './DatePicker.module.scss'
import './DatePicker.scss'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(utc)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}

export function DatePicker({
	onChange,
	value,
	position = 'right'
}: IDatePicker) {
	const [selected, setSelected] = useState<Date>()
	const { isShow, setIsShow, ref } = useOutside(false)

	const handleDaySelect: SelectSingleEventHandler = date => {
		if (date) {
			const newDate = new Date(
				Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
			)

			setSelected(date)
			if (newDate) {
				onChange(newDate.toISOString())
				setIsShow(false)
			} else {
				onChange('')
			}
		}
	}

	return (
		<div
			className='relative'
			ref={ref}
		>
			<button
				onClick={() => setIsShow(!isShow)}
				className={styles.button}
			>
				{value
					? dayjs(value).utc().startOf('day').format('MMMM D')
					: 'Click for select'}
			</button>
			{isShow && (
				<div
					className={cn(
						styles.datePicker,
						position === 'left' ? '-left-4' : ' -right-4'
					)}
					style={{
						top: 'calc(100% + .7rem)'
					}}
				>
					<DayPicker
						fromYear={2023}
						toYear={2054}
						autoFocus={isShow}
						mode='single'
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
					/>
				</div>
			)}
		</div>
	)
}
