function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const newlineIndex = numbers.indexOf("\n");
    const delimiterStr = numbers.slice(2, newlineIndex);
    delimiter = new RegExp(escapeRegExp(delimiterStr));
    numbers = numbers.slice(newlineIndex + 1);
  }

  const tokens = numbers.split(delimiter).map(Number);
  const negatives = tokens.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return tokens.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
