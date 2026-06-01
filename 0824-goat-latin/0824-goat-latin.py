class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        vowels = {'a','e','i','o','u'}
        ans = []
        sentence = sentence.split(" ")

        for i in range(len(sentence)):
            if sentence[i][0].lower() in vowels:
                x = sentence[i]+'ma'+('a'*(i+1))
                ans.append(x)
            elif sentence[i][0].lower() not in vowels:
                x = sentence[i][1:]+sentence[i][0]+'ma'+('a'*(i+1))
                ans.append(x)

        return " ".join(ans)