//Variables/////////////////////////////////////////////////////////////////////////////////////////////////////
var stringToBePutIntoExcel = "test";
//Logic/////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function logic(){
	giveUserExcel(stringToBePutIntoExcel);
}
//Functions/////////////////////////////////////////////////////////////////////////////////////////////////////
function addScripts(files){
	var i;
	for (i = 0; i < files.length; i++) { 
		addScript(files[i]);
	}
}
function addScript(src){
  var s = document.createElement('script');
  s.async = true;
  s.setAttribute('src', src);
  document.body.appendChild(s);
}
//inspired by https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
function giveUserExcel(str){
	let csvContent = "data:text/csv;charset=utf-8,";
	csvContent = str;
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "ebs_Test.csv");
	document.body.appendChild(link); // Required for FF
	link.click(); // This will download the data file named "ebs_Test.csv".
}
