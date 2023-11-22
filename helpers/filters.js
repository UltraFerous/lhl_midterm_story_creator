const cleanData = function(data) {
  let dataKeys = Object.keys(data);
  const previewLength = 5;
  let previewString = "";

  for (let text of dataKeys) {
    for (let i = 0; i < data[text].body.length && i < previewLength; i++) {
      previewString += data[text].body[i];
    }
    data[text].body = previewString + "...";
    previewString = "";
  }
  return data;
};

const openClose = function(data) {
  let dataKeys = Object.keys(data);
  for (let key of dataKeys) {
    if (data[key].status === true) {
      data[key].status = "Open";
    }
    else {
      data[key].status = "Closed";
    }
  }
  return data;
};

module.exports = { openClose,  cleanData };
