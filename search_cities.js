const getCities = require("./cities");

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function searchCountries(search = null) {
  let toSearch = [];

  var arr = getCities().split("\n");

  for (var i = 1; i < arr.length; i++) {
    const line = arr[i];
    const line_array = line.split(",");
    toSearch.push(line_array[1]);
  }
  var unique = toSearch.filter(onlyUnique);

  if (search == null) {
    let toReturn = [];
    unique.map((e) => {
      if (e.toString().toLowerCase().startsWith("a")) {
        toReturn.push(e);
      }
    });
    return toReturn;
  } else {
    let toReturn = [];
    unique.map((e) => {
      if (
        e.toString().toLowerCase().startsWith(search.toString().toLowerCase())
      ) {
        toReturn.push(e);
      }
    });
    return toReturn;
  }
}
module.exports = searchCountries;
