class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        t = []

        for i in nums:
            if nums.count(i)  == 1:
                t.append(i)

        if len(t) > 0:
            return sum(t)
        else:
            return 0