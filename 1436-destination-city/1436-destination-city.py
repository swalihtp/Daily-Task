class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        last = []
        start = []
        n=len(paths)
        for i in range(n):
            last.append(paths[i][-1])

        for i in range(n):
            start.append(paths[i][0])

        for i in last:
            if i not in start:
                return i