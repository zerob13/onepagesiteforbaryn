$(document).ready(function() {
  $('.link-wrap').on('click', '.icon-b', function() {
    var link = $(this).data('link');
    window.location = link;
  });
});
console.log('By zerob13');
