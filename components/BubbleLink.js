import Link from "next/link";
import React from "react";

export default function BubbleLink( props ) {

    return(
        <Link href={props.href} passHref>
                <div className="flex font-mont text-lg sm:text-2xl capitalize rounded-full mr-1 mb-1 py-1 px-3 md:py-2 md:mb-2 md:mr-2 cursor-pointer border border-solid border-black hover:bg-black hover:text-white items-center">
                    <p>{props.label}</p>
                    <span className="material-icons text-xs md:text-xl fontSize-small">{props.mui}</span>
                </div>
            </Link>
    )
}