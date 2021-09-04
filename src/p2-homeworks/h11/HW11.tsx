import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    let [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    console.log(value1)




    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    setValue1={setValue1}
                />
                <span>{value2}</span>
            </div>

            <div>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
