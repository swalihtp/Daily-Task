class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels=['a','e','i','o','u']
        a=s[:len(s)//2]
        b=s[len(s)//2:]
        vowels_in_a=0
        vowels_in_b=0

        for c in a:
            if c.lower() in vowels:
                vowels_in_a+=1
        for c in b:
            if c.lower() in vowels:
                vowels_in_b+=1

        return vowels_in_a==vowels_in_b
        

        