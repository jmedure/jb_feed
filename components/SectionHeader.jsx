export default function SectionHeader(props) {
  const id = props.title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü');

  return (
    <div
      id={'#' + id}
      className="w-full bg-white dark:bg-neutral-900 sticky top-16 left-0 z-20 "
    >
      <h3 className="container-fg flex py-4 bg-white dark:bg-neutral-900 border-b dark:border-white/10">
        {props.title}
      </h3>
    </div>
  );
}
