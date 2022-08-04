import Link from "next/link";
import Button from "./Button";
import Subscribe from "./Subscribe";
import {faDiscord} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {

    let twitter = "https://twitter.com"
    
    if (props.color == "dark"){
        return(
        <div className="container my-12 pb-24 bg-black">
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 pt-4 border-t items-stretch border-black border-solid">
                <div className="flex flex-col flex-grow alignx-top justify-items-start">
                    <Button href="/" type="right" icon="north" copy="Home" />
                    <Button href="/meditations-of-a-rockstar" type="right" icon="east" copy="M.O.A.R." />
                    <Button href="/songs" type="right" icon="east" copy="Songs" />
                    <Button href="/links" type="right" icon="east" copy="All links" />
                    <Button href="/blog" type="right" icon="north_east " copy="EPK" />
                    <Button href="/misc" type="right" icon="east" copy="Extras" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Books" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Recipes" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="More" />
                </div>
                <div className="flex flex-col flex-grow align-top justify-items-start">
                    <Button href={twitter} type="right" icon="north_east" copy="spotify" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="apple music" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="youtube" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="twitter" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="soundcloud" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="instagram" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="github" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="patreon" passHref={true} target="_blank"/>
                </div>
                <div className="flex flex-grow flex-col align-top justify-items-start">
                    <Button href="/free-game" type="right" icon="east" copy="Free Game" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Shortterm vs Longterm..." />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="My gear" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Get started in music 101" />
                </div>
                <div className="flex flex-grow flex-col align-top space-y-6 justify-between">
                    <Subscribe/>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center p-3 md:py-2 bg-black text-white justify-center rounded-full flex-nowrap space-x-2">
                            <FontAwesomeIcon icon={faDiscord}/>
                            <p>Invite me to your discord</p>
                        </div>
                        <div className="flex items-center p-3 md:py-2 border-black border border-solid text-black justify-center rounded-full flex-nowrap space-x-2">
                            <FontAwesomeIcon icon={faDiscord}/>
                            <p>Join my discord</p>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="sub-text pt-16 flex w-full justify-between items-center">
                <p className="text-xs text-gray-700">This is a <a href="/10%">10% project</a>.</p>
                <p className="text-xs text-neutral-400 justify-end">from Jacob&#39;s Blue. 2022-Forever ®</p>
            </div>
        </div>
    )

    }

    return (
        <div className="container my-12 pb-24">
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 pt-4 border-t items-stretch border-black border-solid">
                <div className="flex flex-col flex-grow alignx-top justify-items-start">
                    <Button href="/" type="right" icon="north" copy="Home" />
                    <Button href="/meditations-of-a-rockstar" type="right" icon="east" copy="M.O.A.R." />
                    <Button href="/songs" type="right" icon="east" copy="Songs" />
                    <Button href="/links" type="right" icon="east" copy="All links" />
                    <Button href="/blog" type="right" icon="north_east " copy="EPK" />
                    <Button href="/misc" type="right" icon="east" copy="Extras" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Books" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Recipes" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="More" />
                </div>
                <div className="flex flex-col flex-grow align-top justify-items-start">
                    <Button href={twitter} type="right" icon="north_east" copy="spotify" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="apple music" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="youtube" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="twitter" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="soundcloud" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="instagram" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="github" passHref={true} target="_blank"/>
                    <Button href={twitter} type="right" icon="north_east" copy="patreon" passHref={true} target="_blank"/>
                </div>
                <div className="flex flex-grow flex-col align-top justify-items-start">
                    <Button href="/free-game" type="right" icon="east" copy="Free Game" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Shortterm vs Longterm..." />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="My gear" />
                    <Button href="/shorterm-vs-longterm-fulfillment" type="both" icon="east" copy="Get started in music 101" />
                </div>
                <div className="flex flex-grow flex-col align-top space-y-6 justify-between">
                    <Subscribe/>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center p-3 md:py-2 bg-black text-white justify-center rounded-full flex-nowrap space-x-2">
                            <FontAwesomeIcon icon={faDiscord}/>
                            <p>Invite me to your discord</p>
                        </div>
                        <div className="flex items-center p-3 md:py-2 border-black border border-solid text-black justify-center rounded-full flex-nowrap space-x-2">
                            <FontAwesomeIcon icon={faDiscord}/>
                            <p>Join my discord</p>
                        </div>
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