class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        mapp = {' ':' '}
        res = ''
        l = 'abcdefghijklmnopqrstuvwxyz'
        i=0

        for k in key:
            if k not  in mapp:
                mapp[k] = l[i]
                i+=1
        for m in message:
            res+=mapp[m]
        return res