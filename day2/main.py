
matrix = {
  'AX': 4,
  'AY': 8,
  'AZ': 3,
  'BX': 1,
  'BY': 5,
  'BZ': 9,
  'CX': 7,
  'CY': 2,
  'CZ': 6
}
playerScore = 0

def play():
  strategyGuide = None
  input = open('./day2/input', 'r')
  strategyGuide = input.readlines()
    
  for line in strategyGuide:
    global playerScore
    combo = ''.join(line.split())
    roundScore = matrix[combo]
    playerScore += roundScore
  print(playerScore)

if __name__ == '__main__':
  play()