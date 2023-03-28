import {
	useGetBrendsQuery,
	useGetProducersQuery,
	useGetTypesQuery,
} from '@/api/api'
import Button from '@/components/UI/Button/Button'
import FilterBlock from '@/FilterBlock/FilterBlock'
import cl from './AdminFiltersPage.module.scss'
import trashIcon from '@/assets/trash.svg'
import Input from '@/components/UI/Input/Input'
import {
	useAddBrendMutation,
	useAddProducerMutation,
	useAddTypesMutation,
	useDeleteBrendMutation,
	useDeleteProducerMutation,
	useDeleteTypeMutation,
} from '@/api/admin-filters.api'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import arrowIcon from '@/assets/arrow.svg'
import Loader from '@/components/Loader/Loader'

interface INewTypeEl {
	id: number
	title: string
}

const AdminFiltersPage = () => {
	const [newTypesList, setNewTypesList] = useState<INewTypeEl[]>([])
	const typeListRef = useRef<HTMLInputElement>(null)

	const {
		data: producers,
		isLoading: isLoadingProducers,
		isError: isErrorProducers,
	} = useGetProducersQuery()
	const {
		data: brends,
		isLoading: isLoadingBrends,
		isError: isErrorBrends,
	} = useGetBrendsQuery()
	const {
		data: types,
		isLoading: isLoadingTypes,
		isError: isErrorTypes,
	} = useGetTypesQuery()

	const producerRef = useRef<HTMLInputElement>(null)
	const [addProducer] = useAddProducerMutation()

	const [addBrend] = useAddBrendMutation()
	const brendRef = useRef<HTMLInputElement>(null)

	const [addTypes] = useAddTypesMutation()

	const [deleteProducer] = useDeleteProducerMutation()
	const [deleteBrend] = useDeleteBrendMutation()
	const [deleteType] = useDeleteTypeMutation()

	const [selectedProducersIdList, setSelectedProducersIdList] = useState<
		number[]
	>([])

	const [selectedBrendsIdList, setSelectedBrendsIdList] = useState<number[]>([])
	const [selectedTypesIdList, setSelectedTypesIdList] = useState<number[]>([])

	const onClickMinus = (id: number) =>
		setNewTypesList(prev => prev.filter(elInner => elInner.id !== id))

	const searchEvent = (value: string) => {
		setNewTypesList(prev => [...prev, { id: Date.now(), title: value }])
	}

	const onClickAddProducer = () => {
		if (!producerRef.current?.value) return

		addProducer({ id: Date.now(), title: producerRef.current.value })
			.then(() =>
				toast.success(`Производитель ${producerRef.current?.value} добавлен`)
			)
			.catch(() =>
				toast.error(
					`Ошибка при добавлении производителя ${producerRef.current?.value}`
				)
			)
	}

	const onClickAddBrend = () => {
		if (!brendRef.current?.value) return

		addBrend({ id: Date.now(), title: brendRef.current.value })
			.then(() => toast.success(`Бренд ${brendRef.current?.value} добавлен`))
			.catch(() =>
				toast.error(`Ошибка при добавлении бренад ${brendRef.current?.value}`)
			)
	}

	const onClickAddTypes = () => {
		if (!newTypesList.length) return

		const promises = newTypesList.reduce((accum: Promise<unknown>[], item) => {
			accum.push(addTypes(item))
			return accum
		}, [])

		Promise.all(promises)
			.then(() => toast.success('Типы ухода добавлены'))
			.catch(() => toast.error('Ошибка при добавлении типов ухода'))
	}

	const onClickDeleteProducers = () => {
		const promises = selectedProducersIdList.reduce(
			(accum: Promise<unknown>[], id) => {
				accum.push(deleteProducer(id))
				return accum
			},
			[]
		)

		Promise.all(promises)
			.then(() => toast.success('Производители удалены'))
			.catch(() => toast.error('Ошибка при удалении производителей'))
	}

	const onClickDeleteBrends = () => {
		const promises = selectedBrendsIdList.reduce(
			(accum: Promise<unknown>[], id) => {
				accum.push(deleteBrend(id))
				return accum
			},
			[]
		)

		Promise.all(promises)
			.then(() => toast.success('Бренды удалены'))
			.catch(() => toast.error('Ошибка при удалении брендов'))
	}

	const onClickDeleteTypes = () => {
		const promises = selectedTypesIdList.reduce(
			(accum: Promise<unknown>[], id) => {
				accum.push(deleteType(id))
				return accum
			},
			[]
		)

		Promise.all(promises)
			.then(() => toast.success('Типы ухода удалены'))
			.catch(() => toast.error('Ошибка при удалении типов ухода'))
	}

	useEffect(() => {
		if (isErrorTypes) toast.error('Ошибка при загрузке типов ухода')
		if (isErrorBrends) toast.error('Ошибка при загрузке брендов')
		if (isErrorProducers) toast.error('Ошибка при загрузке производителей')
	}, [isErrorTypes, isErrorBrends, isErrorProducers])

	// Показываем лоадер при загрузке
	if (isLoadingBrends || isLoadingProducers || isLoadingTypes) return <Loader />

	return (
		<main className={cl.main}>
			<ul className={cl.list}>
				<li>
					<FilterBlock
						title='Производитель'
						list={
							producers?.map(el => ({
								id: el.id,
								title: el.title,
								selected: false,
							})) || []
						}
						setSelectedIdList={setSelectedProducersIdList}
					/>
					<Input
						srcImg=''
						style={{ marginBottom: '20px' }}
						placeholder='Новый производитель'
						ref={producerRef}
						searchEvent={onClickAddProducer}
					/>
					<div className={cl.buttons}>
						<Button onClick={onClickAddProducer}>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
							onClick={onClickDeleteProducers}
						></Button>
					</div>
				</li>
				<li>
					<FilterBlock
						title='Бренды'
						list={
							brends?.map(el => ({
								id: el.id,
								title: el.title,
								selected: false,
							})) || []
						}
						setSelectedIdList={setSelectedBrendsIdList}
					/>
					<Input
						srcImg=''
						style={{ marginBottom: '20px' }}
						placeholder='Новый бренд'
						ref={brendRef}
						searchEvent={onClickAddBrend}
					/>
					<div className={cl.buttons}>
						<Button onClick={onClickAddBrend}>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
							onClick={onClickDeleteBrends}
						></Button>
					</div>
				</li>
				<li>
					<FilterBlock
						title='Типы ухода'
						list={
							types?.map(el => ({
								id: el.id,
								title: el.title,
								selected: false,
							})) || []
						}
						setSelectedIdList={setSelectedTypesIdList}
					/>
					<Input
						srcImg={arrowIcon}
						placeholder='Новый тип ухода'
						ref={typeListRef}
						searchEvent={searchEvent}
					/>
					{!!newTypesList.length && (
						<ul className={cl.newTypesList}>
							{newTypesList.map(el => (
								<li key={el.id} onClick={() => onClickMinus(el.id)}>
									<p>{el.title}</p>
									<div className={cl.minusButton}></div>
								</li>
							))}
						</ul>
					)}
					<div className={cl.buttons} style={{ marginTop: '20px' }}>
						<Button onClick={onClickAddTypes}>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
							onClick={onClickDeleteTypes}
						></Button>
					</div>
				</li>
			</ul>
		</main>
	)
}

export default AdminFiltersPage
