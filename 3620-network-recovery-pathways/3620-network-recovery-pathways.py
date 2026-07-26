from typing import List
from collections import deque

class Solution:
    def findMaxPathScore(self, edges: List[List[int]], online: List[bool], k: int) -> int:
        n = len(online)

        # ---------- Build graph & compute indegree ----------
        graph = [[] for _ in range(n)]
        indegree = [0] * n
        max_cost = 0

        for u, v, cost in edges:
            graph[u].append((v, cost))
            indegree[v] += 1
            max_cost = max(max_cost, cost)

        # ---------- Topological Sort ----------
        q = deque()

        for i in range(n):
            if indegree[i] == 0:
                q.append(i)

        topo = []

        while q:
            node = q.popleft()
            topo.append(node)

            for nei, _ in graph[node]:
                indegree[nei] -= 1
                if indegree[nei] == 0:
                    q.append(nei)

        # ---------- Check if score >= x is possible ----------
        def can(x):
            INF = float("inf")
            dp = [INF] * n
            dp[0] = 0

            for u in topo:
                if dp[u] == INF:
                    continue

                # Intermediate offline nodes cannot be used
                if u != 0 and u != n - 1 and not online[u]:
                    continue

                for v, cost in graph[u]:
                    if cost < x:
                        continue

                    if v != n - 1 and not online[v]:
                        continue

                    dp[v] = min(dp[v], dp[u] + cost)

            return dp[n - 1] <= k

        # ---------- Binary Search ----------
        left, right = 0, max_cost
        ans = -1

        while left <= right:
            mid = (left + right) // 2

            if can(mid):
                ans = mid
                left = mid + 1
            else:
                right = mid - 1

        return ans