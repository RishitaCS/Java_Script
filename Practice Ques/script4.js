//for-loop
let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
}
console.log("sum =", sum);
console.log("loop has ended");

//while-loop
let j=1;
while(j<=5){
    console.log(j);
    j++;
}

//do-while loop
let k=1;
do{
    console.log("Rishita Rawat");
    k++;
}while(k<=5);

//for-in-loop (objects,arrays)
let student = {
    name:"Rishita",
    age : 20,
    cgpa : 8.7,
    isPass : true,
};
for(let i in student){
    console.log(i);
}

//for-of-loop (strings,arrays)
let str="Our India";
let size=0;
for(let val of str){
    console.log(val);
    size++;
}
console.log("string size =",size);


