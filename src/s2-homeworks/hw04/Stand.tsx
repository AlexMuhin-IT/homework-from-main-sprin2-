import React, {useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

    const handleInputEnter = () => {
        if (stateForAllInputs.trim() === '') {
            setError('Error');
        } else {
            setError('');
            setValue('');
        }
    };
    const handleInputChange = (value: string) => {
        setValue(value);
        if (value.trim() !== '') {
            setError('');
        }
    };


    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e)=>handleInputChange(e.target.value)}
                        onEnter={handleInputEnter}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChange={(e)=>handleInputChange(e.target.value)}
                        onChangeText={handleInputChange}
                        error={error}
                        onEnter={handleInputEnter}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                <div>
                    <SuperButton
                        id={'hw4-super-button-default'}
                        xType={'default'}
                    >Дефолтная
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-red'}
                        xType={'red'}
                    >Опасность
                    </SuperButton>
                </div>
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >Не активна
                    </SuperButton>
                </div>
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >Дополнительная
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        Hometask
                    </SuperCheckbox>
                </div>
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
