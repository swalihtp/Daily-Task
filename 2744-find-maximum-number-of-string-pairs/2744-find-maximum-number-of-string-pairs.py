class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        strings=set()
        count=0

        for word in words:
            if word in strings:
                count+=1
            else:
                strings.add(word[::-1])

        return count