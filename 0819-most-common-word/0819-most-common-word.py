import re

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        dic = {}
        banned_set = set(banned)
        words = re.findall(r'\w+',paragraph.lower())

        print(words)

        ls = [None,0]

        for word in words:
            if word in banned_set:
                continue
            if word in dic:
                temp = dic[word]
                dic[word] = temp+1

                if temp+1 > ls[1]:
                    ls[0],ls[1] = word,temp+1

            else:
                dic[word] = 1
                if ls[1] < 1:
                    ls[0],ls[1] = word, 1

        return ls[0]

