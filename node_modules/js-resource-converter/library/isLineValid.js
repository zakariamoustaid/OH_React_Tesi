const isLineValid = (line) => {
  if (line.startsWith("##") || !/\S/.test(line)) return false;
  return true;
};

module.exports = isLineValid;
