function formatTime(t) {
  let minutes = t % 60;
  let hours = Math.floor(t / 60);
  let days = Math.floor(hours / 24);
  hours %= 24;
  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
