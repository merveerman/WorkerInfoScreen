function ShowLoading() {
    $.mobile.loading('show', {
        text: 'Lütfen Bekleyiniz',
        textVisible: true,
        theme: 'b',
        textonly: false,
        html: ''
    });
}

function HideLoading() {
    $.mobile.loading('hide');
}


$(document).ajaxStart(function () {

    ShowLoading($('[data-role="content"]'));
});


$(document).ajaxComplete(function () {

    HideLoading($('[data-role="content"]'));

});

