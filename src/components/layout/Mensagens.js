import {useState, useEffect} from 'react'

import styles from './Mensagens.module.css'

function Mensagens({type, msg}){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(() =>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg]

    )

    return (
        < >
           {visible && ( <div className={`${styles.mensagens} ${styles[type]}`}>
            {msg}
        </div>
           ) }
        </>
    )
}

export default Mensagens