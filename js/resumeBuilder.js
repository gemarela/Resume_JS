  /*
  Mouse Clicks Tracker
*/
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
/* END */


/*
JSON's used to build the resume
*/

//Biography Object
var bio = {
	"name" : "George Marelas",
	"role" : "Software Developer",
	"welcomeMessage" : "Curricullum Vitae (Updated 24/6/15)",
	"contacts" : [
		{
			"mobile" : "(30)6977-049-822",
			"email" : "george.marelas@gmail.com",
			"github" : "gemarela",
			"location" : "Achillopoulou 190, Vólos, Greece"
		}
	],
	"skills" : ["Self Motivated","Organised","Problem Solving","Decision Making","Team Player"],
	"biopic" : "images/me1.jpg"
};

//Education Object
var education = {
	"schools" : [
		{
			"name" : "University of Thessaly",
			"degree" : "MSc",
			"dates" : "2015",
			"location" : "Vólos, Greece",
			"major" : "Computer Science"
		},
				{
			"name" : "University of Thessaly",
			"degree" : "Bachelor",
			"dates" : "2004",
			"location" : "Vólos, Greece",
			"major" : "Computer Engineer"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"date" : "June 2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "How to use Git and Github",
			"school" : "Udacity",
			"date" : "June 2015",
			"url" : "www.udacity.com"
		}
	]
};

//Work Object
var work = {
	"jobs" : [
		{
			"employer" : "Vodafone",
			"title" : "Sales/Customer Services",
			"location" : "Vólos, Greece",
			"dates" : "1/4/2014",
			"description" : "Retail and Business Contracts"
		},
		{
			"employer" : "Circus Design Studio",
			"title" : "Internship",
			"location" : "Vólos, Greece",
			"dates" : "1/7/14 - 31/7/14",
			"description" : "Web Development using MySQL, PHP"
		}
	]
};

//Projects Object
var projects = {
	"projects" : [
		{
			"title" : "Diploma-Thesis : Implementation of an Android Application for electronic equipment administration with NFC and RFID technologies",
			"dates" : "October 2014 - February 2015",
			"description" : "Design and implementation of a software application for auditing and handling the electronic equipment of a university’s laboratory. RFID and/or NFC technologies are exploited to audit the equipment. The application provides a web based front-end for registering the equipment and reporting its usage Mobile clients for android and an UHF RFID handheld computer were also developed to enable RFID and NFC technologies."
 		},
 				{
			"title" : "Circuit Simulation Program",
			"dates" : "October 2014 - January 2015",
			"description" : "Software Development for DC Circuit analysis and Transient analysis of Integrated Circuits. Implementation of Direct and Iterative Methods for the solution of a system of Linear and Nonlinear Differential Algebraic Equations. Tested on large scale Power Grid benchmarks by IBM which consists of millions of nodes and elements. (C language)"
 		},
 		{
			"title" : "Parallel Algorithms",
			"dates" : "November 2014 - January 2015",
			"description" : "Implementation of parallel algorithms such as FFT and Sparse Matrix-Vector Multiplication. Algorithms were developed in OpenMP and MPI environment.(C language)"
			
 		},
 		{
			"title" : "Random Story Generator",
			"dates" : "October 2013 - January 2014",
			"description" : "Implementation of a program in C language, which given a context free grammar creates a random story.Each sentence was checked for correct syntax and every new story was stored in a differently named file"
 		},
 		{
			"title" : "Hangman Game",
			"dates" : "October 2012 - January 2014",
			"description" : "Implementation of a game in C language, between PC and a player. In this game, PC cheating the player"
 		}
	]

}


/*
	Display Functions for Resume Objects
*/

//Bio Display
bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
	$("#header").prepend(formattedName);

	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedPic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio["welcomeMessage"]);
	$("#header").append(formattedWelcome);
 
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[0].mobile);	
	$("#topContacts").append(formattedMobile);

	formattedEmail = HTMLemail.replace("%data%",bio.contacts[0].email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[0].github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[0].location);
	$("#topContacts").append(formattedLocation);



	if (bio.skills.length > 0){	

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
		$("#skills").append(formattedSkill);

	}


//Add contacts(End of Page)

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[0].mobile);	
	$("#letsConnect").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts[0].email);
	$("#letsConnect").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts[0].github);
	$("#letsConnect").append(formattedGithub);

}



//Work Display

work.display = function(){

	for( job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		//$("#workExperience").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		//$("#workExperience").append(formattedEmployer);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}



//Education Display

education.display = function(){

	$("#education").append(HTMLschoolStart);

	for(school in education.schools){

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for(course in education.onlineCourses){

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDate);

		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	
	}
}



//Projects Display
projects.display = function() {

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
	
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		/*if (projects.projects[project].images.length > 0){

			for(image in projects,projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}*/
	}
}



/*
	Function Calls
*/

bio.display();
work.display();
education.display();
projects.display();



/*
	INTERNATIONALIZED BUTTON 
*/

function inName() {

	var name = window.name; //runs when we click on button.
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

var name = $("#name").text(); //runs before the declaration of var name into function
$("#main").append(internationalizeButton);



/*
	Google Maps
*/

$("#mapDiv").append(googleMap);





