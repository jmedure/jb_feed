import Status from '../../components/mdx/Status';

export default function BlogMetaHeader(props) {
  return (
    <div className="w-full not-prose flex-wrap flex space-y-2 pb-4 sm:pb-8">
      <div className="space-y-3 w-full">
        <h1 className="tracking-tight flex-auto font-medium text-3xl">
          {props.title}
        </h1>
        <div className="flex flex-wrap gap-x-3 items-center text-lg font-normal pt-1 text-neutral-500 font-jbd tracking-tight ">
          <p className="text-left whitespace-nowrap">{props.readingTime}</p>
          <p className="whitespace-nowrap">Posted {props.published}</p>
          {props.updated ? (
            <p className="whitespace-nowrap">
              Last tended to {props.lastTendedTo}
            </p>
          ) : null}
          <Status status={props.status} />
        </div>
      </div>
    </div>
  );
}
