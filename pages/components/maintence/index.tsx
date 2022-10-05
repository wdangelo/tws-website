import styles from '../../../styles/Maintence.module.css'
import { BsGear } from 'react-icons/bs'


export default function Maintence(){
    //if (!isLoading) return null;
    return(
        <div id={styles.maintence}>
            <BsGear 
            size={90}
            className={styles.maintence}
            />
        </div>
    )
}