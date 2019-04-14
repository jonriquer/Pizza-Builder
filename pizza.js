function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderCrust();
}

function renderPepperonni() {
  $(".btn-pepperonni").click(function(){
    $(this).toggleClass('active');
    $('.pep').toggle();
  });
}

function renderMushrooms() {
  $('.btn-mushrooms').click(function(){
    $(this).toggleClass('active');
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