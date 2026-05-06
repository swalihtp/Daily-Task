class Solution:
    def frequencySort(self, s: str) -> str:
        freq = {}
        ans=""
        for i in s:
            if i in freq:
                freq[i] = freq[i]+1
            else:
                freq[i] = 1

        freq = dict(sorted(freq.items(), key=lambda item: item[1], reverse=True))
        for i in freq:
            ans+=i*freq[i]

        return ans
        

        