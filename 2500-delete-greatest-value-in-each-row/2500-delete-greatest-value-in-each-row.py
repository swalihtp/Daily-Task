class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        ans = 0
        for item in grid:
            item.sort()


        n = len(grid[0])

        i = 0
        while i < n:
            temp = []
            for item in grid:
                temp.append(item.pop())

            i+=1

            ans+=max(temp)

        return ans

