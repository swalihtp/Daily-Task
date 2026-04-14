class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        red=nums.count(0)
        white = nums.count(1)
        blue = nums.count(2)

        for i in range(0,red):
            nums[i]=0

        for i in range(red,white+red):
            nums[i]=1

        for i in range(red+white,red+white+blue):
            nums[i]=2
        