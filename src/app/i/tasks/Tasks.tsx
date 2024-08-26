'use client'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import isoWeek from 'dayjs/plugin/isoWeek'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { FC } from 'react'

import { useCookie } from '@/hooks/useCookie'

import { SwitcherView } from './SwitcherView'
import { KanbanView } from './kanban-view/KanbanView'
import { ListView } from './list-view/ListView'

dayjs.extend(utc)
dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

export type TypeView = 'list' | 'kanban'

interface ITasks {
	initialType: TypeView
}

const Tasks: FC<ITasks> = ({ initialType }) => {
	const [type, setType] = useCookie<TypeView>({
		defaultValue: initialType,
		key: 'TypeView'
	})

	return (
		<div>
			<SwitcherView
				setType={setType}
				type={type}
			/>
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}

export { Tasks }
