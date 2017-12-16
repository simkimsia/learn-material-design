jQuery(function($) {
  $("td input[type=checkbox]").on('change', function (e) {
    console.log('change');
    row = $(this).closest('tr');
    console.log(row);
    console.log($(this).is(':checked'));
    if ($(this).is(':checked')) {
        row.addClass('selected');
    } else {
        row.removeClass('selected');
    }
  });
});
