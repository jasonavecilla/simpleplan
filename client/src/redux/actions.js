import {setTasklist } from './actionType';
import {getDailyTask}from '../util/data-manipulation' 
import data from '../../data.json'

export default {
    initProject: () => {
        return (dispatch) => {
            const date = new Date()
            localStorage.setItem('taskList', JSON.stringify(data))
            const dailyTaskList = getDailyTask(date, data)
            dispatch({type: setTasklist, payload: {data: dailyTaskList}})
        }
    },
    loadTasks: (date) => {
        return (dispatch) => {
            const data = JSON.parse(localStorage.getItem('taskList')) || [];
            const dailyTaskList = getDailyTask(date, data)
            dispatch({type: setTasklist, payload: {data: dailyTaskList}})
        }
    }
}