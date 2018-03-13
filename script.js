$('.highlightArea').on('mouseenter mouseleave', function() {
$(this).toggleClass('Highlight');
});

$('#submit').click(function(e){
  e.preventDefault();
  var valcpu = $('input[name=CPU]:checked').val();
  var valram = $('input[name=ram]:checked').val();
  var valaccs = $('input[name=accs]:checked').val();
  console.log(valcpu);
  console.log(valram);
  console.log(valaccs);
})

$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});
