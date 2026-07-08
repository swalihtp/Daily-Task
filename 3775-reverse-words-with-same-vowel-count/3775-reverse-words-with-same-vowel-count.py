class Solution:
    def reverseWords(self, s: str) -> str:
        vowels = {'a','e','i','o','u'}
        c  = 0
        temp = s.split(" ")

        for l in temp[0]:
            if l in vowels:
                c+=1
        
        for i in range(1,len(temp)):
            vc = 0
            for j in temp[i]:
                if j in vowels:
                    vc+=1
            if vc == c:
                temp[i] = temp[i][::-1]

        return " ".join(temp)