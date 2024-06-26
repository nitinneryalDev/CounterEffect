const myNum = document.querySelectorAll('.count')

let speed = 200;

myNum.forEach( (myCount) => {

    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    console.log( "this here", init_count)
    let new_incriment_no = Math.floor(target_count / speed) ;
   
const updateNumber = () => {
    init_count  += new_incriment_no;
     myCount.innerText = init_count  ;
if(init_count < target_count) {
    setTimeout( () => {updateNumber()}  , 100 )
}
     
}
updateNumber()

} )