
// Bubble Sort
function bubbleSort(arr) {
    
    let n = arr.length;
    let flag = true;
    let temp;

    console.log(`n = ${n}`);

    console.log(`flag = ${flag}`);

    while (flag) {
        flag = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                flag = true;
            }
        }
    }

    return arr;
}

// Insertion Sort
function insertionSort(arr) {

    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Selection Sort
function selectionSort(arr) {
    
    let n = arr.length;
        
    for (let i = 0; i < n - 1; i++) {

        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}


// Quicksort
function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIdx = partition(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
}

function partition(arr, start, end) {
    
    let pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;

            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end);

    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export { bubbleSort, selectionSort, insertionSort, quickSort };