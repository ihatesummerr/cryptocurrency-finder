import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
} from '@material-ui/core';

import { formatDistance } from 'date-fns';

const useStyles = makeStyles((theme) => ({
    container: {
        maxHeight: 430,
    },
}));

const CurrencyTable = ({ currency }) => {
    const classes = useStyles();
    return (
        <TableContainer
            component={Paper}
            elevation={6}
            className={classes.container}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Logo</TableCell>
                        <TableCell>Price (USD) </TableCell>
                        <TableCell>Change in 1 hour</TableCell>
                        <TableCell>Change in 24 hours</TableCell>
                        <TableCell>Market Cap</TableCell>
                        <TableCell>Update Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currency.map((cur) => (
                        <TableRow key={cur.id}>
                            <TableCell component='th' scope='row'>
                                {cur.name}
                            </TableCell>
                            <TableCell>{cur.symbol}</TableCell>
                            <TableCell>{cur.slug}</TableCell>
                            <TableCell>{cur.quote.USD.price} $</TableCell>
                            <TableCell>
                                {cur.quote.USD.percent_change_1h} $
                            </TableCell>
                            <TableCell>
                                {cur.quote.USD.percent_change_24h} $
                            </TableCell>
                            <TableCell>{cur.quote.USD.market_cap}</TableCell>
                            <TableCell>
                                {formatDistance(
                                    new Date(
                                        cur.quote.USD.last_updated.toString()
                                    ),
                                    new Date(),
                                    { addSuffix: true }
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CurrencyTable;
