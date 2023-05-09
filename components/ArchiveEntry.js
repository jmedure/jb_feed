import Link from "next/link";
import Image from "next/legacy/image";

export default function ArchiveEntry(props) {
    
    return(
        <a href={props.href} className="group no-underline font-mont w-full">
            <div className="lg:p-6 p-4 mb-6 w-full hover:bg-blue-200 bg-blue-50 rounded-2xl text-black">
                <div className="w-full mb-4 relative h-full overflow-hidden aspect-square rounded-2xl sm:aspect-video">
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