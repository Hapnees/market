import {
	useAddProductMutation,
	useUpdateProductMutation,
} from '@/api/admin-product.api'
import {
	useGetBrendsQuery,
	useGetProducersQuery,
	useGetTypesQuery,
	useLazyGetProductByIdQuery,
} from '@/api/api'
import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import Radio from '@/components/UI/Radio/Radio'
import TextArea from '@/components/UI/TextArea/TextArea'
import FilterBlock from '@/FilterBlock/FilterBlock'
import { IProduct } from '@/types/product.interface'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import cl from './AdminProductPage.module.scss'
import arrowIcon from '@/assets/arrow.svg'
import Loader from '@/components/Loader/Loader'

const AdminProductPage = () => {
	const navigate = useNavigate()
	const params = useParams()
	const btnText = params.id ? 'Изменить товар' : 'Добавить товар'

	const [getProductById, { data: product, isLoading: isLoadingProduct }] =
		useLazyGetProductByIdQuery()
	const [addProduct] = useAddProductMutation()
	const [updateProduct] = useUpdateProductMutation()
	const [isClickedImg, setIsClickedImg] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		getValues,
	} = useForm<IProduct>({ mode: 'onBlur' })

	const [imgUrl, setImgUrl] = useState('')

	const {
		data: typesList,
		isLoading: isLoadingTypeList,
		isError: isErrorTypes,
	} = useGetTypesQuery()
	const {
		data: producersList,
		isLoading: isLoadingproducersList,
		isError: isErrorProducers,
	} = useGetProducersQuery()
	const {
		data: brendsList,
		isLoading: isLoadingBrendsList,
		isError: isErrorBrends,
	} = useGetBrendsQuery()

	const [selectedTypesList, setSelectedTypesList] = useState<string[]>([])
	const [producer, setProducer] = useState<string>('')
	const [brend, setBrend] = useState<string>('')

	const onChangeProducer = (value: string) => setProducer(value)
	const onChangeBrend = (value: string) => setBrend(value)

	const onChangeTypesCheckBox = (value: string) => {
		if (selectedTypesList.includes(value)) {
			const newSelectedList = selectedTypesList.filter(el => el !== value)
			setSelectedTypesList(newSelectedList)
		} else {
			setSelectedTypesList(prev => [...prev, value])
		}
	}

	// Функция при отправке формы
	const onSubmit: SubmitHandler<IProduct> = async data => {
		const body: IProduct = {
			id: product?.id || Date.now(),
			title: data.title,
			img: data.img || imgUrl || '',
			typeSize: data.typeSize,
			size: +data.size,
			amount: +data.amount,
			types: selectedTypesList,
			stock: data.stock,
			barcode: +data.barcode,
			producer,
			brend,
			description: data.description,
			price: +data.price,
			promo: data.promo,
		}

		// Проверяем те поля, до которых не смог достучаться через react-hook-form
		if (!selectedTypesList.length) {
			toast.error('Выберите типы ухода')
			return
		}

		if (!producer) {
			toast.error('Выберите производителя')
			return
		}

		if (!brend) {
			toast.error('Выберите бренд')
			return
		}

		if (params.id) {
			updateProduct(body)
				.then(() => {
					toast.success('Товар изменён')
					navigate('/admin')
				})
				.catch(() => toast.error('Ошибка при измененеии товара'))
			return
		}

		addProduct(body)
			.then(() => {
				toast.success('Товар добавлен!')
				navigate('/admin')
			})
			.catch(() => toast.error('Ошибка при добавлении товара'))
	}

	const imgSearchEvent = () => {
		const value = getValues('img')
		if (!value) {
			if (product?.img) {
				setImgUrl(product.img)
			}
			setIsClickedImg(false)
			return
		}
		setImgUrl(value)
		setIsClickedImg(false)
	}

	// Получаем товар, если указан параметр
	useEffect(() => {
		if (!params.id || isLoadingProduct) return

		getProductById(+params.id)
			.then(({ data }) => {
				if (!data) return
				setValue('title', data.title)
				setValue('price', data.price)
				setValue('description', data.description)
				setValue('barcode', data.barcode)
				setValue('amount', data.amount)
				setValue('size', data.size)
				setValue('typeSize', data.typeSize)
				setValue('img', imgUrl)
				setProducer(data.producer)
				setBrend(data.brend)
				setSelectedTypesList(data.types)
			})
			.catch(() => toast.error('Ошибка при получении товароа'))
	}, [params, isLoadingProduct])

	// Отслеживаем ошибки
	useEffect(() => {
		if (isErrorBrends) toast.error('Ошибка при получении брендов')
		if (isErrorProducers) toast.error('Ошибка при получении производителей')
		if (isErrorTypes) toast.error('Ошибка при получении типов ухода')
	}, [isErrorBrends, isErrorProducers, isErrorTypes])

	// Показываем лоадер при загрузке
	if (
		params.id &&
		(isLoadingProduct ||
			isLoadingBrendsList ||
			isLoadingTypeList ||
			isLoadingproducersList)
	) {
		return <Loader />
	}

	return (
		<main className={cl.main}>
			<form
				className={cl.form}
				onSubmit={handleSubmit(onSubmit)}
				id='addProductForm'
			>
				<article className={cl.firstColumn}>
					{!isClickedImg ? (
						<div className={cl.imgWrapper}>
							<img
								src={imgUrl || product?.img}
								alt='Выберите изображение'
								className={cl.img}
								onClick={() => setIsClickedImg(true)}
							/>
						</div>
					) : (
						<Input
							srcImg={arrowIcon}
							placeholder='Ссылка на изображение'
							{...register('img', { required: 'Обязательное поле' })}
							error={errors.img}
							searchEvent={imgSearchEvent}
						/>
					)}
					<FilterBlock
						list={
							!typesList
								? []
								: typesList.map(el => ({
										id: el.id,
										title: el.title,
										selected: product?.types.includes(el.title) ?? false,
								  })) || []
						}
						title='Тип ухода'
						callback={onChangeTypesCheckBox}
					/>

					<ul className={cl.checkboxList}>
						<li>
							<input
								type='checkbox'
								id='stock'
								{...register('stock')}
								defaultChecked={product?.stock ?? true}
							/>
							<label htmlFor='stock'>В наличии</label>
						</li>
						<li>
							<input
								type='checkbox'
								id='promo'
								{...register('promo')}
								defaultChecked={product?.promo}
							/>
							<label htmlFor='promo'>Популярный</label>
						</li>
					</ul>
					<div>
						<div className={cl.firstColumnInputs}>
							<div className={cl.inputWrapper}>
								<p>Штрихкод</p>
								<Input
									srcImg=''
									type='number'
									placeholder='Штрихкод'
									style={{
										width: '200px',
										marginRight: '5px',
										padding: '10px 15px',
									}}
									{...register('barcode', { required: 'Обязательное поле' })}
									isAbsolute={true}
									error={errors.barcode}
									defaultValue={product?.barcode}
								/>
							</div>
							<div className={cl.inputWrapper}>
								<p>Количество</p>
								<Input
									srcImg=''
									type='number'
									placeholder='Количество'
									isAbsolute={true}
									style={{ width: '130px', padding: '10px 15px' }}
									{...register('amount', { required: 'Обязательное поле' })}
									error={errors.amount}
									defaultValue={product?.amount}
								/>
							</div>
						</div>
					</div>
				</article>
				<article className={cl.secondColumn}>
					<div className={cl.inputWrapper}>
						<p>Название товара</p>
						<Input
							srcImg=''
							placeholder='Название товара'
							{...register('title', { required: 'Обязательное поле' })}
							defaultValue={product?.title}
							error={errors.title}
						/>
					</div>
					<div className={cl.inputWrapper}>
						<p>Цена ₸</p>
						<Input
							srcImg=''
							placeholder='Цена в тенге'
							type='number'
							{...register('price', { required: 'Обязательное поле' })}
							defaultValue={product?.price}
							error={errors.price}
						/>
					</div>
					<div className={cl.inputWrapper}>
						<p>Описание товара</p>
						<TextArea
							placeholder='Описание товара'
							{...register('description', { required: 'Обязательное поле' })}
							error={errors.description}
						/>
					</div>
				</article>
				<article className={cl.thirdColumn}>
					<Radio
						title='Производитель'
						listElements={producersList?.map(el => el.title) || []}
						callback={onChangeProducer}
						defaultValue={product?.producer}
					/>
					<Radio
						title='Бренд'
						listElements={brendsList?.map(el => el.title) || []}
						callback={onChangeBrend}
						defaultValue={product?.brend}
					/>
					<div className={cl.sizeBlock}>
						<select {...register('typeSize')} defaultValue={product?.typeSize}>
							<option defaultChecked disabled>
								Тип размера
							</option>
							<option value='г'>г</option>
							<option value='кг'>кг</option>
							<option value='мл'>мл</option>
							<option value='л'>л</option>
						</select>
						<div className={cl.inputWrapper}>
							<p>Размер</p>
							<Input
								srcImg=''
								placeholder='Размер'
								isAbsolute={true}
								style={{ width: '100px', padding: '5px 10px' }}
								{...register('size', { required: 'Обязательное поле' })}
								error={errors.size}
								defaultValue={product?.size}
							/>
						</div>
					</div>
				</article>
			</form>
			<div className={cl.btnWrapper}>
				<Button form='addProductForm' style={{ display: 'block' }}>
					{btnText}
				</Button>
			</div>
		</main>
	)
}

export default AdminProductPage
