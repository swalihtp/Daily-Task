class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        n = len(nums) // 3
        freq = {}
        for i in nums:
            if i in freq:
                freq[i] = freq[i]+1
            else:
                freq[i]=1

        ans = []
        for i in freq:
            if freq[i]>n:
                ans.append(int(i))
        return ans
        