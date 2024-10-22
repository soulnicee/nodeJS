import { Router } from 'express'
import TasksController from '../controllers/tasksController.mjs'
const router = Router()

router.get('/', TasksController.mainTasks)
router.get('/create', TasksController.createForm)
router.get('/:id', TasksController.taskDetail)
router.post('/', TasksController.createTask)
export default router