import Head from "next/head"

export default function HeadSeo(props) {

    return (
        <Head>
            {/* //basic metadata */}
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={props.description} />
            {/* //twitter metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@jacobs__blue" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={props.image} />
            {/* //canonical link */}
            <link rel="canonical" href={props.canonical} />
            {/* //open graph metadata */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Jacob's Blue" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            <meta property="og:url" content={props.canonical} />
        </Head>
    )
}
