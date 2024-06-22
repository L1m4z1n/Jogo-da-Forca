var words =[
    "javascript",
    "macaco",
    "incrivel",
    "panqueca",
]
var word = words[Math.floor(Math.random() * words.length)]

var aswerarray=[]
for (var i =0; i< word.length; i++) {
aswerarray[i]= "_";
}

var remainingLetters=word.length

while (remainingLetters>0) {
    console.log(aswerarray.join(""))
}

var guess = console.log("Uma letra aleatória, ou clique para parar o jogo")
if (guess === null) {
    
} else if (guess.length !== 1){
    console.log("Por favor, insira uma única letra.")
} else{

}

for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        aswerarray[j] = guess
        remainingLetters--
    }
    
}

console.log(aswerarray.join(" "))
console.log("Bom trabalho a resposta é " + word )