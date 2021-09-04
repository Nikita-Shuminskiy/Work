import React, { ChangeEvent, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}

export default function SuperDoubleRange() {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
        // @ts-ignore
        setValue(value);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                DoubleRange
            </Typography>
            <span style={{fontSize: '20px', color: 'green', fontWeight: 'bold'}}>{value[0]}</span>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
            <span style={{fontSize: '20px', color: 'red', fontWeight: 'bold'}}>{value[1]}</span>
        </div>
    );
}

