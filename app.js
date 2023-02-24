
/** header */
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0);
})


/** slider */
var index = 0;
setInterval(
    function slider(){
        var imgs = [
            './assets/image/home/b1.jpg',
            './assets/image/home/b2.jpg',
            './assets/image/home/b3.jpg',
            './assets/image/home/b4.jpg',
            './assets/image/home/b5.jpg',
            './assets/image/home/b6.jpg'
        ];

        document.getElementById('banner').src = imgs[index];
        index++;
        if(index === 6){
            index = 0;
        }
        
        var arrowLeft = document.querySelector('.arrow-left');
        var arrowRight = document.querySelector('.arrow-right');
        arrowLeft.addEventListener('click', function(){
            document.getElementById('banner').src = imgs[index];
            index--;
            if(index === -1){
                index = 5;
            }
        })
        
        arrowRight.addEventListener('click', function(){
            document.getElementById('banner').src = imgs[index];
            index++;
            if(index === 6){
                index = 0;
            }
        })
    }
    ,2000);



/** thêm sản phẩm vào giỏ hàng */
const btn = document.querySelectorAll('.btn-buy');
btn.forEach(function(button, index){
    button.addEventListener('click', (event) => {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector('.product-img').src;
        var productName = product.querySelector('.product-name').innerText;
        var productPrice = product.querySelector('.price p').innerText;

        addCart(productImg, productName, productPrice);
        
    })
})
function addCart (productImg, productName, productPrice){
    var addli = document.createElement('li');

    /* neu co san pham thi hien tb tawng so luowng */
    var cartItem = document.querySelectorAll('.product-infor');

    for (var i = 0; i< cartItem.length; i++){
        var productTitle = document.querySelectorAll('.productName');   /** laays ten sp */

        if (productTitle[i].innerHTML == productName){


            alert('Đã có trong giỏ hàng');

            return;  /*return de thoat */
        }
        
        
        
        
    }

    var productContent = `<li class="product-infor">
                            <img src='${productImg}' alt="">
                            <div>
                                <h4 class="productName">${productName}</h4>
                                <p class="price">${productPrice}</p>
                            </div>
                            <input type="number" value="1" min="1">
                            <div class="close">
                                <i class='bx bx-trash trash' ></i>
                            </div>
                        </li>`
    addli.innerHTML = productContent
    var productList = document.querySelector('.product-list');

    productList.append(addli)

    cartTotal()
    deleteProduct ()
}

/** tinh tổng giỏ hàng */
function cartTotal (){
    var cartItem = document.querySelectorAll('.product-infor');
    var totalC = 0;
    
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = Number(cartItem[i].querySelector('input').value)

        // console.log(inputValue)

        var priceProduct = parseInt(cartItem[i].querySelector('.price').innerText)

        // console.log(priceProduct)


        totalA = inputValue  * priceProduct * 1000;
        totalB = totalA  //.toLocaleString('de-DE')

        // console.log(typeof totalB)
       
        totalC = totalC + totalB;

        totalD = totalC.toLocaleString('de-DE')


        // console.log(totalC)
    }

    var totalMain = document.querySelector('.price-total p span');
    totalMain.innerHTML = totalD;

    
    // console.log(totalMain);  
}


/** xoa san pham( product) */
function deleteProduct (){
    var cartItem = document.querySelectorAll('.product-infor');

    for (var i = 0; i < cartItem.length; i++){
        var clickDel = document.querySelectorAll('.product-infor i');

        clickDel[i].addEventListener('click', (e) => {
            var delCart = e.target
            var cartItemProduct = delCart.parentElement.parentElement;

            cartItemProduct.remove()
        // console.log(cartItemProduct)
        })
    }
}

