/**
 * Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.
 */
function reverse(head) {
  if (!head) return null;
  let prev = null,
    currNode = head,
    oldNext = null;

  while (currNode) {
    oldNext = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = oldNext;
  }

  head = prev;

  return head;
}
