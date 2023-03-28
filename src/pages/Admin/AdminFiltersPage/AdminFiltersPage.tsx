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
import { useAddProducerMutation } from '@/api/admin-filters.api'
import { useRef } from 'react'

const AdminFiltersPage = () => {
	const { data: producers } = useGetProducersQuery()
	const { data: brends } = useGetBrendsQuery()
	const { data: types } = useGetTypesQuery()

	const producerRef = useRef<HTMLInputElement>(null)
	const [addProducer] = useAddProducerMutation()

	const onClickAddProducer = () => {
		if (!producerRef.current?.value) {
			return
		}

		addProducer({ id: Date.now(), title: producerRef.current.value })
	}

	return (
		<main className={cl.main}>
			<ul className={cl.list}>
				<li>
					<FilterBlock
						title='Производитель'
						list={producers?.map(el => ({ title: el, selected: false })) || []}
					/>
					<Input
						srcImg=''
						style={{ marginBottom: '20px' }}
						placeholder='Новый производитель'
						ref={producerRef}
					/>
					<div className={cl.buttons}>
						<Button onClick={onClickAddProducer}>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
						></Button>
					</div>
				</li>
				<li>
					<FilterBlock
						title='Бренды'
						list={brends?.map(el => ({ title: el, selected: false })) || []}
					/>
					<Input
						srcImg=''
						style={{ marginBottom: '20px' }}
						placeholder='Новый бренд'
					/>
					<div className={cl.buttons}>
						<Button>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
						></Button>
					</div>
				</li>
				<li>
					<FilterBlock
						title='Типы ухода'
						list={types?.map(el => ({ title: el, selected: false })) || []}
					/>
					<Input
						srcImg=''
						style={{ marginBottom: '20px' }}
						placeholder='Новый тип ухода'
					/>
					<div className={cl.buttons}>
						<Button>Добавить</Button>
						<Button
							srcImg={trashIcon}
							style={{ padding: '20px 20px' }}
						></Button>
					</div>
				</li>
			</ul>
		</main>
	)
}

export default AdminFiltersPage
