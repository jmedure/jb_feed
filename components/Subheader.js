import React from 'react';
import Typewriter from "typewriter-effect";
import styles from '../styles/Subheader.module.css'

function Subheader() {
    return (
        <div className={styles.subheader}>
            <Typewriter
                options={{
                    strings: [
                        'probably cooking something', 
                        'UP TO NO GOOD',
                        'PURSUING MASTERY',
                        'MAKING SOME TUNES',
                        'READING A BOOK',
                        'DRINKING SOME COLD, COLD, COLD BREW'
                        ],
                    autoStart: true,
                    loop: true,
                    }}
                    />
            </div>
        )
}

export default Subheader;