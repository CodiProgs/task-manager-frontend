import { GraphQLErrorExtensions } from 'graphql'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Field } from '@/components/ui/form-elements/fields/field/Field'

import styles from './Auth.module.scss'
import { validEmail } from './validEmail'
import { AuthDto } from '@/__generated__/output'

interface IAuthField {
	register: UseFormRegister<AuthDto>
	errors: FieldErrors<AuthDto>
	graphqlErrors: GraphQLErrorExtensions
}

const AuthFields: FC<IAuthField> = ({ register, errors, graphqlErrors }) => {
	return (
		<div className={styles.fields}>
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
			<Field
				label='Password'
				placeholder='Enter your password'
				type='password'
				{...register('password', {
					required: 'Required',
					minLength: { value: 6, message: 'Min 6 length' },
					maxLength: { value: 32, message: 'Max 32 length' }
				})}
				error={errors.password?.message || (graphqlErrors?.password as string)}
			/>
		</div>
	)
}

export { AuthFields }
