class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        l = 0
        r = 0
        _ = 0

        for i in moves:
            if i == "L":
                l+=1
            elif i == 'R':
                r+=1
            else:
                _+=1
        if l >= r:
            return (l-r)+_

        else:
            return (r-l)+_



       


        