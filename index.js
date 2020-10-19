const fi = (function() {
    return {
        libraryMethod: function() {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function(obj, alert) {
            for (const element in obj) {
                alert(obj.key, obj[element], obj)
            }
            return obj
        },

        map: function(obj, modifier) {
            let arr = []
            for (let key in obj) {
                arr.push(modifier(obj[key], key, obj))
            }
            return arr
        },

        reduce: function(obj, reduction, acc) {
            let collection = obj.slice(0)
            if (!acc) {
                acc = collection[0]
                collection = collection.slice(1)
            }
            for (let key in collection) {
                acc = reduction(acc, collection[key], collection)

            }
            return acc
        },

        find: function(obj, predicate) {
            for (let key in obj) {
                if (predicate(obj[key])) {
                    return obj[key]
                }
            }
            return undefined;
        },

        filter: function(arr, predicate) {
            const newArr = []
            for (let ele in arr) {
                if (predicate(arr[ele])) {
                    newArr.push(arr[ele])
                }

            }
            return newArr
        },

        size: function(collection) {
            return Object.keys(collection).length
        },

        first: function(array, n) {
            if (n) {
                return array.slice(0, n)
            } else {
                return array[0]
            }
        },

        last: function(array, n) {
            if (n) {
                return array.slice(array.length - n, array.length)
            } else {
                return array.slice(-1)[0]
            }
        },

        compact: function(array) {
            const falseyValue = new Set([false, null, 0, "", undefined, NaN])
            return array.filter(ele => !falseyValue.has(ele))
        },

        sortBy: function(array, callback) {
            const newArr = [...array]
            return newArr.sort(function(a, b) {
                return callback(a) - callback(b)
            })
        },

        // Ask Ix/Adam
        unpack: function(receiver, arr) {
            for (let val of arr)
                receiver.push(val)
        },

        flatten: function(collection, shallow, newArr = []) {
            if (!Array.isArray(collection)) {
                return newArr.push(collection)
            }
            if (shallow) {
                for (let val of collection)
                    Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
            } else {
                for (let val of collection) {
                    this.flatten(val, false, newArr)
                }
            }
            return newArr

        },

        // Ask Ix/Adam
        uniqSorted: function(collection, iteratee) {
            const sorted = [collection[0]]
            for (let idx = 1; idx < collection.length; idx++) {
                if (sorted[idx - 1] !== collection[idx])
                    sorted.push(collection[idx])
            }
            return sorted
        },

        uniq: function(collection, sorted = false, iteratee = false) {
            if (sorted) {
                return fi.uniqSorted(collection, iteratee)
            } else if (!iteratee) {
                return Array.from(new Set(collection))
            } else {
                const modifiedVals = new Set()
                const uniqVals = new Set()
                for (let val of collection) {
                    const moddedVal = iteratee(val)
                    if (!modifiedVals.has(moddedVal)) {
                        modifiedVals.add(moddedVal)
                        uniqVals.add(val)
                    }
                }
                return Array.from(uniqVals)
            }
        },

        keys: function(obj) {
            const newArr = []
            for (let key in obj) {
                newArr.push(key)
            }
            return newArr
        },

        values: function(obj) {
            const newArr = []
            for (let key in obj) {
                newArr.push(obj[key])
            }
            return newArr
        },

        functions: function(obj) {
            const newArr = []
            for (let key in obj) {
                if (typeof obj[key] === "function") {
                    newArr.push(key)
                }
            }
            return newArr.sort()
        }
    }
})()

fi.libraryMethod()