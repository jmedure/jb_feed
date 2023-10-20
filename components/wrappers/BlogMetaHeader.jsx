export default function BlogMetaHeader(props) {
  return (
    <div className="not-prose flex-block flex space-y-2 pb-8">
      <div className="space-y-3">
        <h1 className="tracking-tight font-medium text-3xl">{props.title}</h1>
        <div className="flex md:flex md:flex-nowrap items-center text-lg font-normal pt-1 space-x-4 text-neutral-500 font-jbd tracking-tight md:space-y-0 ">
          <p className="text-left flex-nowrap">{props.readingTime}</p>
          <p className="">Posted {props.published}</p>
          {props.updated ? (
            <p className="">Last tended to {props.lastTendedTo}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
