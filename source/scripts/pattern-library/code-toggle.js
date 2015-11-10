/**
 * Adds toggle button to pl-code-toggle headers, toggles code preview open/close
 */

$(function() {
    // Adds a code toggle button to pl-code-toggle elements
    $('.pl-code-toggle').each(function(item, key) {
        var $this = $(this);
        $this.append('<button type="button" class="pl-code-toggle__btn"></button>');
    });

    // Toggles open/close code blocks
    $('.pl-code-toggle__btn').on('click', function() {
        var $toggleBtn = $(this);
        $toggleBtn.closest('.pl-item').find('.pl-item__code').toggle();
        $(this).toggleClass('open');
    });

    // Creates PrismJS code blocks from item previews
    var $itemPreview = $('.pl-item__preview');
    $itemPreview.each(function() {
        var $this = $(this);
        var $code = $(this).siblings('.pl-item__code');
        var encodedHTML = '<pre><code class="language-markup">'+ encodeTags($this.html()).trim() +'</code></pre>';
        $code.append(encodedHTML);
    });

    // Encodes HTML tags
    function encodeTags(str) {
        return str.replace(/[<>]/g, function($0) {
            return "&" + {"<":"lt", ">":"gt"}[$0] + ";";
        });
    }
});
