class Solution:
    def largestWordCount(self, messages: List[str], senders: List[str]) -> str:
        wc = {}
        n = len(messages)

        for i in range(n):
            temp = messages[i].split()
            if senders[i] in wc:
                wc[senders[i]]=wc[senders[i]]+len(temp)

            else:
                wc[senders[i]]=len(temp)

        wc = dict(list(sorted(wc.items(), key = lambda x:(x[1],x[0]), reverse=True)))

        for i in wc:
            return i