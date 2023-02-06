document.querySelector('#search').addEventListener('input', function(){
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('#short_name'), shorts = document.querySelectorAll('.short');
    if(val != ''){
        searchItems.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                shorts.forEach((el)=>{
                    el.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                })
            }
            else{
                shorts.forEach((el)=>{
                    el.classList.remove('hide');
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
                })
            }
        });
    }
    else{
        shorts.forEach((el)=>{
            el.classList.remove('hide');
        });
    }
})
function insertMark(string, pos, len){
    return string.slice(0, pos)+'<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos + len);
}