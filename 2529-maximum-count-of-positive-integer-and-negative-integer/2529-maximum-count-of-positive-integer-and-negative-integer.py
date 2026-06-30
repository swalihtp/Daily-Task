class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        positive = [num for num in nums if num > 0]
        negative = [num for num in nums if num < 0]

        return max(len(positive),len(negative))