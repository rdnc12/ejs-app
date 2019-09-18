// jshint esversion:6

$(document).on('click', '.delete', function () {
    event.preventDefault();
    var closeLi = $(this).closest('li');

    $(this).fadeOut(500, function () {
        closeLi.remove();
    });
});

// `Add` button should add a topic (an `li` element inside 2 `span` elements).

$('button').on('click', function (e) {
    e.preventDefault();
    var newValue = $('#addListItem').val();

    if (newValue !== '') {

            $('ul').append("<li class='list-group-item list-group-item-light'><span class='name'>"
                + newValue
                + "</span><span class='delete'>delete</span>");
            $('#addListItem').val('');

    }
    else {
        $('button').css('background-color', 'red');
    }
    $("#addListItem").keypress(function () {
        $('button').css('background-color', '#9361bf');
    });

});
