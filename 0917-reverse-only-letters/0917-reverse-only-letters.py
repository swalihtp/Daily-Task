class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        temp = [c for c in s if c.isalpha()]
        s = [char for char in s]
        for i in range(len(s)):
            if s[i].isalpha():
                s[i] = temp.pop() 
            else:
                continue
        return "".join(s)
