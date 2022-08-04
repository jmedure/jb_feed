import React from 'react';
import Typewriter from "typewriter-effect";

function SubheaderLinks() {
    return (
        <div className="text-2xl align-middle bg-white text-center font-serif justify-center italic tracking-tighter w-full basis-1/2 flex flex-wrap">
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