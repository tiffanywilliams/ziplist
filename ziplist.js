function zipList(param1, param2) {
  const returned = [];
  for (const input of param2) {
    returned.push(param1[input - 1]);
    returned.push(param2[input - 1]);
  }
  return returned;
}


function zipListTheSimpleWay(param1, param2) {
  const returned = [];
  _.each(param2, function (input) {
    returned.push(param1[input - 1]);
    returned.push(param2[input - 1]);
  });
  return returned;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
