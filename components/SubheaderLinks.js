import React from 'react';
import Typewriter from "typewriter-effect";

function SubheaderLinks() {
    return (
        <div className="text-xl font-mont uppercase align-middle z-20 p-1 text-white text-center justify-center tracking-tight w-full basis-1/2 flex flex-wrap">
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

export default SubheaderLinks;