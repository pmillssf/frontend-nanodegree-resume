var bio = {
  "name" : "Paul Mills",
  "role" : "Marketing Web Developer",
  "contact" : "pdfmills@gmail.com",
  "bioPic" : "images/mypic.jpg",
  "welcomeMsg" : "Welcome to my resume!",
  "skills" : ["Content Marketing", " Email Marketing", " HTML", " CSS", " Copywritting"],
};

var projects = {
  "projects" : [
    {
      "title" : "Build a Portfolio",
      "dates" : "September",
      "description" : "Portfolio project",
      "image" : "images/fry.jpg"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer" : "IXL Learning",
      "title" : "Marketing Associate",
      "dates" : "July 2014 - June 2016",
      "location" : "San Mateo, CA",
      "description" : "Handled print collateral, E-mail marketing, Other tasks as required"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Colgate University",
      "degree": "Bachelor of Arts",
      "city": "Hamilton, NY, US",
      "major": "Asian Studies, Minor: Economics",
      "graduated": "2008-2012"
    }
  ],
  "onlineCourses": [
    {
    "title" : "Intro to HTML",
    "school" : "Udacity",
    "dates" : "June 2016",
    "url" : "www.udacity.com",
    }
  ]
};

if ( bio.name.length > 1) {
  debugger;
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
}


if ( bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
};

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedEmployerAndTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerAndTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDescription);
};
/*
var bio = {
  "name" : HTMLheaderName.replace("%data%", "Paul Mills"),
  "role" : HTMLheaderRole.replace("%data%", "Marketing Web Developer"),
  "contact" : HTMLemail.replace("%data%", "pdfmills@gmail.com"),
  "bioPic" : HTMLbioPic.replace("%data%", "images/mypic.jpg"),
  "welcome_msg" : HTMLwelcomeMsg.replace("%data%", "Welcome to my resume!"),
  "skills" : ["Content Marketing", " Email Marketing", " HTML", " CSS", " Copywritting"],
//  "skills" : HTMLskills.replace("%data%", ["Content Marketing", " Email Marketing", " HTML", " CSS", " Copywritting"])

};

var projects = {
  "title" : HTMLprojectTitle.replace("%data%", "Build a Portfolio"),
  "dates" : HTMLprojectDates.replace("%data%", "September"),
  "description" : HTMLprojectDescription.replace("%data%", "Portfolio project"),
  "image" : HTMLprojectImage.replace("%data%", "images/fry.jpg")
};

var work = {
  "employer" : HTMLworkEmployer.replace("%data%", "IXL Learning"),
  "title" : HTMLworkTitle.replace("%data%", "Marketing Associate"),
  "dates" : HTMLworkDates.replace("%data%", "July 2014-June 2016"),
  "location" : HTMLworkLocation.replace("%data%", "San Mateo, CA"),
  "description" : HTMLworkDescription.replace("%data%", "Handled print collateral, E-mail marketing, odd jobs")
};

var education = {
  "schools":
    {
      "name": HTMLschoolName.replace("%data%", "Colgate University"),
      "degree": HTMLschoolDegree.replace("%data%", "Bachelor of Arts"),
      "city": HTMLschoolLocation.replace("%data%", "Hamilton, NY, US"),
      "major": HTMLschoolMajor.replace("%data%","Asian Studies, Minor: Economics"),
      "graduated": HTMLschoolDates.replace("%data%", "2008-2012")
    },
  "online": {
    "title" : HTMLonlineTitle.replace("%data%","Intro to HTML"),
    "school" : HTMLonlineSchool.replace("%data%","Udacity"),
    "dates" : HTMLonlineSchool.replace("%data%","June 2016"),
    "url" : HTMLonlineURL.replace("%data%", "www.udacity.com"),
  }
};


$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contact);
$("#header").append(bio.bioPic);
$("#header").append(bio.welcome_msg);


$("#projects").append(HTMLprojectStart);
$("#projects").append(projects.title);
$("#projects").append(projects.dates);
$("#projects").append(projects.description);
$("#projects").append(projects.image);


$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(work.employer);
$("#workExperience").append(work.title);
$("#workExperience").append(work.dates);
$("#workExperience").append(work.location);
$("#workExperience").append(work.description);

$("#education").append(HTMLschoolStart);
$("#education").append(education["schools"]["name"]);
$("#education").append(education["schools"]["degree"]);
$("#education").append(education["schools"]["city"]);
$("#education").append(education["schools"]["major"]);
$("#education").append(education["schools"]["graduated"]);
$("#education").append(HTMLonlineClasses);
$("#education").append(education["online"]["title"]);
$("#education").append(education["online"]["school"]);
$("#education").append(education["online"]["dates"]);
$("#education").append(education["online"]["url"]);
*/
