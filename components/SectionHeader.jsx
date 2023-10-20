export default function SectionHeader(props) {
  return (
    <div className="w-full bg-white sticky top-16 left-0 z-20 ">
      <h3 className="container-fg flex py-4 bg-white border-b">
        {props.title}
      </h3>
    </div>
  );
}
