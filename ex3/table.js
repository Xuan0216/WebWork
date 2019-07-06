/**
 * 
 * @authors Xuan (you@example.org)
 * @date    2018-03-30 08:04:48
 * @version $Id$
 */
function setbgColor() {
  var tbl = document.getElementById('tbl');
  tbl.style.backgroundColor = 'red';
}

//  Show date as yyyy-mm-dd
function showDate() {
  var newDate = new Date();
  var y = newDate.getFullYear();
  var m = newDate.getMonth() + 1;
  var d = newDate.getDate();

  m = checkTime(m);
  d = checkTime(d);

  var date = '(' + y + '-' + m + '-' + d + ')';
  var show = document.querySelectorAll('td')[1];
  show.innerHTML = date;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//  Insert a row
function addRow() {
  var newTr = tbl.insertRow(3);
  var cell1 = newTr.insertCell(0);
  var cell2 = newTr.insertCell(1);
}

//  Delete the second line of the table
function delRow() {
  var rows = document.querySelectorAll('tr');
  rows[1].parentNode.removeChild(rows[1]);
}

//  Displays the current mouse coordinates
function showCoords(event) {
  var tbl = document.getElementById('tbl');
  var coord = ('(' + event.clientX + ',' + event.clientY + ')');
  alert('The current mouse coordinates is ' + coord + '.');
  var p = document.getElementById('Coord');
  p.innerHTML = coord;
}

//  Open new page
function openPage() {
  window.open('http://www.taobao.com');
}