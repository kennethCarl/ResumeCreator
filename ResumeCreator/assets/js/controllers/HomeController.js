arjocamahamageApp.controller("HomeController", function ($rootScope, $scope, $interval) {
    $scope.type = "Public";
    $scope.filteredResume = "";
    $scope.isPrint = false;
    $scope.idForPrint = null;
    $scope.showLoader = true;
    $scope.currentPage = 1;

    $scope.initializeResumeList = function () {
        $scope.userResumeList = [
        {
            Id: 1,
            Name: "Kenneth Carl Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 2,
            Name: "Kenneth John Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 3,
            Name: "Maiko Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 4,
            Name: "Maila Marie Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 5,
            Name: "Hanna Marie Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 6,
            Name: "Angelie Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 7,
            Name: "Edgardo Nacua Ybañez Jr.",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 8,
            Name: "Lilibeth Nacua Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 9,
            Name: "Edgardo Amistad Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Public",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 10,
            Name: "Mike Andrew Brigoli Ababa",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 11,
            Name: "John Crismund Royos Elumbaring",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 12,
            Name: "Jason H. Caranzo",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 13,
            Name: "Robert Gil Codilla Ybañez",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 14,
            Name: "Rey Paredes Castañares",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 15,
            Name: "Ronel Gonzales",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: '~/userimages/carl.png'
        },
        {
            Id: 16,
            Name: "Norman Dela Torre",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 17,
            Name: "Homer H. Marzon",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        },
        {
            Id: 18,
            Name: "Fernando T. Sembrano",
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
                Elementary: [
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                    {
                        School: "Bankal Elementary School (1998-2004)",
                        Address: "Bankal Lapu-lapu City",
                    },
                ]
            },
            Type: "Private",
            ImagePath: 'userimages/carl.png'
        }
        ];
    };

    $scope.evaluate = function (id) {
        //Change tile class
        if (id == "public") {
            if (document.getElementById(id).className == "share-tile-content tleft inactive") {
                document.getElementById("public").className = "share-tile-content tleft active";
                document.getElementById("private").className = "share-tile-content tright inactive";
            }
            $scope.type = "Public";
        }
        else {
            if (document.getElementById(id).className == "share-tile-content tright inactive") {
                document.getElementById("private").className = "share-tile-content tright active";
                document.getElementById("public").className = "share-tile-content tleft inactive";
            }
            $scope.type = "Private";
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
        var wordsPerLine = [], from = 0, to = 0, index = 0, counter = 1, data = [];
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

        if (checkIfForNewPage) {
            //Initialize flag for New Page
            data[0] = "New Page";
            //Get lines to write for current page
            data[1] = (Math.ceil(value.length / maxCharacter) + currentNoOfLines) - maxNoOfLines;
            //Get lines to write for new page
            data[2] = Math.ceil(value.length / maxCharacter) - data[1];
            //Get html to write for current page
            data[3] = "";
            for(var i = 0; i < data[1]; i++)
                data[3] = data[3] + openingTag + wordsPerLine[i] + closingTag + "\n";
            //Get html for write for new page
            data[4] = "";
            for (var i = data[1]; i < Math.ceil(value.length / maxCharacter) ; i++)
                data[4] = data[4] + openingTag + wordsPerLine[i] + closingTag + "\n";
        }
        else {
            //Initialize flag for Current Page
            data[0] = "Current Page";
            //Get lines to write for current page
            data[1] = Math.ceil(value.length / maxCharacter);
            //Get lines to write for new page
            data[2] = 0;
            //Get html for write for current page
            data[3] = "";
            for (var i = 0; i < data[1]; i++)
                data[3] = data[3] + openingTag + wordsPerLine[i] + closingTag + "\n";
            //Get html for write for new page
            data[4] = "";
        }
        return data;
    }

    $scope.initializeObjective = function (user, maxNoOfLines) {
        var forWrite = $scope.generateLines(user.Information.Objectives, $scope.currentLines, maxNoOfLines, 94, '<div class="line">', "</div>");

        if (forWrite[0] == "New Page") {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + forWrite[3];
            //Process new page
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + forWrite[4];
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + forWrite[3];
        }
    }

    $scope.initializeByUnderlineTag = function (value, maxNoOfLines) {
        var currentLength = $scope.contentHtml[$scope.pageCount].length, previousPageHolder = $scope.pageCount;
        for (i = 0; i < value.length; i++) {
            var forWrite = $scope.generateLines(value[i].Description, $scope.currentLines, maxNoOfLines, 78, '<div class="line">', "</div>");
            if (forWrite[0] == "New Page") {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[3] + "</li>\n";
                //Process new page
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[4] + "</li>\n";
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[3] + "</li>\n";
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

    //$scope.initializeStrengths = function (user, maxNoOfLines) {
    //    var currentLength = $scope.contentHtml[$scope.pageCount].length, previousPageHolder = $scope.pageCount;
    //    for (i = 0; i < user.Information.Strengths.length; i++) {
    //        var forWrite = $scope.generateLines(user.Information.Strengths[i].Description, $scope.currentLines, maxNoOfLines, 78, '<div class="line">', "</div>");
    //        if (forWrite[0] == "New Page") {
    //            //Process current page
    //            $scope.currentLines = $scope.currentLines + forWrite[1];
    //            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[3] + "</li>\n";
    //            //Process new page
    //            $scope.pageCount = $scope.pageCount + 1;
    //            $scope.contentHtml[$scope.pageCount] = "";
    //            $scope.currentLines = forWrite[2];
    //            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[4] + "</li>\n";
    //        } else {
    //            //Process current page
    //            $scope.currentLines = $scope.currentLines + forWrite[1];
    //            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + "<li>\n" + forWrite[3] + "</li>\n";
    //        }
    //    }


        
    //    for (var i = 1; i <= $scope.pageCount; i++) {
    //        if (i == previousPageHolder) { //Add tag where <li> is located until last line
    //            $scope.contentHtml[i] = $scope.contentHtml[i].substr(0, currentLength - 1) + "<ul>\n" + $scope.contentHtml[i].substr(currentLength, $scope.contentHtml[i].length - 1) + "</ul>";
    //        } else {
    //            if (i > previousPageHolder) //Add tag in first line until last line
    //                $scope.contentHtml[i] = "<ul>\n" + $scope.contentHtml[i] + "</ul>\n";
    //        }
    //    }
        
    //}

    $scope.initializePostGraduate = function (user, maxNoOfLines) {
        var i = startingIndex, j = startingIndex1, indexHolder = 0, indexHolder = 1;
        //Loop user post graduate details
        for (i = 0; i < user.Information.PostGraduate.length; i++) {
            var perSchoolHtml = "";
            if (i == 0) {
                //Generate lines per user school
                var forWrite = $scope.generateLines(user.Information.PostGraduate[i].School, $scope.currentLines, maxNoOfLines, 78, '<div class="line">', "</div>");
                perSchoolHtml = '<div><div class="left-label1">Post Graduate:</div><div class="right-label1">UserSchool</div></div>';
                //if (forWrite[0] == "New Page") {
                //    $scope.pageCount = $scope.pageCount + 1;
                //    $scope.contentHtml[$scope.pageCount] = "";
                //    $scope.currentLines = forWrite[1];
                //    indexHolder = i;
                //    i = user.Information.Skills.length;
                //    //Iterate
                //    $scope.initializeSkills(indexHolder, user, maxNoOfLines);
                //}
                //else {
                //    $scope.currentLines = $scope.currentLines + forWrite[2];
                //    perSchoolHtml = perSchoolHtml + forWrite[1];
                //    perSchoolHtml.replace("UserSchool", perSchoolHtml)
                //    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + perSchoolHtml;
                //}
            }
        }
    };

    $scope.evaluate = function (maxNoOfLines) {
        if ($scope.currentLines == maxNoOfLines) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
        }
        $scope.currentLines = $scope.currentLines + 1;
    };

    $scope.templateOne = function (user, maxNoOfLines, page) {
        document.getElementById("c-content").innerHTML = "";
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img src="UserImage" width="100" height="100" align="right">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", user.ImagePath);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        $scope.currentLines = $scope.currentLines + 1;
        //Initialize User Name
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Name:</div><div class="right-label">UserName</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserName", user.Information.Name);
        $scope.currentLines = $scope.currentLines + 1;
        //Initialize User Address
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Address:</div><div class="right-label">UserAddress</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserAddress", user.Information.Address);
        $scope.currentLines = $scope.currentLines + 1;
        //Initialize User Contact No
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Contact No:</div><div class="right-label">UserContactNo</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserContactNo", user.Information.ContactNo);
        $scope.currentLines = $scope.currentLines + 1;
        //Initialize User Email Address
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Email Address:</div><div class="right-label">UserEmailAddress</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserEmailAddress", user.Information.EmailAddress);
        $scope.currentLines = $scope.currentLines + 1;
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        $scope.currentLines = $scope.currentLines + 1;
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        $scope.currentLines = $scope.currentLines + 1;
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label">OBJECTIVES</div>' + "\n";
        $scope.currentLines = $scope.currentLines + 1;
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines);
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label">PERSONAL INFORMATION</div>' + "\n";
        //Initialize User Age
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Age:</div><div class="right-label">UserAge</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserAge", user.Information.Age);
        //Initialize User Birthdate
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Birthdate:</div><div class="right-label">UserBirthdate</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserBirthdate", user.Information.DateOfBirth);
        //Initialize User Gender
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Gender:</div><div class="right-label">UserGender</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserGender", user.Information.Gender);
        //Initialize User Civil Status
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Civil Status:</div><div class="right-label">UserCivilStatus</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserCivilStatus", user.Information.CivilStatus);
        //Initialize User Height
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Height:</div><div class="right-label">UserHeight</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserHeight", user.Information.Height);
        //Initialize User Weight
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Weight:</div><div class="right-label">UserWeight</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserWeight", user.Information.Weight);
        //Initialize User Citizenship
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><div class="left-label">Citizenship:</div><div class="right-label">UserCitizenship</div></div>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserCitizenship", user.Information.Weight);
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label">QUALIFICATIONS</div>' + "\n";
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label1">Skills:</div>' + "\n";
        //Initialize Skills
        $scope.initializeByUnderlineTag(user.Information.Skills, maxNoOfLines);
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label1">Strengths:</div>' + "\n";
        //Initialize Strengths
        $scope.initializeByUnderlineTag(user.Information.Strengths, maxNoOfLines);
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div class="line line-label">EDUCATIONAL ATTAINMENT</div>' + "\n";
        $scope.evaluate(maxNoOfLines);
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";

        for (var i = 1; i <= $scope.pageCount; i++) {
            console.log($scope.contentHtml[i]);
        }
        $scope.currentPage = page;
        $scope.showPage();
        document.getElementById("c-loader").className = "loader-container hide-loading";
        document.getElementById("c-preview").className = "content-preview show-preview";
    }

    $scope.getContent = function (page) {
        $scope.currentPage = page;
        $scope.showPage();
    };

    $scope.showPage = function () {
        document.getElementById("c-content").innerHTML = "";
        document.getElementById("c-content").innerHTML = $scope.contentHtml[$scope.currentPage];
    }

    $scope.showResume = function (resumeInfo) {
        document.getElementById("c-modal-container").className = "modal-container show-modal-container";
        document.getElementById("c-modal-content").className = "content-container show-content-container";

        var showContentPreview = $interval(function () {
            document.getElementById("c-loader").className = "loader-container show-loading";
            $interval.cancel(showContentPreview);
            showContentPreview = undefined;

            
            var content = document.getElementById("c-preview").innerHTML;
            var lineHeight = parseInt(window.getComputedStyle(document.getElementById("c-preview"), null).getPropertyValue("line-height").split("px")[0]);
            var maxNoOfLines = Math.floor((document.getElementById("c-modal-content").offsetHeight - 80) / lineHeight);
            $scope.templateOne(resumeInfo, maxNoOfLines, $scope.currentPage);

            document.getElementById("c-loader").className = "loader-container hide-loading";
            document.getElementById("c-preview").className = "content-preview show-preview";
        }, 500);
    };

    $scope.initializeResumeList();
});