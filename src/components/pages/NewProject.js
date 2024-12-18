import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){

    return (
        <div className={styles.newproject_container}>
            <h1>Criar curso</h1>
            <p>Crie um curso e depois adicione as matérias</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )

}

export default NewProject;