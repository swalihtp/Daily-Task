class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for i in nums:
            if i in freq:
                freq[i]= freq[i]+1
            else:
                freq[i]=1

        freq = dict(sorted(freq.items(), key=lambda item: item[1], reverse=True))
        ans=[]
        
        for i in freq:
            ans.append(int(i))
            if len(ans) == k:
                return ans