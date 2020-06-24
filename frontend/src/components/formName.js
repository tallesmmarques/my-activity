import React, { useState} from 'react'
import api from '../services/api'

function FormName() {
    const [formData, setFormData] = useState({
        name: '',
        activity: '',
        birth: ''
    })

    function handleInputChange(event) {
        const {name, value} = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        const data = formData

        await api.post('user', data)

        alert("Novo usuário criado")
    }

    return (
    <form onSubmit={handleSubmit}>
        <h1>Registrar novo usuário</h1>
        <input type="text" name="name" placeholder="Nome" onChange={handleInputChange}/>
        <input type="text" name="activity" placeholder="Atividade" onChange={handleInputChange}/>
        <input type="text" name="birth" placeholder="Nascimento" onChange={handleInputChange}/>
        <button type="submit">Enviar</button>
    </form>
    )
}

export default FormName