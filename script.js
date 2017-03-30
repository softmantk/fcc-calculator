/**
 * Created by SOFTMAN on 28-03-2017.
 */
var app = angular.module("calculator",[]);

app.controller("calCtrl", function ($scope) {

    var coun = 0;
    var expr = [];
    $scope.current = 0;
    var dispClear = false;

    $scope.number = function(num) {

         if(typeof(num) === 'number' || num === '.') {

             console.log("pressed number or . ");





             var x = numFormat(num);
             expr.push(num);





             if(num === '.') {

                 console.log("its dot");
                 $scope.current += num;

             } else  if($scope.current == 0) {

                 console.log("00000z");
                 $scope.current += num;

             } else if(typeof $scope.current  === 'string') {
                 $scope.current = num;

             }
             else  {
                 console.log("10 multiplier reached");

                 $scope.current = $scope.current * 10 + num ;
             }


         }




         else {

             if(num !== 'back') {
                 $scope.current = num;
             }



             if(num == '=') {

                 // equal sign , do math operation in  mathExp
                 var mathExp = expr.join("");

                 var res =Number(  eval(mathExp).toFixed(5)  ) ;
                 $scope.current = res;
                 expr = [];
                 expr.push(res);
                 coun=0;
                 // clearing display memory
                 dispClear = true;

             } else if(num == "1/x") {

                 var mathExp = expr.join("");
                 var res =Number( eval(1/mathExp).toFixed(5));
                 $scope.current = res;
                 //clear memory
                 expr = [];
                 expr.push(res);
                 coun=0;

             } else if (num == "sqrt") {
                 var mathExp = expr.join("");
                 var res =parseFloat(  Math.sqrt(mathExp).toFixed(5) )  ;
                 $scope.current = res;
                //clearing memory
                 expr = [];
                 expr.push(res);
                 coun=0;
                 dispClear = true;

             } else if (num == 'back') {

                 expr.pop();
                 console.log(expr);

             }
             else {

                 expr.push(num);
                 $scope.current = num.toString();
             }
         }
    };
    function numFormat(value) {
        while(value>0) {
            value = Math.floor(value / 10);
            coun++;
        }
        if(coun > 7) {
            $(".calc-display").css("font-size", "20px");
        } else if( coun<=7) {
            $(".calc-display").css("font-size", "50px");
        }
        return coun;
    }

    $scope.clear = function () {
        $scope.current = 0;
        expr = [];
        coun =0;
    }
 
});

