// Flot Charts sample data for Treasurer Rises template


// Flot Pie Chart with Tooltips
$(function() {

    var data = [{
        label: "Credit",
        data: 236000
    }, {
        label: "Loan",
        data: 20000
    }, {
        label: "Deposit",
        data: 86007
    }, {
        label: "Current",
        data: 225905
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});
