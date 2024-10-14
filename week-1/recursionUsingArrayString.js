//------------------------- sum of array using recursion -------------------------------

function sumOfArray(arr, length) {
    if (length === 0) {
        return 0
    }
    return arr[length - 1] + sumOfArray(arr, length - 1)
}

const arra = [1, 2, 3, 4, 5]
console.log("here is the sum of array:", sumOfArray(arra, arra.length));


//---------------------------- find the max and min number of the array using recursion --------------------------------

function maxNum(arr, length) {
    if (length === 0) {
        return Infinity
    }
    return Math.min(arr[length - 1], maxNum(arr, length - 1))
}

const arr3 = [11, 82, 3, 17, 6, 9]
console.log('here is the max number of the array', maxNum(arr3, arr3.length))


//--------------------------------- find the max number of the array not use the recrusion -------------------------------------


function maxNumber(arr, length) {
    let firstMax = 0
    let secondMin = 0
    for (let i = 0; i < length; i++) {
        if (arr[i] > firstMax) {
            secondMin = firstMax
            firstMax = arr[i]
        } else if (arr[i] > secondMin && arr[i] !== firstMax) {
            secondMin = arr[i]
        }
    }
    return secondMin
}
const ar = [11, 82, 3, 17, 6, 9]
console.log('here is the max number of the array', maxNumber(ar, ar.length))


//-------------------------------- reverse an array using recursion ---------------------------------------

function reverseArray(arr, start, end) {
    if (start >= end) {
        return
    }
    [arr[start], arr[end]] = [arr[end], arr[start]]
    reverseArray(arr, start + 1, end - 1)

}
const arr2 = [1, 2, 3, 6, 7, 3]
reverseArray(arr2, 0, arr2.length - 1)
console.log("reversed array : ", arr2)


//----------------------------- sorted using recursion -------------------------------------------

function sortArray(arr, length) {
    if (length === 1 || length === 0) {
        return true
    }
    if (arr[length - 1] < arr[length - 2]) {
        return false
    }
    return sortArray(arr, length - 1)
}

const arr1 = [1, 2, 3, 4, 5, 5]
console.log('sorted array is :', sortArray(arr1, arr1.length));

//----------------------------- sort array not use recursion -----------------------------

function sortArray(arr, length) {
    if (length <= 1) {
        return
    }
    sortArray(arr, length - 1)

    let arrValue = arr[length - 1]
    console.log("value", arrValue);

    let index = length - 2

    while (index >= 0 && arr[index] < arrValue) {
        arr[index + 1] = arr[index]
        index--
    }
    arr[index + 1] = arrValue


}

const arr = [5, 2, 9, 1, 5, 6];
sortArray(arr, arr.length);
console.log('Sorted array is:', arr);


//----------------------------- count occurence --------------------------------------

function countOccurence(arr, length, elem) {
    if (length === 0) {
        return 0
    }
    let count = arr[length - 1] === elem ? 1 : 0
    return count + countOccurence(arr, length - 1, elem)
}

const array = [1, 2, 4, 2, 5, 8]
console.log("count occurence", countOccurence(array, array.length, 2))

//------------------------------------- index of the array using reccursion --------------------------------

function index(arr, length, ele, idx = 0) {
    if (idx === length) {
        return -1
    }
    if (arr[idx] === ele) {
        return idx
    }
    return index(arr, length, ele, idx + 1)
}

const array3 = [1, 2, 3, 4, 4, 5, 6]
console.log('index of the array', index(array3, array3.length, 4))

//-------------------------------- Binery Search ----------------------------------------------

function binerySerach(arr, target, low = 0, heigh = arr.length - 1) {
    if (low > heigh) {
        return -1
    }
    let mid = Math.floor((low + heigh) / 2)
    if (arr[mid] === target) {
        return arr[mid]
    }

    if (arr[mid] > target) {
        return binerySerach(arr, target, low, arr[mid - 1])
    } else {
        return binerySerach(arr, target, arr[mid + 1], heigh)
    }
}

const array1 = [1, 2, 3, 4, 5, 6]
let target = 4
console.log('BinerySearch element :', binerySerach(array1, target));

//------------------------------- find the index value of the array -----------------------------------

function findIndexValue(arr, value,) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1

}

const ary = [1, 23, 4, 5, 67, 7]
const value = 7

console.log(findIndexValue(ary, value));


//=================================================== String using Recursion Questions ==================================================


// ---------------------- reverse string ---------------------------

function reverseStr(str) {
    if (str === "") {
        return ""
    }
    return reverseStr(str.slice(1)) + str[0]
}

console.log("here is the reversed string", reverseStr("hello"));


// -----------------palindrome-------------------------------

function palindromStr(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return palindromStr(str.slice(1, str.length - 1))
}

console.log(palindromStr("racecar"));
console.log(palindromStr("hello"));


// -----------------count Occuerence -------------------------------

function countOccurence(str, char, idx = 0) {
    if (idx === str.length) {
        return 0
    }
    let count = str[idx] === char ? 1 : 0
    return count + countOccurence(str, char, idx + 1)
}

console.log(countOccurence("hello", "h"));


// -----------------remove duplicates -------------------------------

function removeDup(str, idx = 0, result = "") {
    if (idx === str.length) {
        return result
    }
    if (!result.includes(str[idx])) {
        result += str[idx]
    }
    return removeDup(str, idx + 1, result)
}
console.log(removeDup("hello"));

function removeDup(arr, idx = 0, result = []) {
    if (idx === arr.length) {
        return result
    }
    if (!result.includes(arr[idx])) {
        result += arr[idx]
    }
    return removeDup(arr, idx + 1, result)
}
let array2 = [1, 2, 2, 3, 4, 5, 3, 5]
console.log(removeDup(array2));

// -------------------replace char -------------------------

function replaceChar(str, oldChar, newChar, idx = 0) {
    if (idx === str.length) {
        return str
    }
    if (str[idx] === oldChar) {
        str = str.slice(0, idx) + newChar + str.slice(idx + 1)
    }
    return replaceChar(str, oldChar, newChar, idx + 1)
}

console.log(replaceChar("apple", "p", "b"));

// -------------------capitalize words--------------

function capitalizeChar(str) {
    if (str.length === 0) {
        return ""
    }
    let capitalized = str[0].toUpperCase() + str.slice(1).toLowerCase()
    let nextSpace = capitalized.indexOf(' ')

    if (nextSpace === -1) {
        return capitalized
    }

    return capitalized.slice(0, nextSpace + 1) + capitalizeChar(capitalized.slice(nextSpace + 1))
}

console.log(capitalizeChar("hello"));


function capitalizeChar(str, idx = 0) {
    if (idx === str.length) {
        return ''
    }
    let char = idx % 2 === 0 ? str[idx].toUpperCase() : str[idx].toLowerCase()
    return char + capitalizeChar(str, idx + 1)
}

console.log(capitalizeChar("hello"));


//---------------------------- find length ---------------------------

function findLen(str, idx = 0) {
    if (str[idx] === undefined) {
        return 0

    }
    return 1 + findLen(str, idx + 1)
}

console.log(findLen("hello"));

//----------------------- add dot on the last of the word ---------------------

function start(str) {
    if (str.endsWith('.')) {
        return str
    } else {
        return str + '.'
    }
}

console.log(start('hello.'));

//------------------------------ find the longest word in the string ---------------------------

function longestStr(str) {
    let words = str.split(' ')
    let longest = ''
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    } return longest
}
let sentence = "I am learning JavaScript programming language";
console.log(longestStr(sentence));

//-------------------------------- find the longest word in the string not using the in-bulid function ---------------------------


function stringLength(str) {
    let check = '';
    let largestWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            check += str[i];
        }
        else {
            if (check.length > largestWord.length) {
                largestWord = check;
            }
            check = '';

        }

    }

    if (check.length > largestWord.length) {
        largestWord = check;
    }

    return largestWord

}

console.log(stringLength('I am learning JavaScript programming language'));

