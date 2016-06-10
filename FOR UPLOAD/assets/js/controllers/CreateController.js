arjocamahamageApp.controller("CreateController", function ($http, $scope, $state, $interval, $filter, $rootScope) {
    $scope.modalTitle = "";
    $scope.buttonLabel = "";
    $scope.withError = false;
    $scope.errorMessage = "";
    $scope.withFormError = false;
    $scope.errorFormMessage = "";
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
    $scope.templateShown = false;
    $scope.isByTemplatePage = false;
    $scope.templateContainer = [];
    $scope.isPrint = false;
    $scope.htmlForDownload = null;
    $scope.selectedTemplate = null;
    $scope.isLogged = false;
    $scope.idForPrint = 'PrintDocument';

    $scope.civilStatus = [
                    { Id: "Single", Name: "Single" },
                    { Id: "Married", Name: "Married" },
                    { Id: "Divorced", Name: "Divorced" },
                    { Id: "Widowed", Name: "Widowed" }
    ];
   
    $scope.links = [
                        $rootScope.baseUrl + "/guide/chrome_printing_remove_header1.JPG",
                        $rootScope.baseUrl + "/guide/chrome_printing_remove_header2.JPG",
                        $rootScope.baseUrl + "/guide/mozilla_print_opt1.JPG",
                        $rootScope.baseUrl + "/guide/mozilla_print_opt2.JPG",
                        $rootScope.baseUrl + "/guide/mozilla_print_opt3.JPG",
                        $rootScope.baseUrl + "/guide/chrome_print_pdf1.JPG",
                        $rootScope.baseUrl + "/guide/chrome_print_pdf2.JPG",
    ];

    $scope.clearFileInput = function(id) {
        var oldInput = document.getElementById(id);

        var newInput = document.createElement("input");

        newInput.type = "file";
        newInput.id = oldInput.id;
        newInput.name = oldInput.name;
        newInput.className = oldInput.className;
        newInput.style.cssText = oldInput.style.cssText;
        // TODO: copy any other relevant attributes 

        oldInput.parentNode.replaceChild(newInput, oldInput);
    }
    
    $scope.initializeResume = function () {
        $scope.selectedTemplate = null;
        $scope.clearFileInput("userImage");
        $("#userImage").get(0).files = null;
        $scope.resume = {
            Id: null,
            Name: null,
            Template: null,
            FirstName: null,
            MiddleName: null,
            LastName: null,
            DateOfBirth: null,
            Age: null,
            Height: null,
            Weight: null,
            CivilStatus: "Single",
            Citizenship: null,
            Gender: "Male",
            Address: null,
            ContactNo: null,
            EmailAddress: null,
            Objectives: null,
            Hobbies: null,
            Skills: [],
            Strengths: [],
            PostGraduates: [],
            Tertiaries: [],
            Secondaries: [],
            Primaries: [],
            WorkExperiences: [],
            Trainings: [],
            CharacterReferences: [],
            Type: null,
            ImageName: null
        }
        //$scope.resume = {
        //    Id: 1,
        //    Name: "Kenneth Carl Nacua Ybanez",
        //    Template: 1,
        //    FirstName: "Kenneth Carl",
        //    MiddleName: "Nacua",
        //    LastName: "Ybanez",
        //    DateOfBirth: "January 05, 1992",
        //    Age: 24,
        //    Height: "5'5",
        //    Weight: "67 Kilograms",
        //    CivilStatus: "Single",
        //    Citizenship: "Filipino",
        //    Gender: "Male",
        //    Address: "137 Bliss Pajac Lapu-Lapu City, 6015 Cebu, Philippines",
        //    ContactNo: "09434364318",
        //    EmailAddress: "kennethcarlybanez@gmail.com",
        //    Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
        //    Hobbies: "Jogging, lifting, playing basketball, watching hollywood series/movies and programming.",
        //    Skills: [
        //               { Description: "Good in written and oral communication" },
        //               { Description: "Basic Networking" },
        //               { Description: "Basic Computer Troubleshooting" },
        //               { Description: "Capable of developing Web Application, Mobile application through hybrid development and Desktop Application" },
        //               { Description: "Good in PowerBuilder, Visual Basic, C#, Java, PHP with CodeIgniter Framework, HTML, CSS, Bootstrap, Javascript, AngularJS, Ionic" },
        //               { Description: "Good in ASP.Net using Entity Framework with Lambda and LinQ Expression, Web API, File Handling, etc." },
        //               { Description: "Good in SQL queries using MySql and MSSQL" },
        //               { Description: "Basic NoSQL with MongoDB" },
        //               { Description: "Capable of using Github in Source Tree and npm CLI" }
        //    ],
        //    Strengths: [
        //        { Description: "Good attitude towards work" },
        //        { Description: "Highly competitive, self-starter who is organized and goal-oriented" },
        //        { Description: "Hardworking and Resourceful" },
        //        { Description: "Can work with less supervision" },
        //        { Description: "Eager to learn" }
        //    ],
        //    PostGraduates: [
        //       {
        //           School: "Cebu Institute of Technology – University",
        //           Degree: "Masters In Information Technology(June 2015-March 2016)",
        //           Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu, Philippines",
        //           Achievement: null
        //       },
        //    ],
        //    Tertiaries: [
        //         {
        //             School: "University of Cebu-LM",
        //             Degree: "Bachelor of Science in Information Technology (2008-2009)",
        //             Address: "A.C. Cortes Avenue Mandaue City, 6014 Cebu, Philippines",
        //             Achievement: null
        //         },
        //        {
        //            School: "University of Cebu-Banilad",
        //            Degree: "Bachelor of Science in Information Technology (2009-2013)",
        //            Address: "Archbishop Reyes Avenue, Banilad, Cebu City, 6000 Cebu, Philippines",
        //            Achievement: "Best in Capstone Awardee - Thesis was chosen as one of the best"
        //        }
        //    ],
        //    Secondaries: [
        //        {
        //            School: "Saint Dominic Learning Center (2004-2008)",
        //            Address: "Sangi Lapu-Lapu City, 6015 Cebu, Philippines",
        //            Achievement: null
        //        }
        //    ],
        //    Primaries: [
        //        {
        //            School: "Bankal Elementary School (1998-2004)",
        //            Address: "Bankal Lapu-lapu City, 6015 Cebu, Philippines",
        //            Achievement: null
        //        }
        //    ],
        //    WorkExperiences: [
        //        {
        //            Company: "Fastcargo Logistics Corporation",
        //            Address: "Central Visayas, Philippines",
        //            Period: "May 2014 - Present",
        //            Position: "IT Programmer/Analyst",
        //            MainRole: "Creating software application related to supply chain management using Powerbuilder and ASP.Net, I also support customer needs related to in-house application system and cascade developed/existing in-house applications to branches."
        //        },
        //        {
        //            Company: "Intellmed Inc.",
        //            Address: "Central Visayas, Philippines",
        //            Period: "Nov 2013 - Jan 2014",
        //            Position: "Software Engineer",
        //            MainRole: "Developed and designed softwares."
        //        }
        //    ],
        //    Trainings: [
        //        {
        //            Name: "ASP.Net/AngularJS Training",
        //            Description: "Web application development using MVC and entity framework with lambda and LinQ, Web API, AngularJS, etc.",
        //            Period: "March 03, 2015 - March 06, 2015"
        //        }
        //    ],
        //    CharacterReferences: [
        //        {
        //            Name: "John Crismund Elumbaring",
        //            Profession: "IT Professional",
        //            ContactNo: "09254858989"
        //        },
        //        {
        //            Name: "Lady Xyza G. Bation",
        //            Profession: "Accountant",
        //            ContactNo: "09255458527"
        //        }
        //    ],
        //    Type: "Public",
        //    ImageName: null
        //}
    }

    //Check if input contains letter only
    $('#firstName, #middleName, #lastName, #citizenship').keypress(function (key) {
        if (!((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45) && (key.charCode != 32)) || key.charCode == 241)
            return true;
            //for back space
        else if (key.charCode == 0)
            return true;
        else
            return false;
    });

    //Disable typing
    $('#dateOfBirth').keypress(function (key) {
        return false;
    });

    //Check if input is whole number
    $('#age').keypress(function (key) {
        if (key.charCode < 48 || key.charCode > 57) return false;
    });

    //Birthdate format
    $(function () {
        $('#dateOfBirth').datetimepicker({
            format: 'MMMM DD, YYYY',
            sideBySide: false
        });
    });

    $scope.displayError = function (message) {
        $scope.withFormError = true;
        $scope.errorFormMessage = message;
        $scope.process = "done";
        var promise = $interval(function () {
            $interval.cancel(promise);
            promise = undefined;
            document.getElementsByTagName("body")[0].scrollTop = 0;
        }, 300);
    }

    $scope.showGuide = function () {
        $('#guideModal').modal('show');
    }

    $scope.closeGuideModal = function () {
        $('#guideModal').modal('hide');
    }

    $scope.redirect = function (stateName) {
        $state.go(stateName);
    };

    $scope.add = function (type) {
        switch ($scope.modalTitle) {
            case "Skills":
                if ($scope.resume.Skills.length > 0) {
                    var currentIndex = $scope.resume.Skills.length - 1;
                    if ($scope.resume.Skills[currentIndex].Description == null || $scope.resume.Skills[currentIndex].Description.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please input description.";
                    }
                    else {
                        $scope.skills = {
                            Id: $scope.resume.Skills.length > 0 ? $scope.resume.Skills[$scope.resume.Skills.length - 1].Id + 1 : 1,
                            Description: null
                        }
                        $scope.resume.Skills.push($scope.skills);
                    }
                }
                else {
                    $scope.skills = {
                        Id: $scope.resume.Skills.length > 0 ? $scope.resume.Skills[$scope.resume.Skills.length - 1].Id + 1 : 1,
                        Description: null
                    }
                    $scope.resume.Skills.push($scope.skills);
                }
                $scope.buttonLabel = "Add Skill";
                break;
            case "Strengths":
                if ($scope.resume.Strengths.length > 0) {
                    var currentIndex = $scope.resume.Strengths.length - 1;
                    if ($scope.resume.Strengths[currentIndex].Description == null || $scope.resume.Strengths[currentIndex].Description.trim() == "")
                    {
                        $scope.withError = true;
                        $scope.errorMessage = "Please input description.";
                    }
                    else {
                        $scope.strength = {
                            Id: $scope.resume.Strengths.length > 0 ? $scope.resume.Strengths[$scope.resume.Strengths.length - 1].Id + 1 : 1,
                            Description: null
                        }
                        $scope.resume.Strengths.push($scope.strength);
                    }
                }
                else {
                    $scope.strength = {
                        Id: $scope.resume.Strengths.length > 0 ? $scope.resume.Strengths[$scope.resume.Strengths.length - 1].Id + 1 : 1,
                        Description: null
                    }
                    $scope.resume.Strengths.push($scope.strength);
                }
                $scope.buttonLabel = "Add Strength";
                break;
            case "Post Graduate":
                if ($scope.resume.PostGraduates.length > 0) {
                    var currentIndex = $scope.resume.PostGraduates.length - 1;
                    if ($scope.resume.PostGraduates[currentIndex].School == null
                        || $scope.resume.PostGraduates[currentIndex].Degree == null
                        || $scope.resume.PostGraduates[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.PostGraduates[currentIndex].School.trim() == ""
                        || $scope.resume.PostGraduates[currentIndex].Degree.trim() == ""
                        || $scope.resume.PostGraduates[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.postGrad = {
                            School: null,
                            Degree: null,
                            Address: null,
                            Achievement: null
                        }
                        $scope.resume.PostGraduates.push($scope.postGrad);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.postGrad = {
                        School: null,
                        Degree: null,
                        Address: null,
                        Achievement: null
                    }
                    $scope.resume.PostGraduates.push($scope.postGrad);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Post Graduate";
                break;
            case "Tertiary":
                if ($scope.resume.Tertiaries.length > 0) {
                    var currentIndex = $scope.resume.Tertiaries.length - 1;
                    if ($scope.resume.Tertiaries[currentIndex].School == null
                        || $scope.resume.Tertiaries[currentIndex].Degree == null
                        || $scope.resume.Tertiaries[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Tertiaries[currentIndex].School.trim() == ""
                        || $scope.resume.Tertiaries[currentIndex].Degree.trim() == ""
                        || $scope.resume.Tertiaries[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.postGrad = {
                            School: null,
                            Degree: null,
                            Address: null,
                            Achievement: null
                        }
                        $scope.resume.Tertiaries.push($scope.postGrad);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.postGrad = {
                        School: null,
                        Degree: null,
                        Address: null,
                        Achievement: null
                    }
                    $scope.resume.Tertiaries.push($scope.postGrad);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Tertiary";
                break;
            case "Secondary":
                if ($scope.resume.Secondaries.length > 0) {
                    var currentIndex = $scope.resume.Secondaries.length - 1;
                    if ($scope.resume.Secondaries[currentIndex].School == null
                        || $scope.resume.Secondaries[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Secondaries[currentIndex].School.trim() == ""
                        || $scope.resume.Secondaries[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.secondary = {
                            School: null,
                            Degree: null,
                            Address: null,
                            Achievement: null
                        }
                        $scope.resume.Secondaries.push($scope.secondary);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.secondary = {
                        School: null,
                        Degree: null,
                        Address: null,
                        Achievement: null
                    }
                    $scope.resume.Secondaries.push($scope.secondary);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Secondary";
                break;
            case "Primary":
                if ($scope.resume.Primaries.length > 0) {
                    var currentIndex = $scope.resume.Primaries.length - 1;
                    if ($scope.resume.Primaries[currentIndex].School == null
                        || $scope.resume.Primaries[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Primaries[currentIndex].School.trim() == ""
                        || $scope.resume.Primaries[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.primary = {
                            School: null,
                            Degree: null,
                            Address: null,
                            Achievement: null
                        }
                        $scope.resume.Primaries.push($scope.primary);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.primary = {
                        School: null,
                        Degree: null,
                        Address: null,
                        Achievement: null
                    }
                    $scope.resume.Primaries.push($scope.primary);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Primary";
                break;
            case "Work Experience":
                if ($scope.resume.WorkExperiences.length > 0) {
                    var currentIndex = $scope.resume.WorkExperiences.length - 1;
                    if ($scope.resume.WorkExperiences[currentIndex].Company == null
                        || $scope.resume.WorkExperiences[currentIndex].Address == null
                        || $scope.resume.WorkExperiences[currentIndex].Period == null
                        || $scope.resume.WorkExperiences[currentIndex].Position == null
                        || $scope.resume.WorkExperiences[currentIndex].MainRole == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.WorkExperiences[currentIndex].Company.trim() == ""
                        || $scope.resume.WorkExperiences[currentIndex].Address.trim() == ""
                        || $scope.resume.WorkExperiences[currentIndex].Period.trim() == ""
                        || $scope.resume.WorkExperiences[currentIndex].Position.trim() == ""
                        || $scope.resume.WorkExperiences[currentIndex].MainRole.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.workExp = {
                            Company: null,
                            Address: null,
                            Period: null,
                            Position: null,
                            MainRole: null
                        }
                        $scope.resume.WorkExperiences.push($scope.workExp);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.workExp = {
                        Company: null,
                        Address: null,
                        Period: null,
                        Position: null,
                        MainRole: null
                    }
                    $scope.resume.WorkExperiences.push($scope.workExp);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Work Experience";
                break;
            case "Training/Seminars Attended":
                if ($scope.resume.Trainings.length > 0) {
                    var currentIndex = $scope.resume.Trainings.length - 1;
                    if ($scope.resume.Trainings[currentIndex].Name == null
                        || $scope.resume.Trainings[currentIndex].Description == null
                        || $scope.resume.Trainings[currentIndex].Period == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Trainings[currentIndex].Name.trim() == ""
                        || $scope.resume.Trainings[currentIndex].Description.trim() == ""
                        || $scope.resume.Trainings[currentIndex].Period.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.seminars = {
                            Name: null,
                            Description: null,
                            Period: null
                        }
                        $scope.resume.Trainings.push($scope.seminars);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.seminars = {
                        Name: null,
                        Description: null,
                        Period: null
                    }
                    $scope.resume.Trainings.push($scope.seminars);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Training/Seminars Attended";
                break;
            case "Character Reference":
                if ($scope.resume.CharacterReferences.length > 0) {
                    var currentIndex = $scope.resume.CharacterReferences.length - 1;
                    if ($scope.resume.CharacterReferences[currentIndex].Name == null
                        || $scope.resume.CharacterReferences[currentIndex].Profession == null
                        || $scope.resume.CharacterReferences[currentIndex].ContactNo == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.CharacterReferences[currentIndex].Name.trim() == ""
                        || $scope.resume.CharacterReferences[currentIndex].Profession.trim() == ""
                        || $scope.resume.CharacterReferences[currentIndex].ContactNo.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.charRef = {
                            Name: null,
                            Profession: null,
                            ContactNo: null
                        }
                        $scope.resume.CharacterReferences.push($scope.charRef);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.charRef = {
                        Name: null,
                        Profession: null,
                        ContactNo: null
                    }
                    $scope.resume.CharacterReferences.push($scope.charRef);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Character Reference";
                break;
            default:
        }
        if(type == 1)
            $('#dynamicModal').modal('show');
    }

    $scope.remove = function (index) {
        $scope.withError = false;
        $scope.errorMessage = "";
        switch ($scope.modalTitle) {
            case "Skills":
                if ($scope.resume.Skills.length > 1)
                    $scope.resume.Skills.splice(index, 1);
                else
                    $scope.resume.Skills[index].Description = "";
                break;
            case "Strengths":
                if ($scope.resume.Strengths.length > 1)
                    $scope.resume.Strengths.splice(index, 1);
                else
                    $scope.resume.Strengths[index].Description = "";
                break;
            case "Post Graduate":
                if ($scope.resume.PostGraduates.length > 1)
                    $scope.resume.PostGraduates.splice(index, 1);
                else {
                    $scope.resume.PostGraduates[index].School = "";
                    $scope.resume.PostGraduates[index].Degree = "";
                    $scope.resume.PostGraduates[index].Address = "";
                    $scope.resume.PostGraduates[index].Achievement = "";
                }
                break;
            case "Tertiary":
                if ($scope.resume.Tertiaries.length > 1)
                    $scope.resume.Tertiaries.splice(index, 1);
                else {
                    $scope.resume.Tertiaries[index].School = "";
                    $scope.resume.Tertiaries[index].Degree = "";
                    $scope.resume.Tertiaries[index].Address = "";
                    $scope.resume.Tertiaries[index].Achievement = "";
                }
                break;
            case "Secondary":
                if ($scope.resume.Secondaries.length > 1)
                    $scope.resume.Secondaries.splice(index, 1);
                else {
                    $scope.resume.Secondaries[index].School = "";
                    $scope.resume.Secondaries[index].Address = "";
                    $scope.resume.Secondaries[index].Achievement = "";
                }
            case "Primary":
                if ($scope.resume.Primaries.length > 1)
                    $scope.resume.Primaries.splice(index, 1);
                else {
                    $scope.resume.Primaries[index].School = "";
                    $scope.resume.Primaries[index].Address = "";
                    $scope.resume.Primaries[index].Achievement = "";
                }
                break;
            case "Work Experience":
                if ($scope.resume.WorkExperiences.length > 1)
                    $scope.resume.WorkExperiences.splice(index, 1);
                else {
                    $scope.resume.WorkExperiences[index].Company = "";
                    $scope.resume.WorkExperiences[index].Address = "";
                    $scope.resume.WorkExperiences[index].Period = "";
                    $scope.resume.WorkExperiences[index].Position = "";
                    $scope.resume.WorkExperiences[index].MainRole = "";
                }
                break;
            case "Training/Seminars Attended":
                if ($scope.resume.Trainings.length > 1)
                    $scope.resume.Trainings.splice(index, 1);
                else {
                    $scope.resume.Trainings[index].Name = "";
                    $scope.resume.Trainings[index].Description = "";
                    $scope.resume.Trainings[index].Period = "";
                }
                break;
            case "Character Reference":
                if ($scope.resume.CharacterReferences.length > 1)
                    $scope.resume.CharacterReferences.splice(index, 1);
                else {
                    $scope.resume.CharacterReferences[index].Name = "";
                    $scope.resume.CharacterReferences[index].Profession = "";
                    $scope.resume.CharacterReferences[index].ContactNo = "";
                }
                break;
            default:
        }
    }

    $scope.closeModal = function () {
        switch ($scope.modalTitle) {
            case "Skills":
                for (var i = 0; i < $scope.resume.Skills.length; i++) {
                    if ($scope.resume.Skills[i].Description == null) {
                        $scope.resume.Skills.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Skills[i].Description.trim() == "") {
                        $scope.resume.Skills.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Strengths":
                for (var i = 0; i < $scope.resume.Strengths.length; i++) {
                    if ($scope.resume.Strengths[i].Description == null) {
                        $scope.resume.Strengths.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Strengths[i].Description.trim() == "") {
                        $scope.resume.Strengths.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Post Graduate":
                for (var i = 0; i < $scope.resume.PostGraduates.length; i++) {
                    if ($scope.resume.PostGraduates[i].School == null || $scope.resume.PostGraduates[i].Degree == null || $scope.resume.PostGraduates[i].Address == null) {
                        $scope.resume.PostGraduates.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.PostGraduates[i].School.trim() == "" || $scope.resume.PostGraduates[i].Degree.trim() == "" || $scope.resume.PostGraduates[i].Address.trim() == "") {
                        $scope.resume.PostGraduates.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Tertiary":
                for (var i = 0; i < $scope.resume.Tertiaries.length; i++) {
                    if ($scope.resume.Tertiaries[i].School == null || $scope.resume.Tertiaries[i].Degree == null || $scope.resume.Tertiaries[i].Address == null) {
                        $scope.resume.Tertiaries.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Tertiaries[i].School.trim() == "" || $scope.resume.Tertiaries[i].Degree.trim() == "" || $scope.resume.Tertiaries[i].Address.trim() == "") {
                        $scope.resume.Tertiaries.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Secondary":
                for (var i = 0; i < $scope.resume.Secondaries.length; i++) {
                    if ($scope.resume.Secondaries[i].School == null
                        || $scope.resume.Secondaries[i].Address == null) {
                        $scope.resume.Secondaries.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Secondaries[i].School.trim() == ""
                        || $scope.resume.Secondaries[i].Address.trim() == "") {
                        $scope.resume.Secondaries.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Primary":
                for (var i = 0; i < $scope.resume.Primaries.length; i++) {
                    if ($scope.resume.Primaries[i].School == null
                        || $scope.resume.Primaries[i].Address == null) {
                        $scope.resume.Primaries.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Primaries[i].School.trim() == ""
                        || $scope.resume.Primaries[i].Address.trim() == "") {
                        $scope.resume.Primaries.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Work Experience":
                for (var i = 0; i < $scope.resume.WorkExperiences.length; i++) {
                    if ($scope.resume.WorkExperiences[i].Company == null
                        || $scope.resume.WorkExperiences[i].Address == null
                        || $scope.resume.WorkExperiences[i].Position == null
                        || $scope.resume.WorkExperiences[i].Period == null
                        || $scope.resume.WorkExperiences[i].MainRole == null) {
                        $scope.resume.WorkExperiences.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.WorkExperiences[i].Company.trim() == ""
                        || $scope.resume.WorkExperiences[i].Address.trim() == ""
                        || $scope.resume.WorkExperiences[i].Position.trim() == ""
                        || $scope.resume.WorkExperiences[i].Period.trim() == ""
                        || $scope.resume.WorkExperiences[i].MainRole.trim() == "") {
                        $scope.resume.WorkExperiences.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Training/Seminars Attended":
                for (var i = 0; i < $scope.resume.Trainings.length; i++) {
                    if ($scope.resume.Trainings[i].Name == null
                        || $scope.resume.Trainings[i].Description == null
                        || $scope.resume.Trainings[i].Period == null) {
                        $scope.resume.Trainings.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Trainings[i].Name.trim() == ""
                        || $scope.resume.Trainings[i].Description.trim() == ""
                        || $scope.resume.Trainings[i].Period.trim() == "") {
                        $scope.resume.Trainings.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Character Reference":
                for (var i = 0; i < $scope.resume.CharacterReferences.length; i++) {
                    if ($scope.resume.CharacterReferences[i].Name == null
                        || $scope.resume.CharacterReferences[i].Profession == null
                        || $scope.resume.CharacterReferences[i].ContactNo == null) {
                        $scope.resume.CharacterReferences.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.CharacterReferences[i].Name.trim() == ""
                        || $scope.resume.CharacterReferences[i].Profession.trim() == ""
                        || $scope.resume.CharacterReferences[i].ContactNo.trim() == "") {
                        $scope.resume.CharacterReferences.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            default:
        }
        $scope.withError = false;
        $scope.errorMessage = "";
        $('#dynamicModal').modal('hide');
    }

    $scope.generateLines = function (value, currentNoOfLines, maxNoOfLines, maxCharacter, openingTag, closingTag, isParagraph) {
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
                if(isParagraph == true && i == 0)
                    data[3].Lines[lineIndex] = '<div style="min-width: 100%; text-align: justify; margin-left: 10px;">' + wordsPerLine[i] + closingTag + "\n";
                else
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
                if (isParagraph == true && i == 0)
                    data[3].Lines[lineIndex] = '<div style="min-width: 100%; text-align: justify; margin-left: 10px;">' + wordsPerLine[i] + closingTag + "\n";
                else
                    data[3].Lines[lineIndex] = openingTag + wordsPerLine[i] + closingTag + "\n";
                lineIndex = lineIndex + 1;
            }
            //Get html for write for new page
            data[4] = "";
        }
        return data;
    }

    $scope.initializeObjective = function (user, maxNoOfLines, maxCharacter) {
        var forWrite = $scope.generateLines(user.Objectives, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>", true);
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

    $scope.initializeHobbies = function (user, maxNoOfLines, maxCharacter) {
        var forWrite = $scope.generateLines(user.Hobbies, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>", true);
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
                $scope.contentHtml[i] = $scope.contentHtml[i].substr(0, currentLength - 1) + "<ul style='margin-bottom: 0px; '>\n" + $scope.contentHtml[i].substr(currentLength, $scope.contentHtml[i].length - 1) + "</ul>";
            } else {
                if (i > previousPageHolder) //Add tag in first line until last line
                    $scope.contentHtml[i] = "<ul style='margin-bottom: 0px; '>\n" + $scope.contentHtml[i] + "</ul>\n";
            }
        }
    }

    $scope.initializePostGraduates = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.PostGraduates.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "", achievementHTML = "";
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
            var forWrite = $scope.generateLines(user.PostGraduates[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.PostGraduates[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.PostGraduates[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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

            //Generate lines per user Achievement
            if (user.PostGraduates[i].Achievement != null && user.PostGraduates[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.PostGraduates[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
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
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.PostGraduates.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializeTertiaries = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        for (i = 0; i < user.Tertiaries.length; i++) {
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
            var forWrite = $scope.generateLines(user.Tertiaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.Tertiaries[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.Tertiaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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

            if (user.Tertiaries[i].Achievement != null && user.Tertiaries[i].Achievement.trim() != '') {
                //Generate lines per user Achievement
                var forWrite = $scope.generateLines(user.Tertiaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
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
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (i != user.Tertiaries.length - 1) {
                $scope.evaluate(maxNoOfLines);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
            }
        }
    }

    $scope.initializeSecondaries = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Secondary details
        for (i = 0; i < user.Secondaries.length; i++) {
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
            var forWrite = $scope.generateLines(user.Secondaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.Secondaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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

            //Generate lines per user Achievement
            if (user.Secondaries[i].Achievement != null && user.Secondaries[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.Secondaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
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
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.Secondaries.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrimaries = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Primary details
        for (i = 0; i < user.Primaries.length; i++) {
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
            var forWrite = $scope.generateLines(user.Primaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.Primaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            if (user.Primaries[i].Achievement != null && user.Primaries[i].Achievement.trim() != '') {
                //Generate lines per user Achievement
                var forWrite = $scope.generateLines(user.Primaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                                achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
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
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]">Achievement/s:</div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<div><div class="class[0]"></div><div class="class[1]">UserAchievement</div></div>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            achievementHTML = achievementHTML.replace("class[0]", classess[0]);
                            achievementHTML = achievementHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (i != user.Primaries.length - 1) {
                $scope.evaluate(maxNoOfLines);
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
            }
        }
    }

    $scope.initializeWorkExperiences = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Work Experience details
        for (i = 0; i < user.WorkExperiences.length; i++) {
            var companyHTML = "", addressHTML = "", periodHTML = "", positionHTML = "", mainRoleHTML = "";
            //Generate lines per company
            var forWrite = $scope.generateLines(user.WorkExperiences[i].Company, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.WorkExperiences[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.WorkExperiences[i].Period, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.WorkExperiences[i].Position, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
            var forWrite = $scope.generateLines(user.WorkExperiences[i].MainRole, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
                if (i != user.WorkExperiences.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializeTrainings = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Seminars/Trainings details
        for (i = 0; i < user.Trainings.length; i++) {
            var nameHTML = "", descriptionHTML = "", periodHTML = "";
            //Generate lines per name
            var forWrite = $scope.generateLines(user.Trainings[i].Name, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">STName</div></div>\n';
                            nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                            nameHTML = nameHTML.replace("class[0]", classess[0]);
                            nameHTML = nameHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<div><div class="class[0]"></div><div class="class[1]">STName</div></div>\n';
                            nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                            nameHTML = nameHTML.replace("class[0]", classess[0]);
                            nameHTML = nameHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
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
                        nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">STName</div></div>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[4].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<div><div class="class[0]"></div><div class="class[1]">STName</div></div>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[4].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">STName</div></div>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<div><div class="class[0]"></div><div class="class[1]">STName</div></div>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    }
                }
            }

            //Generate lines per Description
            var forWrite = $scope.generateLines(user.Trainings[i].Description, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            descriptionHTML = '<div><div class="class[0]">Description:</div><div class="class[1]">STDescription</div></div>\n';
                            descriptionHTML = descriptionHTML.replace("STDescription", forWrite[3].Lines[j]);
                            descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                            descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            descriptionHTML = '<div><div class="class[0]"></div><div class="class[1]">STDescription</div></div>\n';
                            descriptionHTML = descriptionHTML.replace("STDescription", forWrite[3].Lines[j]);
                            descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                            descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
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
                        descriptionHTML = '<div><div class="class[0]">Description:</div><div class="class[1]">STDescription</div></div>\n';
                        descriptionHTML = descriptionHTML.replace("STDescription", forWrite[4].Lines[j]);
                        descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                        descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        descriptionHTML = '<div><div class="class[0]"></div><div class="class[1]">STDescription</div></div>\n';
                        descriptionHTML = descriptionHTML.replace("STDescription", forWrite[4].Lines[j]);
                        descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                        descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        descriptionHTML = '<div><div class="class[0]">Description:</div><div class="class[1]">STDescription</div></div>\n';
                        descriptionHTML = descriptionHTML.replace("STDescription", forWrite[3].Lines[j]);
                        descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                        descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        descriptionHTML = '<div><div class="class[0]"></div><div class="class[1]">STDescription</div></div>\n';
                        descriptionHTML = descriptionHTML.replace("STDescription", forWrite[3].Lines[j]);
                        descriptionHTML = descriptionHTML.replace("class[0]", classess[0]);
                        descriptionHTML = descriptionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + descriptionHTML;
                    }
                }
            }
            //Generate lines per Period
            var forWrite = $scope.generateLines(user.Trainings[i].Period, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">STPeriod</div></div>\n';
                            periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                            periodHTML = periodHTML.replace("class[0]", classess[0]);
                            periodHTML = periodHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<div><div class="class[0]"></div><div class="class[1]">STPeriod</div></div>\n';
                            periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
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
                        periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">STPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[4].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<div><div class="class[0]"></div><div class="class[1]">STPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[4].Lines[j]);
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
                        periodHTML = '<div><div class="class[0]">Period:</div><div class="class[1]">STPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<div><div class="class[0]"></div><div class="class[1]">STPeriod</div></div>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + periodHTML;
                    }
                }
            }
            
            if (isEvaluate) {
                if (i != user.Trainings.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializeCharacterReferences = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user Seminars/Trainings details
        for (i = 0; i < user.CharacterReferences.length; i++) {
            var nameHTML = "", professionHTML = "", contactHTML = "";
            //Generate lines per name
            var forWrite = $scope.generateLines(user.CharacterReferences[i].Name, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">CRName</div></div>\n';
                            nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                            nameHTML = nameHTML.replace("class[0]", classess[0]);
                            nameHTML = nameHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<div><div class="class[0]"></div><div class="class[1]">CRName</div></div>\n';
                            nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                            nameHTML = nameHTML.replace("class[0]", classess[0]);
                            nameHTML = nameHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
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
                        nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">CRName</div></div>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[4].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<div><div class="class[0]"></div><div class="class[1]">CRName</div></div>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[4].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<div><div class="class[0]">Name:</div><div class="class[1]">CRName</div></div>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<div><div class="class[0]"></div><div class="class[1]">CRName</div></div>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                        nameHTML = nameHTML.replace("class[0]", classess[0]);
                        nameHTML = nameHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + nameHTML;
                    }
                }
            }

            //Generate lines per Profession
            var forWrite = $scope.generateLines(user.CharacterReferences[i].Profession, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            professionHTML = '<div><div class="class[0]">Profession:</div><div class="class[1]">CRProfession</div></div>\n';
                            professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                            professionHTML = professionHTML.replace("class[0]", classess[0]);
                            professionHTML = professionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            professionHTML = '<div><div class="class[0]"></div><div class="class[1]">CRProfession</div></div>\n';
                            professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                            professionHTML = professionHTML.replace("class[0]", classess[0]);
                            professionHTML = professionHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
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
                        professionHTML = '<div><div class="class[0]">Profession:</div><div class="class[1]">CRProfession</div></div>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[4].Lines[j]);
                        professionHTML = professionHTML.replace("class[0]", classess[0]);
                        professionHTML = professionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        professionHTML = '<div><div class="class[0]"></div><div class="class[1]">CRProfession</div></div>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[4].Lines[j]);
                        professionHTML = professionHTML.replace("class[0]", classess[0]);
                        professionHTML = professionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        professionHTML = '<div><div class="class[0]">Profession:</div><div class="class[1]">CRProfession</div></div>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                        professionHTML = professionHTML.replace("class[0]", classess[0]);
                        professionHTML = professionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        professionHTML = '<div><div class="class[0]"></div><div class="class[1]">CRProfession</div></div>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                        professionHTML = professionHTML.replace("class[0]", classess[0]);
                        professionHTML = professionHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + professionHTML;
                    }
                }
            }
            //Generate lines per contactHTML
            var forWrite = $scope.generateLines(user.CharacterReferences[i].ContactNo, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            contactHTML = '<div><div class="class[0]">Contact:</div><div class="class[1]">CRContact</div></div>\n';
                            contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                            contactHTML = contactHTML.replace("class[0]", classess[0]);
                            contactHTML = contactHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            contactHTML = '<div><div class="class[0]"></div><div class="class[1]">CRContact</div></div>\n';
                            contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                            contactHTML = contactHTML.replace("class[0]", classess[0]);
                            contactHTML = contactHTML.replace("class[1]", classess[1]);
                            $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
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
                        contactHTML = '<div><div class="class[0]">Contact:</div><div class="class[1]">CRContact</div></div>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[4].Lines[j]);
                        contactHTML = contactHTML.replace("class[0]", classess[0]);
                        contactHTML = contactHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        contactHTML = '<div><div class="class[0]"></div><div class="class[1]">CRContact</div></div>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[4].Lines[j]);
                        contactHTML = contactHTML.replace("class[0]", classess[0]);
                        contactHTML = contactHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        contactHTML = '<div><div class="class[0]">Contact:</div><div class="class[1]">CRContact</div></div>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                        contactHTML = contactHTML.replace("class[0]", classess[0]);
                        contactHTML = contactHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        contactHTML = '<div><div class="class[0]"></div><div class="class[1]">CRContact</div></div>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                        contactHTML = contactHTML.replace("class[0]", classess[0]);
                        contactHTML = contactHTML.replace("class[1]", classess[1]);
                        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contactHTML;
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.CharacterReferences.length - 1) {
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
            $scope.currentLines = $scope.currentLines + 1;
        }
        else if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else
            $scope.currentLines = $scope.currentLines + 1;
    };

    $scope.writeNewLine = function (isEvaluate, maxNoOfLines, withBorder) {
        if (isEvaluate)
            $scope.evaluate(maxNoOfLines);
        if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else {
            if (withBorder)
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div style="border-top: 1px solid #333;"><br /></div>' + "\n";
            else
                $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        }
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
                        holder = forWrite[3].Lines[j].substr(0, 18) + "&nbsp;" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
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
                    holder = forWrite[4].Lines[j].substr(0, 18) + "&nbsp;" + forWrite[4].Lines[j].substr(18, forWrite[4].Lines[j].length - 1);
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
                    holder = forWrite[3].Lines[j].substr(0, 18) + "&nbsp;" + forWrite[3].Lines[j].substr(18, forWrite[3].Lines[j].length - 1);
                    contentHTML = '<div><div class="class[0]"></div><div class="class[1]">Content</div></div>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("class[0]", classess[0]);
                    contentHTML = contentHTML.replace("class[1]", classess[1]);
                    $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount] + contentHTML;
                }
            }
        }
    };

    $scope.writeContent1 = function (isEvaluate, maxNoOfLines, label, content, classess, maxCharacter) {
        var forWrite = $scope.generateLines(content.toString(), $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line line-center">', "</div>");
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
        $scope.currentPage = page;
        user.DateOfBirth = $filter('date')(document.getElementById("dateOfBirthValue").value, "MMMM dd, yyyy");

        switch (template) {
            case 1:
                $scope.templateOne(user, maxNoOfLines, false);
                break;
            case 2:
                $scope.templateTwo(user, maxNoOfLines, false);
                break;
            case 3:
                $scope.templateThree(user, maxNoOfLines, false);
                break;
            case 4:
                $scope.templateFour(user, maxNoOfLines, false);
                break;
            case 5:
                $scope.templateFive(user, maxNoOfLines, false);
                break;
            default:
        }
        $scope.contentHtml[1] = $scope.contentHtml[1].replace('width="50"', 'width="100"');
        $scope.contentHtml[1] = $scope.contentHtml[1].replace('height="50"', 'height="100"');
        $scope.showPage();
        $scope.process = "done/showmodal";

        //Initialize $scope.resumePages
        $scope.resumePages = [];
        for (var i = 1; i <= $scope.contentHtml.length - 1; i++) {
            $scope.holder = {
                Id: "Page" + i.toString(),
                Content: $scope.contentHtml[i]
            }
            $scope.resumePages.push($scope.holder);
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

        //Initialize div for print
        switch (user.Template) {
            case 1:
                $scope.templateOnePrint(user, maxNoOfLines);
                break;
            case 2:
                $scope.templateTwoPrint(user, maxNoOfLines);
                break;
            case 3:
                $scope.templateThreePrint(user, maxNoOfLines);
                break;
            case 4:
                $scope.templateFourPrint(user, maxNoOfLines);
                break;
            case 5:
                $scope.templateFivePrint(user, maxNoOfLines);
                break;
            default:
        }

        $scope.resumeShown = true;
    }

    $scope.showDocument = function (page) {
        var pageHolder = page.split("Page");
        $scope.currentPage = parseInt(pageHolder[1]);
        $scope.showPage();
        document.getElementById("c-modal-content").style.backgroundColor = "white";
        document.getElementById("c-modal-content").className = "content-container show-content-container";
        $scope.isByPage = false;
    }

    $scope.showByPage = function () {
        if ($scope.resumeShown) {
            $scope.isByPage = true;
            $scope.showButtons = false;
            //Resize Image
            document.getElementById("Page1").innerHTML = document.getElementById("Page1").innerHTML.replace('width="100"', 'width="50"');
            document.getElementById("Page1").innerHTML = document.getElementById("Page1").innerHTML.replace('height="100"', 'height="50"');
            document.getElementById("c-modal-content").style.backgroundColor = "#F8F8F8 ";
            document.getElementById("c-modal-content").className = "content-container show-overflow show-content-container";
        }
        else {
            if ($scope.isByTemplatePage) {
                $scope.templateShown = true;
                $scope.isByPage = false;
                $scope.isByTemplatePage = false;
                $scope.showButtonContainer = false;
                $scope.showButtons = false;
                $scope.showPageIndicator = false;
                $scope.resumeShown = false;
                document.getElementById("c-modal-content").style.backgroundColor = "#F8F8F8";
                document.getElementById("c-modal-content").className = "content-container show-overflow show-content-container";
            } else {
                $scope.isByTemplatePage = false;
                $scope.templateShown = false;
            }
        }
    };

    $scope.showByTemplatePage = function (template, page, index) {
        $scope.selectedTemplate = template.TemplateName;
        $scope.contentHtmlTemplate = [];
        $scope.isByTemplatePage = true;
        $scope.templateShown = false;
        $scope.showPageIndicator = true;
        $scope.showButtons = true;
        $scope.currentPage = page;
        document.getElementById("c-modal-content").style.backgroundColor = "white";
        document.getElementById("c-modal-content").className = "content-container show-content-container";

        for (var i = 0; i < template.Content.length; i++) {
            $scope.contentHtmlTemplate.push(template.Content[i]);
        }
        
        $scope.contentHtmlTemplate[0] = $scope.contentHtmlTemplate[0].replace('width="50"', 'width="100"');
        $scope.contentHtmlTemplate[0] = $scope.contentHtmlTemplate[0].replace('height="50"', 'height="100"');

        //reset selected
        for (var i = 0; i < document.querySelectorAll(".resume-template-content-container").length; i++)
            document.querySelectorAll(".resume-template-content-container")[i].className = "resume-template-content-container";

        document.querySelectorAll(".resume-template-content-container")[index].className = "resume-template-content-container selected-template";
       
        $scope.resume.Template = template.Id;
        $scope.carlTemplate.Template = template.Id;
        //Initialize div for print
        switch (template.Id) {
            case 1:
                $scope.templateOnePrint($scope.carlTemplate, 30);
                break;
            case 2:
                $scope.templateTwoPrint($scope.carlTemplate, 30);
                break;
            case 3:
                $scope.templateThreePrint($scope.carlTemplate, 30);
                break;
            case 4:
                $scope.templateFourPrint($scope.carlTemplate, 30);
                break;
            case 5:
                $scope.templateFivePrint($scope.carlTemplate, 30);
                break;
            default:
        }
        $scope.showPage();
    }

    $scope.downloadResume = function () {
        alert("Allow pop-ups for this website if unable to download.");
        $scope.url = $rootScope.baseUrl + "api/users?type=1";
        $scope.container = { Objectives: $scope.htmlForDownload };
        $http.post($scope.url, $scope.container)
        .success(function (data, status) {
            if (data.status == "SUCCESS") {
                window.open($rootScope.baseUrl + "Home/DownloadMSResume?token=@" + data.stringParam1, '_blank');
            }
            else
                $scope.displayError(data.message);
        })
        .error(function (data, status) {
            if (status == 401)
                $scope.displayError("Unauthorized request.");
            else
                $scope.displayError("Server is down");
        })
       
    }

    $scope.getContent = function (page) {
        $scope.currentPage = page;
        $scope.showPage();
    };

    $scope.showPage = function () {
        if (!$scope.isByTemplatePage) {
            document.getElementById("c-content").innerHTML = "";
            document.getElementById("c-content").innerHTML = $scope.contentHtml[$scope.currentPage];
        }
        else {
            document.getElementById("c-content").innerHTML = "";
            document.getElementById("c-content").innerHTML = $scope.contentHtmlTemplate[$scope.currentPage - 1];
        }
    }

    $scope.showResume = function (resumeInfo, template) {
        $scope.showLoader();
        var showContentPreview = $interval(function () {
            $interval.cancel(showContentPreview);
            showContentPreview = undefined;
            $scope.currentPage = 1;
            var maxNoOfLines = 30;
            $scope.showPreview(resumeInfo, maxNoOfLines, $scope.currentPage, template);
        }, 500);
    };

    $scope.showTemplates = function () {
        //initialize the determine to show templates
        $scope.templateShown = true;
        $scope.isByTemplatePage = false;
        $scope.showButtonContainer = false;
        $scope.showButtons = false;
        $scope.showPageIndicator = false;
        $scope.process = "done/showmodal";
        document.getElementById("c-modal-container").className = "modal-container show-modal-container";
        document.getElementById("c-modal-content").className = "content-container show-content-container";
        document.getElementById("c-modal-content").style.backgroundColor = "#F8F8F8";
        document.getElementById("c-modal-content").className = "content-container show-overflow show-content-container";
    }

    $scope.closeResume = function () {
        if ($scope.resumeShown) {
            if (!$scope.isByPage) {
                document.getElementById("c-modal-container").className = "modal-container hide-modal-container";
                document.getElementById("c-modal-content").className = "content-container hide-content-container";
                document.getElementById("c-loader").className = "loader-container hide-loading";
                $scope.showButtonContainer = false;
                $scope.showButtons = false;
                $scope.resumeShown = false;
                $scope.currentPage = 1;
            }
            else {
                $scope.isByPage = false;
                document.getElementById("c-modal-content").style.backgroundColor = "white";
                document.getElementById("c-modal-content").className = "content-container show-content-container"
            }
        }
        else {
            $scope.isByTemplatePage = false;
            $scope.templateShown = false;
            $scope.showButtonContainer = false;
            $scope.showButtons = false;
            $scope.currentPage = 1;
            document.getElementById("c-modal-container").className = "modal-container hide-modal-container";
            document.getElementById("c-modal-content").className = "content-container hide-content-container";
            document.getElementById("c-loader").className = "loader-container hide-loading";

        }
        
    };

    $scope.showLoader = function () {
        $scope.process = "start";
        $scope.showButtonContainer = false;
        $scope.showButtons = false;
        $scope.showPageIndicator = false;
        document.getElementById("c-modal-container").className = "modal-container show-modal-container";
        document.getElementById("c-modal-content").className = "content-container show-content-container";
        document.getElementById("c-loader").className = "loader-container show-loading";
    };

    $scope.replaceAllCharacter = function (value, charToRemove, charToReplace) {
        for (var key in value) {
            if (typeof value[key] == "string")
                value[key] = value[key].split(charToRemove).join(charToReplace);
            else if (typeof value[key] == "object") {
                //Iterate each object of an array of object
                if (Object.prototype.toString.call(value[key]) === '[object Array]') {
                    for (var i = 0; i < value[key].length; i++) {
                        //iterate key of an object
                        for (var key1 in value[key][i]) {
                            if (key1 != "$$hashKey")
                                value[key][i][key1] = value[key][i][key1].split(charToRemove).join(charToReplace);
                        }
                    }
                }
                else {
                    for (var key1 in value[key]) {
                        value[key][key1] = value[key][key1].split(charToRemove).join(charToReplace);
                    }
                }
            }
        }
    };

    $scope.generateTemplates = function () {
        $scope.showLoader();
        $http.get($rootScope.baseUrl + "api/generatetoken")
        .success(function (data, status) {
            if (data.status == "SUCCESS") {
                $http.defaults.headers.common['Token'] = data.stringParam1;
                $http.get($rootScope.baseUrl + "api/users?username=kennethcarlnacuaybanez")
                .success(function (data, status) {
                    if (data.status == "SUCCESS") {
                        //Generate templates
                        data.objParam1.Name = data.objParam1.FirstName + " " + data.objParam1.MiddleName + " " + data.objParam1.LastName;
                        $scope.carlTemplate = data.objParam1;
                        $scope.templateOne(data.objParam1, 30, true);
                        $http.defaults.headers.common['Token'] = data.stringParam1;
                    }
                    else {
                        $scope.process = "done";
                        $scope.displayError("No available template.");
                    }
                })
                .error(function (data, status) {
                    $scope.process = "done";
                    if (status == 401)
                        $scope.displayError("Unauthorized request.");
                    else
                        $scope.displayError("Server is down");
                })
            }
        })
        .error(function (data, status) {
            $scope.process = "done";
            if (status == 401)
                $scope.displayError("Unauthorized request.");
            else
                $scope.displayError("Server is down");
        })
    };

    $scope.templateOne = function (user, maxNoOfLines, writeTemplates) {
        $scope.object = { Id: 1, ElementId: "Template1", Content: [], TemplateName: "Image on Left" };
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img style="margin-right: 20px;" src="UserImage" width="50" height="50" align="left">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 55);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 55);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 55);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 55);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "HOBBIES", "line line-label");
        //Inialize User Hobbies
        $scope.initializeHobbies(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
        }
        if (writeTemplates) {
            for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
                $scope.object.Content.push($scope.contentHtml[i]);
            $scope.templateContainer.push($scope.object);

            var writeContent = $interval(function () {
                var index = $scope.templateContainer.length - 1;
                if (document.getElementById($scope.templateContainer[index].ElementId) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.templateContainer[index].ElementId).innerHTML = $scope.templateContainer[index].Content[0];
                    $scope.templateTwo(user, maxNoOfLines, true);
                }
            }, 100);
        }
    }

    $scope.templateTwo = function (user, maxNoOfLines, writeTemplates) {
        $scope.object = { Id: 2, ElementId: "Template2", Content: [], TemplateName: "Image on Center" };
        $scope.currentLines = 5;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<center><img style="margin-bottom: 10px;" src="UserImage" width="50" height="50"></center>' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        //Initialize User Name
        $scope.writeContent1(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Address
        $scope.writeContent1(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Contact No
        $scope.writeContent1(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Email Address
        $scope.writeContent1(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "HOBBIES", "line line-label");
        //Inialize User Hobbies
        $scope.initializeHobbies(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
        }
        if (writeTemplates) {
            for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
                $scope.object.Content.push($scope.contentHtml[i]);

            $scope.templateContainer.push($scope.object);

            var writeContent = $interval(function () {
                var index = $scope.templateContainer.length - 1;
                if (document.getElementById($scope.templateContainer[index].ElementId) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.templateContainer[index].ElementId).innerHTML = $scope.templateContainer[index].Content[0];
                    $scope.templateThree(user, maxNoOfLines, true);
                }
            }, 100);
        }
    }

    $scope.templateThree = function (user, maxNoOfLines, writeTemplates) {
        $scope.object = { Id: 3, ElementId: "Template3", Content: [], TemplateName: "Image on Right" };
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img src="UserImage" width="50" height="50" align="right">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        //$scope.writeNewLine(true, maxNoOfLines);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 60);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "HOBBIES", "line line-label");
        //Inialize User Hobbies
        $scope.initializeHobbies(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
        }
        if (writeTemplates) {
            for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
                $scope.object.Content.push($scope.contentHtml[i]);

            $scope.templateContainer.push($scope.object);

            var writeContent = $interval(function () {
                var index = $scope.templateContainer.length - 1;
                if (document.getElementById($scope.templateContainer[index].ElementId) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.templateContainer[index].ElementId).innerHTML = $scope.templateContainer[index].Content[0];
                    $scope.templateFour(user, maxNoOfLines, true);
                }
            }, 100);
        }
    }

    $scope.templateFour = function (user, maxNoOfLines, writeTemplates) {
        $scope.object = { Id: 4, ElementId: "Template4", Content: [], TemplateName: "Plain Text" };
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        $scope.contentHtml[$scope.pageCount] = "";

        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 60);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);    
        $scope.writeHeaderContent(true, maxNoOfLines, "HOBBIES", "line line-label");
        //Inialize User Hobbies
        $scope.initializeHobbies(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
        }
        if (writeTemplates) {
            for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
                $scope.object.Content.push($scope.contentHtml[i]);

            $scope.templateContainer.push($scope.object);

            var writeContent = $interval(function () {
                var index = $scope.templateContainer.length - 1;
                if (document.getElementById($scope.templateContainer[index].ElementId) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.templateContainer[index].ElementId).innerHTML = $scope.templateContainer[index].Content[0];
                    $scope.templateFive(user, maxNoOfLines, true);
                }
            }, 100);
        }
    }

    //Note: Set process to done to last template
    $scope.templateFive = function (user, maxNoOfLines, writeTemplates) {
        $scope.object = { Id: 5, ElementId: "Template5", Content: [], TemplateName: "Plain Text With Border" };
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        $scope.contentHtml[$scope.pageCount] = "";

        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Gender
        $scope.writeContent(false, maxNoOfLines, "Gender", user.Gender, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Civil Status
        $scope.writeContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Height
        $scope.writeContent(false, maxNoOfLines, "Height", user.Height, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Weight
        $scope.writeContent(false, maxNoOfLines, "Weight", user.Weight, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Citizenship
        $scope.writeContent(false, maxNoOfLines, "Citizenship", user.Citizenship, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 60);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 60);
        $scope.writeNewLine(true, maxNoOfLines, true);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines, true);
        $scope.writeHeaderContent(true, maxNoOfLines, "HOBBIES", "line line-label");
        //Inialize User Hobbies
        $scope.initializeHobbies(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines, true);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "QUALIFICATIONS", "line line-label");
            if (user.Skills.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Skills:", "line line-label-medium");
                //Initialize Skills
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writeNewLine(true, maxNoOfLines, true);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
            $scope.writeNewLine(true, maxNoOfLines, true);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 80);
        }
        if (writeTemplates) {
            for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
                $scope.object.Content.push($scope.contentHtml[i]);

            $scope.templateContainer.push($scope.object);

            var writeContent = $interval(function () {
                var index = $scope.templateContainer.length - 1;
                if (document.getElementById($scope.templateContainer[index].ElementId) != null) {
                    $interval.cancel(writeContent);
                    writeContent = undefined;
                    document.getElementById($scope.templateContainer[index].ElementId).innerHTML = $scope.templateContainer[index].Content[0];
                    $scope.process = "done";
                    $scope.showGuide();
                }
            }, 100);
        }
    }

    $scope.generatePrintLines = function (value, currentNoOfLines, maxNoOfLines, maxCharacter, openingTag, closingTag, isParagraph) {
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
                if (isParagraph == true && i == 0)
                    data[3].Lines[lineIndex] = '<div style="font-size: 90%; font-family:cursive; min-width: 100%; text-align: justify; margin-left: 10px;">' + wordsPerLine[i] + closingTag + "\n";
                else
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
                if (isParagraph == true && i == 0)
                    data[3].Lines[lineIndex] = '<div style="font-size: 90%; font-family:cursive; min-width: 100%; text-align: justify; margin-left: 10px;">' + wordsPerLine[i] + closingTag + "\n";
                else
                    data[3].Lines[lineIndex] = openingTag + wordsPerLine[i] + closingTag + "\n";
                lineIndex = lineIndex + 1;
            }
            //Get html for write for new page
            data[4] = "";
        }
        return data;
    }

    $scope.evaluatePrint = function (maxNoOfLines) {
        if ($scope.currentLines == maxNoOfLines) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 1;
        }
        else if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else
            $scope.currentLines = $scope.currentLines + 1;
    };

    $scope.writePrintContent = function (isEvaluate, maxNoOfLines, label, content, maxCharacter) {
        if (isEvaluate)
            $scope.evaluatePrint(maxNoOfLines);
        var forWrite = $scope.generatePrintLines(content.toString(), $scope.currentLines, maxNoOfLines, maxCharacter, '', '');

        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = ":" + forWrite[3].Lines[j];
                        contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;">Label</td><td style="width: auto;">Content</td></tr></table>\n';
                        contentHTML = contentHTML.replace("Content", holder);
                        contentHTML = contentHTML.replace("Label", label);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                    } else {
                        holder = "&nbsp;" + forWrite[3].Lines[j];
                        contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;"></td><td style="width: auto;">Content</td></tr></table>\n';
                        contentHTML = contentHTML.replace("Content", holder);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                    }
                }
            }

            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var j = 0; j < forWrite[4].Lines.length; j++) {
                if (j == 0) {
                    holder = ":" + forWrite[4].Lines[j];
                    contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;">Label</td><td style="width: auto;">Content</td></tr></table>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("Label", label);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                } else {
                    holder = "&nbsp;" + forWrite[4].Lines[j];
                    contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;"></td><td style="width: auto;">Content</td></tr></table>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                }
            }
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var j = 0; j < forWrite[3].Lines.length; j++) {
                if (j == 0) {
                    holder = ":" + forWrite[3].Lines[j];
                    contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;">Label</td><td style="width: auto;">Content</td></tr></table>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    contentHTML = contentHTML.replace("Label", label);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                } else {
                    holder = "&nbsp;" + forWrite[3].Lines[j];
                    contentHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 100px; font-weight: bold;"></td><td style="width: auto;">Content</td></tr></table>\n';
                    contentHTML = contentHTML.replace("Content", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contentHTML;
                }
            }
        }
    };

    $scope.writePrintContent1 = function (isEvaluate, maxNoOfLines, label, content, maxCharacter) {
        var forWrite = $scope.generatePrintLines(content.toString(), $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="font-size: 90%; font-family:cursive; min-width: 100%;text-align: center;">', "</div>");
        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var i = 0; i < forWrite[3].Lines.length; i++)
                    holder = holder + forWrite[3].Lines[i];
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
            }
            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var i = 0; i < forWrite[4].Lines.length; i++)
                holder = holder + forWrite[4].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var i = 0; i < forWrite[3].Lines.length; i++)
                holder = holder + forWrite[3].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        }
    };

    $scope.writePrintNewLine = function (isEvaluate, maxNoOfLines, withBorder) {
        if (isEvaluate)
            $scope.evaluatePrint(maxNoOfLines);
        if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else {
            if (withBorder)
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div style="border-top: 1px solid #333;"><br /></div>' + "\n";
            else
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
        }
    };

    $scope.writePrintHeaderContent = function (isEvaluate, maxNoOfLines, content) {
        if ($scope.currentLines == maxNoOfLines) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 1;
        }
        else if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else
            $scope.currentLines = $scope.currentLines + 1;

        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div style="font-size: 100%; font-family:cursive; width: 550px; font-weight: bold;">Content</div>' + "\n";
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount].replace("Content", content);
    };

    $scope.writePrintHeaderContentMedium = function (isEvaluate, maxNoOfLines, content) {
        if ($scope.currentLines == maxNoOfLines) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 1;
        }
        else if ($scope.currentLines == maxNoOfLines - 1) {
            $scope.currentLines = 0;
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = $scope.currentLines + 2;
        }
        else
            $scope.currentLines = $scope.currentLines + 1;
        
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div style="width: 550px; font-size: 90%; font-family:cursive; font-weight: bold; margin-left: 10px;">Content</div>' + "\n";
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount].replace("Content", content);
    };

    $scope.initializePrintObjective = function (user, maxNoOfLines, maxCharacter) {
        var forWrite = $scope.generatePrintLines(user.Objectives, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify; font-size: 90%; font-family:cursive; ">', "</div>", true);
        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var i = 0; i < forWrite[3].Lines.length; i++)
                    holder = holder + forWrite[3].Lines[i];
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
            }
            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var i = 0; i < forWrite[4].Lines.length; i++)
                holder = holder + forWrite[4].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var i = 0; i < forWrite[3].Lines.length; i++)
                holder = holder + forWrite[3].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        }
    }

    $scope.initializePrintHobbies = function (user, maxNoOfLines, maxCharacter) {
        var forWrite = $scope.generatePrintLines(user.Hobbies, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="font-size: 90%; min-width: 100%; text-align: justify; font-family:cursive;>', "</div>", true);
        var holder = "";
        if (forWrite[0] == "New Page") {
            //Process current page
            if (forWrite[1] > 0) {
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var i = 0; i < forWrite[3].Lines.length; i++)
                    holder = holder + forWrite[3].Lines[i];
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
            }
            //Process new page
            holder = "";
            $scope.pageCount = $scope.pageCount + 1;
            $scope.contentPrintHtml[$scope.pageCount] = "";
            $scope.currentLines = forWrite[2];
            for (var i = 0; i < forWrite[4].Lines.length; i++)
                holder = holder + forWrite[4].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        } else {
            //Process current page
            $scope.currentLines = $scope.currentLines + forWrite[1];
            for (var i = 0; i < forWrite[3].Lines.length; i++)
                holder = holder + forWrite[3].Lines[i];
            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + holder;
        }
    }

    $scope.initializePrintByUnderlineTag = function (value, maxNoOfLines, maxCharacter) {
        var currentLength = $scope.contentPrintHtml[$scope.pageCount].length, previousPageHolder = $scope.pageCount;
        for (i = 0; i < value.length; i++) {
            var forWrite = $scope.generatePrintLines(value[i].Description, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="font-size: 90%; font-family:cursive; min-width: 100%; text-align: justify;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + "<li>\n" + holder + "</li>\n";
            }
        }

        for (var i = 1; i <= $scope.pageCount; i++) {
            if (i == previousPageHolder) { //Add tag where <li> is located until last line
                $scope.contentPrintHtml[i] = $scope.contentPrintHtml[i].substr(0, currentLength - 1) + "<ul style='margin-bottom: 0px; '>\n" + $scope.contentPrintHtml[i].substr(currentLength, $scope.contentPrintHtml[i].length - 1) + "</ul>";
            } else {
                if (i > previousPageHolder) //Add tag in first line until last line
                    $scope.contentPrintHtml[i] = "<ul style='margin-bottom: 0px; '>\n" + $scope.contentPrintHtml[i] + "</ul>\n";
            }
        }
    }

    $scope.initializePrintPostGraduates = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.PostGraduates.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Post Graduate:</td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            else {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            degreeHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserDegree</td></tr></table>\n';

            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
            //Generate lines per user school
            var forWrite = $scope.generatePrintLines(user.PostGraduates[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify; font-family:cursive;">', "</div>");

            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            }
            //Generate lines per user degree
            var forWrite = $scope.generatePrintLines(user.PostGraduates[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify; font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    degreeHTML = degreeHTML.replace("UserDegree", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generatePrintLines(user.PostGraduates[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify; font-family:cursive; ">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            }

            //Generate lines per user Achievement
            if (user.PostGraduates[i].Achievement != null && user.PostGraduates[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.PostGraduates[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            }
                        }
                    }

                    //Process new page
                    holder = "";
                    $scope.pageCount = $scope.pageCount + 1;
                    $scope.contentPrintHtml[$scope.pageCount] = "";
                    $scope.currentLines = forWrite[2];
                    for (var j = 0; j < forWrite[4].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.PostGraduates.length - 1) {
                    $scope.evaluatePrint(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrintTertiaries = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.Tertiaries.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Tertiary:</td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            else {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            degreeHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserDegree</td></tr></table>\n';

            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
            //Generate lines per user school
            var forWrite = $scope.generatePrintLines(user.Tertiaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            }
            //Generate lines per user degree
            var forWrite = $scope.generatePrintLines(user.Tertiaries[i].Degree, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    degreeHTML = degreeHTML.replace("UserDegree", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                degreeHTML = degreeHTML.replace("UserDegree", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + degreeHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generatePrintLines(user.Tertiaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            }

            //Generate lines per user Achievement
            if (user.Tertiaries[i].Achievement != null && user.Tertiaries[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.Tertiaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            }
                        }
                    }

                    //Process new page
                    holder = "";
                    $scope.pageCount = $scope.pageCount + 1;
                    $scope.contentPrintHtml[$scope.pageCount] = "";
                    $scope.currentLines = forWrite[2];
                    for (var j = 0; j < forWrite[4].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.Tertiaries.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }
    
    $scope.initializePrintSecondaries = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.Secondaries.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Secondary:</td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            else {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
            //Generate lines per user school
            var forWrite = $scope.generatePrintLines(user.Secondaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");

            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generatePrintLines(user.Secondaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            }

            //Generate lines per user Achievement
            if (user.Secondaries[i].Achievement != null && user.Secondaries[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.Secondaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            }
                        }
                    }

                    //Process new page
                    holder = "";
                    $scope.pageCount = $scope.pageCount + 1;
                    $scope.contentPrintHtml[$scope.pageCount] = "";
                    $scope.currentLines = forWrite[2];
                    for (var j = 0; j < forWrite[4].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.Secondaries.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrintPrimaries = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.Primaries.length; i++) {
            var schoolHTML = "", degreeHTML = "", addressHTML = "";
            if (i == 0) {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Primary:</td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            else {
                schoolHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserSchool</td></tr></table>\n';
            }
            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
            //Generate lines per user school
            var forWrite = $scope.generatePrintLines(user.Primaries[i].School, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");

            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    schoolHTML = schoolHTML.replace("UserSchool", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                schoolHTML = schoolHTML.replace("UserSchool", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + schoolHTML;
            }

            //Generate lines per user Address
            var forWrite = $scope.generatePrintLines(user.Primaries[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++)
                        holder = holder + forWrite[3].Lines[j];
                    addressHTML = addressHTML.replace("UserAddress", holder);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                }
                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++)
                    holder = holder + forWrite[4].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++)
                    holder = holder + forWrite[3].Lines[j];
                addressHTML = addressHTML.replace("UserAddress", holder);
                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
            }

            //Generate lines per user Achievement
            if (user.Primaries[i].Achievement != null && user.Primaries[i].Achievement.trim() != '') {
                var forWrite = $scope.generateLines(user.Primaries[i].Achievement, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
                var holder = "";
                if (forWrite[0] == "New Page") {
                    //Process current page
                    if (forWrite[1] > 0) {
                        $scope.currentLines = $scope.currentLines + forWrite[1];
                        for (var j = 0; j < forWrite[3].Lines.length; j++) {
                            if (j == 0) {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);


                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            } else {
                                holder = holder + forWrite[3].Lines[j];
                                achievementHTML = achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                                achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);


                                $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                            }
                        }
                    }

                    //Process new page
                    holder = "";
                    $scope.pageCount = $scope.pageCount + 1;
                    $scope.contentPrintHtml[$scope.pageCount] = "";
                    $scope.currentLines = forWrite[2];
                    for (var j = 0; j < forWrite[4].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);


                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[4].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[4].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                } else {
                    //Process current page
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Achievement/s:</td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            achievementHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAchievement</td></tr></table>\n';
                            achievementHTML = achievementHTML.replace("UserAchievement", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + achievementHTML;
                        }
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.Primaries.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrintWorkExperiences = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user Work Experience details
        for (i = 0; i < user.WorkExperiences.length; i++) {
            var companyHTML = "", addressHTML = "", periodHTML = "", positionHTML = "", mainRoleHTML = "";
            //Generate lines per company
            var forWrite = $scope.generatePrintLines(user.WorkExperiences[i].Company, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Company:</td><td style="width: auto;">UserCompany</td></tr></table>\n';
                            companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserCompany</td></tr></table>\n';
                            companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Company:</td><td style="width: auto;">UserCompany</td></tr></table>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserCompany</td></tr></table>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Company:</td><td style="width: auto;">UserCompany</td></tr></table>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        companyHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserCompany</td></tr></table>\n';
                        companyHTML = companyHTML.replace("UserCompany", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + companyHTML;
                    }
                }
            }

            //Generate lines per Address
            var forWrite = $scope.generatePrintLines(user.WorkExperiences[i].Address, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Address:</td><td style="width: auto;">UserAddress</td></tr></table>\n';
                            addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
                            addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Address:</td><td style="width: auto;">UserAddress</td></tr></table>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Address:</td><td style="width: auto;">UserAddress</td></tr></table>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserAddress</td></tr></table>\n';
                        addressHTML = addressHTML.replace("UserAddress", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    }
                }
            }
            //Generate lines per Period
            var forWrite = $scope.generatePrintLines(user.WorkExperiences[i].Period, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                            periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                            periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("UserPeriod", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    }
                }
            }
            //Generate lines per Position
            var forWrite = $scope.generatePrintLines(user.WorkExperiences[i].Position, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Position:</td><td style="width: auto;">UserPosition</td></tr></table>\n';
                            positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPosition</td></tr></table>\n';
                            positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Position:</td><td style="width: auto;">UserPosition</td></tr></table>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPosition</td></tr></table>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Position:</td><td style="width: auto;">UserPosition</td></tr></table>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        positionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserPosition</td></tr></table>\n';
                        positionHTML = positionHTML.replace("UserPosition", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + positionHTML;
                    }
                }
            }

            //Generate lines per MainRole
            var forWrite = $scope.generatePrintLines(user.WorkExperiences[i].MainRole, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Main Role:</td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                            mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                            mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Main Role:</td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Main Role:</td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        mainRoleHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">UserMainRole</td></tr></table>\n';
                        mainRoleHTML = mainRoleHTML.replace("UserMainRole", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + mainRoleHTML;
                    }
                }
            }
            if (isEvaluate) {
                if (i != user.WorkExperiences.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrintTrainings = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user Seminars/Trainings details
        for (i = 0; i < user.Trainings.length; i++) {
            var nameHTML = "", descriptionHTML = "", periodHTML = "";
            //Generate lines per name
            var forWrite = $scope.generatePrintLines(user.Trainings[i].Name, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">STName</td></tr></table>\n';
                            nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STName</td></tr></table>\n';
                            nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">STName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">STName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("STName", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    }
                }
            }

            //Generate lines per Description
            var forWrite = $scope.generatePrintLines(user.Trainings[i].Description, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Description:</td><td style="width: auto;">STDescription</td></tr></table>\n';
                            addressHTML = addressHTML.replace("STDescription", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STDescription</td></tr></table>\n';
                            addressHTML = addressHTML.replace("STDescription", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Description:</td><td style="width: auto;">STDescription</td></tr></table>\n';
                        addressHTML = addressHTML.replace("STDescription", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STDescription</td></tr></table>\n';
                        addressHTML = addressHTML.replace("STDescription", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Description:</td><td style="width: auto;">STDescription</td></tr></table>\n';
                        addressHTML = addressHTML.replace("STDescription", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        addressHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STDescription</td></tr></table>\n';
                        addressHTML = addressHTML.replace("STDescription", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + addressHTML;
                    }
                }
            }

            
            //Generate lines per Period
            var forWrite = $scope.generatePrintLines(user.Trainings[i].Period, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">STPeriod</td></tr></table>\n';
                            periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STPeriod</td></tr></table>\n';
                            periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">STPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[4].Lines[j]);
                        periodHTML = periodHTML.replace("class[0]", classess[0]);
                        periodHTML = periodHTML.replace("class[1]", classess[1]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Period:</td><td style="width: auto;">STPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        periodHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">STPeriod</td></tr></table>\n';
                        periodHTML = periodHTML.replace("STPeriod", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + periodHTML;
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.Trainings.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.initializePrintCharacterReferences = function (isEvaluate, user, maxNoOfLines, maxCharacter) {
        var i = 0;
        //Loop user Seminars/Trainings details
        for (i = 0; i < user.CharacterReferences.length; i++) {
            var nameHTML = "", professionHTML = "", contactHTML = "";
            //Generate lines per name
            var forWrite = $scope.generatePrintLines(user.CharacterReferences[i].Name, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">CRName</td></tr></table>\n';
                            nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRName</td></tr></table>\n';
                            nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">CRName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Name:</td><td style="width: auto;">CRName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        nameHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRName</td></tr></table>\n';
                        nameHTML = nameHTML.replace("CRName", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + nameHTML;
                    }
                }
            }

            //Generate lines per Profession
            var forWrite = $scope.generatePrintLines(user.CharacterReferences[i].Profession, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Profession:</td><td style="width: auto;">CRProfession</td></tr></table>\n';
                            professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRProfession</td></tr></table>\n';
                            professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Profession:</td><td style="width: auto;">CRProfession</td></tr></table>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRProfession</td></tr></table>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Profession:</td><td style="width: auto;">CRProfession</td></tr></table>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        professionHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRProfession</td></tr></table>\n';
                        professionHTML = professionHTML.replace("CRProfession", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + professionHTML;
                    }
                }
            }
            //Generate lines per contactHTML
            var forWrite = $scope.generatePrintLines(user.CharacterReferences[i].ContactNo, $scope.currentLines, maxNoOfLines, maxCharacter, '<div style="min-width: 100%; text-align: justify;  font-family:cursive;">', "</div>");
            var holder = "";
            if (forWrite[0] == "New Page") {
                //Process current page
                if (forWrite[1] > 0) {
                    $scope.currentLines = $scope.currentLines + forWrite[1];
                    for (var j = 0; j < forWrite[3].Lines.length; j++) {
                        if (j == 0) {
                            holder = holder + forWrite[3].Lines[j];
                            contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Contact:</td><td style="width: auto;">CRContact</td></tr></table>\n';
                            contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                        } else {
                            holder = holder + forWrite[3].Lines[j];
                            contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRContact</td></tr></table>\n';
                            contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                            $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                        }
                    }
                }

                //Process new page
                holder = "";
                $scope.pageCount = $scope.pageCount + 1;
                $scope.contentPrintHtml[$scope.pageCount] = "";
                $scope.currentLines = forWrite[2];
                for (var j = 0; j < forWrite[4].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[4].Lines[j];
                        contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Contact:</td><td style="width: auto;">CRContact</td></tr></table>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                    } else {
                        holder = holder + forWrite[4].Lines[j];
                        contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRContact</td></tr></table>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[4].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                    }
                }
            } else {
                //Process current page
                $scope.currentLines = $scope.currentLines + forWrite[1];
                for (var j = 0; j < forWrite[3].Lines.length; j++) {
                    if (j == 0) {
                        holder = holder + forWrite[3].Lines[j];
                        contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;">Contact:</td><td style="width: auto;">CRContact</td></tr></table>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                    } else {
                        holder = holder + forWrite[3].Lines[j];
                        contactHTML = '<table><tr style="font-size: 90%; font-family:cursive; text-align:justify;"><td style="width: 110px; font-weight: bold; margin-left: 10px;"></td><td style="width: auto;">CRContact</td></tr></table>\n';
                        contactHTML = contactHTML.replace("CRContact", forWrite[3].Lines[j]);
                        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + contactHTML;
                    }
                }
            }

            if (isEvaluate) {
                if (i != user.CharacterReferences.length - 1) {
                    $scope.evaluate(maxNoOfLines);
                    $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + '<div><br /></div>' + "\n";
                }
            }
        }
    }

    $scope.templateOnePrint = function (user, maxNoOfLines) {
        $scope.currentLines = 0;
        $scope.contentPrintHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentPrintHtml[$scope.pageCount] = '<table><tr><td style="margin-right: 15px;"><img src="UserImage" width="100" height="100"></td><td>' + "\n";
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        //Initialize User Name
        $scope.writePrintContent(false, maxNoOfLines, "Name", user.Name, 55);
        //Initialize User Address
        $scope.writePrintContent(false, maxNoOfLines, "Address", user.Address, 55);
        //Initialize User Contact No
        $scope.writePrintContent(false, maxNoOfLines, "Contact No", user.ContactNo, 55);
        //Initialize User Email Address
        $scope.writePrintContent(false, maxNoOfLines, "Email Address", user.EmailAddress, 55);

        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + "</td></tr></table>"
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "OBJECTIVES");
        //Inialize User Objective
        $scope.initializePrintObjective(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writePrintContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, 94);
        //Initialize User Age
        $scope.writePrintContent(false, maxNoOfLines, "Age", user.Age, 94);
        //Initialize User Gender
        $scope.writePrintContent(false, maxNoOfLines, "Gender", user.Gender, 94);
        //Initialize User Civil Status
        $scope.writePrintContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, 94);
        //Initialize User Height
        $scope.writePrintContent(false, maxNoOfLines, "Height", user.Height, 94);
        //Initialize User Weight
        $scope.writePrintContent(false, maxNoOfLines, "Weight", user.Weight, 94);
        //Initialize User Citizenship
        $scope.writePrintContent(false, maxNoOfLines, "Citizenship", user.Citizenship, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "HOBBIES");
        //Inialize User Hobbies
        $scope.initializePrintHobbies(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "QUALIFICATIONS");
            if (user.Skills.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Skills:");
                //Initialize Skills
                $scope.initializePrintByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Strengths:");
                //Initialize Strengths
                $scope.initializePrintByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT");
            //Initialize Post Graduate Details
            $scope.initializePrintPostGraduates(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            ////Initialize Tertiaries Details
            $scope.initializePrintTertiaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializePrintSecondaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrintPrimaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE");
            //Initialize User Work Experience
            $scope.initializePrintWorkExperiences(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED");
            $scope.initializePrintTrainings(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE");
            $scope.initializePrintCharacterReferences(true, user, maxNoOfLines, 80);
        }
        //Write Content

        document.getElementById("PrintDocument").innerHTML = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 90%").join("font-size: 80%");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 100%").join("font-size: 90%");
        $scope.htmlForDownload = $scope.htmlForDownload.split('style="width: 100px;').join('style="width: 110px;');
        $scope.htmlForDownload = $scope.htmlForDownload.split('<td style="width: 110px; font-weight: bold; margin-left: 10px;"></td>').join('<td style="width: 115px; font-weight: bold; margin-left: 10px;"></td>');
        $scope.htmlForDownload = $scope.htmlForDownload.split("width: auto").join("width: 490px");
    }

    $scope.templateTwoPrint = function (user, maxNoOfLines) {
        $scope.currentLines = 5;
        $scope.contentPrintHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentPrintHtml[$scope.pageCount] = '<center><img style="margin-bottom: 10px;" src="UserImage" width="100" height="100"></center>' + "\n";
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        //Initialize User Name
        $scope.writePrintContent1(false, maxNoOfLines, "Name", user.Name, 55);
        //Initialize User Address
        $scope.writePrintContent1(false, maxNoOfLines, "Address", user.Address, 55);
        //Initialize User Contact No
        $scope.writePrintContent1(false, maxNoOfLines, "Contact No", user.ContactNo, 55);
        //Initialize User Email Address
        $scope.writePrintContent1(false, maxNoOfLines, "Email Address", user.EmailAddress, 55);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "OBJECTIVES");
        //Inialize User Objective
        $scope.initializePrintObjective(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writePrintContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, 94);
        //Initialize User Age
        $scope.writePrintContent(false, maxNoOfLines, "Age", user.Age, 94);
        //Initialize User Gender
        $scope.writePrintContent(false, maxNoOfLines, "Gender", user.Gender, 94);
        //Initialize User Civil Status
        $scope.writePrintContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, 94);
        //Initialize User Height
        $scope.writePrintContent(false, maxNoOfLines, "Height", user.Height, 94);
        //Initialize User Weight
        $scope.writePrintContent(false, maxNoOfLines, "Weight", user.Weight, 94);
        //Initialize User Citizenship
        $scope.writePrintContent(false, maxNoOfLines, "Citizenship", user.Citizenship, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "HOBBIES");
        //Inialize User Hobbies
        $scope.initializePrintHobbies(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "QUALIFICATIONS");
            if (user.Skills.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Skills:");
                //Initialize Skills
                $scope.initializePrintByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Strengths:");
                //Initialize Strengths
                $scope.initializePrintByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT");
            //Initialize Post Graduate Details
            $scope.initializePrintPostGraduates(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            ////Initialize Tertiaries Details
            $scope.initializePrintTertiaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializePrintSecondaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrintPrimaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE");
            //Initialize User Work Experience
            $scope.initializePrintWorkExperiences(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED");
            $scope.initializePrintTrainings(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE");
            $scope.initializePrintCharacterReferences(true, user, maxNoOfLines, 80);
        }
        //Write Content
        document.getElementById("PrintDocument").innerHTML = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 90%").join("font-size: 80%");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 100%").join("font-size: 90%");
        $scope.htmlForDownload = $scope.htmlForDownload.split('style="width: 100px;').join('style="width: 110px;');
        $scope.htmlForDownload = $scope.htmlForDownload.split('<td style="width: 110px; font-weight: bold; margin-left: 10px;"></td>').join('<td style="width: 115px; font-weight: bold; margin-left: 10px;"></td>');
        $scope.htmlForDownload = $scope.htmlForDownload.split("width: auto").join("width: 490px");
    }

    $scope.templateThreePrint = function (user, maxNoOfLines) {
        $scope.currentLines = 0;
        $scope.contentPrintHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentPrintHtml[$scope.pageCount] = '<table><tr><td>' + "\n";
        //Initialize User Name
        $scope.writePrintContent(false, maxNoOfLines, "Name", user.Name, 55);
        //Initialize User Address
        $scope.writePrintContent(false, maxNoOfLines, "Address", user.Address, 55);
        //Initialize User Contact No
        $scope.writePrintContent(false, maxNoOfLines, "Contact No", user.ContactNo, 55);
        //Initialize User Email Address
        $scope.writePrintContent(false, maxNoOfLines, "Email Address", user.EmailAddress, 55);
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount] + "</td><td>" + '<img style="float:right;" src="UserImage" width="100" height="100"></td></tr></table>' + "\n";
        $scope.contentPrintHtml[$scope.pageCount] = $scope.contentPrintHtml[$scope.pageCount].replace("UserImage", $rootScope.baseUrl + user.ImageName);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "OBJECTIVES");
        //Inialize User Objective
        $scope.initializePrintObjective(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION");
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writePrintContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, 94);
        //Initialize User Age
        $scope.writePrintContent(false, maxNoOfLines, "Age", user.Age, 94);
        //Initialize User Gender
        $scope.writePrintContent(false, maxNoOfLines, "Gender", user.Gender, 94);
        //Initialize User Civil Status
        $scope.writePrintContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, 94);
        //Initialize User Height
        $scope.writePrintContent(false, maxNoOfLines, "Height", user.Height, 94);
        //Initialize User Weight
        $scope.writePrintContent(false, maxNoOfLines, "Weight", user.Weight, 94);
        //Initialize User Citizenship
        $scope.writePrintContent(false, maxNoOfLines, "Citizenship", user.Citizenship, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "HOBBIES");
        //Inialize User Hobbies
        $scope.initializePrintHobbies(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "QUALIFICATIONS");
            if (user.Skills.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Skills:");
                //Initialize Skills
                $scope.initializePrintByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Strengths:");
                //Initialize Strengths
                $scope.initializePrintByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT");
            //Initialize Post Graduate Details
            $scope.initializePrintPostGraduates(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            ////Initialize Tertiaries Details
            $scope.initializePrintTertiaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializePrintSecondaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrintPrimaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE");
            //Initialize User Work Experience
            $scope.initializePrintWorkExperiences(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED");
            $scope.initializePrintTrainings(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE");
            $scope.initializePrintCharacterReferences(true, user, maxNoOfLines, 80);
        }
        //Write Content
        document.getElementById("PrintDocument").innerHTML = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 90%").join("font-size: 80%");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 100%").join("font-size: 90%");
        $scope.htmlForDownload = $scope.htmlForDownload.split('style="width: 100px;').join('style="width: 110px;');
        $scope.htmlForDownload = $scope.htmlForDownload.split('<td style="width: 110px; font-weight: bold; margin-left: 10px;"></td>').join('<td style="width: 115px; font-weight: bold; margin-left: 10px;"></td>');
        $scope.htmlForDownload = $scope.htmlForDownload.split("width: auto").join("width: 490px");
    }

    $scope.templateFourPrint = function (user, maxNoOfLines) {
        $scope.currentLines = 0;
        $scope.contentPrintHtml = [];
        $scope.pageCount = 1;
        $scope.contentPrintHtml[$scope.pageCount] = "";

        $scope.writePrintHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION");
        //Initialize User Name
        $scope.writePrintContent(false, maxNoOfLines, "Name", user.Name, 55);
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writePrintContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, 94);
        //Initialize User Age
        $scope.writePrintContent(false, maxNoOfLines, "Age", user.Age, 94);
        //Initialize User Gender
        $scope.writePrintContent(false, maxNoOfLines, "Gender", user.Gender, 94);
        //Initialize User Civil Status
        $scope.writePrintContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, 94);
        //Initialize User Height
        $scope.writePrintContent(false, maxNoOfLines, "Height", user.Height, 94);
        //Initialize User Weight
        $scope.writePrintContent(false, maxNoOfLines, "Weight", user.Weight, 94);
        //Initialize User Citizenship
        $scope.writePrintContent(false, maxNoOfLines, "Citizenship", user.Citizenship, 94);
        //Initialize User Address
        $scope.writePrintContent(false, maxNoOfLines, "Address", user.Address, 55);
        //Initialize User Contact No
        $scope.writePrintContent(false, maxNoOfLines, "Contact No", user.ContactNo, 55);
        //Initialize User Email Address
        $scope.writePrintContent(false, maxNoOfLines, "Email Address", user.EmailAddress, 55);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "OBJECTIVES");
        //Inialize User Objective
        $scope.initializePrintObjective(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "HOBBIES");
        //Inialize User Hobbies
        $scope.initializePrintHobbies(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "QUALIFICATIONS");
            if (user.Skills.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Skills:");
                //Initialize Skills
                $scope.initializePrintByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Strengths:");
                //Initialize Strengths
                $scope.initializePrintByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT");
            //Initialize Post Graduate Details
            $scope.initializePrintPostGraduates(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            ////Initialize Tertiaries Details
            $scope.initializePrintTertiaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializePrintSecondaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrintPrimaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE");
            //Initialize User Work Experience
            $scope.initializePrintWorkExperiences(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED");
            $scope.initializePrintTrainings(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE");
            $scope.initializePrintCharacterReferences(true, user, maxNoOfLines, 80);
        }
        //Write Content
        document.getElementById("PrintDocument").innerHTML = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 90%").join("font-size: 80%");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 100%").join("font-size: 90%");
        $scope.htmlForDownload = $scope.htmlForDownload.split('style="width: 100px;').join('style="width: 110px;');
        $scope.htmlForDownload = $scope.htmlForDownload.split('<td style="width: 110px; font-weight: bold; margin-left: 10px;"></td>').join('<td style="width: 115px; font-weight: bold; margin-left: 10px;"></td>');
        $scope.htmlForDownload = $scope.htmlForDownload.split("width: auto").join("width: 490px");
    }

    $scope.templateFivePrint = function (user, maxNoOfLines) {
        $scope.currentLines = 0;
        $scope.contentPrintHtml = [];
        $scope.pageCount = 1;
        $scope.contentPrintHtml[$scope.pageCount] = "";

        $scope.writePrintHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION");
        //Initialize User Name
        $scope.writePrintContent(false, maxNoOfLines, "Name", user.Name, 55);
        //Initialize User Birthdate
        user.DateOfBirth = $filter('date')(user.DateOfBirth, "MMMM dd, yyyy");
        $scope.writePrintContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, 94);
        //Initialize User Age
        $scope.writePrintContent(false, maxNoOfLines, "Age", user.Age, 94);
        //Initialize User Gender
        $scope.writePrintContent(false, maxNoOfLines, "Gender", user.Gender, 94);
        //Initialize User Civil Status
        $scope.writePrintContent(false, maxNoOfLines, "Civil Status", user.CivilStatus, 94);
        //Initialize User Height
        $scope.writePrintContent(false, maxNoOfLines, "Height", user.Height, 94);
        //Initialize User Weight
        $scope.writePrintContent(false, maxNoOfLines, "Weight", user.Weight, 94);
        //Initialize User Citizenship
        $scope.writePrintContent(false, maxNoOfLines, "Citizenship", user.Citizenship, 94);
        //Initialize User Address
        $scope.writePrintContent(false, maxNoOfLines, "Address", user.Address, 55);
        //Initialize User Contact No
        $scope.writePrintContent(false, maxNoOfLines, "Contact No", user.ContactNo, 55);
        //Initialize User Email Address
        $scope.writePrintContent(false, maxNoOfLines, "Email Address", user.EmailAddress, 55);
        $scope.writePrintNewLine(true, maxNoOfLines, true);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "OBJECTIVES");
        //Inialize User Objective
        $scope.initializePrintObjective(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines, true);
        $scope.writePrintHeaderContent(true, maxNoOfLines, "HOBBIES");
        //Inialize User Hobbies
        $scope.initializePrintHobbies(user, maxNoOfLines, 94);
        $scope.writePrintNewLine(true, maxNoOfLines, true);
        if (user.Skills.length > 0 || user.Strengths > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "QUALIFICATIONS");
            if (user.Skills.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Skills:");
                //Initialize Skills
                $scope.initializePrintByUnderlineTag(user.Skills, maxNoOfLines, 80);
            }
            if (user.Strengths.length > 0) {
                $scope.writePrintHeaderContentMedium(true, maxNoOfLines, "Strengths:");
                //Initialize Strengths
                $scope.initializePrintByUnderlineTag(user.Strengths, maxNoOfLines, 80);
            }
            $scope.writePrintNewLine(true, maxNoOfLines, true);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT");
            //Initialize Post Graduate Details
            $scope.initializePrintPostGraduates(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
            ////Initialize Tertiaries Details
            $scope.initializePrintTertiaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
            //Initialize Secondaries Details
            $scope.initializePrintSecondaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
            //Initialize Primaries Details
            $scope.initializePrintPrimaries(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE");
            //Initialize User Work Experience
            $scope.initializePrintWorkExperiences(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
        }
        if (user.Trainings.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED");
            $scope.initializePrintTrainings(true, user, maxNoOfLines, 80);
            $scope.writePrintNewLine(true, maxNoOfLines, true);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writePrintHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE");
            $scope.initializePrintCharacterReferences(true, user, maxNoOfLines, 80);
        }
        //Write Content
        document.getElementById("PrintDocument").innerHTML = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.contentPrintHtml.join("\n");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 90%").join("font-size: 80%");
        $scope.htmlForDownload = $scope.htmlForDownload.split("font-size: 100%").join("font-size: 90%");
        $scope.htmlForDownload = $scope.htmlForDownload.split('style="width: 100px;').join('style="width: 110px;');
        $scope.htmlForDownload = $scope.htmlForDownload.split('<td style="width: 110px; font-weight: bold; margin-left: 10px;"></td>').join('<td style="width: 115px; font-weight: bold; margin-left: 10px;"></td>');
        $scope.htmlForDownload = $scope.htmlForDownload.split("width: auto").join("width: 490px");
    }

    $scope.printResume = function () {
        $scope.isPrint = true;
    };

    $scope.generateResumeIfLogged = function () {
        if ($scope.isValidImage)
        {
            $scope.showLoader();
            //Remove new lines
            $scope.replaceAllCharacter($scope.resume, "\n", "");
            $scope.url = $rootScope.baseUrl + "api/users?type=2"
            $http.post($scope.url, $scope.resume)
            .success(function (data, status) {
                var imageHolder = null;
                if (data.status == "SUCCESS") {
                    $http.defaults.headers.common['Token'] = data.stringParam1;
                    //Save picture
                    var files = $("#userImage").get(0).files;
                    if (files.length > 0) {
                        var imageData = new FormData();
                        for (i = 0; i < files.length; i++) {
                            imageData.append("file" + i, files[i]);
                            imageHolder = files[i].name;
                        }
                        $http.post("/api/fileupload?username=" + ($scope.resume.FirstName.toLowerCase() + $scope.resume.MiddleName.toLowerCase() + $scope.resume.LastName.toLowerCase()).split(" ").join(""), imageData, {
                            transformRequest: angular.identity,
                            headers: { 'Content-Type': undefined }
                        })
                        .success(function () {
                            $scope.process = "done";
                            $http.defaults.headers.common['Token'] = data.stringParam1;
                            $scope.resume.Name = $scope.resume.FirstName + " " + $scope.resume.MiddleName + " " + $scope.resume.LastName;
                            if (imageHolder != null)
                                $scope.resume.ImageName = ("ResumeList/" + $scope.resume.FirstName.toLowerCase() + $scope.resume.MiddleName.toLowerCase() + $scope.resume.LastName.toLowerCase() + "/" + imageHolder).split(" ").join("");
                            $scope.showResume($scope.resume, $scope.resume.Template);
                        })
                        .error(function (data, status) {
                            $scope.process = "done";
                            if (status == 401)
                                $scope.displayError("Unauthorized request.");
                            else
                                $scope.displayError("Server is down");
                        })
                    }
                    else
                        $scope.process = "done";
                }
                else {
                    $scope.process = "done";
                    $scope.displayError(data.message);
                }
            })
            .error(function (data, status) {
                $scope.process = "done";
                if (status == 401)
                    $scope.displayError("Unauthorized request.");
                else
                    $scope.displayError("Server is down");
            })
        }
    }

    $scope.generateResumeIfNotLogged = function () {
        //Save picture
        var files = $("#userImage").get(0).files;
        if (files.length > 0 && $scope.isValidImage) {
            var imageData = new FormData();
            for (i = 0; i < files.length; i++) {
                imageData.append("file" + i, files[i]);
                imageName = files[i].name;
            }
            $http.post("/api/fileupload?username=temporary", imageData, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
            .success(function () {
                $scope.resume.Name = $scope.resume.FirstName + " " + $scope.resume.MiddleName + " " + $scope.resume.LastName;
                if (imageName != null)
                    $scope.resume.ImageName = ("ResumeList/temporary/" + imageName).split(" ").join("");
                $scope.showResume($scope.resume, $scope.resume.Template);
            })
            .error(function (data, status) {
                $scope.process = "done";
                if (status == 401)
                    $scope.displayError("Unauthorized request.");
                else
                    $scope.displayError("Server is down");
            })
        }
        else {
            $scope.resume.Name = $scope.resume.FirstName + " " + $scope.resume.MiddleName + " " + $scope.resume.LastName;
            $scope.showResume($scope.resume, $scope.resume.Template);
        }
    }

    //Submit data to server
    $('#form').validator().on('submit', function (e) {
        $scope.withFormError = false;
        $scope.errorFormMessage = "";
        if (e.isDefaultPrevented()) {
            $scope.displayError("Please fill up required fields.");
        }
        else if ($scope.resume.Template == null) {
            $scope.displayError("Please select template.");
        }
        else
        {
            $scope.isValidImage = true;
            var files = $("#userImage").get(0).files;
            for (i = 0; i < files.length; i++)
            {
                if (files[i].type != "image/jpeg" && files[i].type != "image/png")
                {
                    i = files.length;
                    $scope.isValidImage = false;
                    $scope.displayError("Please choose image file.");
                }
                else if (files[i].size > 102400)
                {
                    i = files.length;
                    $scope.isValidImage = false;
                    $scope.displayError("Maximum image size is only 100KB.");
                }

            }
            $scope.showLoader();
            if ($scope.isLogged)
                $scope.generateResumeIfLogged();
            else
                $scope.generateResumeIfNotLogged();
        }
    });

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

    var doTheMath = $interval(function () {
        $scope.innerWidth = window.innerWidth;
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
                    for (var j = 0; j < document.querySelectorAll(".image-preview").length; j++) {
                        document.querySelectorAll(".image-preview")[j].style.width = Math.ceil(i) * 5 + "px";
                        document.querySelectorAll(".image-preview")[j].style.height = Math.ceil(i) * 5 + "px";
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

        if ($scope.process == "start" || $scope.templateShown || $scope.process == "done") {
            $scope.showPageIndicator = false;
            $scope.showButtons = false;
            $scope.showButtonContainer = false;
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
            if ($scope.isByPage || ($scope.isByTemplatePage && $scope.templateShown))
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
            if ($scope.isByPage || ($scope.isByTemplatePage && $scope.templateShown))
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
            if ($scope.isByPage || ($scope.isByTemplatePage && $scope.templateShown))
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
            if($scope.resumeShown)
                $scope.toolTipText[0] = "Display By Page";
            else
                $scope.toolTipText[0] = "Display Templates";

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
            $scope.toolTipText[0] = "Download";
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

    $scope.$on('$destroy', function () {
        $interval.cancel(doTheMath);
        doTheMath = undefined;
    });
    $scope.initializeResume();
    $scope.generateTemplates();
});