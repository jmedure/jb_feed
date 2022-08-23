import Link from "next/link";
import Button from "./Button";
import Subscribe from "./Subscribe";
import {faDiscord} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import siteMetaData from '../data/siteMetadata'

export default function Footer(props) {


    return (
        <div className="my-12 pb-24 border-black border-solid border-t">
            {/* <div className="sub-text pt-4 flex w-full justify-between items-center">
                {/* <h1 className="text-4xl font-fruit tracking-tighter italic">Jacob&#39;s Blue</h1> */}
                {/* <p className="text-lg uppercase text-neutral-400 justify-end">join my cult</p> */}
            {/* </div> */} 
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 pt-4 items-stretch ">
                <div className="flex flex-col flex-grow alignx-top justify-items-start">
                    <Button href="/" type="null" icon="north" copy="Home" />
                    {/* <Button href="/meditations-of-a-rockstar" type="null" icon="east" copy="M.O.A.R." /> */}
                    <Button href="/songs" type="null" icon="east" copy="Songs" />
                    <Button href="/links" type="null" icon="east" copy="All Links" />
                    <Button href="/blog" type="null" icon="north_east " copy="EPK" />
                    {/* <Button href="/misc" type="null" icon="east" copy="Extras" /> */}
                    {/* <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Books" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Recipes" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="More" /> */}
                </div>
                <div className="flex flex-col flex-grow align-top justify-items-start">
                    <Button href={siteMetaData.spotify} type="null" icon="north_east" copy="spotify" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.apple} type="null" icon="north_east" copy="apple music" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.youtube} type="null" icon="north_east" copy="youtube" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.twitter} type="null" icon="north_east" copy="twitter" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.soundcloud} type="null" icon="north_east" copy="soundcloud" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.instagram} type="null" icon="north_east" copy="instagram" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.github} type="null" icon="north_east" copy="github" passHref={true} target="_blank"/>
                    <Button href={siteMetaData.patreon} type="null" icon="north_east" copy="patreon" passHref={true} target="_blank"/>
                </div>
                {/* <div className="flex flex-grow flex-col align-top justify-items-start">
                    <Button href="/free-game" type="null" icon="east" copy="Free Game" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Shortterm vs Longterm..." />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="My gear" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Get started in music 101" />
                </div> */}
                <div className="flex flex-grow flex-col align-top space-y-6 justify-between">
                    <Subscribe/>
                    <div className="flex flex-col space-y-1">
                        {/* <Link href={siteMetaData.discord}>
                            <div className="flex items-center p-3 md:py-2 bg-black text-white justify-center rounded-full flex-nowrap space-x-2 cursor-pointer">
                                <FontAwesomeIcon icon={faDiscord}/>
                                <p>Invite me to your discord</p>
                            </div>
                        </Link> */}
                        <Link href={siteMetaData.discord}>
                            <div className="flex items-center py-2 cursor-pointer hover:bg-black hover:text-white md:py-2 border-black border border-solid text-black justify-center rounded-full flex-nowrap space-x-2">
                                <p>Join my cult</p>
                                <FontAwesomeIcon icon={faDiscord}/>
                                {/* <p>Join my cult</p> */}
                            </div>
                        </Link>
                    </div>
                </div> 
            </div>
            <div className="sub-text pt-16 flex w-full justify-between items-center">
                <p className="text-xs text-gray-700">This is a <Link href="/10Percent">10% project</Link>.</p>
                <p className="text-xs text-neutral-400 justify-end">from Jacob&#39;s Blue. 2022-Forever ®</p>
            </div>

        </div>
    )
}