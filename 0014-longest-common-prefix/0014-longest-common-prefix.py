class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        target=strs[0]
        final=""
        for word in strs[1:]:
            for i,ch in enumerate(word):
                if i < len(target):
                    if target[i]==ch:
                        final+=ch
                    else:
                        target=word[:i]
            target=final
            final=""
        return target



        