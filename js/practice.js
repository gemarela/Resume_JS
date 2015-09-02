$("#main").append("Marelas George");

var name = "Marelas George"; //console.log(name);
var email = "george.marelas@hotmail.com";
var newEmail = email.replace("hotmail","gmail");


console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is George and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);


var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedRole);
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var skills = ["C", "JAVA ", "Javascript ", "MPI"];
$("#main").append(skills);
$("#main").append(skills.length);

var bio = {
	"name" : "George Marelas",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "6977049822",
		"email" : "george.marelas@gmail.com",
		"github" : "gemarela"
		"location" : "Volos,Greece"
	},
	"welcomeMessage" : "This is my CV"
	"skills" : [
		"C", "JAVA ", "Javascript ", "MPI"
		],
	"bioPic" : "marelas/Desktop/me.jpg"
 
}

var work = {};
work.position = "Customer Services";
work.employer = "Vodafone";
work.years = 1.3;

var education = {};
education["title"] = "MSc in Computer Science";
education["name"] = "University of Thessaly";
education["year"] = "February 2015";
education["city"] = "Volos, Greece";

$("#main").append(work["position"]);
$("#main").append(education.name);

 







