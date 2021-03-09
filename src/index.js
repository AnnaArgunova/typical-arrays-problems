exports.min = function min(array) {
    let max = 0;
    let min = max;
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i <= array.length; i++) {
            if (max < array[i]) {
                max = array[i]
            }
        }
        let min = max;
        for (let i = 0; i <= array.length; i++) {
            if (min > array[i]) {
                min = array[i]
            }
        }
        return min
    }
}

exports.max = function max(array) {
    let max = 0;

    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i <= array.length; i++) {
            if (max < array[i]) {
                max = array[i]
            }
        }
        return max;
    }
}

exports.avg = function avg(array) {
    let avg;
    let summ = 0;
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            summ = summ + array[i]
        }

        avg = summ / array.length;
        return avg
    }
}
