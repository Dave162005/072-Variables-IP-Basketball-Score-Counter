// DECLARE YOUR VARIABLES HERE
let teamOneName ;
let teamTwoName ;

teamOneName = "Highlanders";
teamTwoName = "Ethereals";

let scoreOne = 0;
let scoreTwo = 3;
let freeThrow= 1;
let twoPointShot= 2;
let threePointShot=3;

let arena = "Barclays Center";
$("h1").text(arena);

$(".teamOne").css("background-color","blue");
$(".teamTwo").css("background-color","red");


































// DON'T CHANGE THIS CODE
updateTeams();

let realTeamOneName, realTeamTwoName, realScoreOne, realScoreTwo, realThreePointShot, realTwoPointShot, realFreeThrow;

try {
    realTeamOneName = eval('teamOneName');
    realTeamTwoName = eval('teamTwoName');
    realScoreOne = eval('scoreOne');
    realScoreTwo = eval('scoreTwo');
    realThreePointShot = eval('threePointShot');
    realTwoPointShot = eval('twoPointShot');
    realFreeThrow = eval('freeThrow');
} catch (_e) {}

updateTeams();

$("button").click(function(){
    var team;
    team = $(this).attr("team");
    
    var points;
    points = $(this).attr("class");
    
    updateScore(team, points);
});

function updateScore(myTeam, myPoints){
    if(myTeam === "one"){
        if(myPoints === "twoPt"){
            realScoreOne += realTwoPointShot;
        } else if(myPoints === "threePt"){
            realScoreOne += realThreePointShot;
        } else if(myPoints === "freeThrow"){
            realScoreOne += realFreeThrow;
        }
        $(".scoreOne").text(realScoreOne);
    } else if (myTeam === "two"){
        if(myPoints === "twoPt"){
            realScoreTwo += realTwoPointShot;
        } else if(myPoints === "threePt"){
            realScoreTwo += realThreePointShot;
        } else if(myPoints === "freeThrow"){
            realScoreTwo += realFreeThrow;
        }
        $(".scoreTwo").text(realScoreTwo);
    }
}

function updateTeams(){
    $(".teamOne").text(realTeamOneName);
    $(".teamTwo").text(realTeamTwoName);
}

