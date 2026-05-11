class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        freq = {}
        for i in words:
            if i in freq:
                freq[i]=freq[i]+1
            else:
                freq[i]=1

        freq = dict(sorted(freq.items(), key= lambda x: (-x[1],x[0])))
        freq = dict(list(freq.items())[:k])
        return [i for i in freq]