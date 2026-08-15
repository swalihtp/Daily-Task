# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current.next:
            next_node = current.next
            current_val = current.val
            next_val = current.next.val

            m = min(current_val,next_val)

            while current_val % m != 0 or next_val % m != 0:
                m-=1
            
            node = ListNode(m)
            node.next = current.next
            current.next = node
            current = next_node
        return head