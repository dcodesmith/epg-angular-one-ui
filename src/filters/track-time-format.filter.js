export default function trackTimeFormat () {
  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return function (time) {
    var time = pad(time.toString());

    if (time.indexOf('.') > 0) {
      return time.replace('.5', ':30');
    }

    return time + ':00';
  };
}
