class Solution:
    def averageValue(self, nums: List[int]) -> int:
        temp = [num for num in nums if num%2==0 and num%3==0]
        if len(temp) > 0:
            avg = sum(temp) // len(temp)
            return avg
        return 0