import Link from "next/link";
import Image from "next/legacy/image";

export default function MoreLinkBlog(props) {
    
    return(
        <a href={props.href} className="p-0 m-0 no-underline">
            <div className="bg-inherit cursor-pointer shadow-blue hover:drop-shadow-md hover:bg-neutral-800/50 not-prose p-4 border border-neutral-500 border-solid flex-col w-full">
                <div className="relative flex w-full aspect-video border border-neutral-500 border-solid overflow-hidden">
                    <Image
                        src={props.src}
                        alt={props.alt}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                        blurDataURL="https://jacobs.blue"
                    />
                </div>
                <div className="flex items-baseline justify-between">
                    <h2 className="flex capitalize md:text-2xl">{props.label}</h2>
                    <p className="flex">{props.year}</p>
                </div>
            </div>
        </a>
    )
}