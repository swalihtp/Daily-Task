class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        substrings=[]
        for i in range(len(word)):
            for j in range(i,len(word)):
                substrings.append(word[i:j+1])

        ans=0
        for i in patterns:
            if i in substrings:
                ans+=1

        return ans