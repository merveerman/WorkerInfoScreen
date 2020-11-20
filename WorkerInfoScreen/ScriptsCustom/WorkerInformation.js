var workerList = {
    "worker": [
        { "name": "Gökhan Türkmen", "tckn": "2929292929929286", "phone": "05322121212", "birthPlace": "Kayseri" },
        { "name": "Fatma Turunç", "tckn": "2929292929929212", "phone": "05322634312", "birthPlace": "Tokat" }
    ],
    "workerSub": [
        { "name": "Merve Erman", "tckn": "111111111111111", "phone": "05322121212", "birthPlace": "Amasya" },
        { "name": "Songül Erman", "tckn": "222222222222222", "phone": "05322634312", "birthPlace": "Amasya" }
    ]
};

$(document).ready(function () {
    BuildModalWorkerList(workerList.worker, workerList.workerSub);

    $('[click_popup_Worker_List]').off('click').on('click', function () {
        var aa = "aa";
    });

    $('#WorkerTc').click(function () {
        var workerInfo = workerList.worker.find(s => s.tckn == $(this).attr('thisTcValue'));
        if (workerInfo != undefined && workerInfo != null) {
            BuildModalWorkerPopup(workerInfo);
            $('#modalInfo').modal('show');
        }
    });

    $('.parent').click(function () {
        $(this).find('span').text(function (_, value) { return value == '-' ? '+' : '-' });
        $(this).nextUntil('tr.parent').slideToggle(100, function () {
        });
    });
});

var BuildModalWorkerList = function (data, data2) {
    $('#tbl_doc tbody').empty();
    if (data == null || data.length == 0) {
        $('#tbl_doc tbody').append('<tr><td class="tableheadcolumn" colspan="5" style="text-align: center;">-No Data-</td></tr>');
        return;
    }
    var strall = "";

    for (var i = 0; i < data.length; i++) {
        var satir = data[i];
        strall = strall + '<tr class="parent" id="row"' + i + ' style="text-align:center;border:1;bordercolor:black" title = "Click to expand/collapse" > '
            + ('<td class="tableheadcolumn" style="text-align:center;background-color:white;"><a click_popup_Worker_List data-dismiss="modal" modal_close thisValue="' + satir.tckn + '" thisValueDesc="' + satir.name + '"><span>+</span></a></td>')
            + '<td>' + (satir.name == null ? '' : satir.name) + '</td>'
            + '<td><a id="WorkerTc" data-dismiss="modal" modal_close thisTcValue="' + satir.tckn + '" thisTcValueDesc="' + satir.name + '">' + (satir.tckn == null ? '' : satir.tckn) + '</a></td>'
            + '<td>' + (satir.phone == null ? '' : satir.phone) + '</td>'
            + '<td>' + (satir.birthPlace == null ? '' : satir.birthPlace) + '</td>'
            + '</tr>';

        for (var j = 0; j < data2.length; j++) {
            var satir2 = data2[j];
            strall = strall +
                + '<tr class="child-row" id=child-row"' + j + ' style="display:none;text-align:center;border:1;bordercolor:black">'
                + '<td></td>'
                + '<td>' + (satir2.name == null ? '' : satir2.name) + '</td>'
                + '<td>' + (satir2.tckn == null ? '' : satir2.tckn) + '</td>'
                + '<td>' + (satir2.phone == null ? '' : satir2.phone) + '</td>'
                + '<td>' + (satir2.birthPlace == null ? '' : satir2.birthPlace) + '</td>'
                + '</tr> ';
        }
    }

    $('#tbl_doc tbody').append(strall);

    $('.fht-table-wrapper').css('height', 'auto');
}

var BuildModalWorkerPopup = function (data) {

    $('#lstWorkerInfo').empty();

    var strall = '';

    strall += '<li class="list-group-item">' + "Ad Soyad : " + data.name + '</li>';
    strall += '<li class="list-group-item">' + "TC No : " + data.tckn + '</li>';
    strall += '<li class="list-group-item">' + "Telefon : " + data.phone + '</li>';
    strall += '<li class="list-group-item">' + "Doğum Yeri : " + data.birthPlace + '</li>';

    $('#lstWorkerInfo').append(strall);

}