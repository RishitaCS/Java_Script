const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleDateString();
}, 1000);
