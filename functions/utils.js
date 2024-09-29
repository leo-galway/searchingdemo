import { linearSearch } from "./linear.js";
import { binarySearch, captureBinarySearch } from "./binary.js";

let randomArr = [];
let keyIdx = -1;

// Generate array of random (size) integers between min (inclusive) and max (inclusive)
function generateRandomArray(size = 10, min = 1, max = 100) {
    let arr = [];
    while (arr.length < size) {
        let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arr.includes(randomInt)) {
            arr.push(randomInt);
        }
    }

    return arr;
}

// Generate random value between min and max
function generateRandomValue(min = 1, max = 100) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}

// Display the array in HTML element with ID name and boolean to set colour
function displayData(data, name, success) {
    const element = document.getElementById(`${name}`);
    element.style.color = 'white';
    if (typeof(data) === 'string') {
        if (!success) {
            element.style.color = 'red'
        }
        element.innerText = data;
    } else {
        if (data.size > 1) {
            element.value = arr.join(', ');
        } else {
            element.value = data;
        } 
    } 
}

// Display search result data for binary search
function displayBinarySearchDetails(obj) {
    const parentTitle = document.getElementById('searchResultTitle');
    const newTitleElement = document.createElement('h3');
    newTitleElement.classList.add('subtitle');
    newTitleElement.setAttribute('id', 'results-title')
    newTitleElement.innerHTML = 'Search Details';
    parentTitle.appendChild(newTitleElement);

    const parentDetails = document.getElementById('searchResultDetails');
    const newSortedElement = document.createElement('p');
    newSortedElement.classList.add('block', 'has-text-left', 'px-1', 'py-2', 'mb-0', 'results-details');
    newSortedElement.innerHTML = `Sorted Array: ${obj.sorted.join(', ')}`;
    const newMidpointsElement = document.createElement('p');
    newMidpointsElement.classList.add('block', 'has-text-left', 'px-1', 'py-2', 'results-details');
    newMidpointsElement.innerHTML = `Mid-points tested in order: ${obj.midpoints.join(', ')}`;

    const elementsArray = [newSortedElement, newMidpointsElement];
    elementsArray.forEach((element) => {
        parentDetails.appendChild(element);
    });
}

// Remove search result data for binary search
function clearBinarySearchDetails() {
    const parentTitle = document.getElementById('results-title');
    if (parentTitle) {
        parentTitle.remove();
    }

    const parentDetails = document.getElementById('searchResultDetails');
    const element = parentDetails.querySelectorAll('.results-details');
    if (element.length) {
        [...element].forEach((iteration) => {
            iteration.remove();
        });
    }
}

// Register the event handlers for linear search
function registerEventHandlersLinearSearch() {
    const genBtn = document.getElementById("generateBtn");
    console.log(`${genBtn.id} event listener added`);
    genBtn.addEventListener('click', () => {
        randomArr = generateRandomArray(10, 1, 20); 
        displayData(randomArr, 'arrayVals', true);
        const defaultResult = 'Press Search button to find key!';
        displayData(defaultResult, 'searchResult', true);
    });

    
    const searchBtn = document.getElementById("searchBtn");
    console.log(`${searchBtn.id} event listener added`);
    searchBtn.addEventListener('click', () => {

        // Get the value from the input to determine the key for the search
        const key = parseInt(document.getElementById('searchVal').value);

        // Perform the linear search
        keyIdx = linearSearch(randomArr, key);

        // Display the result
        if (keyIdx !== -1) {
            const msg = `Search key ${key} found in array at index ${keyIdx}`;
            displayData(msg, 'searchResult', true);
        } else {
            const msg = `Search key ${key} not found in the array!`;
            displayData(msg, 'searchResult', false);
        }
    });
}


// Register the event handlers for binary search
function registerEventHandlersBinarySearch() {
    const genBtn = document.getElementById("generateBtn");
    console.log(`${genBtn.id} event listener added`);
    genBtn.addEventListener('click', () => {
        randomArr = generateRandomArray(10, 1, 20); 
        displayData(randomArr, 'arrayVals', true);
        const defaultResult = 'Press Search button to find key!';
        displayData(defaultResult, 'searchResult', true);

        // Remove any binary search details
        clearBinarySearchDetails();
    });

    
    const searchBtn = document.getElementById("searchBtn");
    console.log(`${searchBtn.id} event listener added`);
    searchBtn.addEventListener('click', () => {
        
        // Remove any binary search details
        clearBinarySearchDetails();

        // Get the value from the input to determine the key for the search
        const key = parseInt(document.getElementById('searchVal').value);

        // Perform the binary search
        const resultObj = captureBinarySearch(randomArr, key);

        // Display the result
        keyIdx = resultObj.result;
        if (keyIdx !== -1) {
            const msg = `Search key ${key} found in the array!`;
            displayData(msg, 'searchResult', true);
        } else {
            const msg = `Search key ${key} not found in the array!`;
            displayData(msg, 'searchResult', false);
        }
        displayBinarySearchDetails(resultObj);
    });
}

// Self-invoking function for initialisation
(function init() {
    console.log("init called");
    randomArr = generateRandomArray(10, 1, 20);
    displayData(randomArr, 'arrayVals', true);
    const randomInt = generateRandomValue(1, 20);
    displayData(randomInt, 'searchVal', true);
    const defaultResult = 'Press Search button to find key!';
    displayData(defaultResult, 'searchResult', true);

})();

export { registerEventHandlersLinearSearch, registerEventHandlersBinarySearch };