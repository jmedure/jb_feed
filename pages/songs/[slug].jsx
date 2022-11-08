import dayjs from "dayjs"
import React from "react"
import Head from "next/head"
import Image from "next/image"
import rehypeSlug from "rehype-slug"
import { MDXRemote } from "next-mdx-remote"
import rehypeHighlight from "rehype-highlight"
import rehypeCodeTitles from "rehype-code-titles"
import { serialize } from "next-mdx-remote/serialize"
import { getSlug, getArticleFromSlug } from '../../src/utils/mdx_songs'
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import Button from "../../components/Button"
import Link from "next/link"
import StreamLink from "../../components/StreamLink"
import MoreLinkBlog from "../../components/MoreLinkBlog"
import BlogSEO from "../../components/BlogSEO"


export default function BlogPost({ post: { source, frontmatter } }) {
 

  const songType = () => {
    if (frontmatter.type == "album"){
      return(
        <div className="py-8 flex flex-col">
         <p className="flex flex-center items-center px-2 justify-start mr-auto py-1 my-2 text-xs uppercase border border-solid border-white rounded-full">{frontmatter.type}</p>
         <h1 className="text-5xl font-medium md:text-6xl tracking-tighter">{frontmatter.title}</h1>
         <p className="text-xl md:py-2 py-2">by {frontmatter.artist}</p>
        </div>
      )
    }
    if (frontmatter.type == "song"){
    return(
      <div className="py-8 flex flex-col">
         <p className="flex flex-center px-2 items-center justify-start mr-auto py-1 my-2 text-xs uppercase border border-solid border-white rounded-full">{frontmatter.type}</p>
         <h1 className="text-5xl md:text-6xl font-medium tracking-tighter">{frontmatter.title}</h1>
         <p className="text-xl md:py-2">by {frontmatter.artist}</p>
         <p className="text-neutral-300 pt-2">Track {frontmatter.track} from <Link href={`/songs/${frontmatter.albumLink}`}><a className="dark">{frontmatter.album}</a></Link></p>
        </div>
    )}
    else {
      return(
      <div className="py-8 flex flex-col">
         <p className="flex flex-center px-2 items-center justify-start mr-auto py-1 my-2 text-xs uppercase border border-solid border-white rounded-full">{frontmatter.type}</p>
         <h1 className="text-5xl md:text-6xl font-medium tracking-tighter">{frontmatter.title}</h1>
         <p className="text-xl md:py-2">by {frontmatter.artist}</p>
        </div>
    )}
  }


  return (
    <React.Fragment>
      {/* <Head>
        <title>{frontmatter.title} by Jacob&#39;s Blue</title>
      </Head>  */}
      <BlogSEO
        title={(frontmatter.title) + " by Jacob's Blue"}
        description="Lyrics, credits, and all streaming links"
        canonical={frontmatter.slug}
        image={frontmatter.artwork}
      />
      <div className="bg-neutral-900 text-white relative">
        <div className="bg-cover lg:bg-cover bg-scroll bg-center not-prose flex-block " style={{backgroundImage: `url(${frontmatter.artwork})`}}>
            <div className="bg-gradient-to-t from-neutral-900">
              <div className="container pt-10 pb-8">
                <div className="flex">
                  <Link href='./'>
                    <div className="flex cursor-pointer mb-10 py-1 bg-black/20 rounded-full backdrop-blur-sm pl-2 pr-3 hover:bg-black/50 items-center">
                        <span className="material-icons text-xs">west</span>
                        <div className=""> all songs</div>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center h-full w-full">
                  <div className="relative invisible rounded-xl drop-shadow-2xl overflow-hidden hidden sm:flex sm:visible sm:w-80 md:w-96 h-full aspect-square ">
                      <Image 
                        src={frontmatter.artwork}
                        alt={frontmatter.alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL='https://jacobs.blue'
                      />
                  </div>
                  
                  <div className="flex-col flex-1 h-full justify-between flex-block sm:ml-8">
                  { songType() } 
                    
                    
                        {/* <div className="flex py-6 items-center cursor-pointer">
                                <p>Track {frontmatter.track} from {frontmatter.album}</p>
                        </div> */}
                    <div className="flex space-x-12">
                      <div>
                        <h3 className="text-xs text-neutral-300 font-medium uppercase">Released</h3>
                        <p className="pt-1">{dayjs(frontmatter.released).format("MMM D, YYYY")}</p>
                      </div>
                      <div>
                        <h3 className="text-xs text-neutral-300 font-medium uppercase">Written</h3>
                        <p className="pt-1">{frontmatter.written}</p>
                      </div>
                      <div>
                        <h3 className="text-xs text-neutral-300 font-medium uppercase">Produced</h3>
                        <p className="pt-1">{frontmatter.produced}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>

          
        <div className="container flex flex-col md:flex-row-reverse col-span-2">
          
          <div className="flex-block border-solid border border-white rounded-xl p-4 md:bg-neutral-900 md:m-0 md:ml-auto md:p-4 m-0 md:sticky md:top-8 md:z-10 md:right-0 h-full">
                        <div className="">
                          <p className="uppercase font-medium text-neutral-300 text-xs pb-2">Stream now</p>
                        </div>
                        <div className="flex text-lg flex-wrap w-full md:flex-nowrap md:block">
                          <StreamLink href={frontmatter.links[0]} label="Spotify" />
                          <StreamLink href={frontmatter.links[1]} label="Apple" />
                          <StreamLink href={frontmatter.links[2]} label="Youtube" />
                          <StreamLink href={frontmatter.links[3]} label="Amazon" />
                          <StreamLink href={frontmatter.links[4]} label="Tidal" />
                          {/* <StreamLink href={frontmatter.links[5]} label="Even More" /> */}
                        </div>

            </div>
            
          <div className="prose-base md:prose-lg flex-shrink w-full md:w-[32rem] lg:w-[38rem] pt-8 md:pt-0 static prose-invert prose-headings:tracking-tighter prose-headings:font-sans prose-headings:font-light prose-ul:list-none prose-ul:list">
            <MDXRemote {...source} components={{ Image, Button, Link, MoreLinkBlog}} />
          </div>
        </div>
        <div className="flex container justify-center sticky z-30 bottom-8 drop-shadow-lg pt-12">
         <iframe className="h-20 w-full backdrop-blur-sm border border-black border-solid overflow-clip rounded-xl " src={`https://open.spotify.com/embed/${(frontmatter.spotifyEmbed)}?utm_source=generator&theme=1`} frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}