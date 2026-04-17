class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        v={'a','e','i','o','u'}
        n=len(word)
        ans=0
        for i in range(n-4):
            for j in range(i+5,n+1):
                if set(word[i:j])==v:
                    ans+=1

        return ans

