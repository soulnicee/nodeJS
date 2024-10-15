import { argv } from 'process'
import readline from 'readline'

var pensionAgeLimit = new URLSearchParams(argv.slice(2).join('&')).get(
	'--pension'
)
var isUserPensioner = (userAge, pensionAgeLimit) => {
	return parseInt(userAge) >= parseInt(pensionAgeLimit)
		? 'You are a pensioner'
		: 'You are not a pensioner'
}
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})
if (pensionAgeLimit) {
	rl.question('How old are you?', answer => {
		var res = isUserPensioner(answer, pensionAgeLimit)
		console.log(res)
		rl.close()
	})
} else {
	console.log('You do not write a pension limit age')
	rl.close()
}
