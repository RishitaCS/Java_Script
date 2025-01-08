a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner : ",a);
}
console.log(a);

function one(){
    const username = "rishita"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website); // will give error

    two()
}

one()

//*************************************** Interesting **************************************
// Mini Hoisting Concept
console.log(addOne(5));

function addOne(num){
    return num + 1
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

