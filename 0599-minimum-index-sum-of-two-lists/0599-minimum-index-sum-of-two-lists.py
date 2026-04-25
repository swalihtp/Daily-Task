class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        common_strings = []

        for i in list1:
            if i in list2:
                common_strings.append(i)

        temp=[None,[]]

        for i in common_strings:
            index_in_list1 = list1.index(i)
            index_in_list2 = list2.index(i)

            t = index_in_list1+index_in_list2

            if temp[0] == None:
                temp[0] = t
                temp[1].append(i)

            elif t < temp[0]:
                temp[0] = t
                temp[1] = [i]

            elif t == temp[0]:
                temp[1].append(i)

        return temp[1]

            
        