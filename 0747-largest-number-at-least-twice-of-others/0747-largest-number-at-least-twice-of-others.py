class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        biggest=max(nums)
        index=nums.index(biggest)
        nums.sort()
        big=nums[-2]
        

        if biggest >= big*2:
            return index
        return -1
        