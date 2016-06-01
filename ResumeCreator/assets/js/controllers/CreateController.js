arjocamahamageApp.controller("CreateController", function ($scope, $state, $interval) {
    $scope.modalTitle = "";
    $scope.buttonLabel = "";
    $scope.withError = false;
    $scope.errorMessage = "";
    $scope.civilStatus = [
                    { Id: "Single", Name: "Single" },
                    { Id: "Married", Name: "Married" },
                    { Id: "Divorced", Name: "Divorced" },
                    { Id: "Widowed", Name: "Widowed" },
        ];
    $scope.resume = {
        Id: null,
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
        ContactNumber: null,
        EmailAddress: null,
        Objectives: null,
        Hobbies: null,
        Skills: [],
        Strengths: [],
        PostGraduate: [],
        Tertiary: [],
        Secondary: [],
        Primary: [],
        WorkExperience: [],
        SeminarsAttended: [],
        CharacterReference: []
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
                if ($scope.resume.SeminarsAttended.length > 0) {
                    var currentIndex = $scope.resume.SeminarsAttended.length - 1;
                    if ($scope.resume.SeminarsAttended[currentIndex].Name == null
                        || $scope.resume.SeminarsAttended[currentIndex].Description == null
                        || $scope.resume.SeminarsAttended[currentIndex].Period == null) {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else if ($scope.resume.SeminarsAttended[currentIndex].Name.trim() == ""
                        || $scope.resume.SeminarsAttended[currentIndex].Description.trim() == ""
                        || $scope.resume.SeminarsAttended[currentIndex].Period.trim() == "") {
                        $scope.withError = true;
                        $scope.errorMessage = "Please fill-up all fields.";
                    }
                    else {
                        $scope.seminars = {
                            Name: null,
                            Description: null,
                            Period: null
                        }
                        $scope.resume.SeminarsAttended.push($scope.seminars);

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
                    $scope.resume.SeminarsAttended.push($scope.seminars);

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
                if ($scope.resume.SeminarsAttended.length > 1)
                    $scope.resume.SeminarsAttended.splice(index, 1);
                else {
                    $scope.resume.SeminarsAttended[index].Name = "";
                    $scope.resume.SeminarsAttended[index].Description = "";
                    $scope.resume.SeminarsAttended[index].Period = "";
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
                for (var i = 0; i < $scope.resume.SeminarsAttended.length; i++) {
                    if ($scope.resume.SeminarsAttended[i].Name == null
                        || $scope.resume.SeminarsAttended[i].Description == null
                        || $scope.resume.SeminarsAttended[i].Period == null) {
                        $scope.resume.SeminarsAttended.splice(i, 1);
                        i = i - 1;
                    }
                    else if ($scope.resume.SeminarsAttended[i].Name.trim() == ""
                        || $scope.resume.SeminarsAttended[i].Description.trim() == ""
                        || $scope.resume.SeminarsAttended[i].Period.trim() == "") {
                        $scope.resume.SeminarsAttended.splice(i, 1);
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

    $(function () {
        $('#dateOfBirth').datetimepicker({
            format: 'MMMM DD, YYYY',
            sideBySide: false
        });
    });

    var doTheMath = $interval(function () {
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;

        //console.log(document.getElementById("dateOfBirthValue").value);
        if (innerWidth < 767 || innerWidth > 1440) {
            $state.go('ongoing');
        }
    }, 100);

    $scope.$on('$destroy', function () {
        $interval.cancel(doTheMath);
        doTheMath = undefined;
    });
});