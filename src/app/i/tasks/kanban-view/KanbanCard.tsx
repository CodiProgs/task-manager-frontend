'use client'

import { DraggableProvided } from '@hello-pangea/dnd'
import cn from 'clsx'
import { Flag, GripVertical, Trash } from 'lucide-react'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Loader } from '@/components/ui/Loader'
import { Checkbox } from '@/components/ui/form-elements/checkbox/Checkbox'
import { TransparentField } from '@/components/ui/form-elements/fields/transparent-field/TransparentField'
import { SingleSelect } from '@/components/ui/form-elements/single-select/SingleSelect'
import { DatePicker } from '@/components/ui/task-edit/date-picker/DatePicker'

import { useDeleteTask } from '../hooks/useDeleteTask'
import { useTaskDebounce } from '../hooks/useTaskDebounce'

import styles from './KanbanView.module.scss'
import { CreateTaskDto, Priority, TaskType } from '@/__generated__/output'

interface IKanbanCard {
	item: TaskType
	setItems: Dispatch<SetStateAction<TaskType[] | undefined>>
	dragHandleProps: DraggableProvided['dragHandleProps']
}

const KanbanCard: FC<IKanbanCard> = ({ item, setItems, dragHandleProps }) => {
	const {
		register,
		control,
		watch,
		formState: { errors },
		handleSubmit
	} = useForm<CreateTaskDto>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		},
		mode: 'onChange'
	})

	const { debouncedCreateTask, debouncedUpdateTask } = useTaskDebounce({
		itemId: item.id
	})

	const onSubmit = (formData: CreateTaskDto) => {
		if (item.id) {
			debouncedUpdateTask({
				...formData
			})
		} else {
			debouncedCreateTask({
				...formData
			})
		}
	}

	useEffect(() => {
		const { unsubscribe } = watch(_ => {
			handleSubmit(onSubmit)()
		})

		return () => {
			unsubscribe()
		}
	}, [watch, debouncedUpdateTask, debouncedCreateTask, handleSubmit])

	const { deleteTask, loadingDeleteTask } = useDeleteTask()

	return (
		<div
			className={cn(
				styles.card,
				item.id ? '' : styles.new,
				Object.keys(errors).length > 0 ? styles.error : '',
				watch('isCompleted') ? styles.completed : '',
				'animation-opacity'
			)}
		>
			<div className={cn(styles.controls)}>
				<span>
					<button
						aria-describedby='todo-item'
						{...dragHandleProps}
					>
						<GripVertical className={styles.grip} />
					</button>

					<Controller
						control={control}
						name='isCompleted'
						render={({ field: { value, onChange } }) => (
							<Checkbox
								onChange={onChange}
								checked={value!}
							/>
						)}
					/>

					<TransparentField
						error={errors.name?.message}
						{...register('name', { required: 'Task name is required!' })}
					/>
				</span>
			</div>

			<div className={styles.details}>
				<div className={styles.date}>
					<Controller
						control={control}
						name='createdAt'
						render={({ field: { value, onChange } }) => (
							<DatePicker
								position='left'
								onChange={onChange}
								value={value || ''}
							/>
						)}
					/>
				</div>

				<div className={cn(styles.priority)}>
					<Controller
						control={control}
						name='priority'
						render={({ field: { value, onChange } }) => (
							<SingleSelect
								data={Object.values(Priority).map(item => ({
									value: item,
									label: item
										.replace(/_/g, ' ')
										.toLowerCase()
										.replace(/^\w|\s\w/g, letter => letter.toUpperCase())
								}))}
								onChange={onChange}
								value={value || ''}
							>
								<Flag
									color={
										value === Priority.Priority_1
											? '#D32F2F'
											: value === Priority.Priority_2
												? '#FDD835'
												: value === Priority.Priority_3
													? '#1E88E5'
													: value === Priority.Priority_4
														? '#9E9E9E'
														: '#9E9E9E'
									}
								/>
							</SingleSelect>
						)}
					/>
				</div>
			</div>

			<div className={cn(styles.actions)}>
				<button
					onClick={() =>
						item.id
							? deleteTask({
									variables: { id: item.id }
								})
							: setItems(prev => prev?.slice(0, -1))
					}
					className='opacity-50 transition-opacity hover:opacity-100 p-1'
				>
					{loadingDeleteTask ? (
						<Loader className='size-[15px]' />
					) : (
						<Trash size={15} />
					)}
				</button>
			</div>
		</div>
	)
}

export { KanbanCard }
