class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        next_greater = {}
        result = []

        for num in reversed(nums2):

            while stack and stack[-1] <= num:
                stack.pop()
            
            next_greater[num] = stack[-1] if stack else -1
            stack.append(num)

        for num in nums1:

            result.append(next_greater[num])
        return result