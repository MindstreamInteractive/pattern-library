// Adds an active class to the current .pl-nav-main__item

$(document).ready(function() {
    var $navCurrent = $('#navCurrent');
    if ($navCurrent.length) {
        $('.pl-nav__item.' + $navCurrent.val()).addClass('active');
    }
});
