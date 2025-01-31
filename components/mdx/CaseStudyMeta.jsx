export default function CaseStudyMeta(props) {
  const impact = props.impact;
  return (
    <div className="not-prose flex flex-wrap gap-x-8 gap-y-7 text-base max-w-[600px] tracking-normal mx-auto">
      <div className="white-space-nowrap space-y-2">
        <p className="text-black/50 dark:text-white/50">Role</p>
        <p>{props.role}</p>
      </div>
      {impact ? (
        <div className="space-y-2 flex-wrap">
          <p className="text-black/50 dark:text-white/50">Impact</p>
          <p>{props.impact}</p>
        </div>
      ) : null}
      <div className="white-space-nowrap space-y-2">
        <p className="text-black/50 dark:text-white/50">Status</p>
        <p>{props.status}</p>
      </div>
      <div className="white-space-nowrap space-y-2">
        <p className="text-black/50 dark:text-white/50">Timeline</p>
        <p>{props.timeline}</p>
      </div>

      {/* <div className="space-y-2">
        <p className="font-bold">Team</p>
        <p>{props.team}</p>
      </div> */}
    </div>
  );
}
