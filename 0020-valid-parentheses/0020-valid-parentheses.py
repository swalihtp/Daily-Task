class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {
            ']':'[',
            '}':'{',
            ')':'('
        }
        for p in s:
            if p in '({[':
                stack.append(p)
            else:
                if len(stack) == 0:
                    return False
                else:
                    if stack[-1] == pairs[p]:
                        stack.pop()
                    else:
                        return False

        return len(stack) == 0