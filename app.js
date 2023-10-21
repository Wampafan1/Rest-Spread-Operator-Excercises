const filterOutOdds = (...nums) => {
    return nums.filter((num) => num % 2 === 0);
};

const findMin = (...nums) => { 
    return nums.reduce((accumulator, num) => num < accumulator ? num : accumulator);
};

const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    }
}

const doubleAndReturnArgs = (arr, ...nums) => {
    const newArr = nums.map((num) => num*2);
    return [...arr, ...newArr]
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    items.splice(randomIndex, 1)
    return items
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    // Create a copy of the original object using the spread operator
    const newObj = { ...obj };

    // Delete the specified key from the copied object
    delete newObj[key];

    // Return the new object
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    // Create a copy of the original object using the spread operator
    let newObj = {...obj1, ...obj2}
    
    // Return the new object
    return newObj
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    // Create a copy of original object using spread operator
    let newObj = {...obj}

    // modify value by key name
    newObj[key] = val
    
     // Return the new object
    return newObj
}