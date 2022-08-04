import React from 'react';
import Typewriter from "typewriter-effect";
import styles from '../styles/Subheader.module.css'

function Subheader() {
    return (
        <div className="py-0 mt-0 text-base mx-auto text-left">
            <Typewriter
                options={{
                    strings: [
                        'probably cooking something', 
                        'up to no good',
                        'pursuing mastery',
                        'making some tunes',
                        'reading a book',
                        'drinking some cold, cold, cold brew',
                        'going outside'
                        ],
                    autoStart: true,
                    loop: true,
                    }}
                    />
            </div>
        )
}

export default Subheader;