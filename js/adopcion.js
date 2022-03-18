const addToShoppingCartButtons = document.querySelectorAll('.adoptar');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
  });

  const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

  const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
  );


  function addToCartClicked(event) {
    const button = event.target;
    const card = button.closest('.card');
  
    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.card-price').textContent;
    const cardImage = card.querySelector('.card-img-top').src;
  
    addItemToShoppingCart(cardTitle, cardPrice, cardImage);
  }

  function addItemToShoppingCart(cardTitle, cardPrice, cardImage) {



    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = ` <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${cardImage} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${cardTitle}</h6>
        </div>
    </div>
    <div class="col-2">
    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
        <p class="item-price mb-0 shoppingCartItemPrice">${cardPrice}</p>
    </div>
</div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

shoppingCartRow
.querySelector('.buttonDelete')
.addEventListener('click', removeShoppingCartItem);

shoppingCartRow
.querySelector('.shoppingCartItemQuantity')
.addEventListener('change', quantityChanged);

updateShoppingCartTotal();

    ;}

function updateShoppingCartTotal() {
        let total = 0;
        const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
      
        const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
      
        shoppingCartItems.forEach((shoppingCartItem) => {
          const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
          );
          const shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('$', '')
          );
          const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
            '.shoppingCartItemQuantity'
          );
          const shoppingCartItemQuantity = Number(
            shoppingCartItemQuantityElement.value
          );
          total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        });
        shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
      }

      function removeShoppingCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItem').remove();
        updateShoppingCartTotal();
      }
      
      function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        updateShoppingCartTotal();
      }
      
      function comprarButtonClicked() {
        shoppingCartItemsContainer.innerHTML = '';
        updateShoppingCartTotal();
      }
      


      //CARACTERISTICAS
      
function comprar(){
 
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Confirma si estas seguro por favor",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Estoy seguro/a!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Listo!',
            'Ya has confirmado la adopción',
            'success'
          )
        }
      })
    }