class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            temp=word[::-1]
            if temp==word:
                return word

        return ""