// student marks

function gradeAttained(grade){
    if (grade >=0 && grade <=100){
      if (grade>79){
        return "A";
    }else if (grade>= 60 && grade <= 79){
    return "B"
    }else if (grade >= 49 && grade <= 59){
        return "C"
    }else if(grade >= 40 && grade <= 49){
        return "D"
    }else{
        return "E"
    }}else{
      return  "Invalid number"
    }}
    console.log (gradeAttained (-1))