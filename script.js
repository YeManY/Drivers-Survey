var n;
var a;
var b;
var e;
var frm = document.getElementById("frm");
var driver = {
    name: "",
    age: 0,
    birthday: "",
    eye_color:"" ,
    age_check: function(){
    
    if(this.age<16){
        alert("I'm afriad you're too young to drive.");
    }else if(this.age===16){
    alert("You can get a permit");
    }else{
    alert("Yup, you can drive.");
    }
    },
    print: function(){
      document.getElementById("target").innerHTML = this.name + "<br>" + this.age + "<br>" + this.birthday +"<br>" + this.eye_color;
    }
};

function plug(){
n = document.querySelector("#name").value;
a = document.querySelector("#age").value;
b = document.querySelector("#bday").value;
e = frm.color.value;
driver.age=parseInt(a);
console.log(driver.age);
driver.age_check();
driver.name=n;
driver.birthday=b;
driver.eye_color=e;
console.log(driver);
driver.print();
}
document.getElementById("numberForm");


