export const getSeason = () => {
	var month = new Date().getMonth() + 1
	var seasons = {
		Winter: [12, 1, 2],
		Spring: [3, 4, 5],
		Summer: [6, 7, 8],
		Fall: [9, 10, 11],
	}
	return (
		Object.keys(seasons).find(season => seasons[season].includes(month)) ||
		'What is your favorite season?'
	)
}
export const getDay = () => {
	// var day = new Date().getDay() - 1
	// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

	return new Intl.DateTimeFormat('uk-UK', {weekday: 'long'}).format(new Date())
}

export const getTime = () => {
	var hour = new Date().getHours()
	if (hour >= 6 && hour < 10) return 'Morning'

  if (hour >= 10 && hour < 15) return 'Lunch'

  if (hour >= 15 && hour < 20) return 'Dinner'

	return 'Go sleep, dude, it\'s night'
}