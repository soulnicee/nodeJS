import { v4 as uuidv4 } from 'uuid'
import dataFileManager from '../utils/DataFileManager.mjs'
class Task {
	static getTasksList() {
		try {
			return dataFileManager.loadData()
		} catch (error) {
			throw new Error('Error on load list')
		}
	}
	static addNewTask(taskObject) {
		try {
			dataFileManager.addItem({
				id: uuidv4(),
				...taskObject,
			})
		} catch (error) {
			throw new Error('Error on add item')
		}
	}
	static getTaskById(id) {
		try {
			return dataFileManager.getItemById(id)
		} catch (error) {
			throw new Error('Error on load task')
		}
	}
	static updateTask(id, taskData) {
		try {
			dataFileManager.updateItemById(id, taskData)
		} catch (error) {
			throw new Error('Error on update task')
		}
	}
	static deleteTaskById(id) {
		try {
			dataFileManager.deleteItemById(id)
		} catch (error) {
			throw new Error('Error on delete task')
		}
	}
}

export default Task
