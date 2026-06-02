class Solution:
    def countPrefixes(self, words: List[str], s: str) -> int:
        prefs = set()

        for i in range(1,len(s)+1):
            prefs.add(s[0:i])

        count = 0

        for word in words:
            if word in prefs:
                count+=1

        return count