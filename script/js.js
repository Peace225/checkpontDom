let btnPlus = document.querySelector('.qty_plus');
let btnMoins = document.querySelector('.qty_moins');
let addButton = document.querySelector('#add_button');


btnPlus.addEventListener('click', increaseQuantity);
btnMoins.addEventListener('click', decreaseQuantity);

addButton.addEventListener('click', addArticle)


function increaseQuantity(){
    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) +1;
    subtotal();

}

function decreaseQuantity (){
    if (document.querySelector('.qty').value >0){
        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) -1;
    }
    

}

function subtotal(){
    let price = parseInt(document.querySelector('.price').innerText);
    let qty = parseInt(document.querySelector('.qty').value);
    let subt = price*qty;

    document.querySelector('.subtotal').innerText = subt + '$'; 
}

function addArticle(){
    let name = document.querySelector('#name_produit');
    let price = document.querySelector('#price_product');
    
   document.querySelector('#all_products').innerHTML += '<tr><td class="article_name"><div style="margin-right: 1rem;"><img src=""></div><div><h4>'+ name.value +'</h4></div></td><td class="quantity"><button class="qty_plus" id="1">+</button><input type="text" readonly placeholder="unit price" class="qty" value="1"><button class="qty_moins" id="1">-</button><button class="supprimer" id="supprimer">Supprimer</button><button class="like_btn">♥</button></td><td class="price">'+ price.value +' $</td><td class="subtotal">'+ price.value +' $</td></tr>'
   loadNewElement();

}

function loadNewElement(){
    let btnPlus = document.querySelector('.qty_plus');
    let btnMoins = document.querySelector('.qty_moins');

    btnPlus.addEventListener('click', increaseQuantity);
    btnMoins.addEventListener('click', decreaseQuantity);
}