class Solution:
    def judgeCircle(self, moves: str) -> bool:
        position_one = 0
        position_two = 0

        for i in moves:
            if i == 'R':
                position_one+=1

            elif i =='L':
                position_one+=-1
            elif i == 'U':
                position_two +=1
            elif i == 'D':
                position_two +=-1

        if position_one == 0 and position_two == 0:
            return True
        return False