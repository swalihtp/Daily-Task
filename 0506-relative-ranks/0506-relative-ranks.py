class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        ranks_of_athlets = {}
        temp = sorted(score,reverse=True)
        ans = []

        for i,value in enumerate(temp):
            if i == 0:
                ranks_of_athlets[value] = "Gold Medal"

            elif i == 1:
                ranks_of_athlets[value] = "Silver Medal"
            elif i == 2:
                ranks_of_athlets[value] = "Bronze Medal"
            else:
                ranks_of_athlets[value] = str(i+1)
        
        for i in score:
            ans.append(ranks_of_athlets[i])

        return ans