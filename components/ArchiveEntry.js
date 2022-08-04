import Link from "next/link";
import Image from "next/image";

export default function ArchiveEntry(props) {
    
    return(
        <a href={props.href}>
            <div className="cursor-pointer group p-2 md:p-4 bg-white hover:bg-neutral-200 border border-black border-solid flex-col w-full">
                <div className="relative flex w-full  aspect-video border border-black border-solid">
                    <Image
                        src={props.src}
                        alt={props.alt}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                        blurDataURL="https://jacobs.blue"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="capitalize md:text-2xl">{props.label}</h2>
                    <p>{props.year}</p>
                </div>
            </div>
        </a>
    )
}