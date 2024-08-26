class PUBLIC {
	HOME = '/'
	AUTH = '/auth'
}

class DASHBOARD {
	private root = '/i'

	HOME = this.root
	TASKS = `${this.root}/tasks`
	HABITS = `${this.root}/habits`
	TIMER = `${this.root}/timer`
	TIME_BLOCKING = `${this.root}/time-blocking`
	SETTINGS = `${this.root}/settings`
}

export const PUBLIC_URL = new PUBLIC()
export const DASHBOARD_URL = new DASHBOARD()
