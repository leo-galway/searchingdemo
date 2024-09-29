// Linear search
function linearSearch(arr, key) {

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === key) {
            return idx;
        }
    }
    return -1;
}

export { linearSearch };
