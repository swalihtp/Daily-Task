class Solution:
    def concatWithReverse(self, nums: list[int]) -> list[int]:
        temp= nums.copy()[::-1]
        
        nums.extend(temp)
        return nums