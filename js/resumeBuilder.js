var bio = {
    "name": "Ting Wang",
    "role": "Web Designer",
    "contacts": {
        "email": "itingwang35@gmail.com",
        "github": "https://github.com/itingw",
        "linkedin": "https://www.linkedin.com/in/i-ting-wang-1851a457",
        "etsy": "etsy.com/shop/chickpeayarns",
        "location": "Melbourne, FL"
    },
    "welcomeMessage": "Welcome",
    "skills": {
      "development" : "HTML/CSS, Javascript, JQuery, C",
      "data" : "SQL, ArcGIS, Excel",
      "graphics" : "Adobe Illustrator, InDesign, Photoshop, Hand Rendering",
      "modeling" : "Autodesk AutoCAD, Revit, Rhinoceros, Energy Plus",
      "language" : "English, Mandarin, Spanish"
    },
    "biopic": "images/biopic.png"
};

var education = {
    "schools": [{
        "name": "Carnegie Mellon University",
        "location": "Pittsburgh, PA",
        "degree": "Master of Science",
        "majors": ["Sustainable Design"],
        "dates": "2013-2014",
        "url": "https://soa.cmu.edu/bpd-sd"
    }, {
        "name": "Carnegie Mellon University",
        "location": "Pittsburgh, PA",
        "degree": "Bachelor of Architecture",
        "majors": ["Architecture"],
        "dates": "2009-2014",
        "url": "https://soa.cmu.edu/undergraduate"
    }, {
        "name": "Thomas Jefferson High School for Sci & Tech",
        "location": "Alexandria, VA",
        "degree": "High School Diploma",
        "majors": [],
        "dates": "2005-2009",
        "url": "http://tjhsst.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "CS50",
        "school": "EDX",
        "dates": "2017",
        "url": "http://cs50.edx.org"
    }]
};

var work = {
    "jobs": [{
        "employer": "Center for Building Performance and Diagnostics",
        "url": "http://www.cmu.edu/cbpdanalytics/index.html",
        "title": "Research Associate II",
        "dates": "January 2014 - Present",
        "location": "Pittsburgh, PA",
        "description": "- Create marketing deliverables, design user interface and conduct competitive analysis for BuildFIT, a potential business venture that aims to support data-driven investments and operations in buildings for stakeholders. <br> - Design a user interface for a DoD funded project integrating building automation, energy information systems and work orders for facility managers."
    }, {
        "employer": "MacLachlan, Cornelius & Filoni Architects",
        "url": "https://www.mcfarchitects.com",
        "title": "Intern Architect",
        "dates": "February 2015 - May 2016",
        "location": "Pittsburgh, PA",
        "description": "- Prepared renderings and plans for client presentations and fund-raising <br> - Generated and coordinated design development and contract documents using BIM with consultants <br> - Organized, documented and responded to submittals, attended site meetings <br> - Modeled parametric lighting families in Revit for <a href ='http://www.neidhardtinc.com' id='inline'> Neidhardt Lighting <a> "
    }]
};

var projects = {
    "projects": [{
        "title": "Supporting Building Portfolio Investment and Policy Decision Making through an Integrated Building Utility Data Platform",
        "dates": "2016",
        "description": "The Green Button initiative of 2012 provided utility customers with access to a large volume of real-time energy usage. The sheer volume of time-series utility data from a large number of buildings also poses challenges in data collection, quality control, and database management for rigorous and meaningful analyses. The project deliverable is a building portfolio-level data analytics tool for operational optimization, business investment and policy assessment using 15-minute to monthly intervals utility data. The analytics tool is developed on top of the U.S. Department of Energy’s Standard Energy Efficiency Data (SEED) platform, an open source software application that manages energy performance data of large groups of buildings. These apps will provide actionable intelligence for building owners and facilities managers.",
        "images": ["images/seedapp_EUI.jpg", "images/seedapp_lean.jpg"],
        "url": "https://www.osti.gov/scitech/biblio/1247127"
    }, {
        "title": "Engaging Stakeholders in Building Energy and Water Reduction",
        "dates": "2014",
        "description": "Large organizations, governments and companies own or lease many buildings, each with many years of bills for electricity, gas and water usage. The deliverable of the project is to transform the endless and unintelligible sheets of data into actionable information for decision makers. Through user testing and feedback, a compelling report with essential information to engage policy makers and facility managers was developed. Energy use data from different building stacks including 399 Washington government buildings from the Build Smart DC website, 290,676 U.S. Department of Defense buildings, and 3,626 PNC Bank building properties were analyzed. This synthesis focuses on the engagement of stakeholders on the executive and facility managers level with the presentation of annual and monthly utility data of a portfolio of buildings.",
        "images": ["images/pnc_exec.jpg", "images/pnc_eui.jpg"],
        "url": "https://issuu.com/itingw/docs/hsu_wang_report_final"
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedEtsy = HTMLetsy.replace("%data%", bio.contacts.etsy);
    var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedSkillDevelopment= HTMLskillDevelopment.replace("%data%", bio.skills.development);
    var formattedSkillData= HTMLskillData.replace("%data%", bio.skills.data);
    var formattedSkillGraphics= HTMLskillGraphics.replace("%data%", bio.skills.graphics);
    var formattedSkillModeling= HTMLskillModeling.replace("%data%", bio.skills.modeling);
    var formattedSkillLanguage= HTMLskillLanguage.replace("%data%", bio.skills.language);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedImg);

    $("#topContacts").append(formattedEmail, formattedLocation, formattedGithub, formattedLinkedin, formattedEtsy);
    $("#footerContacts").append(formattedEmail,  formattedLocation, formattedGithub, formattedLinkedin, formattedEtsy);

    $("#header").append(HTMLskillsStart);
    $("#skills").append(formattedSkillDevelopment, formattedSkillData,formattedSkillGraphics, formattedSkillModeling, formattedSkillLanguage);

};

bio.display();

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("%url%", work.jobs[i].url);
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
};
work.display();

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("%url%", education.schools[i].url);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedschoolNameDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);

        if (education.schools[i].majors.length > 0) {
            for (var a = 0; a < education.schools[i].majors.length; a++) {
                var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[a]);
                $(".education-entry:last").append(formattedschoolMajors);
            }
        }

    }

    $("#education").append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("%url%", education.onlineCourses[i].url);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonlineTitleSchool);

        var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedonlinedates);
    }
};
education.display();

projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("%url%", projects.projects[i].url);
        $(".project-entry:last").append(formattedprojTitle);

        var formattedprojDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedprojDates);

        var formattedprojDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedprojDesc);

        if (projects.projects[i].images.length > 0) {
            for (var image= 0; image < projects.projects.length; image++) {
                var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedprojImage);
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
