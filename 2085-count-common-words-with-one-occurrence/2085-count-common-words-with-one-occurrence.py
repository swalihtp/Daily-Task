class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        cleaned_words1 = []
        cleaned_words2 = []
        
        for i in words1:
            if words1.count(i) == 1:
                cleaned_words1.append(i)

        for i in words2:
            if words2.count(i) == 1:
                cleaned_words2.append(i)

        ans = 0

        for i in cleaned_words1:
            if i in cleaned_words2:
                ans+=1

        return ans