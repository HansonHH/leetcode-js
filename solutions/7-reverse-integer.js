/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let big = 2 ** 31
    let negBig = -1 * big

    let tmp = []
    let isNegative = x < 0
    let str = x.toString()

    for (let i = str.length; i >= 0; i--) {
        tmp.push(str[i])
    }
    tmp = tmp.filter((i) => !!i)
    tmp = parseInt(tmp.join(''))

    if (tmp > big || tmp < negBig) {
        return 0
    }

    return isNegative ? 0 - tmp : tmp
};
