var wallopEl = document.querySelector('.Wallop');
var wallop = new Wallop(wallopEl);

var Previous = document.querySelector('.Wallop-buttonPrevious');
Previous.addEventListener('click', function() {
  wallop.previous();
});

var Next = document.querySelector('.Wallop-buttonNext');
Next.addEventListener('click', function() {
  wallop.next();
});
