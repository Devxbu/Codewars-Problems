def find_reverse_number(n):
    if n <= 0:
        raise ValueError("Input must be a positive integer")

    if n <= 10:
        return n - 1
    
    n -= 10 
    
    digit_length = 2 
    count_in_current_length = 9 
    
    while n > count_in_current_length:
        n -= count_in_current_length
        digit_length += 1
        
        if digit_length % 2 == 0:
            count_in_current_length = 9 * 10 ** (digit_length // 2 - 1)
        else:
            count_in_current_length = 9 * 10 ** (digit_length // 2)
    
    half_length = digit_length // 2
    
    base = 10 ** (half_length - 1)
    
    if digit_length % 2 == 0: 
        first_half = base + n - 1
        second_half = int(str(first_half)[::-1])
        return first_half * (10 ** half_length) + second_half
    else:  
        
        base_with_middle = 10 ** half_length
        first_half_and_middle = base_with_middle + n - 1
        first_half = first_half_and_middle // 10
        second_half = int(str(first_half)[::-1]) if first_half > 0 else 0
        return first_half_and_middle * (10 ** half_length) + second_half
