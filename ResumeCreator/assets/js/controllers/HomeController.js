arjocamahamageApp.controller("HomeController", function ($rootScope, $scope, $interval, $state) {
    $scope.type = "Public";
    $scope.filteredResume = "";
    $scope.isPrint = false;
    $scope.idForPrint = null;
    $scope.showLoader = true;
    $scope.currentPage = 1;
    $scope.htmlContents = [];
    $scope.process = "";
    $scope.showButtons = false;
    $scope.showButtonContainer = false;
    $scope.resumePages = [];
    $scope.isByPage = false;
    $scope.allResumeContents = [];
    $scope.toolTipText = [];
    $scope.showPageIndicator = false;
    $scope.resumeShown = false;
    $scope.initializeResumeList = function () {
        $scope.userResumeList = [
        {
            Id: 1,
            Name: "Kenneth Carl Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Kenneth Carl Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                    {
                        School: "Cebu Institute of Technology – University",
                        Degree: "Masters In Information Technology(June 2015-March 2016)",
                        Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                    },
                    {
                        School: "Cebu Institute of Technology – University",
                        Degree: "Masters In Information Technology(June 2015-March 2016)",
                        Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                    },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 2,
            Name: "Kenneth John Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Kenneth John Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 3,
            Name: "Maiko Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Maiko Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 4,
            Name: "Maila Marie Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Maila Marie Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 5,
            Name: "Hanna Marie Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Hanna Marie Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 6,
            Name: "Angelie Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Angelie Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 7,
            Name: "Edgardo Nacua Ybañez Jr.",
            Template: 1,
            Information: {
                Name: "Edgardo Nacua Ybañez Jr.",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 8,
            Name: "Lilibeth Nacua Ybañez",
            Template: 1,
            Information: {
                Name: "Lilibeth Nacua Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 9,
            Name: "Edgardo Amistad Ybañez",
            Template: 1,
            Information: {
                Name: "Edgardo Amistad Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 10,
            Name: "Mike Andrew Brigoli Ababa",
            Template: 1,
            Information: {
                Name: "Mike Andrew Brigoli Ababa",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 11,
            Name: "John Crismund Royos Elumbaring",
            Template: 1,
            Information: {
                Name: "John Crismund Royos Elumbaring",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 12,
            Name: "Jason H. Caranzo",
            Template: 1,
            Information: {
                Name: "Jason H. Caranzo",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 13,
            Name: "Robert Gil Codilla Ybañez",
            Template: 1,
            Information: {
                Name: "Robert Gil Codilla Ybañez",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 14,
            Name: "Rey Paredes Castañares",
            Template: 1,
            Information: {
                Name: "Rey Paredes Castañares",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 15,
            Name: "Ronel Gonzales",
            Template: 1,
            Information: {
                Name: "Ronel Gonzales",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 16,
            Name: "Norman Dela Torre",
            Template: 1,
            Information: {
                Name: "Norman Dela Torre",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 17,
            Name: "Homer H. Marzon",
            Template: 1,
            Information: {
                Name: "Homer H. Marzon",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 18,
            Name: "Fernando T. Sembrano",
            Template: 1,
            Information: {
                Name: "Fernando T. Sembrano",
                Address: "137 Bliss Pajac Lapu-Lapu City",
                ContactNo: "09434364318",
                EmailAddress: "kennethcarlybanez@gmail.com",
                Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
                Age: "24 years old",
                DateOfBirth: "January 5, 1992",
                Gender: "Male",
                CivilStatus: "Single",
                Height: "5'5",
                Weight: "68 Kilograms",
                Citizenship: "Filipino",
                Skills: [
                    { Description: "Good in written and oral communication" },
                    { Description: "Web Developer, Hybrid Development for mobile, Desktop Application Developer" },
                    { Description: "Good in PowerBuilder, Visual Basic 6, C#, ASP.Net using Entity Framework with Lambda and LinQ, PHP CodeIgniter, HTML, Basic Java, AngularJS, Javascript, CSS, Bootstrap, Materializecss, Ionic, MySql, NoSql, MSSQL" },
                    { Description: "Basic Networking" },
                    { Description: "Basic Computer Troubleshooting" },
                    { Description: "Capable of using Github in Source Tree and npm CLI" }
                ],
                Strengths: [
                    { Description: "Good attitude towards work" },
                    { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
                    { Description: "Hardworking and Resourceful" },
                    { Description: "Can work with less supervision" },
                    { Description: "Eager to learn" }
                ],
                PostGraduate: [
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                   {
                       School: "Cebu Institute of Technology – University",
                       Degree: "Masters In Information Technology(June 2015-March 2016)",
                       Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
                   },
                ],
                Tertiary: [
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                    {
                        School: "University of Cebu-Banilad",
                        Degree: "Bachelor of Science in Information Technology (2008-2013)",
                        Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
                    },
                ],
                Secondary: [
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                    {
                        School: "Saint Dominic Learning Center (2004-2008)",
                        Address: "Sangi Lapu-lapu City",
                    },
                ],
                Primary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ],
                WorkExperience: [
                    {
                        Company: "Fastcargo Logistics Corporation",
                        Address: "Central Visayas, Philippines",
                        Period: "May 2014 - Present",
                        Position: "IT Programmer/Analyst",
                        MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
                    },
                    {
                        Company: "Intellmed Inc.",
                        Address: "Central Visayas, Philippines",
                        Period: "Nov 2013 - Jan 2014",
                        Position: "Software Engineer",
                        MainRole: "Developed and designed softwares."
                    }
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        }
        ];
    };

    $scope.evaluateResume = function (id) {
        //Change tile class
        if (id == "public") {
            if (document.getElementById(id).className == "share-tile-content tleft inactive") {
                document.getElementById("public").className = "share-tile-content tleft active";
                document.getElementById("private").className = "share-tile-content tright inactive";
            }
            $scope.type = "Public";
            $scope.showLoader();
            $scope.initializeResumeListInformation();
        }
        else {
            if (document.getElementById(id).className == "share-tile-content tright inactive") {
                document.getElementById("private").className = "share-tile-content tright active";
                document.getElementById("public").className = "share-tile-content tleft inactive";
            }
            $scope.type = "Private";
            $scope.showLoader();
            $scope.initializeResumeListInformation();
        }
    }

    $scope.printResume = function (elementId) {
        var is_chrome = ((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.vendor.toLowerCase().indexOf("google") > -1));
        if (is_chrome) {
            $scope.isPrint = true;
            $scope.idForPrint = elementId;
        } else {
            alert("Previewing documents will only work using Google Chrome Browser.");
        }
    }

    $scope.generateLines = function (value, currentNoOfLines, maxNoOfLines, maxCharacter, openingTag, closingTag) {
        var wordsPerLine = [], from = 0, to = 0, index = 0, counter = 1, data = [], lineIndex = 0;;
        from = 1;
        to = maxCharacter;

        //Generate data per line
        while (counter <= Math.ceil(value.length / maxCharacter)) {
            var flag = false;
            wordsPerLine[index] = '';
            for (var j = (from - 1) ; j <= (to - 1) ; j++) {
                if (j == (to - 1)) {
                    if (value.charAt(j + 1).trim() != ""
                        && counter != Math.ceil(value.length / maxCharacter)
                        && value.charAt(j).trim() != ""
                        && value.charAt(j).trim() != ",") {
                        wordsPerLine[index] = wordsPerLine[index] + '-';
                        flag = true;
                    }
                    else
                        wordsPerLine[index] = wordsPerLine[index] + value.charAt(j);
                } else {
                    wordsPerLine[index] = wordsPerLine[index] + value.charAt(j);
                }
            }

            if (!flag)
                from = to + 1;
            else
                from = to;

            counter = counter + 1;
            index = index + 1;

            to = (counter * maxCharacter) + 1;
        }
        //Process after this function: No more iteration , if current page then initialize current page else if new page then initialize current page first then next page
        //Check if for new page
        var checkIfForNewPage = false;
        
        if ((Math.ceil(value.length / maxCharacter) + currentNoOfLines) > maxNoOfLines)
            checkIfForNewPage = true;
        data[3] = { Lines: [] };
        data[4] = { Lines: [] };
        if (checkIfForNewPage) {
            //Initialize flag for New Page
            data[0] = "New Page";
            //Get lines to write for current page
            if ((Math.ceil(value.length / maxCharacter) + currentNoOfLines) < $scope.maxNoOfLines)
                data[1] = maxNoOfLines - (Math.ceil(value.length / maxCharacter) + currentNoOfLines);
            else
                data[1] = 0;
            //Get lines to write for new page
            data[2] = Math.ceil(value.length / maxCharacter) - data[1];
            //Get html to write for current page
            lineIndex = 0;
            for (var i = 0; i < data[1]; i++) {
                data[3].Lines[lineIndex] = openingTag + wordsPerLine[i] + closingTag + "\n";
                lineIndex = lineIndex + 1;
            }
            //Get html for write for new page
            lineIndex = 0;
            for (var i = 0; i < Math.ceil(value.length / maxCharacter) - data[1]; i++) {
                data[4].Lines[lineIndex] = openingTag + wordsPerLine[i] + closingTag + "\n";
                lineIndex = lineIndex + 1;
            }
        }
        else {
            //Initialize flag for Current Page
            data[0] = "Current Page";
            //Get lines to write for current page
            data[1] = Math.ceil(value.length / maxCharacter);
            //Get lines to write for new page
            data[2] = 0;
            //Get html for write for current page
            lineIndex = 0;
            for (var i = 0; i < data[1]; i++) {
                data[3].Lines[lineIndex] = openingTag + wordsPerLine[i] + closingTag + "\n";
                lineIndex = lineIndex + 1;
            }
            //Get html for write for new page
            data[4] = "";
        }
        return data;
    }

    $scope.initializeObjective = function (user, maxNoOfLines, maxCharacter) {
        var forWrite = $scope.generateLines(user.Information.Objectives, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var i = 0; i < forWrite[3].Lines.length; i++)
                    holder = holder + forWrite[3].Lines[i];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + holder;
            }
            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var i = 0; i < forWrite[4].Lines.length; i++)
                holder = holder + forWrite[4].Lines[i];
            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + holder;
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var i = 0; i < forWrite[3].Lines.length; i++)
                holder = holder + forWrite[3].Lines[i];
            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + holder;
        }
    }

    $scope.initializeByUnderlineTag = function (value, maxNoOfLines, maxCharacter) {
        var currentLength = $scope.contentHtml[$scope.pageCount].length, previousPageHolder = $scope.pageCount;
        for (i = 0; i < value.length; i++) {
            var forWrite = $scope.generateLines(value[i].Description, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
            }
        }
       
        for (var i = 1; i <= $scope.pageCount; i++) {
            if (i == previousPageHolder) { //Add tag where <li> is located until last line
                $scope.contentHtml[i] = $scope.contentHtml[i].substr(0, currentLength - 1) + "<ul>\n" + $scope.contentHtml[i].substr(currentLength, $scope.contentHtml[i].length - 1) + "</ul>";
            } else {
                if (i > previousPageHolder) //Add tag in first line until last line
                    $scope.contentHtml[i] = "<ul>\n" + $scope.contentHtml[i] + "</ul>\n";
            }
        }
    }

    $scope.initializePostGraduate = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.Information.PostGraduate.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<div><div class="class[0]">Post Graduate:</div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            else {
                schoolHTML = '<div><div class="class[0]"></div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            degreeHTML = '<div><div class="class[0]"></div><div class="class[1]">UserDegree</div></div>\n';
            degreeHTML = degreeHTML.replace("class[0]", classess[0]);
            degreeHTML = degreeHTML.replace("class[1]", classess[1]);

            addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
            addressHTML = addressHTML.replace("class[0]", classess[0]);
            addressHTML = addressHTML.replace("class[1]", classess[1]);
            //Generate lines per user school
            var forWrite = $scope.generateLines(user.Information.PostGraduate[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            }
            //Generate lines per user degree
            var forWrite = $scope.generateLines(user.Information.PostGraduate[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    degreeHTML = degreeHTML.replace("UserDegree", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generateLines(user.Information.PostGraduate[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            }

            if (isEvaluate) {
                if (i != user.Information.PostGraduate.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializeTertiary = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        for (i = 0; i < user.Information.Tertiary.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<div><div class="class[0]">Tertiary:</div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            else {
                schoolHTML = '<div><div class="class[0]"></div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            degreeHTML = '<div><div class="class[0]"></div><div class="class[1]">UserDegree</div></div>\n';
            degreeHTML = degreeHTML.replace("class[0]", classess[0]);
            degreeHTML = degreeHTML.replace("class[1]", classess[1]);

            addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
            addressHTML = addressHTML.replace("class[0]", classess[0]);
            addressHTML = addressHTML.replace("class[1]", classess[1]);
            //Generate lines per user school
            var forWrite = $scope.generateLines(user.Information.Tertiary[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            }
            //Generate lines per user degree
            var forWrite = $scope.generateLines(user.Information.Tertiary[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    degreeHTML = degreeHTML.replace("UserDegree", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + degreeHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generateLines(user.Information.Tertiary[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            }
            if (i != user.Information.Tertiary.length - 1) {
                $scope.evaluate(maxNoOfLines);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
            }
        }
    }

    $scope.initializeSecondary = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Secondary details
        for (i = 0; i < user.Information.Secondary.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<div><div class="class[0]">Secondary:</div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            else {
                schoolHTML = '<div><div class="class[0]"></div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
            addressHTML = addressHTML.replace("class[0]", classess[0]);
            addressHTML = addressHTML.replace("class[1]", classess[1]);
            //Generate lines per user school
            var forWrite = $scope.generateLines(user.Information.Secondary[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generateLines(user.Information.Secondary[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            }
            if (isEvaluate) {
                if (i != user.Information.Secondary.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }
    
    $scope.initializePrimary = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Primary details
        for (i = 0; i < user.Information.Primary.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<div><div class="class[0]">Primary:</div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            else {
                schoolHTML = '<div><div class="class[0]"></div><div class="class[1]">UserSchool</div></div>\n';
                schoolHTML = schoolHTML.replace("class[0]", classess[0]);
                schoolHTML = schoolHTML.replace("class[1]", classess[1]);
            }
            addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
            addressHTML = addressHTML.replace("class[0]", classess[0]);
            addressHTML = addressHTML.replace("class[1]", classess[1]);
            //Generate lines per user school
            var forWrite = $scope.generateLines(user.Information.Primary[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + schoolHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generateLines(user.Information.Primary[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
            }
            if (i != user.Information.Primary.length - 1) {
                $scope.evaluate(maxNoOfLines);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
            }
        }
    }

    $scope.initializeWorkExperience = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Work Experience details
        for (i = 0; i < user.Information.WorkExperience.length; i++) {
            var companyHTML = "", addressHTML = "", periodHTML = "", positionHTML = "", mainRoleHTML = "";
            //Generate lines per company
            var forWrite = $scope.generateLines(user.Information.WorkExperience[i].Company, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            companyHTML = '<div><div class="class[0]">Company:</div><div class="class[1]">UserCompany</div></div>\n';
                            companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                            companyHTML = companyHTML.replace("class[0]", classess[0]);
                            companyHTML = companyHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            companyHTML = '<div><div class="class[0]"></div><div class="class[1]">UserCompany</div></div>\n';
                            companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                            companyHTML = companyHTML.replace("class[0]", classess[0]);
                            companyHTML = companyHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        companyHTML = '<div><div class="class[0]">Company:</div><div class="class[1]">UserCompany</div></div>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[4].Lines[j]);
                        companyHTML = companyHTML.replace("class[0]", classess[0]);
                        companyHTML = companyHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        companyHTML = '<div><div class="class[0]"></div><div class="class[1]">UserCompany</div></div>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[4].Lines[j]);
                        companyHTML = companyHTML.replace("class[0]", classess[0]);
                        companyHTML = companyHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        companyHTML = '<div><div class="class[0]">Company:</div><div class="class[1]">UserCompany</div></div>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                        companyHTML = companyHTML.replace("class[0]", classess[0]);
                        companyHTML = companyHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        companyHTML = '<div><div class="class[0]"></div><div class="class[1]">UserCompany</div></div>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                        companyHTML = companyHTML.replace("class[0]", classess[0]);
                        companyHTML = companyHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + companyHTML;
                    }
                }
            }

            //Generate lines per Address
            var forWrite = $scope.generateLines(user.Information.WorkExperience[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<div><div class="class[0]">Address:</div><div class="class[1]">UserAddress</div></div>\n';
                            addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                            addressHTML = addressHTML.replace("class[0]", classess[0]);
                            addressHTML = addressHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
                            addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                            addressHTML = addressHTML.replace("class[0]", classess[0]);
                            addressHTML = addressHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<div><div class="class[0]">Address:</div><div class="class[1]">UserAddress</div></div>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[4].Lines[j]);
                        addressHTML = addressHTML.replace("class[0]", classess[0]);
                        addressHTML = addressHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[4].Lines[j]);
                        addressHTML = addressHTML.replace("class[0]", classess[0]);
                        addressHTML = addressHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<div><div class="class[0]">Address:</div><div class="class[1]">UserAddress</div></div>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                        addressHTML = addressHTML.replace("class[0]", classess[0]);
                        addressHTML = addressHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAddress</div></div>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                        addressHTML = addressHTML.replace("class[0]", classess[0]);
                        addressHTML = addressHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + addressHTML;
                    }
                }
            } 
            //Generate lines per Period
            var forWrite = $scope.generateLines(user.Information.WorkExperience[i].Period, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">UserPeriod</div></div>\n';
                            periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                            periodHTML = periodHTML.replace("class[0]", classess[0]);
                            periodHTML = periodHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPeriod</div></div>\n';
                            periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                            periodHTML = periodHTML.replace("class[0]", classess[0]);
                            periodHTML = periodHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">UserPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[4].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[4].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">UserPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    }
                }
            }
            //Generate lines per Position
            var forWrite = $scope.generateLines(user.Information.WorkExperience[i].Position, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            positionHTML = '<div><div class="class[0]">Position:</div><div class="class[1]">UserPosition</div></div>\n';
                            positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                            positionHTML = positionHTML.replace("class[0]", classess[0]);
                            positionHTML = positionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            positionHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPosition</div></div>\n';
                            positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                            positionHTML = positionHTML.replace("class[0]", classess[0]);
                            positionHTML = positionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        positionHTML = '<div><div class="class[0]">Position:</div><div class="class[1]">UserPosition</div></div>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[4].Lines[j]);
                        positionHTML = positionHTML.replace("class[0]", classess[0]);
                        positionHTML = positionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        positionHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPosition</div></div>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[4].Lines[j]);
                        positionHTML = positionHTML.replace("class[0]", classess[0]);
                        positionHTML = positionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        positionHTML = '<div><div class="class[0]">Position:</div><div class="class[1]">UserPosition</div></div>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                        positionHTML = positionHTML.replace("class[0]", classess[0]);
                        positionHTML = positionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        positionHTML = '<div><div class="class[0]"></div><div class="class[1]">UserPosition</div></div>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                        positionHTML = positionHTML.replace("class[0]", classess[0]);
                        positionHTML = positionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + positionHTML;
                    }
                }
            }
            
            //Generate lines per MainRole
            var forWrite = $scope.generateLines(user.Information.WorkExperience[i].MainRole, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            mainRoleHTML = '<div><div class="class[0]">Main Role:</div><div class="class[1]">UserMainRole</div></div>\n';
                            mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                            mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                            mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            mainRoleHTML = '<div><div class="class[0]"></div><div class="class[1]">UserMainRole</div></div>\n';
                            mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                            mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                            mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        mainRoleHTML = '<div><div class="class[0]">Main Role:</div><div class="class[1]">UserMainRole</div></div>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[4].Lines[j]);
                        mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                        mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        mainRoleHTML = '<div><div class="class[0]"></div><div class="class[1]">UserMainRole</div></div>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[4].Lines[j]);
                        mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                        mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        mainRoleHTML = '<div><div class="class[0]">Main Role:</div><div class="class[1]">UserMainRole</div></div>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                        mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                        mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        mainRoleHTML = '<div><div class="class[0]"></div><div class="class[1]">UserMainRole</div></div>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                        mainRoleHTML = mainRoleHTML.replace("class[0]", classess[0]);
                        mainRoleHTML = mainRoleHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + mainRoleHTML;
                    }
                }
            }
            if (isEvaluate) {
                if (i != user.Information.WorkExperience.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.evaluate = function (maxNoOfLines) {
        if ($scope.currentLines == maxNoOfLines) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
        }
        $scope.currentLines = $scope.currentLines + 1;
    };

    $scope.writeNewLine = function (isEvaluate, maxNoOfLines) {
        if(isEvaluate)
            $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
    };

    $scope.writeContent = function (isEvaluate, maxNoOfLines, label, content, classess, maxCharacter) {
        if (isEvaluate)
            $scope.evaluate(maxNoOfLines);
        var forWrite = $scope.generateLines(content.toString(), $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");

        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = forWrite[3].Lines[j].substr(0, 18) + ":" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
                        contentHTML = '<div><div class="class[0]">Label</div><div class="class[1]">Content</div></div>\n';
                        contentHTML = contentHTML.replace("Content", holder);
                        contentHTML = contentHTML.replace("Label", label);
                        contentHTML = contentHTML.replace("class[0]", classess[0]);
                        contentHTML = contentHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                    } else {
                        holder = forWrite[3].Lines[j].substr(0, 18) + ":" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
                        contentHTML = '<div><div class="class[0]"></div><div class="class[1]">Content</div></div>\n';
                        contentHTML = contentHTML.replace("Content", holder);
                        contentHTML = contentHTML.replace("class[0]", classess[0]);
                        contentHTML = contentHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                    }
                }
            }

            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var j = 0; j < forWrite[4].Lines.length; j++) {
                if (j == 0) {
                    holder = forWrite[4].Lines[j].substr(0, 18) + ":" + forWrite[4].Lines[j].substr(18, forWrite[4].Lines[j].length - 1);
                    contentHTML = '<div><div class="class[0]">Label</div><div class="class[1]">Content</div></div>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("Label", label);
                    contentHTML = contentHTML.replace("class[0]", classess[0]);
                    contentHTML = contentHTML.replace("class[1]", classess[1]);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                } else {
                    holder = forWrite[4].Lines[j].substr(0, 18) + ":" + forWrite[4].Lines[j].substr(18, forWrite[4].Lines[j].length - 1);
                    contentHTML = '<div><div class="class[0]"></div><div class="class[1]">Content</div></div>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("class[0]", classess[0]);
                    contentHTML = contentHTML.replace("class[1]", classess[1]);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                }
            }
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var j = 0; j < forWrite[3].Lines.length; j++) {
                if (j == 0) {
                    holder = forWrite[3].Lines[j].substr(0, 18) + ":" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
                    contentHTML = '<div><div class="class[0]">Label</div><div class="class[1]">Content</div></div>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("Label", label);
                    contentHTML = contentHTML.replace("class[0]", classess[0]);
                    contentHTML = contentHTML.replace("class[1]", classess[1]);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                } else {
                    holder = forWrite[3].Lines[j].substr(0, 18) + ":" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
                    contentHTML = '<div><div class="class[0]"></div><div class="class[1]">Content</div></div>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("class[0]", classess[0]);
                    contentHTML = contentHTML.replace("class[1]", classess[1]);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                }
            }
        }
    };

    $scope.writeHeaderContent = function (isEvaluate, maxNoOfLines, content, className) {
        if (isEvaluate)
            $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="className">Content</div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("className", className);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("Content", content);
    };

    $scope.showPreview = function (user, maxNoOfLines, page, template) {
        document.getElementById("c-content").innerHTML = "";
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img src="UserImage" class="image-preview" align="right">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", user.ImagePath);
        $scope.writeNewLine(true, maxNoOfLines);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Information.Name, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Information.Address, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.Information.ContactNo, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.Information.EmailAddress, ["left-label-preview", "right-label-preview"], 90);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Information.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Birthdate
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.Information.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Information.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.Information.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Information.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Information.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Information.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeNewLine(true, maxNoOfLines);
        
        if (user.Information.Skills.length > 0 || user.Information.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Information.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Information.Skills, maxNoOfLines, 78);
            }
            if (user.Information.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Information.Strengths, maxNoOfLines, 78);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Information.PostGraduate.length > 0 || user.Information.Tertiary.length > 0
            || user.Information.Secondary.length > 0 || user.Information.Primary.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduate(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiary Details
            $scope.initializeTertiary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondary Details
            $scope.initializeSecondary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primary Details
            $scope.initializePrimary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Information.WorkExperience.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperience(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }

        $scope.currentPage = page;
        $scope.showPage();
        $scope.process = "done/showmodal";

        //Initialize $scope.resumePages
        $scope.resumePages = [];
        for (var i = 0; i < $scope.allResumeContents.length; i++)
        {
            if ($scope.allResumeContents[i].Id == user.Id)
            {
                for (var j = 1; j < $scope.allResumeContents[i].Contents.length; j++)
                {
                    $scope.holder = {
                        Id: "Page" + j.toString(),
                        Content: $scope.allResumeContents[i].Contents[j]
                    }
                    $scope.resumePages.push($scope.holder);
                }
            }
        }
        var writePages = $interval(function () {
            //Write Resume Pages Content
            for (var i = 0; i < $scope.resumePages.length; i++) {
                if (document.getElementById($scope.resumePages[i].Id) != null) {
                    $interval.cancel(writePages);
                    writePages = undefined;
                    document.getElementById($scope.resumePages[i].Id).innerHTML = $scope.resumePages[i].Content;
                }
            }
        }, 100);

        $scope.resumeShown = true;
    }

    $scope.showDocument = function (page) {
        var pageHolder = page.split("Page");
        $scope.currentPage = parseInt(pageHolder[1]);
        $scope.showPage();
        document.getElementById("c-modal-content").style.backgroundColor = "white";
        $scope.isByPage = false;
    }

    $scope.showByPage = function () {
        $scope.isByPage = true;
        $scope.showButtons = false;
        document.getElementById("c-modal-content").style.backgroundColor = "#F8F8F8 ";
        document.getElementById("c-modal-content").className = "content-container show-overflow show-content-container";
    };

    $scope.getContent = function (page) {
        $scope.currentPage = page;
        $scope.showPage();
    };

    $scope.showPage = function () {
        document.getElementById("c-content").innerHTML = "";
        document.getElementById("c-content").innerHTML = $scope.contentHtml[$scope.currentPage];
    }

    $scope.showResume = function (resumeInfo, template) {
        $scope.showLoader();
        var showContentPreview = $interval(function () {
            $interval.cancel(showContentPreview);
            showContentPreview = undefined;
            var content = document.getElementById("c-preview").innerHTML;
            var maxNoOfLines = 30;
            $scope.showPreview(resumeInfo, maxNoOfLines, $scope.currentPage, template);
        }, 500);
    };

    $scope.closeResume = function () {
        if (!$scope.isByPage) {
            document.getElementById("c-modal-container").className = "modal-container hide-modal-container";
            document.getElementById("c-modal-content").className = "content-container hide-content-container";
            document.getElementById("c-loader").className = "loader-container hide-loading";
            $scope.showButtonContainer = false;
            $scope.showButtons = false;
            $scope.process = "done";
            $scope.isByPage = false;
            $scope.resumeShown = false;
            $scope.currentPage = 1;
        }
        else {
            $scope.isByPage = false;
            document.getElementById("c-modal-content").style.backgroundColor = "white";
            document.getElementById("c-modal-content").className = "content-container show-content-container"
        }
    };

    //Generate HTML Contents for Resume List 
    $scope.generateHTMLContentsPerUser = function (user, maxNoOfLines, template) {
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img src="UserImage" width="50" height="50" align="right">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", user.ImagePath);
        $scope.writeNewLine(true, maxNoOfLines);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Information.Name, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Information.Address, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.Information.ContactNo, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.Information.EmailAddress, ["left-label-preview", "right-label-preview"], 90);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Information.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Birthdate
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.Information.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Information.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.Information.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Information.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Information.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Information.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeNewLine(true, maxNoOfLines);

        if (user.Information.Skills.length > 0 || user.Information.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Information.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Information.Skills, maxNoOfLines, 78);
            }
            if (user.Information.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Information.Strengths, maxNoOfLines, 78);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Information.PostGraduate.length > 0 || user.Information.Tertiary.length > 0
            || user.Information.Secondary.length > 0 || user.Information.Primary.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduate(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiary Details
            $scope.initializeTertiary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondary Details
            $scope.initializeSecondary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primary Details
            $scope.initializePrimary(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Information.WorkExperience.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperience(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        $scope.resumeHolder = {
            Id: user.Id,
            Contents: $scope.contentHtml
        }
        //Save contents
        $scope.allResumeContents.push($scope.resumeHolder);
    };

    //Listener if Resume List is not empty
    var generateHTMLContents = $interval(function () {    
        if ($scope.userResumeList.length > 0) {
            $interval.cancel(generateHTMLContents);
            generateHTMLContents = undefined;
            var maxNoOfLines = 30;
            $scope.allResumeContents = [];
            for (var i = 0; i < $scope.userResumeList.length; i++)
                //$scope.generateResume(i, $scope.userResumeList[i], maxNoOfLines, 1)
                $scope.generateHTMLContentsPerUser($scope.userResumeList[i], 30, 1);
        }
    }, 500);

    //Listener if HTML Content Generation for Resume List is Done
    var checkIfGenerationIsDone = $interval(function () {
        if ($scope.allResumeContents.length == $scope.userResumeList.length) {
            $interval.cancel(checkIfGenerationIsDone);
            checkIfGenerationIsDone = undefined;
            $scope.initializeResumeListInformation();
        }
    }, 1000);

    //Initialize Resume List
    $scope.initializeResumeListInformation = function () {
        $scope.process = "start";
        var writeContent = $interval(function () {
            for (var i = 0; i < $scope.allResumeContents.length; i++) {
                if (document.getElementById($scope.allResumeContents[i].Id) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.allResumeContents[i].Id).innerHTML = $scope.allResumeContents[i].Contents[1];
                }
            }
            $scope.process = "done";
        }, 100)
    }

    $scope.showLoader = function () {
        $scope.process = "start";
        $scope.showButtonContainer = false;
        $scope.showButtons = false;
        $scope.showPageIndicator = false;
        document.getElementById("c-modal-container").className = "modal-container show-modal-container";
        document.getElementById("c-modal-content").className = "content-container show-content-container";
        document.getElementById("c-loader").className = "loader-container show-loading";
    };

    //Hide loader if $scope.process's value is done(If hide modal too) or done/showmodal(Hide loader only)
    var hideLoaderListener = $interval(function () {
        if ($scope.process == "done") {
            document.getElementById("c-modal-container").className = "modal-container hide-modal-container";
            document.getElementById("c-modal-content").className = "content-container hide-content-container";
            document.getElementById("c-loader").className = "loader-container hide-loading";
            $scope.showButtonContainer = false;
            $scope.showButtons = false;
        } else if ($scope.process == "done/showmodal") {
            document.getElementById("c-loader").className = "loader-container hide-loading";
            document.getElementById("c-preview").className = "content-preview show-preview";
        }
    }, 2000);

    //Listens the width and height of the browser
    var doTheMath = $interval(function(){
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        var modalContentWidth = parseInt(window.getComputedStyle(document.getElementById("c-modal-content"), null).getPropertyValue("width").split("px")[0]);
        var basePaddingLeftRight = (innerWidth - modalContentWidth) / 2;
        var buttonWidth = parseInt(window.getComputedStyle(document.getElementById("previousButton"), null).getPropertyValue("width").split("px")[0]);
        var fontSize = 10, fontSize1 = 12, padding = 0;

        if (innerWidth < 767 || innerWidth > 1440) {
            $state.go('ongoing');
        }

        if (document.querySelectorAll(".show-content-container").length > 0) {
            padding = parseInt(window.getComputedStyle(document.querySelectorAll(".show-content-container")[0], null).getPropertyValue("padding-top").split("px")[0]);

            for (var i = 1; i <= 20; i = i + 0.5) {
                if (Math.floor((innerHeight - (padding * 2)) / i) == 30 || Math.ceil((innerHeight - (padding * 2)) / i) == 30) {
                    fontSize = fontSize - ((20 - Math.ceil(i)) * .5);
                    fontSize1 = fontSize1 - ((20 - Math.ceil(i)) * .6);
                    //Set Line Height during Document Preview Dynamically
                    document.getElementById("c-preview").style.lineHeight = Math.ceil(i) + "px";
                    //Set default font size during Document Preview Dynamically
                    document.getElementById("c-preview").style.fontSize = fontSize + "px";
                    //Set Image Width and Height of Resume List Dynamically
                    if (document.querySelectorAll(".image-preview").length > 0) {
                        document.querySelectorAll(".image-preview")[0].style.width = Math.ceil(i) * 5 + "px";
                        document.querySelectorAll(".image-preview")[0].style.height = Math.ceil(i) * 5 + "px";
                    }
                    //Set Labels Font size during Document Preview Dynamically
                    for (var j = 0; j < document.querySelectorAll(".line-label-medium").length; j++)
                        document.querySelectorAll(".line-label-medium")[j].style.fontSize = fontSize + "px";
                    for (var j = 0; j < document.querySelectorAll(".line-label").length; j++)
                        document.querySelectorAll(".line-label")[j].style.fontSize = fontSize1 + "px";
                    
                    i = 20;
                }
            }
        }

        //Set Modal Containter padding left and right
        document.getElementById("c-modal-container").style.paddingLeft = basePaddingLeftRight + "px";
        document.getElementById("c-modal-container").style.paddingRight = basePaddingLeftRight + "px";
        document.getElementById("previousButton").style.left = basePaddingLeftRight - buttonWidth + "px";
        document.getElementById("nextButton").style.left = basePaddingLeftRight + modalContentWidth + "px";
        document.getElementById("previousButton").style.top = Math.ceil((innerHeight / 2) - buttonWidth * .60) + "px";
        document.getElementById("nextButton").style.top = Math.ceil((innerHeight / 2) - buttonWidth * .60) + "px";
        document.getElementById("c-loader").style.top = (Math.ceil((innerHeight / 2) - buttonWidth * .60) / 2) + "px";
        //Set Page Indicator Left value
        if (document.querySelectorAll(".c-page-indicator").length > 0)
            document.querySelectorAll(".c-page-indicator")[0].style.left = (basePaddingLeftRight + (modalContentWidth / 2)) - 50 + "px";

        if ($scope.resumeShown == false) {
            $scope.showButtonContainer = false;
            $scope.showButtons = false;
            $scope.showPageIndicator = false;
        }
    }, 100);

    document.getElementById("c-modal-container").addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.showButtonContainer = true;
            $scope.showPageIndicator = false;
            $scope.showButtons = false;
        }
    });
    document.getElementById("c-modal-content").addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            if ($scope.isByPage)
                $scope.showButtons = false;
            else
                $scope.showButtons = true;
            $scope.showButtonContainer = false;
            $scope.showPageIndicator = true;
        }
    });
    document.getElementById("c-modal-content").addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.showButtons = false;
            $scope.showButtonContainer = true;
            $scope.showPageIndicator = false;
        }
    });
    document.getElementById("previousButton").addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.showButtonContainer = false;
            $scope.showPageIndicator = true;
            if ($scope.isByPage)
                $scope.showButtons = false;
            else {
                if (!$scope.showButtonContainer)
                    $scope.showButtons = true;
            }
        }
    });
    document.getElementById("previousButton").addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.showButtonContainer = true;
            $scope.showButtons = false;
        }
    });
    document.getElementById("nextButton").addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.showButtonContainer = false;
            $scope.showPageIndicator = true;
            if ($scope.isByPage)
                $scope.showButtons = false;
            else {
                if (!$scope.showButtonContainer)
                    $scope.showButtons = true;
            }
        }
    });
    document.getElementById("nextButton").addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.showButtonContainer = true;
            $scope.showButtons = false;
        }
    });
    document.getElementById("buttonContainer").addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.showButtons = false;
            $scope.showButtonContainer = true;
        }
    });
    document.querySelectorAll(".back-button")[0].addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.toolTipText[0] = "Back";
            document.querySelectorAll(".c-tooltip")[0].style.visibility = "visible";
        }
    });
    document.querySelectorAll(".back-button")[0].addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.toolTipText = [];
            document.querySelectorAll(".c-tooltip")[0].style.visibility = "hidden";
        }
    });
    document.querySelectorAll(".by-page-button")[0].addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.toolTipText[0] = "Display By Page";
            document.querySelectorAll(".c-tooltip")[1].style.visibility = "visible";
        }
    });
    document.querySelectorAll(".by-page-button")[0].addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.toolTipText = [];
            document.querySelectorAll(".c-tooltip")[1].style.visibility = "hidden";
        }
    });
    document.querySelectorAll(".download-button")[0].addEventListener("mouseenter", function () {
        if ($scope.process != "start") {
            $scope.toolTipText[0] = "Email";
            $scope.toolTipText[1] = "Print";
            document.querySelectorAll(".c-tooltip")[2].style.visibility = "visible";
        }
    });
    document.querySelectorAll(".download-button")[0].addEventListener("mouseleave", function () {
        if ($scope.process != "start") {
            $scope.toolTipText = [];
            document.querySelectorAll(".c-tooltip")[2].style.visibility = "hidden";
        }
    });

    $scope.initializeResumeList();
    $scope.showLoader();

    $scope.$on('$destroy', function () {
        $interval.cancel(doTheMath);
        doTheMath = undefined;
        $interval.cancel(hideLoaderListener);
        hideLoaderListener = undefined
    });
});