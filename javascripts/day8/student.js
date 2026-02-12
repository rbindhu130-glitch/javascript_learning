const student = {
    name: "Yalini",
    age: 20,
    mark: [90,80,70,67]
};

function get_avg(mark){ 
    let sum = 0;
    for(let i=0; i<mark.length; i++){
        sum += mark[i];
    }
    console.log("Average: " + sum / mark.length);
}


function display_details(student){
    console.log(student.name);
    console.log(student.age);
    console.log(student.mark);
}
get_avg(student.mark);
display_details(student);

