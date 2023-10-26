import Link from 'next/link';

export default function Status(props) {
  return (
    <Link href="/journal/colophon#taxonomy">
      <div className="">{props.status}</div>
    </Link>
  );
}
