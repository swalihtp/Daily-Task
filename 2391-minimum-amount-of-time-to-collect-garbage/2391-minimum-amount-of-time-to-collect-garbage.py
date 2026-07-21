class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        n=len(garbage)
        prefix = [0]*n
        last = {'M':0,'G':0,'P':0}
        taking_time = 0
        total = 0

        for i in range(0,len(travel)):
            prefix[i+1] = prefix[i]+travel[i]
        
        for i,gbg in enumerate(garbage):
            if 'M'in gbg:
                last['M'] = i
            if 'G' in gbg:
                last['G'] = i
            if 'P' in gbg:
                last['P'] = i
            taking_time += len(gbg)

        return taking_time+prefix[last['M']]+prefix[last['G']]+prefix[last['P']]
        

        
            
