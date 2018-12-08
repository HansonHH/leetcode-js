/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let pNode = l1
    let qNode = l2
    let carry = 0
    let head = new ListNode(0)
    let curr = head

    while (pNode !== null || qNode !== null) {
        const x = pNode !== null ? pNode.val : 0
        const y = qNode !== null ? qNode.val : 0

        let sum = x + y + carry
        carry = parseInt(sum / 10)

        curr.next = new ListNode(sum % 10)
        curr = curr.next

        if (pNode !== null) {
            pNode = pNode.next
        }
        if (qNode !== null) {
            qNode = qNode.next
        }
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return head.next
};