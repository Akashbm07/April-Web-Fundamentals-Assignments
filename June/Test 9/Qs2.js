let
friends = [{ fname: 'Rachal', lname: "Green", id: 1, marks: 98 },
{fname: 'Ross', lname: "Geller", id: 2, marks:23},
{ fname: 'Monica ', lname: "Geller", id: 3, marks: 75 },
{fname: 'Joey', lname: " Tribbiani", id: 4, marks: 46},
{ fname: 'Chandler ', lname: "Bing", id: 5, marks: 78 },
{fname: 'Phoebe', lname: "Buffay", id: 6, marks:45}]

function fullName(){

console.log("Full Name is",friends[0].fname, friends[0].lname);
console.log("Full Name is",friends[1].fname, friends[1].lname);
console.log("Full Name is",friends[2].fname, friends[2].lname);
console.log("Full Name is",friends[3].fname, friends[3].lname);
console.log("Full Name is",friends[4].fname, friends[4].lname);
console.log("Full Name is",friends[5].fname, friends[5].lname);

}

fullName(friends);
