/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    if (numRows == 1) {
        return s
    }

    let m = new Map()
    for (let row = 0; row < Math.min(numRows, s.length); row++) {
        m.set(row, [])
    }
    let goingDown = false
    let curRow = 0

    for (let c of s) {
        m.get(curRow).push(c)
        if (curRow == 0 || curRow == numRows - 1) {
            goingDown = !goingDown
        }
        curRow = curRow + (goingDown ? 1 : -1)
    }

    let result = ''
    for (let r of m.values()) {
        result = result + r.join('')
    }

    return result
};
