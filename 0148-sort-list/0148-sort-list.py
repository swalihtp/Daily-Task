# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        ls = []
        while current:
            ls.append(current.val)
            current = current.next

        ls.sort()
        i = 0

        current = head
        while current:
            current.val = ls[i]
            current = current.next
            i+=1

        return head
