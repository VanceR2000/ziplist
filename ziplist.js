"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((acc, item, index) => {
        acc.push(item, list2[index]);
        return acc;
    }, []);
}
const result1 = zipList(['a', 'b', 'c'], [1, 2, 3]);
const result2 = zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]);
console.log(result1);
console.log(result2);
const outputDiv = document.getElementById('output');
if (outputDiv) {
    outputDiv.innerHTML = `
    <p><strong>zipList result:</strong> [${result1.join(', ')}]</p>
    <p><strong>zipListTheFunctionalWay result:</strong> [${result2.join(', ')}]</p>
  `;
}
