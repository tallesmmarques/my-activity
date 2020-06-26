import React from 'react'
import { 
    Card, 
    Typography,
    CardContent, 
    makeStyles, 
    CardHeader, 
    Avatar,
} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: 50
    },
    avatar: {
        backgroundColor: blue[500]
    }
})

export default function NameBox ({name, activity, birth}) {
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
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {getFirstLetter(name)}
                </Avatar>
                }
                title={name}
                subheader={`${findAge(birth)} anos de idade.`}
            />
            <CardContent>
                <Typography variant="body1" >Atividade: {activity}</Typography>
            </CardContent>
        </Card>
    );
}
