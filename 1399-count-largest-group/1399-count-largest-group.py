class Solution:
    def countLargestGroup(self, n: int) -> int:
        dic = {}
        for i in range(1,n+1):
            count = 0
            ci = i
            while ci:
                li = ci % 10
                count+=li
                ci = ci // 10
            if count in dic:
                dic[count].append(i)
            else:
                dic[count] = [i]
        
        big_ls = 0
        count = 0
        for key in dic:
            lngth = len(dic[key])
            if lngth > big_ls:
                big_ls = lngth
                count = 1
            elif lngth == big_ls:
                count+=1
            

        return count


        