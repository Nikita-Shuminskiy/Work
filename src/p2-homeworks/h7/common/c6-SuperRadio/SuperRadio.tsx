import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'



type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?:any
    onChangeOption?: (option: any) => void
    themesCnage?:(val:string) => void

}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        themesCnage,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        if (themesCnage) {
            themesCnage(e.currentTarget.value)
        }
    }


    const mappedOptions: JSX.Element[] = options ? options.map((o:any, i:any) => (
        <label key={name + '-' + i}>
            <input onChange={onChangeCallback}
                   type={'radio'}
                   name={name}
                   value={o}
                   checked={o === value}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
