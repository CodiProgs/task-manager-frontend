'use client'

import AuthImage from '/public/auth.png'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/form-elements/button/Button'

import { SITE_NAME } from '@/constants/seo.constant'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { useAuth } from './useAuth'
import { AuthDto } from '@/__generated__/output'

const Auth: FC = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<AuthDto>({
		mode: 'onChange'
	})

	const { mutate, loading, errors: graphqlErrors, setErrors } = useAuth(reset)

	const onSubmit: SubmitHandler<AuthDto> = data => {
		setErrors({})
		mutate({
			variables: {
				input: data
			}
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.content}>
						<Link
							className={styles.link}
							href={PUBLIC_URL.HOME}
						>
							{SITE_NAME}
						</Link>
						<h1 className={styles.heading}>Sign in</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<AuthFields
								register={register}
								errors={errors}
								graphqlErrors={graphqlErrors}
							/>
							<>
								{graphqlErrors?.form && (
									<p className={styles.error}>{graphqlErrors.form as string}</p>
								)}
							</>
							<Button disabled={loading}>
								{loading ? 'Loading...' : 'Sign in'}
							</Button>
						</form>
					</div>
				</div>
				<div className={styles.right}>
					<Image
						src={AuthImage}
						alt='Auth'
					/>
					<span>
						Illustration by{' '}
						<a href='https://icons8.com/illustrations/author/N3YOxdn12Kox'>
							Marina Mogulska
						</a>{' '}
						from <a href='https://icons8.com/illustrations'>Ouch!</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export { Auth }
