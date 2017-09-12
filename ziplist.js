/*
 * ziplist
 * created by darleneagbayani on 9/11/17
 */

const list1 = [1, 3, 5, 7];
const list2 = ["a", "b", "c", "d"];

function zipList(list1, list2) {
  let result = [];
  if (list1.length === list2.length) {
    for (var i = 0; i < list1.length; i++) {
      result.push(list1[i], list2[i]);
    }
  }
  return result;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2) {
  let result = _.flatten(_.zip(list1, list2));
  return result;
}

console.log(zipListTheSimpleWay(list1, list2));