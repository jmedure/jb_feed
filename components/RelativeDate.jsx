import intlFormatDistance from 'date-fns/intlFormatDistance';

export default function RelativeDate(props) {
  const timeString = intlFormatDistance(props.date, new Date());
  return <>{timeString}</>;
}
