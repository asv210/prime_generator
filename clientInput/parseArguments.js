const parseArguments = () => {
  const args = process.argv.slice(2); // ignore the first two arguments (node and script path)
  const start = parseInt(args[0], 10); // convert into integer , 10 used for converting string to integer only
  const end = parseInt(args[1], 10); //strings starting with '0x' are interpreted as hexadecimal (base 16).
  const method = args[2] || "basic";

  return { start, end, method };
};

module.exports = parseArguments;
