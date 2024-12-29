import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {} )

    useEffect(() => { //pra solicitar dados o useEffect é melhor (executa só uma vez)
        fetch("http://localhost:8089/categories",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((resp) => resp.json()) //transformo resposta em json
            .then((data)=>{
                setCategories(data)
            }) //pego os dados em json e jogo no hook de setCategories 
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)    
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value })
        
    } //altera o valor de um objeto/entidade que estamos inserindo no banco enquanto digitamos

    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
         })
        
    } //altera o valor de um objeto/entidade que estamos inserindo no banco enquanto digitamos

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do curso"
                name="name"
                placeholder="Insira o nome do curso"
                handleOnChange={handleChange}
                value={project.name ? project.name: ''}
            />
            <Input
                type="number"
                text="Número de horas do curso"
                name="horas"
                placeholder="Insira o número de horas do curso"
                handleOnChange={handleChange}
                value={project.horas ? project.horas: ''}

            />
            <Select 
            name="category_id" 
            text="Selecione a área do curso" 
            options={categories} 
            handleOnChange={handleCategory}
            value={project.category ? project.category.id: ''}
            />
            <SubmitButton text={btnText} />


        </form>
    )
}

export default ProjectForm