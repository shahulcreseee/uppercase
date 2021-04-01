function convertAllToUpperCase(obj) {
    var output = {};
    const test = JSON.stringify(obj).toUpperCase();
    return JSON.parse(test);
};

function convertKeysToUpperCase(obj) {
    let input = JSON.stringify(obj);
    let convertedInput = input.replace(/"([^"]+)"\s*:/g, function($0, $1) { return ('"' + $1.toUpperCase() + '":'); });
    return JSON.parse(convertedInput);
};

function convertValuesToUpperCase(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = obj[prop].toUpperCase();
        }
        if (typeof obj[prop] === 'object') {
            convertValuesToUpperCase(obj[prop]);
        }
    }
    return obj;
}

function extractKeysToUpperCase(target, keysArr) {
    if (typeof target === 'object') {
        for (const key in target) {
            if (key && isNaN(key)) {
                keysArr.push(key.toUpperCase());
            }
            extractKeysToUpperCase(target[key], keysArr);
        }
    }
    return keysArr;
}

function extractValuesToUpperCase(obj, resultObj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'string' && obj[prop].length > 0) {
            resultObj.push(obj[prop].toUpperCase());
        }
        if (typeof obj[prop] === 'object') {
            extractValuesToUpperCase(obj[prop], resultObj);
        }
        if (!isNaN(obj[prop])) {
            resultObj.push(obj[prop])
        }
    }
    return resultObj;
}

module.exports = {
    /**
     * Check whether the Given string value is UpperCased or not.
     * @param {String} value 
     * @returns Boolean 
     */
    isUpperCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return (value === value.toUpperCase());
        }
        return false;
    },
    /**
     * Converts given value to uppercase .
     * @param {String} value 
     * @returns UpperCased String value
     */
    getStringUpperCased: (value) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String)) {
            return value.toUpperCase();
        }
        return value;
    },
    /**
     * Converts specific words in the String to upper case based on from and to index 
     * @param {String} value 
     * @param {Int} from 
     * @param {Int} to 
     * @returns UpperCased String value for specific indexes.
     */
    getStringUpperCasedWithPos: (value, from, to) => {
        if (value != null || value.trim().length > 0 && (typeof myVar === 'string' || myVar instanceof String) && (from != to || from == null)) {
            if (to == null) {
                value = value.replace(value.substring(from, value.length), value.substring(from, value.length).toUpperCase());
            } else {
                value = value.replace(value.substring(from, to), value.substring(from, to).toUpperCase());
            }
        }
        return value;
    },
    /**
     * Convert the entire JSON Object to uppercase
     * @param {JSON} input 
     * @returns 
     */
    getObjectUpperCased: (input) => {
        const isEmpty = (input == null || !(Object.keys(input) || input).length);
        if (isEmpty) {
            return input;
        }
        return convertAllToUpperCase(input);
    },
    /**
     * Convert KEYS in the given JSON object to uppercase
     * @param {JSON} input 
     * @returns JSON Object with All KEYS converted to uppercase.
     */
    getObjectKeysUpperCased: (input) => {
        const isEmpty = (input == null || !(Object.keys(input) || input).length);
        if (isEmpty) {
            return input;
        }
        return convertKeysToUpperCase(input);
    },
    /**
     * Convert VALUES in the given JSON object to uppercase
     * @param {JSON} object 
     * @returns JSON Object with All VALUES converted to uppercase.
     */
    getObjectvaluesUpperCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return convertValuesToUpperCase(object);
    },
    /**
     * Convert Keys in the object to uppercase.
     * @param {JSON} object 
     * @returns Array of Uppercased Object Keys.
     */
    getKeysUpperCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractKeysToUpperCase(object, []);
    },
    /**
     * Convert Values in the object to uppercase.
     * @param {JSON} object 
     * @returns Array of Uppercased Object Values
     */
    getValuesUpperCased: (object) => {
        const isEmpty = object == null || !(Object.keys(object) || object).length;
        if (isEmpty) {
            return object;
        }
        return extractValuesToUpperCase(object, []);
    },
    /**
     *  Convert all values in the array to uppercase
     * @param {Array} input 
     * @returns Array of Uppercased values
     */
    getArrayUpperCased: (input) => {
        if (Array.isArray(input)) {
            var stringfied = JSON.stringify(input);
            return JSON.parse(stringfied.toUpperCase());
        }
        return input;
    },

    /**
     * Convert specific index value in the array to uppercase
     * @param {Array} input 
     * @param {Int`} index 
     * @returns Array of values with uppercased for specific index.
     */
    getArrValUpperCasedByIndex: (input, index) => {
        if (Array.isArray(input)) {
            if (~index) {
                input[index] = JSON.parse(JSON.stringify(input[index]).toUpperCase());
            }
        }
        return input;
    }
}