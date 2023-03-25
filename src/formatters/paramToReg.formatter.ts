// Конвертируем параметры, записанные через запятую, в регулярное выражение
const getRegexParam = (param?: string) => {
	let result = ''
	if (param) {
		result = `(${param.split(',').join('|')})`
	}

	return result
}

export default getRegexParam
