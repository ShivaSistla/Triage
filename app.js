const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

if (command=='add')
{
  patientList.push(prompt('Please enter the name'));
}
if (command=='update')
{
  var n =patientList.indexOf(prompt('Please enter the name to be changed'));
  patientList.splice(n,1,prompt('please enter the new name'));
}
if (command=='delete')
{
  var n =patientList.indexOf(prompt('Please enter the name to be deleted'));
  patientList.splice(n,1);
}
if (command=='reorder')
{
  var m =patientList.indexOf(prompt('Please enter the first name to be reordered'));
  var n =patientList.indexOf(prompt('Please enter the second name to be reordered'));
  var temp = patientList[m];
  patientList[m]=patientList[n];
  patientList[n]=temp;
}
alert(patientList);
