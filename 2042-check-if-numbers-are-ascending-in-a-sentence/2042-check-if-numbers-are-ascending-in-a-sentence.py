class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        temp = s.split()
        ans=[]
        for i in temp:
            try:
                res=int(i)
                ans.append(res)
            except:
                continue
        for i in range(len(ans)-1):
            if ans[i] >= ans[i+1]:
                return False

        return True