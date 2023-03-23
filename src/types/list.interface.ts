type IField =
	| 'Штрихкод'
	| 'Производитель'
	| 'Бренд'
	| 'Артикул'
	| 'Вес'
	| 'Объём'
	| 'Тип'
	| 'Кол-во в коробке'
	| 'Неизвестный тип'

export interface IProductInfo {
	field: IField
	value: string | number
}
