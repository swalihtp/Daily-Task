class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        dic={}
        for i in range(lowLimit,highLimit+1):
            temp=str(i)
            temp=[int(j) for j in temp]
            s=sum(temp)
            if str(s) in dic:
                dic[str(s)]+=1
            else:
                dic[str(s)]=1
        print(dic)
        res=0

        for key in dic:
            if dic[key]>res:
                res=int(dic[key])

        return res