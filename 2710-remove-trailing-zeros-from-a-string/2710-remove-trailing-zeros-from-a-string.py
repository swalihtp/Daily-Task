class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        count = 0
        for i in range(len(num)-1,-1,-1):
            if num[i] == '0':
                count+=1
            else:
                break
        return num[:len(num)-count]