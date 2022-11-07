import React from "react"

export default function OneBlank(props){
    return(
        <div className="flex-block md:flex space-y-3 md:space-y-0 md:space-x-4 not-prose tracking-tight my-4 p-6 border border-blue-400 mt-8 bg-blue-50/50 rounded-2xl">
            <p className="font-mono text-xs flex-grow w-full sm:pt-2 uppercase tracking-tighter text-blue-500">In one sentence</p>
            <div className="flex-col flex font-bask">
                <p className="font-light text-neutral-900">At times I need to be reminded why I started making music in the first place in order to route my creativity through the lenses of curiosity, joy and love, the most powerful creative forces.</p>
                <p className="pt-4"><b className="not-prose font-bold">I dont <i>have to</i> make music. I <i>get to</i></b>.</p>
            </div>
        </div>
    )
}