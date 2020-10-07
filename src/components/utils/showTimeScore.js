export default function showTimeScore(value) {
  const date = new Date(0);
  date.setSeconds(value); // specify value for SECONDS here
  const timeString = date.toISOString().substr(11, 8);
  return timeString.replace(/^[0:]+/, '') || 0;
}
