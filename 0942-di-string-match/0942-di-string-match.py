class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        bg=len(s)
        sm=0
        ans=[]
        for c in s:
            if c=="I":
                ans.append(sm)
                sm+=1
            else:
                ans.append(bg)
                bg-=1
        if s[len(s)-1]=='I':
            ans.append(sm)
            return ans
        else:
            ans.append(bg)
            return ans