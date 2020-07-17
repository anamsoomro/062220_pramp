// https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4

function reverseWords(arr) {
  let solution = [] 
  let word = []
  // start from the back
  for(i=arr.length-1; i>=0; i--){
    if(arr[i] != '  '){
    // if its a letter, insert it into the beginning of word[]
      word.unshift(arr[i])
    } else if (arr[i] == '  '){
    // if its a space, insert he space to the end of word[]
    // add the word to solution[]
    // clear word[] for next iteration 
      word.push(arr[i])
      solution = [...solution, ...word]
      word = []
    }
  }
  // push in the last word that won't have a space at the end
  solution = [...solution, ...word]
  console.log(solution)
  return solution
}

let arr1 = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ','m', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
let arr2 = ["y","o","u","  ","w","i","t","h","  ","b","e"," ","f","o","r","c","e","  ","t","h","e","  ","m","a","y"]

reverseWords(arr2)