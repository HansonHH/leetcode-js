/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    let match = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let i = 0
    let result = 0
    while (i < s.length) {
        if (match[s[i] + s[i + 1]]) {
            result = result + match[s[i] + s[i + 1]]
            i = i + 2
        } else {
            result = result + match[s[i]]
            i = i + 1
        }
    }

    return result

}
