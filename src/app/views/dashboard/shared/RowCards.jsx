import React, { Fragment } from 'react'
import { format } from 'date-fns'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    projectName: {
        marginLeft: 24,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 4,
        },
    },
}))

const RowCards = () => {
    const classes = useStyles()

    return [1, 2, 3, 4].map((id) => (
        <Fragment key={id}>
            <Card className="py-2 px-4 project-card">
                <Grid container alignItems="center">
                    <Grid item md={5} xs={7}>
                        <div className="flex items-center">  
                        <div>
                             <span
                                className={clsx(
                                    'font-medium',
                                    classes.projectName
                                )}
                                style={{margin:'auto',fontSize:'22px'}}
                            >
                                20</span>
                                <div className="text-muted">
                            May
                        </div>
                        </div>                       
                            
                           
                            <span
                                className={clsx(
                                    'font-medium',
                                    classes.projectName
                                )}
                            >
                                Project {id}
                                <div className="text-muted">
                            Today
                        </div>
                            </span>
                        </div>
                    </Grid>

                    <Grid item md={3} xs={4}>
                        
                    </Grid>

                    <Hidden smDown>
                        <Grid item xs={3}>
                        
                        </Grid>
                    </Hidden>

                    <Grid item xs={1}>
                        <div className="flex justify-end">
                            <IconButton>
                                <Icon>more_horiz</Icon>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Card>
            <div className="py-2" />
        </Fragment>
    ))
}

export default RowCards
