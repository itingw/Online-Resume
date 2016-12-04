
var bio = {
  "name": "Ting Wang",
  "role": "Web Designer",
  "contact": {
    "mobile": "123-456-789",
    "email": "itingwang35@gmail.com",
    "github": "https://github.com/itingw",
    "twitter": "tweet tweet",
    "location": "Melbourne, FL"
  },
  "welcome": "hi there friend ya ya ya ya ya ya ya hi there friend ya ya ya ya ya ya ya",
  "skills": ["skill 1", "skill 2", "skill 3", "skill 4", "skill 2"],
  "biopic": "images/accessories-02-02.svg"
}

var education = {
	"schools": [
    {
  		"name": "Carnegie Mellon University",
  		"location": "Pittsburgh, PA",
  		"degree": "Master of Science",
  		"major": "Sustainable Design",
      "dates": "2013-2014"
    },
    {
      "name": "Carnegie Mellon University",
      "location": "Pittsburgh, PA",
      "degree": "Bachelor of Architecture",
      "major": "Architecture",
      "dates": "2009-2014"
    },
    {
      "name": "Thomas Jefferson High School for Sci & Tech",
      "location": "Alexandria, VA",
      "degree": "High School Diploma",
      "major": "--",
      "dates": "2005-2009"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "udacity.com"
    },
    {
      "title": "HTML/CSS Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "udacity.com"
    }
  ]
}

var work = {
  "jobs": [
    {
    "employer": "Center for Building Performance and Diagnostics",
    "title": "Research Associate II",
    "dates": "January 2014 - Present",
    "location": "Pittsburgh, PA",
    "description": "fjdk jfdifowa oeoeoow woeoeoeoeoe eieiie wiei  weiow jkfl afd jdlfjdfljafl kjl  j jk jk j j lj lj jo ijo j jo ij oj oij cds"
  },
  {
    "employer": "MacLachlan, Cornelius & Filoni Architects",
    "title": "Intern Architect",
    "dates": "February 2015 - May 2016",
    "location": "Pittsburgh, PA",
    "description": "fjdk jfdifowa oeoeoow woeoeoeoeoe eieiie wiei  weiow jkfl afd jdlfjdfljafl kjl  j jk jk j j lj lj jo ijo j jo ij oj oij cds"
  }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Materials",
      "dates": "2016",
      "description": "blah blah oeoow woeoeoeoeoe eieioeoow woeoeoeoeoe eiei oeoow woeoeoeoeoe eieioeoow woeoeoeoeoe eieioeoow woeoeoeoeoe eiei",
      "images": ["images/material.jpg", "images/render.jpg"]
    },
    {
      "title": "Design Build",
      "dates": "2015",
      "description": "yo blah blaho blah blaho blah blaho blah blaho blah blaho blah blahoeoow woeoeoeoeoe eieioeoow woeoeoeoeoe eieioeoow woeoeoeoeoe eieio blah blah",
      "images": ["images/fullstructure.jpg", "images/furniture.jpg"]
    }
  ]
 }

function displayBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

  $("#header").append(formattedWelcome);
  $("#header").append(formattedImg);

  if (bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);

    for(var i=0; i< bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
}
displayBio();

function displayWork() {
 for (var i = 0; i < work.jobs.length; i++)
  {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDesc);
  }
  }
displayWork();

function displayEducation() {
 for (var i = 0; i < education.schools.length; i++)
  {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
    $(".education-entry:last").append(formattedschoolNameDegree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschoolDates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedschoolLocation);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(formattedschoolMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

 for (var i = 0; i < education.onlineCourses.length; i++)
  {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
    $(".education-entry:last").append(formattedonlineTitleSchool);

    var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedonlinedates);
    var formattedonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedonlineurl);

  }
}
displayEducation();

projects.display = function() {

 for (var i = 0; i < projects.projects.length; i++)
  {
    $("#projects").append(HTMLprojectStart);

    var formattedprojTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    $(".project-entry:last").append(formattedprojTitle);

    var formattedprojDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedprojDates);

    var formattedprojDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedprojDesc);

    if (projects.projects[i].images.length > 0 ) {
      for (image in projects.projects[i].images) {
        var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedprojImage);
      }
    }
  }
}
projects.display();

$("#mapDiv").append(googleMap);
