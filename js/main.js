$(document).ready(function () {
		$('.menu_icon').on('click', function (event) {
        event.preventDefault();
        $('.conteiner_ml').toggle(700);
    });
});