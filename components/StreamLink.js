import Link from "next/link"

export default function StreamLink(props) {
    return(
        <Link href={props.href}>
                        <div className="flex pr-1 mr-auto cursor-pointer hover:text-neutral-300 items-center">
                            <p className="">{props.label}</p>
                            <span className="material-icons text-base">north_east</span>
                        </div>
        </Link>
    )
}