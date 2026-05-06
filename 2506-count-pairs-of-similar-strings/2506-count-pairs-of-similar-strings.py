class Solution:
    def similarPairs(self, words: List[str]) -> int:
        ans=0
        n = len(words)
        for i in range(n):
            main  = set(words[i])
            for j in range(i+1,n):
                temp = set(words[j])
                if main == temp:
                    ans+=1 
        return ans