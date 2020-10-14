var ctx = document.getElementById("myChart");
var data = {
    labels: ["Android Development", "R", "Data Science", "Javascript", "Penetration Testing", "Java", "Python", "Explaination"],
    datasets: [
        {
            label: "Percieved Interest",
            fillColor: "rgba(43,176,212,.4)",
            strokeColor: "rgba(43,176,212,1)",
            pointColor: "rgba(43,176,212,1)",
            pointHighlightStroke: "rgba(43,176,212,1)",
            data: [70, 80, 100, 70, 95, 90, 80, 90]
        },
        {
            label: "Relative Skill",
            fillColor: "rgba(140,200,50,.4)",
            strokeColor: "rgba(140,200,50,1)",
            pointColor: "rgba(140,200,50,1)",
            pointHighlightStroke: "rgba(140,200,50,1)",
            data: [65, 70, 75, 60, 85, 80, 75, 80]
        }
    ]
};
new Chart(ctx, {'type':'radar','data': data, 'options': {
	animationSteps: 30,
	animationEasing: "easeInOutExpo",
	responsive: true,
	showTooltips: true,
	scaleOverride: true,
    scaleSteps: 5,
    scaleStepWidth: 20,
    scaleStartValue: 0,
    scaleLineColor: "rgba(200,200,200,.15)",
	
    angleShowLineOut: true,
    angleLineWidth : 1,
    angleLineColor : "rgba(200,200,250,.15)",
    pointLabelFontFamily : "'freight-sans-pro', Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif",
    pointLabelFontSize : 24,
	pointLabelFontColor : "#99b",
	pointDot : false,
	datasetStrokeWidth : 1
}});