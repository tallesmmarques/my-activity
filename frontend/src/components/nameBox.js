import React from 'react'

function NameBox ({name, activity, birth}) {
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
    
    const age = findAge(birth)

    return (
    <div className="nameBox">
        <h2>{name}, {age} anos.</h2>
        <p>Atividade: {activity}</p>
    </div>
    );
}

export default NameBox