let letters = document.getElementById('loader').children,
    loadcontain = document.getElementById('load-contain'),
    loading = setInterval(function(){
        loaderAnim();
    }, 3000);
    
function loaderAnim () {
    let timer = 0;
 
    for (let letter of letters) {
        letter.style.margin = '5px';
        letter.style.color = '#fff';
    }
    console.log('test');
    for (let letter of letters) {
        timer += 100;
        let memletter = letter.innerHTML;
        let intload = setInterval(function(){
            letter.innerHTML = Math.random().toString(36).substr(-1).toUpperCase();
        }, 50);
        setTimeout(function(){
            letter.style.margin = 0;
            letter.style.color = '#00ff00';
            setTimeout(function(){
                clearInterval(intload);
                letter.innerHTML = memletter;
            }, 200);
        }, timer);
    }
}
 
function loadOut () {
    for (let letter of letters) {
        letter.style.opacity = 0;
        setTimeout(function(){
            letter.remove();
        }, 200)
    }
}
 
loaderAnim();