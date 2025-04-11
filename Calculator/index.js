let input=document.querySelector("input")
function addvalue(elementval){
  input.value += elementval
}
function clearval(){
  input.value=""
}
function deletecharacter(){
  input.value=input.value.slice(0,input.value.length-1)
}
function evaluateval(){
  input.value=eval(input.value)
}