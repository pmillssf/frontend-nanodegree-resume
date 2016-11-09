var bio = {
  "name" : "Paul Mills",
  "role" : "Marketing Web Developer",
  "contacts" : {
    "mobile" : "xxx-xxx-xxxx",
    "email" : "pdfmills@gmail.com",
    "github" : "https://github.com/pmillssf/",
    "twitter" : "@",
    "location" : "San Francisco, CA, 94123"
  },
  "bioPic" : "images/mypic.jpg",
  "welcomeMessage" : "Welcome to my resume!",
  "skills" : ["Content Marketing", " Email Marketing", " HTML", " CSS", " Copywritting"],
  "display": function() {

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if ( bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
    };
    for (i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    };


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);


    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

  }
};

var projects = {
  "projects" : [{
    "title" : "Build a Portfolio",
    "dates" : "September",
    "description" : "Portfolio project",
    "images" : ["images/fry.jpg", "images/fry.jpg"]
  }],
  "display" : function() {
    if (projects.projects.length > 0) {
      projects.projects.forEach(function(project) {
          $('#projects').append(HTMLprojectStart);
          var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
          $(".project-entry:last").append(formattedTitle);

          var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
          $(".project-entry:last").append(formattedDates);

          var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
          $(".project-entry:last").append(formattedDescription);

          for (i = 0; i < project.images.length; i++ ) {
            var formattedImage= HTMLprojectImage.replace("%data%", project.images[i]);
            $(".project-entry:last").append(formattedImage);
          };
      })
    }
  }
};

var work = {
  "jobs": [
    {
      "employer" : "IXL Learning",
      "title" : "Marketing Associate",
      "location" : "San Mateo, CA",
      "dates" : "July 2014 - June 2016",
      "description" : "Handled print collateral, E-mail marketing, Other tasks as required"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Colgate University",
      "location": "Colgate University, Hamilton, NY, US",
      "degree": "Bachelor of Arts",
      "major": ["Asian Studies", "Minor: Economics"],
      "graduated": "2008-2012",
      "url": "http://www.colgate.edu/"
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

function displayWork () {
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
  }
};

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  var originalName = name.split(' ');
  var firstname = originalName[0].charAt(0).toUpperCase() + oringalName[0].split(0,1);
  var lastname = originalName[1].toUpperCase();
  return firstname + lastname;
}

$('#main').append(internationalizeButton);
bio.display();
projects.display();

$("#mapDiv").append(googleMap);
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
