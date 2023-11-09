export default function CaseStudyMeta(props) {
  return (
    <div className="not-prose flex flex-wrap gap-x-8 gap-y-7 text-base max-w-[600px] mx-auto">
      {/* <div className="">
        <p className="font-bold">Team</p>
        <p>{props.team}</p>
      </div> */}
      <div className="white-space-nowrap">
        <p className="font-bold">Role</p>
        <p>{props.role}</p>
      </div>
      <div className="white-space-nowrap">
        <p className="font-bold">Impact</p>
        <p>{props.impact}</p>
      </div>
      <div className="white-space-nowrap">
        <p className="font-bold">Timeline</p>
        <p>{props.timeline}</p>
      </div>
    </div>
  );
}
