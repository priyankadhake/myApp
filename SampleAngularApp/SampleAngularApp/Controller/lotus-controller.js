'use strict';

var app = angular.module('app', []);
app.controller('lotusController', function ($scope) {
    $scope.details = [];


    $scope.Data  = {
        "Depatrments": [
            {
                "deptname": "Human Resource",
                "deptid": 1,
                "Groups": [
                    {
                        "GroupName": "Recruitment",
                        "GroupId": 22,
                        "DeptId":1,
                        "employees": [
                            {
                                "empName": "Jack",
                                "empId": 12,
                                "GroupId": 22,
                            },
                            {
                                "empName": "Joe",
                                "empId": 21,
                                "GroupId": 22,
                            }
                        ]
                    },
                    {
                        "GroupName": "Finance",
                        "GroupId": 23,
                        "DeptId": 1,                       
                        "employees": [
                            {
                                "empName": "Rochelle",
                                "empId": 34,
                                "GroupId": 23,
                            },
                            {
                                "empName": "Michle",
                                "empId": 11,
                                "GroupId": 23,
                            }
                        ]
                    }
                ]
            },
            {
                "deptname": "Technical",
                "deptid": 2,
                "Groups": [
                    {
                        "GroupName": "Development",
                        "GroupId": 27,
                        "DeptId": 2,
                        "employees": [
                            {
                                "empName": "Mike",
                                "empId": 15,
                                "GroupId": 27,
                            },
                            {
                                "empName": "Smith",
                                "empId": 16,
                                "GroupId": 27,
                            }
                        ]
                    },
                    {
                        "GroupName": "Testing",
                        "GroupId": 28,
                        "DeptId": 2,
                        "employees": [
                            {
                                "empName": "Tim",
                                "empId": 34,
                                "GroupId": 28,
                            },
                            {
                                "empName": "Cook",
                                "empId": 11,
                                "GroupId": 28,
                            }
                        ]
                    }
                ]
            },
            {
                "deptname": "Transport",
                "deptid": 3,
                "Groups": "",
            }
           
        ]
    }
  
    // 
    $scope.groupList = [];
    $scope.empList = [];
    $scope.dptClick = function (deptId, isSelected)
    {
       
       
        $($scope.Data.Depatrments).each(function (index, ele) {
            if (isSelected) {
                if (ele.deptid === deptId && ele.Groups != "") {
                    if ($scope.groupList.length == 0) {
                        $scope.groupList = ele.Groups;
                    } else {
                        $scope.groupList = $scope.groupList.concat(ele.Groups);

                    }
                    $scope.AppendData(ele.deptname);
                }
                //} else if(ele.deptid === deptId && ele.Groups == ""){
                //    $scope.AppendData(ele.deptname);
                //}
              
            } else {
               // $scope.popOutData(ele.deptname);
                $($scope.groupList).each(function (i, e) {
                    if (e.DeptId == deptId) {
                        $scope.groupList.pop(e);
                       // $scope.popOutData(e.GroupName);
                        if ($scope.empList.length > 0) {
                           // $($scope.empList).each
                        }
                       
                    }
                   
                })
              

                // $scope.groupList.pop(ele[index].Groups);
            }
        })

       
    }
   
    $scope.groupClick = function (grpId, isgrpSelected) {
        $($scope.Data.Depatrments).each(function (index, ele) {
            $($scope.Data.Depatrments[index].Groups).each(function (i, e) {
            if (isgrpSelected) {          
               
                        if (e.GroupId === grpId && e.employees != "") {
                            if ($scope.empList.length == 0) {
                                $scope.empList = e.employees;
                            } else {
                                $scope.empList = $scope.empList.concat(e.employees);
                            }
                            $scope.AppendData(e.GroupName);
                        }
                        //else {
                        //    $scope.AppendData(e.GroupName);
                        //}
                       
            }
            else {

                $($scope.empList).each(function (i, e) {
                    if (e.GroupId == grpId) {
                        $scope.empList.pop(e);
                        // $scope.popOutData(e.GroupName);
                    }

                });
            }
            })
        
                   
               
            
        });

    }
    $scope.empClick = function (empId, isempSelected) {

        debugger;
        if (isempSelected) {
            $($scope.empList).each(function (index, ele) {
                if (ele.empId === empId) {
                   
                  //  $scope.details = ele.empName;
                    $scope.AppendData(ele.empName);
                }

            })
        }

    }

    $scope.btnSubmit = function () {
        $scope.txtData = $scope.details;
    }

    $scope.AppendData = function (val) {
        if ($scope.details.length == 0) {
            $scope.details = val;
        } else {
            $scope.details = $scope.details.concat(val);
        }
    }
    $scope.popOutData = function (item) {
        if ($scope.details.length > 0)
        {
            var i = $scope.details.indexOf(item);
            $scope.details.splice(i, 1);
        }
    }
});