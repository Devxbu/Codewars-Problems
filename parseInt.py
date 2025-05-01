def parse_int(string):
    count = 0
    result = 0
    units = {"one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
             "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
             "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
             "fifteen": 15, "sixteen": 16, "seventeen": 17,
             "eighteen": 18, "nineteen": 19}
    
    tens = {"twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
            "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90}
    
    scales = {"hundred": 100, "thousand": 1000, "million": 1000000}
    
    string = string.replace(" and ", " ")
    words = string.replace("-", " ").split()
    
    for word in words:
        if word in units:
            count += units[word]
        elif word in tens:
            count += tens[word]
        elif word == "hundred":
            count *= 100
        elif word in ("thousand", "million"):
            count *= scales[word]
            result += count
            count = 0
    
    return result + count
