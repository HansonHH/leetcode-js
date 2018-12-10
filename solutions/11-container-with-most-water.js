/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 1
    let right = height.length

    if (left === right) {
        return 0
    }

    let tmp = 0
    while (left !== right) {
        let diff = right - left
        let leftHeight = height[left - 1]
        let rightHeight = height[right - 1]
        let curr = calculateContainer(diff, leftHeight, rightHeight)

        if (leftHeight < rightHeight) {
            left = left + 1
        } else if (leftHeight >= rightHeight) {
            right = right - 1
        }
        if (curr > tmp) {
            tmp = curr
        }
    }

    return tmp
}

function calculateContainer(diff, leftHeight, rightHeight) {
    return diff * Math.min(leftHeight, rightHeight)
}
