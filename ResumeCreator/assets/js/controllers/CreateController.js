arjocamahamageApp.controller("CreateController", function ($http, $scope, $state, $interval) {
    $scope.modalTitle = "";
    $scope.buttonLabel = "";
    $scope.withError = false;
    $scope.errorMessage = "";
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

    $scope.civilStatus = [
                    { Id: "Single", Name: "Single" },
                    { Id: "Married", Name: "Married" },
                    { Id: "Divorced", Name: "Divorced" },
                    { Id: "Widowed", Name: "Widowed" },
    ];

    //$scope.resume = {
    //    Id: null,
    //    Name: null,
    //    Template: null,
    //    FirstName: null,
    //    MiddleName: null,
    //    LastName: null,
    //    DateOfBirth: null,
    //    Age: null,
    //    Height: null,
    //    Weight: null,
    //    CivilStatus: "Single",
    //    Citizenship: null,
    //    Gender: "Male",
    //    Address: null,
    //    ContactNo: null,
    //    EmailAddress: null,
    //    Objectives: null,
    //    Hobbies: null,
    //    Skills: [],
    //    Strengths: [],
    //    PostGraduates: [],
    //    Tertiaries: [],
    //    Secondaries: [],
    //    Primaries: [],
    //    WorkExperiences: [],
    //    Trainings: [],
    //    CharacterReferences: [],
    //    Type: null,
    //    ImageName: null
    //}

    $scope.resume = {
        Id: 1,
        Name: "Kenneth Carl Nacua Ybanez",
        Template: 1,
        FirstName: "Kenneth Carl",
        MiddleName: "Nacua",
        LastName: "Ybanez",
        DateOfBirth: "January 05, 1992",
        Age: 24,
        Height: "5'5",
        Weight: "67 Kilograms",
        CivilStatus: "Single",
        Citizenship: "Filipino",
        Gender: "Male",
        Address: "137 Bliss Pajac Lapu-Lapu City, 6000 Cebu, Philippines",
        ContactNo: "09434364318",
        EmailAddress: "kennethcarlybanez@gmail.com",
        Objectives: "To be able to work in a prestigious company that would harness my skills to its utmost potential and utilize such skills for the achievement of the company's goals and objective.",
        Hobbies: "Jogging, lifting, playing basketball, watching hollywood series and movies and programming.",
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
        PostGraduates: [
           {
               School: "Cebu Institute of Technology – University",
               Degree: "Masters In Information Technology(June 2015-March 2016)",
               Address: "Natalio B. Bacalso Ave, Cebu City, 6000 Cebu",
           },
        ],
        Tertiaries: [
            {
                School: "University of Cebu-Banilad",
                Degree: "Bachelor of Science in Information Technology (2008-2013)",
                Address: "Archbishop Reyes Ave., Banilad City, Cebu, 6000",
            }
        ],
        Secondaries: [
            {
                School: "Saint Dominic Learning Center (2004-2008)",
                Address: "Sangi Lapu-lapu City, Cebu, 6000, Philippines",
            }
        ],
        Primaries: [
            {
                School: "Bankal Elementary School (1998-2004)",
                Address: "Bankal Lapu-lapu City, Cebu, 6000, Philippines",
            }
        ],
        WorkExperiences: [
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
        ],
        Trainings: [
            {
                Name: "ASP.Net/AngularJS Training",
                Description: "Web application development using MVC and entity framework with lambda and LinQ, Web API, AngularJS, etc.",
                Period: "March 03, 2015 - March 06, 2015"
            }
        ],
        CharacterReferences: [
            {
                Name: "John Crismund Elumbaring",
                Profession: "IT Professional",
                ContactNo: "09254858989"
            },
            {
                Name: "Lady Xyza G. Bation",
                Profession: "Accountant",
                ContactNo: "09434364318"
            }
        ],
        Type: "Public",
        ImageName: null
    }

    //Check if input contains letter only
    $('#firstName, #middleName, #lastName, #citizenship, #objectives, #hobbies').keypress(function (key) {
        if (!((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45) && (key.charCode != 32)))
            return true;
            //for back space
        else if (key.charCode == 0)
            return true;
        else
            return false;
    });

    //Check if input contains letter only
    $('#firstName, #middleName, #lastName, #citizenship').keypress(function (key) {
        if (!((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45) && (key.charCode != 32)))
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
                        $scope.strength = {
                            Id: $scope.resume.Skills.length > 0 ? $scope.resume.Skills[$scope.resume.Skills.length - 1].Id + 1 : 1,
                            Description: null
                        }
                        $scope.resume.Skills.push($scope.strength);
                    }
                }
                else {
                    $scope.strength = {
                        Id: $scope.resume.Skills.length > 0 ? $scope.resume.Skills[$scope.resume.Skills.length - 1].Id + 1 : 1,
                        Description: null
                    }
                    $scope.resume.Skills.push($scope.strength);
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
                if ($scope.resume.PostGraduate.length > 0) {
                    var currentIndex = $scope.resume.PostGraduate.length - 1;
                    if ($scope.resume.PostGraduate[currentIndex].School == null
                        || $scope.resume.PostGraduate[currentIndex].Degree == null
                        || $scope.resume.PostGraduate[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.PostGraduate[currentIndex].School.trim() == ""
                        || $scope.resume.PostGraduate[currentIndex].Degree.trim() == ""
                        || $scope.resume.PostGraduate[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.postGrad = {
                            School: null,
                            Degree: null,
                            Address: null
                        }
                        $scope.resume.PostGraduate.push($scope.postGrad);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.postGrad = {
                        School: null,
                        Degree: null,
                        Address: null
                    }
                    $scope.resume.PostGraduate.push($scope.postGrad);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Post Graduate";
                break;
            case "Tertiary":
                if ($scope.resume.Tertiary.length > 0) {
                    var currentIndex = $scope.resume.Tertiary.length - 1;
                    if ($scope.resume.Tertiary[currentIndex].School == null
                        || $scope.resume.Tertiary[currentIndex].Degree == null
                        || $scope.resume.Tertiary[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Tertiary[currentIndex].School.trim() == ""
                        || $scope.resume.Tertiary[currentIndex].Degree.trim() == ""
                        || $scope.resume.Tertiary[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.postGrad = {
                            School: null,
                            Degree: null,
                            Address: null
                        }
                        $scope.resume.Tertiary.push($scope.postGrad);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.postGrad = {
                        School: null,
                        Degree: null,
                        Address: null
                    }
                    $scope.resume.Tertiary.push($scope.postGrad);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Tertiary";
                break;
            case "Secondary":
                if ($scope.resume.Secondary.length > 0) {
                    var currentIndex = $scope.resume.Secondary.length - 1;
                    if ($scope.resume.Secondary[currentIndex].School == null
                        || $scope.resume.Secondary[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Secondary[currentIndex].School.trim() == ""
                        || $scope.resume.Secondary[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.secondary = {
                            School: null,
                            Degree: null,
                            Address: null
                        }
                        $scope.resume.Secondary.push($scope.secondary);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.secondary = {
                        School: null,
                        Degree: null,
                        Address: null
                    }
                    $scope.resume.Secondary.push($scope.secondary);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Secondary";
                break;
            case "Primary":
                if ($scope.resume.Primary.length > 0) {
                    var currentIndex = $scope.resume.Primary.length - 1;
                    if ($scope.resume.Primary[currentIndex].School == null
                        || $scope.resume.Primary[currentIndex].Address == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.Primary[currentIndex].School.trim() == ""
                        || $scope.resume.Primary[currentIndex].Address.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.primary = {
                            School: null,
                            Degree: null,
                            Address: null
                        }
                        $scope.resume.Primary.push($scope.primary);

                        $scope.withError = false;
                        $scope.errorMessage = "";
                    }
                }
                else {
                    $scope.primary = {
                        School: null,
                        Degree: null,
                        Address: null
                    }
                    $scope.resume.Primary.push($scope.primary);

                    $scope.withError = false;
                    $scope.errorMessage = "";
                }
                $scope.buttonLabel = "Add Primary";
                break;
            case "Work Experience":
                if ($scope.resume.WorkExperience.length > 0) {
                    var currentIndex = $scope.resume.WorkExperience.length - 1;
                    if ($scope.resume.WorkExperience[currentIndex].Company == null
                        || $scope.resume.WorkExperience[currentIndex].Address == null
                        || $scope.resume.WorkExperience[currentIndex].Period == null
                        || $scope.resume.WorkExperience[currentIndex].Position == null
                        || $scope.resume.WorkExperience[currentIndex].MainRole == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.WorkExperience[currentIndex].Company.trim() == ""
                        || $scope.resume.WorkExperience[currentIndex].Address.trim() == ""
                        || $scope.resume.WorkExperience[currentIndex].Period.trim() == ""
                        || $scope.resume.WorkExperience[currentIndex].Position.trim() == ""
                        || $scope.resume.WorkExperience[currentIndex].MainRole.trim() == "") {
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
                        $scope.resume.WorkExperience.push($scope.workExp);

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
                    $scope.resume.WorkExperience.push($scope.workExp);

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
                if ($scope.resume.CharacterReference.length > 0) {
                    var currentIndex = $scope.resume.CharacterReference.length - 1;
                    if ($scope.resume.CharacterReference[currentIndex].Name == null
                        || $scope.resume.CharacterReference[currentIndex].Profession == null
                        || $scope.resume.CharacterReference[currentIndex].ContactNo == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.CharacterReference[currentIndex].Name.trim() == ""
                        || $scope.resume.CharacterReference[currentIndex].Profession.trim() == ""
                        || $scope.resume.CharacterReference[currentIndex].ContactNo.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.charRef = {
                            Name: null,
                            Profession: null,
                            ContactNo: null
                        }
                        $scope.resume.CharacterReference.push($scope.charRef);

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
                    $scope.resume.CharacterReference.push($scope.charRef);

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
                if ($scope.resume.PostGraduate.length > 1)
                    $scope.resume.PostGraduate.splice(index, 1);
                else {
                    $scope.resume.PostGraduate[index].School = "";
                    $scope.resume.PostGraduate[index].Degree = "";
                    $scope.resume.PostGraduate[index].Address = "";
                }
                break;
            case "Tertiary":
                if ($scope.resume.Tertiary.length > 1)
                    $scope.resume.Tertiary.splice(index, 1);
                else {
                    $scope.resume.Tertiary[index].School = "";
                    $scope.resume.Tertiary[index].Degree = "";
                    $scope.resume.Tertiary[index].Address = "";
                }
                break;
            case "Secondary":
                if ($scope.resume.Secondary.length > 1)
                    $scope.resume.Secondary.splice(index, 1);
                else {
                    $scope.resume.Secondary[index].School = "";
                    $scope.resume.Secondary[index].Address = "";
                }
            case "Primary":
                if ($scope.resume.Primary.length > 1)
                    $scope.resume.Primary.splice(index, 1);
                else {
                    $scope.resume.Primary[index].School = "";
                    $scope.resume.Primary[index].Address = "";
                }
                break;
            case "Work Experience":
                if ($scope.resume.WorkExperience.length > 1)
                    $scope.resume.WorkExperience.splice(index, 1);
                else {
                    $scope.resume.WorkExperience[index].Company = "";
                    $scope.resume.WorkExperience[index].Address = "";
                    $scope.resume.WorkExperience[index].Period = "";
                    $scope.resume.WorkExperience[index].Position = "";
                    $scope.resume.WorkExperience[index].MainRole = "";
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
                if ($scope.resume.CharacterReference.length > 1)
                    $scope.resume.CharacterReference.splice(index, 1);
                else {
                    $scope.resume.CharacterReference[index].Name = "";
                    $scope.resume.CharacterReference[index].Profession = "";
                    $scope.resume.CharacterReference[index].ContactNo = "";
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
                for (var i = 0; i < $scope.resume.PostGraduate.length; i++) {
                    if ($scope.resume.PostGraduate[i].School == null || $scope.resume.PostGraduate[i].Degree == null || $scope.resume.PostGraduate[i].Address == null) {
                        $scope.resume.PostGraduate.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.PostGraduate[i].School.trim() == "" || $scope.resume.PostGraduate[i].Degree.trim() == "" || $scope.resume.PostGraduate[i].Address.trim() == "") {
                        $scope.resume.PostGraduate.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Tertiary":
                for (var i = 0; i < $scope.resume.Tertiary.length; i++) {
                    if ($scope.resume.Tertiary[i].School == null || $scope.resume.Tertiary[i].Degree == null || $scope.resume.Tertiary[i].Address == null) {
                        $scope.resume.Tertiary.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Tertiary[i].School.trim() == "" || $scope.resume.Tertiary[i].Degree.trim() == "" || $scope.resume.Tertiary[i].Address.trim() == "") {
                        $scope.resume.Tertiary.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Secondary":
                for (var i = 0; i < $scope.resume.Secondary.length; i++) {
                    if ($scope.resume.Secondary[i].School == null
                        || $scope.resume.Secondary[i].Address == null) {
                        $scope.resume.Secondary.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Secondary[i].School.trim() == ""
                        || $scope.resume.Secondary[i].Address.trim() == "") {
                        $scope.resume.Secondary.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Primary":
                for (var i = 0; i < $scope.resume.Primary.length; i++) {
                    if ($scope.resume.Primary[i].School == null
                        || $scope.resume.Primary[i].Address == null) {
                        $scope.resume.Primary.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.Primary[i].School.trim() == ""
                        || $scope.resume.Primary[i].Address.trim() == "") {
                        $scope.resume.Primary.splice(i, 1);
                        i = i - 1;
                    }
                }
                break;
            case "Work Experience":
                for (var i = 0; i < $scope.resume.WorkExperience.length; i++) {
                    if ($scope.resume.WorkExperience[i].Company == null
                        || $scope.resume.WorkExperience[i].Address == null
                        || $scope.resume.WorkExperience[i].Position == null
                        || $scope.resume.WorkExperience[i].Period == null
                        || $scope.resume.WorkExperience[i].MainRole == null) {
                        $scope.resume.WorkExperience.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.WorkExperience[i].Company.trim() == ""
                        || $scope.resume.WorkExperience[i].Address.trim() == ""
                        || $scope.resume.WorkExperience[i].Position.trim() == ""
                        || $scope.resume.WorkExperience[i].Period.trim() == ""
                        || $scope.resume.WorkExperience[i].MainRole.trim() == "") {
                        $scope.resume.WorkExperience.splice(i, 1);
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
                for (var i = 0; i < $scope.resume.CharacterReference.length; i++) {
                    if ($scope.resume.CharacterReference[i].Name == null
                        || $scope.resume.CharacterReference[i].Profession == null
                        || $scope.resume.CharacterReference[i].ContactNo == null) {
                        $scope.resume.CharacterReference.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.CharacterReference[i].Name.trim() == ""
                        || $scope.resume.CharacterReference[i].Profession.trim() == ""
                        || $scope.resume.CharacterReference[i].ContactNo.trim() == "") {
                        $scope.resume.CharacterReference.splice(i, 1);
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
        var forWrite = $scope.generateLines(user.Objectives, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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
        var forWrite = $scope.generateLines(user.Hobbies, $scope.currentLines, maxNoOfLines, maxCharacter, '<div class="line">', "</div>");
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

    $scope.initializePostGraduates = function (isEvaluate, user, maxNoOfLines, classess, maxCharacter) {
        var i = 0;
        //Loop user post graduate details
        for (i = 0; i < user.PostGraduates.length; i++) {
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
        }
        $scope.currentLines = $scope.currentLines + 1;
    };

    $scope.writeNewLine = function (isEvaluate, maxNoOfLines) {
        if (isEvaluate)
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
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", user.ImageName);
        $scope.writeNewLine(true, maxNoOfLines);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 90);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Birthdate
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
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
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 78);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 78);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduate.length > 0 || user.Tertiary.length > 0
            || user.Secondary.length > 0 || user.Primary.length > 0) {
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
        if (user.WorkExperience.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperience(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines); 
        }
        if (user.CharacterReference.length > 0) {
            scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReference(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
        }

        $scope.currentPage = page;
        $scope.showPage();
        $scope.process = "done/showmodal";

        //Initialize $scope.resumePages
        $scope.resumePages = [];
        for (var i = 0; i < $scope.allResumeContents.length; i++) {
            if ($scope.allResumeContents[i].Id == user.Id) {
                for (var j = 1; j < $scope.allResumeContents[i].Contents.length; j++) {
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
            var maxNoOfLines = 30;
            $scope.showPreview(resumeInfo, maxNoOfLines, $scope.currentPage, template);
        }, 500);
    };

    $scope.showTemplates = function () {
        $scope.process = "start";
        $scope.showButtonContainer = false;
        $scope.showButtons = false;
        $scope.showPageIndicator = false;
        $scope.resumeShown = true;
        document.getElementById("c-modal-container").className = "modal-container show-modal-container";
        document.getElementById("c-modal-content").className = "content-container show-content-container";
        document.getElementById("c-loader").className = "loader-container show-loading";
        document.getElementById("c-modal-content").style.backgroundColor = "#F8F8F8 ";
        document.getElementById("c-modal-content").className = "content-container show-overflow show-content-container";
        $scope.isByTemplate = true;
        //initialize the determine to show templates
        $scope.process = "done/showmodal";
    }

    $scope.closeResume = function () {
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

    //Submit data to server
    $('#form').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            var isValidImage = true;
            var files = $("#userImage").get(0).files;
            for (i = 0; i < files.length; i++) {
                if (files[i].type != "image/jpeg" && files[i].type != "image/png") {
                    alert("Please choose image file.");
                    i = files.length;
                    isValidImage = false;
                }
            }
            if (isValidImage) {
                $scope.showLoader();
                //Remove new lines
                $scope.replaceAllCharacter($scope.resume, "\n", "");
                $scope.url = "http://localhost:4283/" + "api/users"
                $http.post($scope.url, $scope.resume)
                .success(function (data, status) {
                    var imageHolder = null;
                    if (data.status == "SUCCESS") {
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
                                $scope.resume.Name = $scope.resume.FirstName + " " + $scope.resume.MiddleName + " " + $scope.resume.LastName;
                                if (imageHolder != null)
                                    $scope.resume.ImageName = ("ResumeList/" + $scope.resume.FirstName.toLowerCase() + $scope.resume.MiddleName.toLowerCase() + $scope.resume.LastName.toLowerCase() + "/" + imageHolder).split(" ").join("");
                                console.log($scope.resume);
                                //$scope.showResume($scope.resume, $scope.resume.Template);
                            })
                            .error(function (data, status) {
                                $scope.process = "done";
                                alert("Status Code: " + status + "\nDescription: " + data);
                            })
                        }
                        else
                            $scope.process = "done";
                    }
                    else {
                        $scope.process = "done";
                        alert(data.message);
                    }
                })
                .error(function (data, status) {
                    $scope.process = "done";
                    alert("Status Code: " + status + "\nDescription: " + data);
                })
            }
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

    $scope.$on('$destroy', function () {
        $interval.cancel(doTheMath);
        doTheMath = undefined;
    });

    $scope.generateTemplates = function () {
        $scope.templates = [];
        $scope.showLoader();
        $http.get("http://localhost:4283/api/users?username=kennethcarlnacuaybanez")
        .success(function (data, status) {
            if (data.status == "SUCCESS") {
                $scope.process = "done";
                //Generate templates
                data.objParam1.Name = data.objParam1.FirstName + " " + data.objParam1.MiddleName + " " + data.objParam1.LastName;
                $scope.templateOne(data.objParam1, 30);
            }
            else {
                $scope.process = "done";
                alert("No available template.");
            }
        })
        .error(function (data, status) {
            $scope.process = "done";
            alert("Status Code: " + status + "\nDescription: " + data);
        })
    };

    $scope.templateOne = function (user, maxNoOfLines) {
        $scope.object = { Id: 1, Content: [] };
        $scope.currentLines = 0;
        $scope.contentHtml = [];
        $scope.pageCount = 1;
        //Initialize User Image
        $scope.contentHtml[$scope.pageCount] = '<img src="UserImage" class="image-preview" align="right">' + "\n";
        $scope.contentHtml[$scope.pageCount] = $scope.contentHtml[$scope.pageCount].replace("UserImage", user.ImageName);
        $scope.writeNewLine(true, maxNoOfLines);
        //Initialize User Name
        $scope.writeContent(false, maxNoOfLines, "Name", user.Name, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Address
        $scope.writeContent(false, maxNoOfLines, "Address", user.Address, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Contact No
        $scope.writeContent(false, maxNoOfLines, "Contact No", user.ContactNo, ["left-label-preview", "right-label-preview"], 90);
        //Initialize User Email Address
        $scope.writeContent(false, maxNoOfLines, "Email Address", user.EmailAddress, ["left-label-preview", "right-label-preview"], 90);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "OBJECTIVES", "line line-label");
        //Inialize User Objective
        $scope.initializeObjective(user, maxNoOfLines, 94);
        $scope.writeNewLine(true, maxNoOfLines);
        $scope.writeHeaderContent(true, maxNoOfLines, "PERSONAL INFORMATION", "line line-label");
        //Initialize User Age
        $scope.writeContent(false, maxNoOfLines, "Age", user.Age, ["left-label-preview", "right-label-preview"], 94);
        //Initialize User Birthdate
        $scope.writeContent(false, maxNoOfLines, "Birthdate", user.DateOfBirth, ["left-label-preview", "right-label-preview"], 94);
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
                $scope.initializeByUnderlineTag(user.Skills, maxNoOfLines, 78);
            }
            if (user.Strengths.length > 0) {
                $scope.writeHeaderContent(true, maxNoOfLines, "Strengths:", "line line-label-medium");
                //Initialize Strengths
                $scope.initializeByUnderlineTag(user.Strengths, maxNoOfLines, 78);
            }
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.PostGraduates.length > 0 || user.Tertiaries.length > 0
            || user.Secondaries.length > 0 || user.Primaries.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "EDUCATIONAL ATTAINMENT", "line line-label");
            //Initialize Post Graduate Details
            $scope.initializePostGraduates(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Tertiaries Details
            $scope.initializeTertiaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Secondaries Details
            $scope.initializeSecondaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
            //Initialize Primaries Details
            $scope.initializePrimaries(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.WorkExperiences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "WORK EXPERIENCE", "line line-label");
            //Initialize User Work Experience
            $scope.initializeWorkExperiences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.Trainings.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "SEMINARS/TRAININGS ATTENDED", "line line-label");
            $scope.initializeTrainings(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
            $scope.writeNewLine(true, maxNoOfLines);
        }
        if (user.CharacterReferences.length > 0) {
            $scope.writeHeaderContent(true, maxNoOfLines, "CHARACTER REFERENCE", "line line-label");
            $scope.initializeCharacterReferences(true, user, maxNoOfLines, ["left-label-preview-medium", "right-label-preview-medium"], 78);
        }
        for (var i = 1; i <= $scope.contentHtml.length - 1; i++)
            $scope.object.Content.push($scope.contentHtml[i]);

        $scope.templates.push($scope.object);
    }

    $scope.generateTemplates();
});