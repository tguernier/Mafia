import { React } from 'react';
import styles from '../Styles/GameOver.module.css';

function GameOver({playerName, groupName, winFlag}){
    return (
        <div className={styles.container} >

            <div className={styles.top}> 
                <h1 className={styles.title}>Game Over</h1>
            </div>
            
            <div>
                <p className={styles.avatar}> Pic </p>
                <h3> "groupName" placeholder is the winner</h3>   
            </div>
            
        </div>
    );


}

export default GameOver;