import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do curso"
                name="name"
                placeholder="Insira o nome do curso"
            />
            <Input 
                type="number"
                text="Número de horas do curso"
                name="name"
                placeholder="Insira o número de horas do curso"
            />
            <Select name="category_id" text="Selecione a área do curso"/>
            <SubmitButton text={btnText} />


        </form>
    )
}

export default ProjectForm