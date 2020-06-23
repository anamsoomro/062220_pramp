# https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4

def reverseWords(arr) 

  solution = []
  word = [] 
  for letter in arr do 
    if letter != '  '
    # if its a letter, push it to end of word[]
      word.push(letter)
    else 
    # if its a space, put it in the beginning of word[]
    # put word[] in the beginning of solution[]
    # reset solution for next iteration
      word.unshift(letter)
      solution = [*word, *solution]
      word = []
    end
  end
  # put last word[] into beginning of solution[]
  solution = [*word, *solution]
  print solution
  return solution
end

arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ','m', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

reverseWords(arr)