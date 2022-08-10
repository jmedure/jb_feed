import React from "react"

export default function Tag(props) {

    if(props.type == "new") {
        return (
            <div className="-left-8 -top-7 md:-top-6 -rotate-12 absolute bg-lime-300 px-4 pb-2 md:pb-2 align-middle rounded-full font-light text-6xl md:text-8xl z-20 flex space-x-2 border-2 border-solid border-black ">
                <p className="font-serif tracking-tighter italic">new</p>
            </div>
        )
    }
    if(props.type == "featured") {
        return (
            <div className="-left-10 -rotate-12 absolute bg-rose-600 pl-7 pr-7 pt-3 pb-4 text-white rounded-full font-light text-5xl z-20 -top-8 flex items-center space-x-2 ring-offset-4 ring-rose-600 ring-2">
                <p className="font-serif tracking-tighter italic">featured</p>
                <span className="material-icons">auto_awesome</span>
            </div>
        )
    }
    return (
        <div></div>
    )
}