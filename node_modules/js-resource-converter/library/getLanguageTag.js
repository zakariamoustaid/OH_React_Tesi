const getLanguageTag = (filename) => {
  const index = filename.indexOf(".") - 2;
  const tag = filename.substring(index, index + 2);
  return tag;
};

module.exports = getLanguageTag;
