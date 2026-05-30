class Solution:
    def reverseByType(self, s: str) -> str:
        cs = [c for c in s if c.isalpha()]
        oth = [c for c in s if not c.isalpha()]

        print(cs,oth)

        s = [c for c in s]

        for i in range(len(s)):

            if s[i].isalpha():
                print(s[i])
                lt = cs.pop()
                print("LT", lt)
                s[i]=lt
            else:
                print(s[i])
                temp=oth.pop()
                print(temp)
                s[i]=temp
            
        return ''.join(s)