class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        alp=[chr(n) for n in range(97,123)]
        for ch in sentence:
            if ch in alp:
                alp.remove(ch)

        return len(alp)==0
        