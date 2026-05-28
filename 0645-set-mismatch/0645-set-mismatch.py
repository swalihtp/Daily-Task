class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        seen = set()
        duplicate = None
        for i in nums:
            if i in seen:
                duplicate=i
            else:
                seen.add(i)
        missing = None
        for i in range(1,len(nums)+1):
            if i not in seen:
                missing = i
        return [duplicate,missing]