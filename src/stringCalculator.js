function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [_, customDelimiter, rest] = numbers.match(/^\/\/(.+)\n(.*)/s);
    delimiter = new RegExp(customDelimiter);
    numbers = rest;
  }

  const tokens = numbers.split(delimiter).map(Number);
  const negatives = tokens.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return tokens.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
