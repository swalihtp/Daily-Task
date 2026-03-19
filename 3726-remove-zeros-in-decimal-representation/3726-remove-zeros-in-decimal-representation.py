class Solution:
    def removeZeros(self, n: int) -> int:
        ans=""
        for num in str(n):
            if num!="0":
                ans+=num
        return int(ans)
        