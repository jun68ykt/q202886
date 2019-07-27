$(function() {
  // 日本語化
  $.datepicker.setDefaults({
    closeText: "閉じる",
    prevText: "<前",
    nextText: "次>",
    currentText: "今日",
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    weekHeader: "週",
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: "年",
    dateFormat: 'yy/mm/dd（D）',
    numberOfMonths: 1,
  });

  $('#start_date').datepicker({
    minDate: 0,
    onSelect: showDays
  });

  $('#end_date').datepicker({
    minDate: 0,
    onSelect: showDays
  });

  function showDays() {
    var start = $('#start_date').datepicker('getDate');
    var end = $('#end_date').datepicker('getDate');
    if (!start || !end) return;
    var days = (end - start) / 1000 / 60 / 60 / 24;
    days++;
    $('#diff_day').val(days); //開始日～終了日までの日数
  }
});
