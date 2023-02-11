/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  })

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  })
}

function addData() {
  //Write your code here, just console.log

let user4=[];
user4.unshift({id:4,name:"aman",age:"20",marks:85});
console.log(user4);
}
function removeFailedStudent() {
  //Write your code here, just console.log
   let index=0;
   let marks=[];
  if(marks<50){
    arr[index].pop();
     console.log(arr);
      index++;
  }
}

function concatenateArray() {
  //Write your code here
  let aman = [
    { id: 5, name: "rohan", age: "18",marks:51  },
    { id: 6, name: "mohan", age: "24",marks:71 },
    { id: 7, name: "kishan", age: "22",marks:41 },
  ];
  let ayushsir=arr.concat(aman);
  console.log(ayushsir);
}