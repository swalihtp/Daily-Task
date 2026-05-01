class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        ng = [num for num in nums if num < 0]
        pt = [num for num in nums if num > 0]
        ans = []

        for i in range(0,len(nums)//2):
            ans.append(pt[i])
            ans.append(ng[i])

        return ans
