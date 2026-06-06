class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        f = nums[:n]
        s  = nums[n:]
        ans = []

        for i in range(len(f)):
            ans.append(f[i])
            ans.append(s[i])

        return ans