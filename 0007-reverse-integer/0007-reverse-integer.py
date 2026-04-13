class Solution:
    def reverse(self, x: int) -> int:
        if x>0:
            temp=str(x)
            res= int(temp[::-1])
        else:
            temp=str(abs(x))
            res= -int(temp[::-1])

        if res > 2**31 - 1 or res < -2**31:
            return 0
        return res
        