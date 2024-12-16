import styles from './Home.module.css'
import estudos from '../../src/img/estudos.svg'

import LinkButton from '../components/layout/LinkButton'

function Home(){

    return (
        <sections className={styles.home_container}>
            <h1>Bem-vindo ao <span>Sistema</span></h1>
            <p>Comece a gerencianr suas matérias e cursos</p>
            <LinkButton to="/newProject" text="Criar Curso"/>
            <img src={estudos} alt="Estudos"/>
        </sections>   
    )

}

export default Home;