
const foreverTrue = () => true 

foreverTrue();

const HelloAsync = async () => {
        setTimeout(() => {
        console.log('Hola soy una promesa');
    }
, 5000)};

HelloAsync()

function* generator() {
    let i = 0;
   while (true) {
     i++;
     if(i % 2 == 0){
        yield i;
     }
   }
}

const callGen = generator()

console.log(callGen.next());
console.log(callGen.next());

