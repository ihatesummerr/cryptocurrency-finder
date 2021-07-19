import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from './actions/currency';

import {
    Paper,
    TextField,
    Container,
    makeStyles,
    Typography,
} from '@material-ui/core';
import CurrencyTable from './components/Table/CurrencyTable';

const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: theme.spacing(3),
    },
}));

const App = () => {
    const currency = useSelector((state) => state.currency);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [filteredCurrency, setFilteredCurrency] = useState([]);

    useEffect(() => {
        dispatch(getCurrency());
    }, [dispatch]);

    const handleChange = (e) => {
        setName(e.target.value);
        setFilteredCurrency(
            currency.filter((cur) =>
                cur.name.toLowerCase().startsWith(e.target.value.toLowerCase())
            )
        );
    };

    return (
        <Container maxWidth='xl'>
            <Typography variant='h1' align='center' gutterBottom>
                Cryptocurrency Finder
            </Typography>
            <Paper className={classes.input} elevation={3}>
                <form noValidate autoComplete='off'>
                    <TextField
                        variant='outlined'
                        label='Name'
                        fullWidth
                        onChange={handleChange}
                    />
                </form>
            </Paper>
            {currency?.length ? (
                <CurrencyTable currency={name ? filteredCurrency : currency} />
            ) : null}
        </Container>
    );
};

export default App;
