import Status from '../../components/mdx/Status';

export default function BlogMetaHeader(props) {
  return (
    <div className="w-full not-prose flex-wrap flex space-y-2 pb-4 sm:pb-8">
      <div className="space-y-3 w-full">
        <div className="md:hidden">
          <Status status={props.status} version={props.version} />
        </div>
        <div className="flex items-start gap-4">
          <h1 className="tracking-tight w-full flex-auto font-bold text-2xl">
            {props.title}
          </h1>
          <div className="hidden md:flex">
            <Status status={props.status} version={props.version} />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-3 items-center text-base font-normal text-neutral-500 font-jbd tracking-tight ">
          <p className="text-left whitespace-nowrap">{props.readingTime}</p>
          <p className="whitespace-nowrap">Posted {props.published}</p>
          {props.updated ? (
            <p className="whitespace-nowrap">
              Last tended to {props.lastTendedTo}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
