// Определяем тип размера
const getTypeSize = (value: string) => {
	const weightTypes = ['г', 'кг']
	const volumeTypes = ['мл', 'л']

	if (weightTypes.includes(value)) return 'Вес'
	else if (volumeTypes.includes(value)) return 'Объём'
	else return 'Неизвестный тип'
}

export default getTypeSize
