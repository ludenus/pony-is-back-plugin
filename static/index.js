"use strict";

var intervalPony = setInterval(
    loadPony, 2000
);

function loadPony() {

    var widget = getSummaryOrStatusWidget();
    var caption = document.getElementsByClassName("chart__caption");

    if (null == widget || 0 == caption.length || "100%" != caption[0].textContent) {
        return;
    }

    var chart = document.getElementsByClassName("chart__svg")[0];
    var x = chart.width.baseVal.value;
    var y = chart.height.baseVal.value;

    var pony = document.createElement("img");
    pony.setAttribute("class", "pony");
    pony.setAttribute("src", "plugins/pony-is-back/pony.png");
    pony.setAttribute("alt", "Pinkie Pie Pony");

    var p = document.createElement("p");
    p.setAttribute("class", "center");

    var text = document.createTextNode("No defects in test run. Good job!");
    p.appendChild(text);

    var widgetDiv = widget.getElementsByTagName("div")[0];
    widgetDiv.parentNode.replaceChild(pony, widgetDiv);
    widget.appendChild(p);

}

function getSummaryOrStatusWidget(){

    var summary = document.getElementsByClassName("summary-widget__chart");
    if (0 != summary.length){
        return summary[0];
    }

    var status = document.getElementsByClassName("status-widget__content");
    if (0 != status.length){
        return status[0];
    }

    return null;
}
