import { GraphQLErrorExtensions } from 'graphql'
import { FC, useState } from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/form-elements/button/Button'
import { Field } from '@/components/ui/form-elements/fields/field/Field'
import { SingleSelect } from '@/components/ui/form-elements/single-select/SingleSelect'

import styles from './TimeBlocking.module.scss'
import { TIME_BLOCKING_COLORS } from './colors.data'
import { useCreateTimeBlock } from './hook/useCreateTimeBlock'
import { useTimeBlocks } from './hook/useTimeBlocks'
import { useUpdateTimeBlock } from './hook/useUpdateTimeBlock'
import { TimeBlockDto } from '@/__generated__/output'

const TimeBlockingForm: FC = () => {
	const [graphqlErrors, setGraphqlErrors] = useState<GraphQLErrorExtensions>({})

	const {
		register,
		control,
		watch,
		reset,
		handleSubmit,
		formState: { errors }
	} = useFormContext<TimeBlockDto>()

	const { updateTimeBlock, loadingUpdateTimeBlock } =
		useUpdateTimeBlock(setGraphqlErrors)
	const { createTimeBlock, loadingCreateTimeBlock } =
		useCreateTimeBlock(setGraphqlErrors)

	const existsId = watch('id')

	const { items } = useTimeBlocks()

	const resetForm = () => {
		reset({
			duration: 1,
			name: '',
			id: undefined,
			order: undefined,
			color: TIME_BLOCKING_COLORS.WarmBeige
		})
	}

	const onSubmit: SubmitHandler<TimeBlockDto> = data => {
		if (data.id) {
			updateTimeBlock({
				variables: {
					input: data
				}
			})
		} else {
			createTimeBlock({
				variables: {
					input: {
						...data,
						color: data.color || TIME_BLOCKING_COLORS.WarmBeige,
						order: items ? items.length : 0
					}
				}
			})
		}

		resetForm()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<Field
				id='name'
				label='Enter name:'
				placeholder='Enter name:'
				{...register('name', {
					required: 'Name is required'
				})}
				error={errors.name?.message || (graphqlErrors?.name as string)}
				extra='mb-4'
			/>

			<Field
				id='duration'
				label='Enter duration (min.):'
				placeholder='Enter duration (min.):'
				isNumber
				{...register('duration', {
					required: 'Duration is required',
					min: {
						value: 1,
						message: 'Duration should be at least 1 minute'
					},
					max: {
						value: 1440,
						message: 'Duration should be at most 1440 minutes'
					},
					valueAsNumber: true
				})}
				error={errors.duration?.message || (graphqlErrors?.duration as string)}
				extra='mb-4'
			/>

			<div className={styles.color_select}>
				<span className={styles.label}>Background color:</span>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={Object.entries(TIME_BLOCKING_COLORS).map(
								([label, value]) => ({
									value,
									label
								})
							)}
							onChange={onChange}
							value={value || TIME_BLOCKING_COLORS.WarmBeige}
							isColorSelect
							columns={3}
						/>
					)}
				/>
			</div>

			<div className={styles.actions_form}>
				<Button
					type='submit'
					disabled={loadingCreateTimeBlock || loadingUpdateTimeBlock}
				>
					{existsId ? 'Update' : 'Create'}
				</Button>
				{existsId && (
					<Button
						type='button'
						onClick={() => resetForm()}
					>
						Cancel
					</Button>
				)}
			</div>
		</form>
	)
}

export { TimeBlockingForm }
