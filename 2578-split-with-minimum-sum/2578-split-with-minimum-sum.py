class Solution:
    def splitNum(self, num: int) -> int:
        temp=list(str(num))
        num1=""
        num2=""
        temp.sort()
        for i in range(len(temp)):
            if i%2==0:
                num1+=temp[i]
            else:
                num2+=temp[i]

        return int(num1)+int(num2)
        