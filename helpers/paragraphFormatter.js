// Take a string and separate its paragraphs, pushing them into an array and returning that array

const paragraphFormatter = (text) => {
  var paragraphArr = text.split(/\r\n|\r|\n/);

  paragraphArr = paragraphArr.filter(function (element) {
    return element.trim() !== '';
  });

  return paragraphArr;
};

module.exports = { paragraphFormatter };
