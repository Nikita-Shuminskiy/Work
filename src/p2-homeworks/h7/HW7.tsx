import React, { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr= ['q', 'a', 'x', 'c', 'd']

export type HwType = {
    themesCnage?:(value:string) => void
    theme?:Array<string>
    themeLead?:any
}

function HW7({themesCnage,theme,themeLead}:HwType) {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={theme}
                    value={value}
                    onChangeOption={onChangeOption}
                    themesCnage={themesCnage}

                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={theme}
                    value={value}
                    onChangeOption={onChangeOption}
                    themesCnage={themesCnage}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
