import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    ReactNode,
} from 'react'
import s from './SuperInputText.module.css'
import {Simulate} from "react-dom/test-utils";
import focus = Simulate.focus;

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
    error?: ReactNode
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
       onChange && onChange(e)
       onChangeText && onChangeText(e.currentTarget.value)

    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)

        onEnter
        && e.key === 'Enter'
        && onEnter(e)

    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`

    const finalInputClassName = `${s.input} 
    ${error ? s.errorInput : s.superInput} 
    ${className ? s.input + s.className : s.input} `
    return (
        <div className={s.inputWrapper}>
            <input
                id={id}
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <span
                id={id ? id + '-span' : undefined}
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
}

export default SuperInputText