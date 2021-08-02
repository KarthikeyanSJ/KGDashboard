import React from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
    Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { TableBodyCell } from 'mui-datatables'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const TopSellingTable = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Timesheet</span>
                {/* <Select size="small" defaultValue="this_month" disableUnderline>
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="last_month">Last Month</MenuItem>
                </Select> */}
                
                 <Button variant="contained" className={classes.button} style={{boxShadow:'unset',marginLeft:'290px',fontWeight:'bold',color:'#382f9c'}}>
                    VIEW FULL SHEET
                </Button><div className="flex justify-end">
                            <IconButton>
                                <Icon>more_horiz</Icon>
                            </IconButton>
                        </div>
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="px-6" colSpan={4}>
                                Project
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Date
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Start time
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Stop time
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Duration
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                >
                                    <div className="flex items-center">
                                        <Avatar src={product.imgUrl} />
                                        <p className="m-0 ml-8">
                                            {product.name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    $
                                    {product.price > 999
                                        ? (product.price / 1000).toFixed(1) +
                                          'k'
                                        : product.price}
                                </TableCell>

                                <TableCell
                                    className="px-0"
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.available ? (
                                        product.available < 20 ? (
                                            <small className="border-radius-4 bg-secondary text-white px-2 py-2px">
                                                {product.available} available
                                            </small>
                                        ) : (
                                            <small className="border-radius-4 bg-primary text-white px-2 py-2px">
                                                in stock
                                            </small>
                                        )
                                    ) : (
                                        <small className="border-radius-4 bg-error text-white px-2 py-2px">
                                            out of stock
                                        </small>
                                    )}
                                </TableCell>
                                <TableCell className="px-0" colSpan={1}>
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))} */}
                        <TableRow>                            
                            <TableCell className="px-0 capitalize"
                                    colSpan={4}
                                    align="left">1. Landing Page Design</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">May 21, 2019</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">1:10 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>9:20 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>8:10:37</TableCell>
                        </TableRow>
                        <TableRow>                            
                            <TableCell className="px-0 capitalize"
                                    colSpan={4}
                                    align="left">1. Landing Page Design</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">May 21, 2019</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">1:10 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>9:20 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>8:10:37</TableCell>
                        </TableRow>
                        <TableRow>                            
                            <TableCell className="px-0 capitalize"
                                    colSpan={4}
                                    align="left">1. Landing Page Design</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">May 21, 2019</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">1:10 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>9:20 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>8:10:37</TableCell>
                        </TableRow>
                        <TableRow>                            
                            <TableCell className="px-0 capitalize"
                                    colSpan={4}
                                    align="left">1. Landing Page Design</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">May 21, 2019</TableCell>
                            <TableCell className="px-0"
                                    colSpan={2}
                                    align="left">1:10 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>9:20 pm</TableCell>
                            <TableCell className="px-0" colSpan={2}>8:10:37</TableCell>
                        </TableRow> 
                                 
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone',
        price: 100,
        available: 15,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone',
        price: 1500,
        available: 30,
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'iPhone x',
        price: 1900,
        available: 35,
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        name: 'iPhone x',
        price: 100,
        available: 0,
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'Head phone',
        price: 1190,
        available: 5,
    },
]

export default TopSellingTable
