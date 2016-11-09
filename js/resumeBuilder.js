var bio = {
    "name": "Paul Mills",
    "role": "Marketing Web Developer",
    "contacts": {
        "mobile": "xxx-xxx-xxxx",
        "email": "pdfmills@gmail.com",
        "github": "https://github.com/pmillssf/",
        "twitter": "@",
        "location": "San Francisco, CA, 94123"
    },
    "biopic": "images/mypic.jpg",
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["Content Marketing", " Email Marketing", " HTML", " CSS", " Copywritting"],
    "display": function() {

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
        }
        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

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

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);

    }
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio",
        "dates": "September",
        "description": "Portfolio project",
        "images": ["images/fry.jpg", "images/fry.jpg"]
    }],
    "display": function() {
        if (projects.projects.length > 0) {
            $('#projects').append(HTMLprojectStart);
            projects.projects.forEach(function(project) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
                $(".project-entry:last").append(formattedTitle);

                var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
                $(".project-entry:last").append(formattedDates);

                var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
                $(".project-entry:last").append(formattedDescription);

                for (i = 0; i < project.images.length; i++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            });
        }
    }
};

var work = {
    "jobs": [{
        "employer": "IXL Learning",
        "title": "Marketing Associate",
        "location": "San Mateo, CA",
        "dates": "July 2014 - June 2016",
        "description": "Handled print collateral, E-mail marketing, Other tasks as required"
    }],
    "display": function() {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            work.jobs.forEach(function(job) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
                var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerAndTitle);

                var formattedDates = HTMLworkDates.replace("%data%", job.dates);
                $(".work-entry:last").append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
                $(".work-entry:last").append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
                $(".work-entry:last").append(formattedDescription);
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "Colgate University",
        "location": "Colgate University, Hamilton, NY, US",
        "degree": "Bachelor of Arts",
        "majors": ["Asian Studies", " Minor: Economics"],
        "dates": "2008-2012",
        "url": "http://www.colgate.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to HTML",
        "school": "Udacity",
        "dates": "June 2016",
        "url": "www.udacity.com",
    }],
    "display": function() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            education.schools.forEach(function(school) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedSchoolNameAndDegree = formattedSchoolName + formattedDegree;
                $(".education-entry:last").append(formattedSchoolNameAndDegree);

                var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
                $(".education-entry:last").append(formattedLocation);

                var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
                $(".education-entry:last").append(formattedDates);

                var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
                $(".education-entry:last").append(formattedMajor);
            });
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            education.onlineCourses.forEach(function(onlineCourse) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
                var formattedSchoolName = HTMLonlineSchool.replace("%data%", onlineCourse.school);
                var formattedTitleAndSchoolName = formattedTitle + formattedSchoolName;
                $(".education-entry:last").append(formattedTitleAndSchoolName);

                var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
                $(".education-entry:last").append(formattedDates);

                var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
                $(".education-entry:last").append(formattedUrl);
            });
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
