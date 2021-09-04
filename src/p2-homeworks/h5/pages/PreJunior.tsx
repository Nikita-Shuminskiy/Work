import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW6 from '../../h6/HW6'
import HW7 from '../../h7/HW7'

function PreJunior() {
    const arr= ['q', 'a', 'x', 'c', 'd']
    return (
        <div>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
            <HW7 theme={arr}/>

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз