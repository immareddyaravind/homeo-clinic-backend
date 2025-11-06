function readURL(input, imgControlName) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(imgControlName).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$(".input-img").on('change', function () {
  var imgControlName = ".preview1";
  readURL(this, imgControlName);
  $(this).closest('.profile-upload').find('.preview1').addClass('it');
   $(this).closest('.profile-upload').find('.profile-remove').addClass('profile-remove-btn');
});
$(".profile-remove").on('click', function (e) {
  e.preventDefault();
   $(this).closest('.profile-upload').find(".input-img").val("");
   $(this).closest('.profile-upload').find(".preview1").attr("src", "");
   $(this).closest('.profile-upload').find('.preview1').removeClass('it');
   $(this).closest('.profile-upload').find('.profile-remove').removeClass('profile-remove-btn');
});

