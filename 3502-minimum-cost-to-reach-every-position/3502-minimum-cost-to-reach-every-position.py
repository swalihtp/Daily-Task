class Solution:
    def minCosts(self, cost: List[int]) -> List[int]:
        p = cost[0]
        ans = []

        for i in range(0,len(cost)):
            if cost[i] < p:
                ans.append(cost[i])
                p = cost[i]
            else:
                ans.append(p)

        return ans
