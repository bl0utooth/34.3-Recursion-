/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) {
        return 1;
    }
    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    if(words.length <= 1) {
        return words[0] || '';
    }
    const wordLength = words[0].length;
    const pause = longest(words.slice(1));
    return Math.max(wordLength, pause);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
    if (idx >= str.length) return newStr;
    newStr += str[idx];
    return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if(str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
    function search(index) {
        if (index >= arr.length) {
            return -1;
        }
        if (arr[index] === val) {
            return index;
        }
        return search(index + 1);
    }
    return search(0);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length <= 1) {
        return str
    }
    return revString(str.substring(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let stringsArray = [];
    for(let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArray.push(obj[key]);
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            stringsArray = stringsArray.concat(gatherStrings(obj[key]));
        }
    }
    return stringsArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
    function search(lowest, highest) {
        if (lowest > highest) {
            return -1;
        }
        let middle = Math.floor((lowest + highest) / 2)
        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] < val) {
            return search(mid + 1, highest);
        }else {
            return search(lowest, middle - 1);
        }
    }
    return search(0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
