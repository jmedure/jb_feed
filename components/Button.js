import Link from "next/link";
import React from "react";

export default function Button( props ) {
    
    const propType = props.type;
    
    if (propType == "right") {

        return (
            <Link href={props.href}>
                <div className="flex cursor-pointer text-neutral-500 hover:text-black items-center capitalize">
                    <div className="">{props.copy}</div>
                    <span className="material-icons text-xs">{props.icon}</span>
                </div>
            </Link>
        )
    }

    if (propType == "left") {
        
        return (
            <Link href={props.href}>
                <div className="flex cursor-pointer text-neutral-500 hover:text-gray-900 items-center capitalize">
                    <span className="material-icons text-xs">{props.icon}</span>
                    <div className="">{props.copy}</div>
                </div>
            </Link>
        )
    }

    if (propType == "null") {
        
        return (
            <Link href={props.href}>
                <div className="flex cursor-pointer text-neutral-500 hover:text-gray-900 items-center capitalize">
                    <div className="">{props.copy}</div>
                </div>
            </Link>
        )
    }

    return(
        <Link href={props.href}>
            <div className="flex cursor-pointer text-neutral-500 hover:text-gray-900 items-center capitalize">
                <span className="material-icons text-base">subdirectory_arrow_right</span>
                <div>{props.copy}</div>
                <span className="material-icons text-xs">{props.icon}</span>
            </div>    
        </Link>
    )
}