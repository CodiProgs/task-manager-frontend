import cn from 'clsx'
import { CircleHelp } from 'lucide-react'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/form-elements/button/Button'
import { Field } from '@/components/ui/form-elements/fields/field/Field'
import {
	IOption,
	SingleSelect
} from '@/components/ui/form-elements/single-select/SingleSelect'
import { HintWrapper } from '@/components/ui/hint/Hint'

import styles from './Settings.module.scss'
import { useInitialPomodoroSettingsData } from './hooks/useInitialPomodoroSettingsData'
import { useUpdatePomodoroSettings } from './hooks/useUpdatePomodoroSettings'
import { PomodoroSettingsDto } from '@/__generated__/output'

export const retentionPeriodOptions: IOption[] = [
	{ value: '7', label: '1 week' },
	{ value: '31', label: '1 month' },
	{ value: '90', label: '3 months' },
	{ value: '180', label: '6 months' },
	{ value: '360', label: '1 year' }
]

const SettingsPomodoro: FC = () => {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<PomodoroSettingsDto>({
		mode: 'onChange'
	})

	const { mutate, loading, errors: graphqlErrors } = useUpdatePomodoroSettings()

	useInitialPomodoroSettingsData(reset)

	const onSubmit: SubmitHandler<PomodoroSettingsDto> = data => {
		mutate({
			variables: {
				input: {
					breakInterval: data.breakInterval,
					longBreakAfter: data.longBreakAfter,
					longBreakInterval: data.longBreakInterval,
					retentionPeriod: Number(data.retentionPeriod),
					workInterval: data.workInterval
				}
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h2 className={styles.title}>Pomodoro timer settings</h2>
			<div className={styles.fields}>
				<div className={styles.field}>
					<Field
						label='Work interval (min)'
						placeholder='Enter work interval'
						isNumber={true}
						{...register('workInterval', {
							valueAsNumber: true,
							required: 'This field is required',
							min: { value: 15, message: 'Minimum value is 15 minutes' },
							max: { value: 60, message: 'Maximum value is 60 minutes' }
						})}
						error={
							errors.workInterval?.message ||
							(graphqlErrors?.workInterval as string)
						}
					/>
					<HintWrapper
						message='The time you will work before taking a break'
						className={styles.hint}
					>
						<CircleHelp />
					</HintWrapper>
				</div>
				<div className={styles.field}>
					<Field
						label='Break interval (min)'
						placeholder='Enter break interval'
						isNumber={true}
						{...register('breakInterval', {
							valueAsNumber: true,
							required: 'This field is required',
							min: { value: 5, message: 'Minimum value is 5 minutes' },
							max: { value: 15, message: 'Maximum value is 15 minutes' }
						})}
						error={
							errors.breakInterval?.message ||
							(graphqlErrors?.breakInterval as string)
						}
					/>
					<HintWrapper
						message='The time you will take a break after working'
						className={styles.hint}
					>
						<CircleHelp />
					</HintWrapper>
				</div>
				<div className={styles.field}>
					<Field
						label='Long break interval (min)'
						placeholder='Enter long break interval'
						isNumber={true}
						{...register('longBreakInterval', {
							valueAsNumber: true,
							required: 'This field is required',
							min: { value: 15, message: 'Minimum value is 15 minutes' },
							max: { value: 60, message: 'Maximum value is 60 minutes' }
						})}
						error={
							errors.longBreakInterval?.message ||
							(graphqlErrors?.longBreakInterval as string)
						}
					/>
					<HintWrapper
						message='The time you will take a long break after working a certain number of cycles'
						className={styles.hint}
					>
						<CircleHelp />
					</HintWrapper>
				</div>
				<div className={styles.field}>
					<Field
						label='Long break after (cycles)'
						placeholder='Enter long break after'
						isNumber={true}
						{...register('longBreakAfter', {
							valueAsNumber: true,
							required: 'This field is required',
							min: { value: 1, message: 'Minimum value is 1 cycle' },
							max: { value: 8, message: 'Maximum value is 8 cycles' }
						})}
						error={
							errors.longBreakAfter?.message ||
							(graphqlErrors?.longBreakAfter as string)
						}
					/>
					<HintWrapper
						message='The number of cycles after which a long break will be taken'
						className={styles.hint}
					>
						<CircleHelp />
					</HintWrapper>
				</div>
				<div className={cn(styles.field, styles.singleSelect)}>
					<span>Retention period</span>
					<Controller
						control={control}
						name='retentionPeriod'
						render={({ field: { value, onChange } }) => (
							<SingleSelect
								data={retentionPeriodOptions.map(item => ({
									value: item.value,
									label: item.label
								}))}
								onChange={onChange}
								value={value ? value.toString() : ''}
							/>
						)}
					/>
					<HintWrapper
						message='The period for which the completed cycles will be stored'
						className={styles.hint}
					>
						<CircleHelp />
					</HintWrapper>
				</div>
			</div>
			<Button
				type='submit'
				disabled={loading}
			>
				{loading ? 'Loading...' : 'Save'}
			</Button>
		</form>
	)
}

export { SettingsPomodoro }
