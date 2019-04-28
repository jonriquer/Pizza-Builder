function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderCrust();
}

function updatePrice() {
  let totalPrice = 10; 
    visibleItems = $('aside ul li:visible');

  for (i=0; i < visibleItems.length; i++) {
    totalPrice += Number(visibleItems[i].innerText[1]);
  };
  $('.total')[0].innerText = totalPrice;
  console.log($('.total'))
}

function renderPepperonni() {
  $(".btn-pepperonni").click(function(){
    $(this).toggleClass('active');
    $('.pep').toggle();
    $('.pepPrice').toggle();
    updatePrice();
  });
}

function renderMushrooms() {
  $('.btn-mushrooms').click(function(){
    $(this).toggleClass('active');
    $(".mushroom").toggle();
    $('.mushPrice').toggle();
    updatePrice();
  })
}

function renderGreenPeppers() {
  $('.btn-green-peppers').click(function(){
    $(this).toggleClass('active');
  })
}

function renderWhiteSauce() {
  $('.btn-sauce').click(function(){
    $(this).toggleClass('active');
  })
}

function renderCrust() {
  $('.btn-crust').click(function(){
    $(this).toggleClass('active');
  })
}

renderEverything();