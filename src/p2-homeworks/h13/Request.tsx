import React, { ChangeEvent, useState } from 'react';
import { requestAPI } from './Api';




const Request = () => {
        // @ts-ignore
   let value:boolean

    const onChecked = (e:ChangeEvent<HTMLInputElement>) => value = e.currentTarget.checked

    const btnChange = () => {
        console.log(value)
              requestAPI.getUrl(value)
                  .then(res => console.log(res.statusText))
                  .catch(err => alert(err))
    }



    return <>
        <button onClick={btnChange} >Ok</button>
        <input type="checkbox"   onChange={onChecked} />
    </>
};

export default Request;