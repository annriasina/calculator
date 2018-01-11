function getDayName(day) {
    var mapping_day = [
        'дней',
        'день',
        'дня'
    ];
    var day_type = 0;
    day = day % 100;
    day = ( day >= 20 )? day % 10 : day;

    if ( day === 0 ||
        day >= 5 && day <= 20 ) {
        day_type = 0;
    } else if ( day == 1 ) {
        day_type = 1;
    } else {
        day_type = 2;
    }
    return mapping_day[day_type];
}
$(document).ready(function () {
    var slider = document.getElementById('rangeslider');
    noUiSlider.create(slider, {
        start: 1,
        animate: false,
        snap: true,
        range: {
            min: 1,
            '6.4%': 2,
            '9.6%': 3,
            '12.8%': 4,
            '16%': 5,
            '19.2%': 6,
            '22.4%': 7,
            '25.6%': 8,
            '28.8%': 9,
            '32%': 10,
            '35.6%': 11,
            '38.8%': 12,
            '42%': 13,
            '45.2%': 14,
            '48.4%': 15,
            '51.6%': 16,
            '54.8%': 17,
            '58%': 18,
            '61.2%': 19,
            '64.4%': 20,
            '67.6': 21,
            '70.8%': 22,
            '74%': 23,
            '77.2%': 24,
            '80.4%': 25,
            '83.6%': 26,
            '86.8%': 27,
            '89%': 28,
            '92.2%': 29,
            '95.4%': 30,
            max: 31
        }
    });
    slider.noUiSlider.on('update', function( values, handle ){
        var day = getDayName(parseInt(values[handle]));
        $('#rangeslider .noUi-handle').text(parseInt(values[handle]) + ' ' + day);
    });

});