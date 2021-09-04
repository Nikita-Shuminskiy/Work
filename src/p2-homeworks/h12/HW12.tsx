import React from 'react';
import s from './HW12.module.css';
import HW7 from '../h7/HW7';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { changeThemeC } from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    const themesCnage = (value: string) => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <HW7 themeLead={theme} theme={themes} themesCnage={themesCnage}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
