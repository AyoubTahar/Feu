let expression = process.argv[2].split(" ");

function calcul (exp){
  calculParanthese(exp)
  if (exp.length === 1){
    return exp
  }
  //1ère boucle pour faire en priorité multiplication et division//
  for(let i = 0 ; i < exp.length ; i++){
      if (exp[i] === "*"){
        let temp = Number(exp[i-1]) * Number(exp[i+1])
        exp.splice(i-1,3,temp)
        i--
      }
      if(exp[i] === "/"){
        temp = Number(exp[i-1]) / Number(exp[i+1])
        exp.splice(i-1,3,temp)
        i--
      }
  }
  //2éme boucle ensuite pour addition soustraction//
  for(let i = 0 ; i < exp.length ; i++){
      if(exp[i] === "+"){
        temp = Number(exp[i-1]) + Number(exp[i+1])
        exp.splice(i-1,3,temp)
        i--
      }
      if(exp[i] === "-"){
        temp = Number(exp[i-1]) - Number(exp[i+1])
        exp.splice(i-1,3,temp)
        i--
      }
    
  }
  return calcul(exp)
}

function calculParanthese(exp){
  const regex = /[(|)]/g
  const containsParentheses = exp.some((el) => regex.test(el))
  if (!containsParentheses){
    return exp
  }
  let indexStart = ''
  let indexEnd = ''
  for (let i = 0 ; i < exp.length ; i++){
      if(exp[i][0] === "(" ){
        exp[i] = exp[i][1]
        indexStart = i
      }
      if (exp[i][1] === ")"){
        exp[i] = exp[i][0]
        indexEnd = i
      }
  }
  for(let i = indexStart ; i <= indexEnd ; i++){
    if (exp[i] === "*"){
      let temp = Number(exp[i-1]) * Number(exp[i+1])
      exp.splice(i-1,3,temp)
      indexEnd--
    }
    if(exp[i] === "/"){
      temp = Number(exp[i-1]) / Number(exp[i+1])
      exp.splice(i-1,3,temp)
      indexEnd--
    }
  }
  for(let i = indexStart ; i <= indexEnd ; i++){
    if(exp[i] === "+"){
      temp = Number(exp[i-1]) + Number(exp[i+1])
      exp.splice(i-1,3,temp)
      indexEnd--
    }
    if(exp[i] === "-"){
      temp = Number(exp[i-1]) - Number(exp[i+1])
      exp.splice(i-1,3,temp)
      indexEnd--
    }
  }
  return calculParanthese(exp)
}
console.log(calcul(expression))