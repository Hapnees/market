import { FC, PropsWithChildren } from 'react'
import cl from './ModalWindow.module.scss'

const ModalWindow: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <article className={cl.wrapper}>{children}</article>
}

export default ModalWindow
