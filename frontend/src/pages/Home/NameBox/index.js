import React from 'react'
import { 
    Card, 
    Typography,
    CardContent, 
    makeStyles, 
    CardHeader, 
    Avatar,
    IconButton,
} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
        [theme.breakpoints.down('sm')]: {
            width: 350
        },
        [theme.breakpoints.up('sm')]: {
            width: 500
        },
        [theme.breakpoints.up('lg')]: {
            width: 700
        }
    },
    avatar: {
        backgroundColor: blue[700]
    }
}))

export default function NameBox ({id, onRemove,name, activity, birth}) {
    function findAge (birth) {
        const yearBirth = birth.slice(0,4)
        const mounthBirth = birth.slice(5,7)
        
        const date = new Date()
        const yearNow = date.getFullYear()
        const mounthNow = date.getMonth()
        
        const age = yearNow - yearBirth

        if ((mounthBirth - mounthNow) <= 0) return age

        return age - 1
    }

    function getFirstLetter (name) {
        const first = name.slice(0,1)

        return first
    }

    const classes = useStyles()

    return (
        <Card variant="elevation" elevation={3} className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {getFirstLetter(name)}
                </Avatar>
                }
                action={
                    <IconButton onClick={() => onRemove(id)}>
                      <Close />
                    </IconButton>
                  }
                title={<Typography variant='h6'>{name}</Typography>}
                subheader={`${findAge(birth)} anos de idade.`}
            />
            <CardContent>
                <Typography variant="body2" >
                    <b>Atividade: </b>
                    {activity}
                </Typography>
            </CardContent>
        </Card>
    );
}
