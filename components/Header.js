import React from "react"
import MainNav from "./MainNav"
import Image from "next/image"
import LinksContainer from "./LinksContainer"
import Subheader from "./Subheader"

export default function Header() {
    return (
        <div>
            <MainNav/>
            <Image src="/jb.svg" height={122} width={876}/>
            <Subheader/>
            <LinksContainer/>
        </div>
    )
}