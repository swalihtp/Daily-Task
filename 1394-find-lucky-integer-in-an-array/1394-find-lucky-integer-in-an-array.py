class Solution:
    def findLucky(self, arr: List[int]) -> int:
        freq = {}
        for num in arr:
            if num in freq:
                freq[num] = freq[num]+1
            else:
                freq[num] = 1

        ls = []

        for key in freq:
            if int(key) == freq[key]:
                ls.append(freq[key])
        if len(ls) >= 1:
            ls.sort()
            return ls[-1]
        return -1 