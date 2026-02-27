class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        temp=str(n)
        initail_value=int(temp[0])
        product_total=initail_value
        sum_total=initail_value

        for num in temp[1:]:
            digit=int(num)
            sum_total+=digit
            product_total*=digit
        print(product_total,sum_total)
        return product_total-sum_total
        
