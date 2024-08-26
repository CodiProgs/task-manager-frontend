import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/form-elements/button/Button'
import { Field } from '@/components/ui/form-elements/fields/field/Field'

import styles from './Settings.module.scss'
import { useInitialProfileSettingsData } from './hooks/useInitialProfileSettingsData'
import { useUpdateProfile } from './hooks/useUpdateProfile'
import { UserDto } from '@/__generated__/output'
import { validEmail } from '@/app/auth/validEmail'

const SettingsProfile: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<UserDto>({
		mode: 'onChange'
	})

	const { mutate, loading, errors: graphqlErrors } = useUpdateProfile()

	useInitialProfileSettingsData(reset)

	const onSubmit: SubmitHandler<UserDto> = data => {
		mutate({
			variables: {
				input: data
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h2 className={styles.title}>Profile settings</h2>
			<div className={styles.fields}>
				<Field
					label='Name'
					placeholder='Enter your name'
					{...register('name', {
						minLength: { value: 3, message: 'Minimum length is 3 characters' },
						maxLength: { value: 32, message: 'Maximum length is 32 characters' }
					})}
					error={errors.name?.message || (graphqlErrors?.name as string)}
				/>
				<Field
					label='Email'
					placeholder='Enter your email'
					type='email'
					{...register('email', {
						required: 'Required',
						pattern: { value: validEmail, message: 'Invalid mail' }
					})}
					error={errors.email?.message || (graphqlErrors?.email as string)}
				/>
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

export { SettingsProfile }
