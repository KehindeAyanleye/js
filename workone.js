//define a variable mySteve with an array
var mySteve = ['bean', 'pean', 'lit'];
//add a value to the existing array of mySteve
mySteve[mySteve.length]='till';
//check the length of the array
mySteve.length;
//delete the last array from an array list of four values
delete mySteve[3];
//however, delete creates a hole. To confirm, check the length again
mySteve.length;
// still equals to 4 ['bean', 'pean', 'lit', undefined x 1]. Let's use a splice tool
myArray.splice(3,1);
//lets confirm with below
mySteve.length;
