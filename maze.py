import time,os

ans = ['# ##',
       '# >#',
       '####']
locations = []
for i in range(0,len(ans)):
    for k in range(0,len(ans[i])):
        if i == 0 or i == len(ans) - 1 or k == 0 or k == len(ans[i]) - 1:
            if ans[i][k] == ' ':
                spaceX, spaceY= k, i
        if i != 0 and i != len(ans) - 1 and k != 0 and k != len(ans[i]) - 1:
            if ans[i][k] in ['^', '<', 'v','>']:
                roadX, roadY, userX, userY = spaceX - k, spaceY - i, k, i

print([userY,userX], [roadY, roadX], [spaceY, spaceX])


while [roadX, roadY] != [0,0]:
    while roadX < 0 and ans[userY][userX-1] != '#' or roadX > 0 and ans[userY][userX+1] != '#':
        if roadX < 0:
            if ans[userY][userX] == '>':
                locations.append('B')

            elif ans[userY][userX] == '^':
                locations.append('L')

            elif ans[userY][userX] == 'v':
                locations.append('R')
                
            elif ans[userY][userX] == '<':
                locations.append('F')
                userX -= 1

            roadX = spaceX - userX
    
        elif roadX > 0:
            if ans[userY][userX] == '>':
                locations.append('F')
                userX += 1

            elif ans[userY][userX] == '^':
                locations.append('R')

            elif ans[userY][userX] == 'v':
                locations.append('L')

            elif ans[userY][userX] == '<':
                locations.append('B')

            roadX = spaceX - userX
    while roadY < 0 and ans[userY-1][userX] != '#' or roadY > 0 and ans[userY+1][userX] != '#':
        if roadY < 0:
            if ans[userY][userX] == '>':
                locations.append('L')

            elif ans[userY][userX] == '^':
                locations.append('F')
                userY -= 1

            elif ans[userY][userX] == 'v':
                locations.append('B')

            elif ans[userY][userX] == '<':
                locations.append('R')

            roadY = spaceY - userY

        elif roadY > 0:
            if ans[userY][userX] == '>':
                locations.append('R')

            elif ans[userY][userX] == '^':
                locations.append('B')
                
            elif ans[userY][userX] == 'v':
                locations.append('F')
                userY -= 1

            elif ans[userY][userX] == '<':
                locations.append('L')

            roadY = spaceY - userY

print(locations)

# while [spaceX, spaceY] != [userX, userY]:
#     if spaceX < userX:
#         spaceX += 1
#         ans[spaceY] = ans[spaceY][:spaceX] + ' ' + ans[spaceY][spaceX + 1:]
#         ans[userY] = ans[userY][:userX] + '>' + ans[userY][userX + 1:]
#     elif spaceX > userX:
#         spaceX -= 1
#         ans[spaceY] = ans[spaceY][:spaceX] + ' ' + ans[spaceY][spaceX + 1:]
#         ans[userY] = ans[userY][:userX] + '<' + ans[userY][userX + 1:]
#     elif spaceY < userY:
#         spaceY += 1
#         ans[spaceY] = ans[spaceY][:spaceX] + ' ' + ans[spaceY][spaceX + 1:]
#         ans[userY] = ans[userY][:userX] + 'v' + ans[userY][userX + 1:]
#     elif spaceY > userY:
#         spaceY -= 1
#         ans[spaceY] = ans[spaceY][:spaceX] + ' ' + ans[spaceY][spaceX + 1:]
#         ans[userY] = ans[userY][:userX] + '^' + ans[userY][userX + 1:]
#     print('\n'.join(ans))
#     time.sleep(0.5)
#     os.system('cls')
