import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any
    onChangeOption?: (option: any) => void
    themesCnage?:(value:string) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,
        themesCnage,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        if (themesCnage) {
            themesCnage(e.currentTarget.value)
        }
    }
    const mappedOptions: JSX.Element[] = options ? options.map((o:any, i:any) => (
        <option  value={o}  key={i}>
            {o}
        </option >
    )) : []



    return (
        <select  onChange={onChangeCallback} value={value} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
