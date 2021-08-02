import React, { Fragment } from 'react'                        
import { Grid, Card,Button,Icon } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import { makeStyles } from '@material-ui/core/styles'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'
import SimpleTable from '../../../app/views/material-kit/tables/SimpleTable'
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

const Analytics = () => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        
                        <TopSellingTable />
                

                        <h4  className="card-title text-muted mb-4">
                            <b style={{color:'black'}}>To - Do lists</b>
                        </h4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Reports</div><br></br>
                            <StatCards />
                          
                        </Card>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Screenshots</div><br></br>
                            <div className="flex items-center">                                
                                <img src="/assets/picture.png"/>
                                <div className="ml-3">
                                shot_1_attach_1.png
                                </div>
                                <div className="flex justify-end">
                                <Button variant="contained" className={classes.button} style={{boxShadow:'unset',padding:'1px',left:'20px',fontWeight:'bold',color:'#382f9c'}}>
                                    VIEW
                                </Button>
                                </div>
                             </div>
                             <hr></hr>
                             <div className="flex items-center">
                             <img src="/assets/picture.png"/>
                                <div className="ml-3">
                                shot_1_attach_1.png
                                </div>
                                <div className="flex justify-end">
                                <Button variant="contained" className={classes.button} style={{boxShadow:'unset',padding:'1px',left:'20px',fontWeight:'bold',color:'#382f9c'}}>
                                    VIEW
                                </Button>
                                </div>
                             </div>
                             <hr></hr>
                             <div className="flex items-center">
                             <img src="/assets/video_camera.png"/>
                                <div className="ml-3">
                                shot_1_attach_1.mov
                                </div>
                                <div className="flex justify-end">
                                <Button variant="contained" className={classes.button} style={{boxShadow:'unset',padding:'1px',left:'20px',fontWeight:'bold',color:'white',background:'#382f9c'}}>
                                    PLAY
                                </Button>
                                </div>
                             </div>
                             <hr></hr>
                             <br></br>
                             <Button
                    variant="outlined"
                    color="rgb(56, 47, 156)"
                    className={classes.button}
                    style={{color:'rgb(56, 47, 156)',fontWeight:'bold',width:'100%',border:'1px solid #382f9c'}}
                >
                   VIEW ALL
                </Button>
                            
            
        
                            
                        </Card>

                      
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
