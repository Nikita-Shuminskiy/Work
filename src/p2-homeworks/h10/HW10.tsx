import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { useDispatch, useSelector } from 'react-redux';
import { InitType, loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import img from './1487.gif'

function HW10() {
    // useSelector, useDispatch
    const loadingSelector = useSelector<AppStoreType, boolean>(state => state.loading.isFetching)
    const dispatch = useDispatch()
    let loading = true

    const setLoading = () => {
        const action = loadingAC(loading)
        dispatch(action)
        setTimeout(function(){
            dispatch(loadingAC(false))
        }, 2000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loadingSelector
                ? (
                    <img src={img} alt="123"/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
