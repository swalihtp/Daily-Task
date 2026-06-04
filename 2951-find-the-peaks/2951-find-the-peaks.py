class Solution:
    def findPeaks(self, mountain: List[int]) -> List[int]:
        res = []

        for i in range(1,len(mountain)-1):
            b = mountain[i-1]
            a = mountain[i+1]

            if mountain[i] > b and mountain[i] > a:
                res.append(i)

        return res