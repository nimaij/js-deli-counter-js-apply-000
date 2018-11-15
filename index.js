/*function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number "+(katzDeliLine.length)+" in line."
}
*/

[1,2,3,4]
[1]
function takeANumber(katzDeliLine){
  var i=1
  katzDeliLine.push(i)
  return i
  i++
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }else{
    var nowServing = katzDeliLine.shift()
    return "Currently serving " + nowServing+"."
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length>0){
    var line=[]
    line[0]="The line is currently: "
    for(var i=1; i<=katzDeliLine.length; i++) {
      line.push(i+". "+katzDeliLine[i-1]+", ") 
    }
    var str=line.join("");
    return str.slice(0, -2); 
  } else{
    return "The line is currently empty."
  }
}