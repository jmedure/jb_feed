import Link from "next/link";
import Button from "./Button";
import Subscribe from "./Subscribe";
import {faDiscord} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import siteMetaData from '../data/siteMetadata'

export default function Footer(props) {


    return (
        <div className="mb-4 font-mont border-blue-200 border-solid border rounded-3xl lg:rounded-[3em] ">
            <div className="p-4 lg:p-6">
            {/* <div className="sub-text pt-4 flex w-full justify-between items-center">
                {/* <h1 className="text-4xl font-fruit tracking-tighter italic">Jacob&#39;s Blue</h1> */}
                {/* <p className="text-lg uppercase text-neutral-400 justify-end">join my cult</p> */}
            {/* </div> */} 
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0  items-stretch ">
                <div className="flex flex-col flex-grow align-top justify-items-start">
                    <Button href="/" type="null" icon="north" copy="Home" />
                    <Button href="/meditations" type="null" icon="east" copy="Meditations" />
                    <Button href="/songs" type="null" icon="east" copy="Songs" />
                    <Button href="/links" type="null" icon="east" copy="Links" />
                    <Button href="https://freegame.notion.site/Jacob-s-Blue-Press-Kit-79b4480312224328954dea767579cd5a" type="right" icon="north_east " copy="Press" />
                    <Button href="/archive" type="null" icon="east" copy="Archive" />
                    {/* <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Books" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Recipes" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="More" /> */}
                </div>
                <div className="flex flex-col flex-grow align-top justify-items-start">
                    <Button href={siteMetaData.spotify} type="right" icon="north_east" copy="spotify" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.apple} type="right" icon="north_east" copy="apple music" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.youtube} type="right" icon="north_east" copy="youtube" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.twitter} type="right" icon="north_east" copy="twitter" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.soundcloud} type="right" icon="north_east" copy="soundcloud" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.instagram} type="right" icon="north_east" copy="instagram" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.github} type="right" icon="north_east" copy="github" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.patreon} type="right" icon="north_east" copy="patreon" passHref={true} target="_blank"/>
                    <Button href="/links" type="null" icon="east" copy="All links" />
                </div>
                {/* <div className="flex flex-grow flex-col align-top justify-items-start">
                    <Button href="/free-game" type="null" icon="east" copy="Free Game" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Shortterm vs Longterm..." />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="My gear" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Get started in music 101" />
                </div> */}
                <div className="flex flex-grow flex-col align-top space-y-8 justify-between">
                    <Subscribe/>
                    <div className="flex flex-col space-y-1">
                        {/* <Link href={siteMetaData.discord}>
                            <div className="flex items-center p-3 md:py-2 bg-black text-white justify-center rounded-full flex-nowrap space-x-2 cursor-pointer">
                                <FontAwesomeIcon icon={faDiscord}/>
                                <p>Invite me to your discord</p>
                            </div>
                        </Link> */}
                        <Link href={siteMetaData.discord}>
                            <div className="flex items-center transition-all py-4 md:py-3 cursor-pointer hover:bg-black hover:text-white  border-black border border-solid text-black justify-center rounded-full flex-nowrap space-x-2">
                                <p>Join my cult</p>
                                <FontAwesomeIcon icon={faDiscord}/>
                                {/* <p>Join my cult</p> */}
                            </div>
                        </Link>
                    </div>
                </div> 
            </div>
            </div>
            <div className="sub-text lg:p-6 p-4 lg:mt-3 mt-4 flex w-full justify-between items-center border-blue-200 border-t border-solid">
                <p className="text-xs text-gray-700">This is a <Link href="/10Percent">10% project</Link>.</p>
                <p className="text-xs text-neutral-400 justify-end">from Jacob&#39;s Blue. 2022-Forever ®</p>
            </div>

        </div>
    )
}