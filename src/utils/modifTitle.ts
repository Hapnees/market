const modifTitle = (value: string) => {
	const splittedValue = value.split(' ')
	const firstLetter = splittedValue[0]
	const title = splittedValue.slice(1).join(' ')

	return { firstLetter, title }
}

export default modifTitle
