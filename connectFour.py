def who_is_winner(pieces_position_list):
    grid = [[None for _ in range(7)] for _ in range(6)]
    
    def winControl(row, col, color):
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (-1, -1), (1, 1), (-1, 1), (1, -1)]  # Sadece yatay (sağ) yönü kontrol ediyoruz
        for dr, dc in directions:
            count = 1 

            r, c = row + dr, col + dc
            while 0 <= r < 6 and 0 <= c < 7 and grid[r][c] == color:
                count += 1
                r += dr
                c += dc

            r, c = row - dr, col - dc
            while 0 <= r < 6 and 0 <= c < 7 and grid[r][c] == color:
                count += 1
                r -= dr
                c -= dc

            if count >= 4:
                return True

        return False
    
    for i in pieces_position_list:
        cord, color = i.split("_")
        col = ord(cord) - 65
        i = 5
        while i >= 0:
            if grid[i][col] != None:
                i -= 1
            else:
                grid[i][col] = color
                if winControl(i, col, color):
                    return color
                break
    return "Draw"