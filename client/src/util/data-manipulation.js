/**
 * Returns the name of the day of the week for a given date.
 *
 * @param {string | Date} date - The date for which to get the day of the week.
 * @returns {string} - The name of the day of the week (e.g., 'Sunday', 'Monday').
 *
 * @example
 * // Example usage:
 * const result = getWeekDay('2023-11-27'); // Output: 'Monday'
 *
 * @example
 * // Another example with a Date object:
 * const currentDate = new Date();
 * const result = getWeekDay(currentDate); // Output: The name of the current day of the week
 */
const getWeekDay = (date) => {
	const daysOfWeek = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	]
	const dayIndex = new Date(date).getDay()
	return daysOfWeek[dayIndex]
}

/**
 * Returns an array of tasks scheduled for a specific date.
 *
 * @param {string | Date} date - The date for which to retrieve tasks.
 * @param {Array} data - The array of task data to search for tasks.
 * @returns {Array} - An array of tasks scheduled for the given date.
 *
 */
export const getDailyTask = (date, data) => {
	const initialState = []
	const dayOfMonth = new Date(date).getDate()
	const dayOfWeek = getWeekDay(date)
	data.forEach((category) => {
		category.activityTypes.forEach((activityType) => {
			activityType.Tasks.forEach((task) => {
				if (task.days.includes(dayOfMonth) || task.days.includes(dayOfWeek)) {
					// Check if the task's days include the given date
					initialState.push({
						taskName: task.taskName,
						activityName: activityType.activityName,
						taskDescription: task.taskDescription || '',
						categoryName: category.categoryName,
					})
				}
			})
		})
	})

	return initialState
}

export const isToday = (inputDate) => {
	const today = new Date()
	return (
		inputDate.getDate() === today.getDate() &&
		inputDate.getMonth() === today.getMonth() &&
		inputDate.getFullYear() === today.getFullYear()
	)
}
