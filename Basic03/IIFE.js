// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

(function code(){
    console.log(`DB Connected again`);
})();

( () => {
    console.log(`DB Connected again`);
})();

( (name) => {
    console.log(`DB Connected again ${name}`);
})("rishita");