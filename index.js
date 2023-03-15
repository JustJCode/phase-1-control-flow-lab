function scuberGreetingForFeet(somevalue){
  if (somevalue <= 400) {
    return "This one is on me!"
  }

  else if (somevalue >= 400 && somevalue <= 2000){
    return "That will be twenty bucks."
  }

  else if(somevalue > 2000 && somevalue <=2001){  
    return "I will gladly take your thirty bucks."
  } 

  return "No can do."
}
function ternaryCheckCity(somecity){
  return somecity === 'NYC'?'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(sometip){
  switch(sometip){
    case 'generous':
      return "Thank you so much."

    case 'not as generous':
      return "Thank you."

    default:
      return "Bye."
  }
}