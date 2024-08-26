import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { FC } from 'react'

import { HintWrapper } from '@/components/ui/hint/Hint'

import styles from './PomodoroTimer.module.scss'
import { useTimerActions } from './hooks/useTimerActions'
import { ITimerState } from './timer.types'
import { PomodoroType } from '@/__generated__/output'

interface IPomodoroNavigation {
	pomodoros: PomodoroType[] | undefined
	timerState: ITimerState
}
const PomodoroNavigation: FC<IPomodoroNavigation> = ({
	pomodoros,
	timerState
}) => {
	const actions = useTimerActions({ ...timerState, pomodoros })

	const isCanPrev = pomodoros ? pomodoros.length >= 1 : false

	return (
		<div className={styles.controls}>
			<HintWrapper message='Go to previous pomodoro'>
				<button
					className={styles.button}
					disabled={!isCanPrev}
					onClick={() => (isCanPrev ? actions.prevPomodoroHandler() : false)}
				>
					<ChevronLeft size={23} />
				</button>
			</HintWrapper>
			<HintWrapper message={timerState.isRunning ? 'Pause' : 'Play'}>
				<button
					className={styles.button}
					onClick={
						timerState.isRunning ? actions.pauseHandler : actions.playHandler
					}
					disabled={
						actions.loadingCreatePomodoro || actions.loadingUpdatePomodoro
					}
				>
					{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
				</button>
			</HintWrapper>
			<HintWrapper message='Skip to next pomodoro'>
				<button
					className={styles.button}
					onClick={() => actions.nextPomodoroHandler()}
					disabled={actions.loadingDeletePomodoro}
				>
					<ChevronRight size={23} />
				</button>
			</HintWrapper>
		</div>
	)
}

export { PomodoroNavigation }
