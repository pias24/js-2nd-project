//==========================dom part start
let input = document.querySelector('.input')
let result = document.querySelector('.result')

//===========================button part start
let handelclick = ()=>{
    result.innerHTML = input.value
    input.value = ''
}
//============================key part start
let inputkey = (item)=>{
    console.log(item.key)
    if(item.key === "Enter"){
    handelclick()
    }
}




