import { selectionSort } from "./sorts.js";

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    let idx = -1;

    console.log(`key = ${key}`);

    // Sort the array first
    arr = selectionSort(arr);

    while (start <= end && idx === -1) {

        if (arr[middle] === key) {
            idx = middle;
        } else if (key < arr[middle]) {
            end = middle -1;
        } else {
            start = middle + 1;
        }
        
        middle = Math.floor((start + end) / 2);
    }

    return idx;
}

function captureBinarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    let idx = -1;
    const iterSearchObj = {};
    let midArr = [];

    iterSearchObj.orig = [...arr];

    // Sort the array first
    arr = selectionSort(arr);
    iterSearchObj.sorted = [...arr];

    while (start <= end && idx === -1) {

        midArr.push(arr[middle]);

        if (arr[middle] === key) {
            idx = middle;
        } else if (key < arr[middle]) {
            end = middle -1;
        } else {
            start = middle + 1;
        }
        
        middle = Math.floor((start + end) / 2);
    }

    // Add middle array to iterations object
    iterSearchObj.midpoints = midArr;
    
    // Add search result to iterations object
    iterSearchObj.result = idx;

    return iterSearchObj;
}

export { binarySearch, captureBinarySearch };
  