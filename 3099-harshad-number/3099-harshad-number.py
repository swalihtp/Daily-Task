class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        temp=list(str(x))
        temp=map(int,temp)
        total=sum(temp)

        if x%total==0:
            return total
        else:
            return -1
