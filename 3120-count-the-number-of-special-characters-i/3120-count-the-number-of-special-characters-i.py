class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        temp=set([ch for ch in word if ch.islower()])
        ans=0
        for i in temp:
            if i.upper() in word:
                ans+=1
        return ans
        