function sing(){
    for(i=99;i>=0;i--){
        if(i>1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.<br>";
        }
        else if(i==1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottle of beer on the wall, "+i+" bottle of beer.<br>Take one down and pass it around, no more bottles of beer on the wall.<br>";
        }
        else{
            document.getElementById("main").innerHTML+="<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }
    hide();
}

function hide(){
    document.getElementById("button").style.visibility="hidden";
}

const grades = document.getElementById("grades");
grades.addEventListener("click", gradeCourse);
function gradeCourse(){
  let courseNum = parseInt(prompt("Please enter the number of courses"));
  let total = 0, avg = 0, results = [courseNum], output = document.getElementById("output");

  output.innerHTML = "";
  for(i = 0; i < courseNum; i++){
    results[i] = parseInt(prompt("Enter your result for course " + (i + 1) + "."));
  }
  for(i = 0; i < courseNum; i++){
    output.innerHTML += "Result " + (i + 1) + " is: " + results[i] + "<br>";
    console.log("Result " + (i + 1) + " is: " + results[i]);
    total = total + results[i];
    if(results[i] >= 90){
      output.innerHTML += "Your grade for this course is A." + "<br><br>";
    } else if(results[i] >= 80){
      output.innerHTML += "Your grade for this course is B." + "<br><br>";
    } else if(results[i] >= 60){
      output.innerHTML += "Your grade for this course is C." + "<br><br>";
    } else if(results[i] >= 40){
    output.innerHTML += "Your grade for this course is D." + "<br><br>";
    } else if(results[i] >= 20){
      output.innerHTML += "Your grade for this course is E." + "<br><br>";
    } else if(results[i] >0){
      output.innerHTML += "Your grade for this course is F." + "<br><br>";
    } else{
      output.innerHTML += "ERROR, cannot process grade" + "<br><br>";
    }
  }
  avg = total / courseNum;
  avg = Math.round(avg);
  output.innerHTML += "Your average result is: " + avg;
}
