function birthdayCakeCandles(candles) {
  let counter = 0;
  let bigCandle = 0;

  candles.sort((a, b) => b - a);
  bigCandle = candles[0];

  candles.forEach((candle) => {
    if (candle === bigCandle) {
      counter += 1;
    }
  });

  return counter;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
