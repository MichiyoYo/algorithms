/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  const num1 = toNum(reverseList(l1));
  const num2 = toNum(reverseList(l2));
  const sum = Number(num1) + Number(num2);
  return reverseList(toList(String(sum)));
}

function toNum(list) {
  if (!list) return null;
  let currNode = list; //pointer to list
  let numStr = "";

  while (currNode) {
    numStr += currNode.val;
    currNode = currNode.next;
  }
  return numStr;
}

function toList(strNumber) {
  let list = new ListNode(strNumber[0]);
  let currNode = list;
  for (let i = 1; i < strNumber.length; i++) {
    let newNode = new ListNode(strNumber[i]);
    currNode.next = newNode;
    currNode = currNode.next;
  }
  return list;
}

function reverseList(list) {
  let head = list;
  let currNode = head;
  let prev = null;
  let next;

  while (currNode) {
    next = currNode.next;
    if (!next) head = currNode;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }

  return head;
}

function traverse(list) {
  let currNode = list;
  while (currNode) {
    console.log(currNode.val);
    currNode = currNode.next;
  }
}

let n1 = new ListNode(2);
let n2 = new ListNode(4);
let n3 = new ListNode(3);

n1.next = n2;
n2.next = n3;

let m1 = new ListNode(5);
let m2 = new ListNode(6);
let m3 = new ListNode(4);

m1.next = m2;
m2.next = m3;
