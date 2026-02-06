class Solution:
    def minimumSum(self, num: int) -> int:
        numbers=list(str(num))
        nl=map(lambda n:int(n),numbers)
        nl=list(nl)
        total=0
        for n in nl:
            big=max(nl)
            nl.remove(big)
            sm=min(nl)
            nl.remove(sm)
            x=str(sm)+str(big)
            total+=int(x)
            
        return total
        