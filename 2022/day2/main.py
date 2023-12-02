
matrix = {
  'AX': 0+3, #rock/scissor:1/3'
  'AY': 3+1, #rock/rock:1/1
  'AZ': 6+2, #rock/paper:1/2
  'BX': 0+1, #paper/rock:2/1
  'BY': 3+2, #paper/paper:2/2
  'BZ': 6+3, #paper/scissor:2/3
  'CX': 0+2, #scissor/paper:3/2
  'CY': 3+3, #scissor/scissor:3/3
  'CZ': 6+1  #scissor/rock:3/1
}
# X lose, Y draw, Z win

playerScore = 0
def play():
  strategyGuide = None
  input = open('./day2/input', 'r')
  #strategyGuide = [['A', 'Y'], ['B', 'X'], ['C', 'Z']]
  strategyGuide = input.readlines()
    
  for line in strategyGuide:
    global playerScore
    combo = ''.join(line.split())
    roundScore = matrix[combo]
    playerScore += roundScore
  print(playerScore)

if __name__ == '__main__':
  play()