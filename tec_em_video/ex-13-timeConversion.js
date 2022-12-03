function timeConversion(s) {
  s.split("");

  let hour = parseInt(s[0] + s[1]);
  let minute = s[3] + s[4];
  let second = s[6] + s[7];
  let ampm = s[s.length - 2];

  if (hour >= 12 && ampm === "A") {
    hour = hour - 12;
  } else if (hour < 12 && ampm === "P") {
    hour = hour + 12;
  }

  if (hour < 10) {
    return `0${hour}:${minute}:${second}`;
  } else {
    return `${hour}:${minute}:${second}`;
  }
}

console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("18:40:03PM"));
