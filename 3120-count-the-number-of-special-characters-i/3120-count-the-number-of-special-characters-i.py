class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        temp=[ch for ch in word if ch.islower()]
        ans=0
        checked=[]
        for i in temp:
            if i.upper() in word and i not in checked:
                checked.append(i)
                ans+=1
        return ans
        