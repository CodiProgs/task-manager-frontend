import cn from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '@/components/ui/form-elements/button/Button'

import { TypeView } from './Tasks'
import styles from './Tasks.module.scss'

interface ISwitcherView {
	type: TypeView
	setType: Dispatch<SetStateAction<TypeView>>
}

const SwitcherView: FC<ISwitcherView> = ({ type, setType }) => {
	return (
		<div className={styles.switcher}>
			<Button
				variant='outline'
				onClick={() => setType('list')}
				className={cn(styles.button, {
					[styles.active]: type === 'list'
				})}
			>
				<ListTodo />
				List
			</Button>
			<Button
				variant='outline'
				onClick={() => setType('kanban')}
				className={cn(styles.button, { [styles.active]: type === 'kanban' })}
			>
				<Kanban />
				Board
			</Button>
		</div>
	)
}

export { SwitcherView }
