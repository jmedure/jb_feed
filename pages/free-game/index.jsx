import React from "react";
import Image from "next/image";

export default function FreeGame(){

    return(
        <main className="container w-full py-40">
            <div className="flex rotate py-40 relative w-full mx-auto">
                <Image
                    src="/fg/fgmain.svg"
                    alt="free game logo"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
        </main>
    )
}