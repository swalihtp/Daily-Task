class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        idx = []
        ans = []
        
        for i,num in enumerate(nums):
            if num == x:
                idx.append(i)
        n = len(idx)
        for q in queries:
            if q > n:
                ans.append(-1)
            else:
                ans.append(idx[q-1])

        return ans
        