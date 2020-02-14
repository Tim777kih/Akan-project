function getDay(name){
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var year = document.getElementById("year").value;
    var century = year.slice(0, 2);
    var years = year.slice(2, 4);
    if (month === "" || month < 1 || month > 12 || date === "" || date < 0 || date > 31 || year === "" || year.length > 4 || name === ""){
        alert("Please input correct information!")
    }else{
        var day = Math.floor((((century/4)-2*century-1)+((5*years/4))+((26*(month+1)/10)) + date) % 7);
        return day
    }
}
//arrays
/*let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Akua", "yaa", "Afua", "Ama"]*/
function getGender(){
    var radio = document.getElementsByName("gender");
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }
}
function getName(){
    var name =  document.getElementById("name").value;
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (getGender() === "male"){
        document.getElementById("post").innerHTML = ` ${name}! if you were born in Ghana your Akan name would be ${male[getDay(name)]}`;
    }else if(getGender() === "female"){
        document.getElementById("post").innerHTML = ` ${name}! if you were born in Ghana your Akan name would be ${female[getDay(name)]}`;
    }else{
        alert("Select Gender")
    }
}
