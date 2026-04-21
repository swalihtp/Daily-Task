class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        temp=[i for i in range(left,right+1) if '0' not in str(i)]
        ans=[]

        for i in temp:
            x=str(i)
            xn=len(x)
            count=0
            for j in range(xn):
                if i%int(x[j])==0:
                    count+=1
            if count==xn:
                ans.append(i)
        return ans
      
            