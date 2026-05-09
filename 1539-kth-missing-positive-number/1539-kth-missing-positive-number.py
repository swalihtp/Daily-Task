class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        m=max(arr)
        missing_positives = [i for i in range(1,m+1005) if i not in arr]
        return missing_positives[k-1]