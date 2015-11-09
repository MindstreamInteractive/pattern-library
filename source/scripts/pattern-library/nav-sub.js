// Adds an active class to the current .nav-sub__item

$(document).ready(function() {
    var $navSubCurrent = $('#navSubCurrent');
    if ($navSubCurrent.length) {
        $('.pl-nav-sub__item.' + $navSubCurrent.val()).addClass('active');
    }
});
