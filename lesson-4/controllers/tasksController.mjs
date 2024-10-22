import Task from '../models/Task.mjs'
class TasksController {
	static mainTasks(req, res) {
		const tasksList = Task.getTasksList()

		res.render('tasks/tasksList', {
			tasks: tasksList
		})
	}
	static taskDetail(req, res) {
		const id = req.params.id
		const task = Task.getTaskById(id)
		res.render('tasks/taskDetail', {
			task
		})
	}
	static createForm(req, res) {
		res.render('tasks/taskForm', {})
	}
	static createTask(req, res) {
		const taskData = req.body
		Task.addNewTask(taskData)
		res.redirect('/tasks')
	}
}

export default TasksController