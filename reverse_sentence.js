function reverseWords(arr) {
  let solution = [] 
  let word = []
  for(i=arr.length-1; i>=0; i--){

    if(arr[i] != '  '){
      word.unshift(arr[i])
    } else if (arr[i] == '  '){
      word.push(arr[i])
      solution = [...solution, ...word]
      word = []
    }
  }
  solution = [...solution, ...word]
  console.log(solution)
}

let arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ','m', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

reverseWords(arr)