const indexOf = (arr, value, optIndex) => {
    if (optIndex == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (value == arr[i]) {
                return i
            }
        }
        return -1
    } else {
        if (optIndex > arr.length) {
            return -1
        } else if (optIndex >= 0 && optIndex < arr.length) {
            for (let j = optIndex; j < arr.length; j++) {
                if (value == arr[j]) {
                    return j
                }
            }
            return -1
        }
    }
};

const lastIndexOf = (arr, value, optIndex) => {
    if (optIndex == undefined) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (value == arr[i]) {
                return i
            }
        }
        return -1
    } else {
        if (optIndex > arr.length) {
            return -1
        } else if (optIndex >= 0 && optIndex < arr.length) {
            for (let j = arr.length - 1; j >= optIndex; j--) {
                if (value == arr[j]) {
                    return j
                }
            }
            return -1
        }
    }
}
const includes = (arr, value) => {
    if (indexOf(arr, value) == -1) {
        return false
    }
    return true
}