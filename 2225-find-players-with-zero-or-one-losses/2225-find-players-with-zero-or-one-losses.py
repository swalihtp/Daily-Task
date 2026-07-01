class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        winners = [m[0] for m in matches]
        losers = [m[1] for m in matches]

        loss_count = Counter(losers)

        players = set(winners + losers)

        never_lost = []
        lost_once = []

        for p in players:
            if loss_count[p] == 0:
                never_lost.append(p)
            elif loss_count[p] == 1:
                lost_once.append(p)

        return [sorted(never_lost), sorted(lost_once)]