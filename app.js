function search(){
    const searchBox = document.querySelector('#search-item').value.toUpperCase()
    const products = document.querySelectorAll('.product')

    products.forEach(function(e){
        
       if(e.querySelector('h2').textContent.toUpperCase().includes(searchBox)){
            e.style.display =''
        }
        else{
            e.style.display ='none'
        }
    })
}