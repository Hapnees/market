import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import cl from './TextArea.module.scss'

interface IProps
	extends DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	error?: FieldError
}

const TextArea = forwardRef<HTMLTextAreaElement, IProps>(
	({ error, ...props }, ref) => {
		return (
			<div>
				<textarea ref={ref} className={cl.textarea} {...props} />
				{error && <p className={cl.error}>{error.message}</p>}
			</div>
		)
	}
)

export default TextArea
