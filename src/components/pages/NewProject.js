import {useNavigate} from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    const navigate = useNavigate() //fazer redirect nas páginas

    function createPost(project){
        
        //initialize cost and services
        project.cost=0
        project.services=[]

        fetch('http://localhost:8089/projetos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projetos", {state});      
        }) 
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar curso</h1>
            <p>Crie um curso e depois adicione as matérias</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )

}

export default NewProject;