import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const StatCards = () => {
    const classes = useStyles()

    return (
        <Grid container spacing={12} className="mb-3">
            <Grid item xs={12} md={12}>
                <Card
                    className="flex flex-wrap justify-between items-center  bg-paper"
                    elevation={12}
                    style={{padding:'5px', backgroundColor:'rgb(56, 47, 156)'}}
                >
                    <div className="flex items-center">
                        <img src="/assets/graph.png"/>
                        <div className="ml-3">
                            <small className="" style={{color:'#a6a2d2'}}>WEEKLY ACTIVITY</small>
                            <h6 className="m-0 mt-1 font-medium" style={{color:'white'}}>
                                52%
                            </h6>
                        </div>
                    </div>
                    <div style={{display:'flex',color:'#39c084',border:'1px solid',padding:'0px',borderRadius:'2px',background:'#39c084'}}>
                    <Icon style={{color:'white'}}>arrow_drop_up</Icon><span style={{color:'white'}}>17%</span> 
                    </div>                   
                   
                </Card>
                <br></br>
                <Card
                    className="flex flex-wrap justify-between items-center  bg-paper"
                    elevation={12}
                    style={{padding:'5px', backgroundColor:'#f4f4f4',border:'1px solid'}}
                >
                    <div className="flex items-center">
                    <img src="/assets/timer_blue.png"/>
                        <div className="ml-3">
                            <small className="" style={{color:'#a6a2d2'}}>WORKED THIS WEEK</small>
                            <h6 className="m-0 mt-1 font-medium">
                                11:56:33
                            </h6>
                        </div>
                    </div>
                    <div style={{display:'flex',color:'red',border:'1px solid',padding:'0px',borderRadius:'2px',background:'#eecfcf'}}>
                    <Icon >arrow_drop_down</Icon><span>17%</span>                    
                    </div>
                   
                </Card>
                <br></br>
                <Button
                    variant="outlined"
                    color="rgb(56, 47, 156)"
                    className={classes.button}
                    style={{color:'rgb(56, 47, 156)',fontWeight:'bold',width:'100%',border:'1px solid #382f9c'}}
                >
                    <img style={{padding:'5px'}}src="/assets/pdf.png"/>
                   
                    EXPORT AS PDF
                </Button>
            </Grid>
            
        </Grid>
    )
}

export default StatCards
