class Solution:
    def digitCount(self, num: str) -> bool:
        dic = {}
        for i in num:
            dic[i] = dic.get(i, 0) + 1
            
        for i in range(len(num)):
            count = dic.get(str(i), 0)
            
            if count != int(num[i]):
                return False
                
        return True