'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import styles from './TimeBlocking.module.scss'
import { TimeBlockingForm } from './TimeBlockingForm'
import { TimeBlockingList } from './TimeBlockingList'
import { TimeBlockDto } from '@/__generated__/output'

const TimeBlocking: FC = () => {
	const methods = useForm<TimeBlockDto>({
		mode: 'onChange'
	})

	return (
		<FormProvider {...methods}>
			<div className={styles.time_blocking}>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}

export { TimeBlocking }
