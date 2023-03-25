// Определяем тип размера
const getTypeSize = (typeSize: string) => {
	const weightTypes = ['г', 'кг']
	const volumeTypes = ['мл', 'л']

	if (weightTypes.includes(typeSize)) return 'Вес'
	else if (volumeTypes.includes(typeSize)) return 'Объём'
	else return 'Неизвестный тип'
}

export default getTypeSize
