class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        sentence = sentence.split()

        for word in sentence:
            if word.startswith(searchWord):
                index = sentence.index(word)
                return index+1
        return -1