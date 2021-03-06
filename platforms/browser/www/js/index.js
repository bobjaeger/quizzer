/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 /*
 function pageScroll() {
     	window.scrollBy(0,50); // horizontal and vertical scroll increments
     	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
 }*/

// var GameData =  [
//   {
// 	"id": "quiz01",
// 	"title": "Mood Survey",
// 	"questions": [
// 		{"id": 1, "text": "Date", "type": "date", "help": "The date you started this quiz."},
//   		{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},
//   		{"id": 3, "text": "Diary", "type": "textarea", "help": "Write 4 paragraphs"},
//   		{"id": 4, "text": "Gender", "type": "choice", "options": ["Male", "Female", "Depends what day it is"]},
//   		{"id": 5, "text": "Mood", "type": "slidingoption", "options": ["Sad", "Happy", "Laughing"], "optionVisuals": [":(" , ":)", ":D"]},
//   		{"id": 6, "text": "Happiness Today", "type": "scale", "start": 0, "end": 10, "increment": 1, "gradientStart": "#ff0000", "gradientEnd": "#00ff00"},
//  		{"id": 7, "text": "Blood Alcohol", "type": "scale", "start": 0, "end": 0.5, "increment": 0.01}
//
// 	]
//   },
// 	{
// 	"id": "quiz02",
// 	"title": "Exam Grade",
// 	"questionsPerPage": [2,4],
// 	"score": 20,
// 	"questions": [
// 		{"id": 1, "text": "Sid", "type": "textbox", "validate": "/[0-9]+/"},
//   		{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},
//   		{"id": 3, "text": "What is the capital of Australia?", "type": "textbox", "answer": "Canberra", "weighting": 5},
//   		{"id": 4, "text": "What is the largest state in Australia?", "type": "textbox", "answer": ["Western Australia", "WA"], "weighting": 5},
//   		{"id": 5, "text": "What is the capital of Victoria?", "type": "choice", "options": ["Sydney", "Brisbane", "Melbourne"], "answer": "Melbourne", "weighting": 5},
//   		{"id": 6, "text": "Which are the territories of Australia?", "type": "multiplechoice", "options": ["ACT","NSW","NT","QLD","SA","TAS","VIC","WA"], "answer": ["ACT","NT"], "weighting": 5}
//
// 	]
//   }
// ]

var GameData='http://introtoapps.com/datastore.php?action=save&appid=215339949&objectid=quiz&data=[{"id": "quiz01","title": "Mood Survey","questions": [{"id": 1, "text": "Date", "type": "date", "help": "The date you started this quiz."},{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},{"id": 3, "text": "Diary", "type": "textarea", "help": "Write 4 paragraphs"},{"id": 4, "text": "Gender", "type": "choice", "options": ["Male", "Female", "Depends what day it is"]},{"id": 5, "text": "Mood", "type": "slidingoption", "options": ["Sad", "Happy", "Laughing"], "optionVisuals": ["~(^-^)~","-(-_-)-","=(v_v)="]},{"id": 6, "text": "Happiness Today", "type": "scale", "start": 0, "end": 10, "increment": 1, "gradientStart": "rgb(255,0,0)", "gradientEnd": "rgb(0,255,0)"},{"id": 7, "text": "Blood Alcohol", "type": "scale", "start": 0, "end": 0.5, "increment": 0.01}]},{"id": "quiz02","title": "Exam Grade","questionsPerPage": [2,4],"score": 20,"questions": [{"id": 1, "text": "Sid", "type": "textbox", "validate": "/[0-9]+/"},{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},{"id": 3, "text": "What is the capital of Australia?", "type": "textbox", "answer": "Canberra", "weighting": 5},{"id": 4, "text": "What is the largest state in Australia?", "type": "textbox", "answer": ["Western Australia", "WA"], "weighting": 5},{"id": 5, "text": "What is the capital of Victoria?", "type": "choice", "options": ["Sydney", "Brisbane", "Melbourne"], "answer": "Melbourne", "weighting": 5},{"id": 6, "text": "Which are the territories of Australia?", "type": "multiplechoice", "options": ["ACT","NSW","NT","QLD","SA","TAS","VIC","WA"], "answer": ["ACT","NT"], "weighting": 5}]}]';

$.get(GameData, function (data, status){
});

// var username = nameofuser;
//
// localStorage.setItem(username+"logged",);
// console.log(localStorage.getItem("username"));
//
// localStora.setItem(user"-exam-sid", )

// function toggleToast() {
//   document.querySelector('ons-toast').toggle();
// }

/* function to verify all the input data from user and immediate give user info
    what user mistake by check if corret and error prompt if wrong */
function verify(inputtype, inputvalue, displaymsg, correctmsg)  // @VERIFY REGISTER
{
  console.log(inputtype, inputvalue, displaymsg);

  if (inputvalue.length == 0)
   {
     document.getElementById(displaymsg).innerHTML = "*must be filled";
     document.getElementById(correctmsg).innerHTML = "";
   }
   else
   {
    switch(inputtype){

       case "nameofuser":
        if (inputvalue.match(/^[A-Za-z]+$/))
        {
          document.getElementById(correctmsg).innerHTML = "<font color='green'>&#10004</font>";
          document.getElementById(displaymsg).innerHTML = "";
        }
        else{
          document.getElementById(displaymsg).innerHTML = "*only alphabets";
          document.getElementById(correctmsg).innerHTML = "";
        }

        // save user register data to local
        localStorage.setItem("userInputRealName", inputvalue);
       break;

       case "mailofuser":
        if (inputvalue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/))
        {
          document.getElementById(correctmsg).innerHTML = "<font color='green'>&#10004</font>";
          document.getElementById(displaymsg).innerHTML = "";
        }
        else{
          document.getElementById(displaymsg).innerHTML = "*please input corect email";
          document.getElementById(correctmsg).innerHTML = "";
        }

        // save user register data to local
        localStorage.setItem("userInputMail", inputvalue);
       break;

       case "usernameofuser":
        if (inputvalue.match(/^[a-zA-Z0-9-]+$/))
        {
          document.getElementById(correctmsg).innerHTML = "<font color='green'>&#10004</font>";
          document.getElementById(displaymsg).innerHTML = "";
        }
        else{
          document.getElementById(displaymsg).innerHTML = "*alphabet and number max 12";
          document.getElementById(correctmsg).innerHTML = "";
        }

        // save user register data to local
        localStorage.setItem("userInputUsername", inputvalue);
       break;

       case "passofuser":
        if (inputvalue.match(/^[A-Za-z0-9'\.\-\s\,]{6,12}$/))
        {
          document.getElementById(correctmsg).innerHTML = "<font color='green'>&#10004</font>";
          document.getElementById(displaymsg).innerHTML = "";
        }
        else{
          document.getElementById(displaymsg).innerHTML = "*6-12 lenght";
          document.getElementById(correctmsg).innerHTML = "";
        }
       break;
    }
  }
}
// @END OF VERIFY REGISTER

/* function to validate the user data if there no any info have been inputted and submit then
    it will alert user too fill the blank space*/
function validatereg() // @VALIDATE REGISTER IF BLANK OR NOT
{
    var passREG = true;

    var nameofuser = document.getElementById("realname").value;
    var mailofuser = document.getElementById("usermail").value;
    var usernameofuser = document.getElementById("useruname").value;
    var passofuser = document.getElementById("upass").value;

    if (nameofuser == ""){
      passREG = false;
    }
    else if (mailofuser == ""){
      passREG = false;
    }
    else if (usernameofuser == ""){
      passREG = false;
    }
    else if (passofuser == ""){
      passREG = false;
    }

    else{

      if($('#checkrealname').text() != ""){
        passREG = false;
      }

      if($('#checkumail').text() != ""){
        passREG = false;
      }

      if($('#checkuname').text() != ""){
        passREG = false;
      }

      if($('#checkpass').text() != ""){
        passREG = false;
      }

      if(passREG == true){
        reguser(nameofuser, mailofuser, usernameofuser, passofuser)

        document.querySelector('#NAV').popPage(register.html);
      }
    }
  }
// @END OF VALIDATE REGISTER

/* function to validate the user data if there no any info have been inputted and submit then
    it will alert user too fill the blank space*/

var passLOG = false;

function validatelog(){ // @VALIDATE LOGIN IF THERE BLANK OR NOT
  var usernamelog = document.getElementById("ulogin").value;
  var passlog = document.getElementById("ulogpass").value;

  if (usernamelog == ""){
    alert("don't leave username blank");
    passLOG = false;
  }
  else if (passlog == ""){
    alert("don't leave password blank");
    passLOG = false;
  }

  else{
    passLOG = true;
  }
}
// @END OF VALIDATE LOGIN

// register user and save all the data to cloud
function reguser(nameofuser, mailofuser, usernameofuser, passofuser) { // @SAVE USER REGISTER DATA TO CLOUD

  var encryptPass = sha256(passofuser); // SHA VAR

  var link = "http://introtoapps.com/datastore.php?action=save&appid=215339949&objectid=";
  var linkname = usernameofuser;
  var linkcombine = link + linkname + "&data=" + "name:" + nameofuser + "," + "email:" + mailofuser + "," + "username:" + usernameofuser + "," + "password:" + encryptPass; //SHA VAR CALLED
  $.get(linkcombine, function (data, status){alert("Successfuly registered!");
});
}
// @END OF SAVE REGISTER DATA TO CLOUD

// login user and retrieve quiz data per user by split comma to take other data
function loguser(usernameofuser, passofuser) { // @LOGIN USER AND RETRIEVE USER DETAILS
  var link = "http://introtoapps.com/datastore.php?action=load&appid=215339949&objectid=";
  var linkname = usernameofuser;
  var linkcombine = link + linkname;
  $.get(linkcombine, function (data, status){

  var retrievedData = data;
  var keywords = retrievedData.split(',');

  keywords.forEach(function(entry){
    keywords = entry.split(':');

    if(keywords[0] == "password"){

      var encryptPass = sha256(passofuser);

      if(keywords[1] == encryptPass){
        alert('you have been logged in');

        //immediately store username and hashed pass of user to local storage
        localStorage.setItem("usernameLOC", usernameofuser);
        localStorage.setItem("passwordLOC", encryptPass);
      }
      else{
        alert('failed log in please try again');
      }
     }
    });
  });
}
// @END OF RETRIEVING USER DATA TO LOGIN

// function to clear local storage if the logged in user logout and change local data to guest
function CleanDataUserLogout(){  // @CLEAR USER DATA AT LOCAL STORAGE WHEN LOGGED OUT
  localStorage.setItem("usernameLOC", "guest");
  localStorage.removeItem("passwordLOC");
  alert("you heve been logout");
}

//save all inputted data relate to logged user before upload to cloud
function getInputBoxMS(){
  //ms var
  var name = document.getElementById("Q1-0-name").value;
  var diary = document.getElementById("Q1-0-diary").value;

  //local mood survey quiz
  localStorage.setItem("MSname", name);
  localStorage.setItem("MSdiary", diary);

}

function getInputBoxEG(){
  //eg var
  var sid = document.getElementById("Q2-1-SID").value;
  var fullname = document.getElementById("Q2-1-fullname").value;

  //local exam grade user details
  localStorage.setItem("EGsid", sid);
  localStorage.setItem("EGfullname", fullname);
}

function getInputBoxEG2(){
  //eg2 var
  var capital = document.getElementById("Q2-1-capital").value;
  var state = document.getElementById("Q2-1-state").value;

  //local exam grade answered quiz
  localStorage.setItem("EG2capital", capital);
  localStorage.setItem("EG2state", state);
}

//save all inputted data exclusively for radio button relate to logged user before upload to cloud
function getRadioButton(){
  var radios = document.getElementsByName("seconds");
  $('input[name="gender"]').on('change', function(){
    localStorage.setItem('gender', $(this).val());
  });
}

//save all data to cloud that already saved in local but this function just for Mood Survey quiz
function MSsave() { // @SAVE Mood Survey to cloud

  var usernameLOC = localStorage.getItem("usernameLOC");

  var name = document.getElementById("Q1-0-name").value;
  var diary = document.getElementById("Q1-0-diary").value;

  var link = "http://introtoapps.com/datastore.php?action=append&appid=215339949&objectid=";
  var linkcombine = link + usernameLOC + "&data=" + "," + name + "," + diary;
  $.get(linkcombine, function (data, status){alert("MoodSurvey Quiz Submitted");
});
}

function EGsave() { // @SAVE Exam Grade user data to cloud

  var usernameLOC = localStorage.getItem("usernameLOC");

  var egsid = document.getElementById("Q2-1-SID").value;
  var egfullname = document.getElementById("Q2-1-fullname").value;

  var link = "http://introtoapps.com/datastore.php?action=append&appid=215339949&objectid=";
  var linkcombine = link + usernameLOC + "&data=" + "," + egsid + "," + egfullname ;
  $.get(linkcombine, function (data, status){alert("ExamGrade user data submitted");
});
}

function EGsave2() { // @SAVE Exam Grade answer to cloud

  var usernameLOC = localStorage.getItem("usernameLOC");

  var eg2capital = document.getElementById("Q2-1-capital").value;
  var eg2state = document.getElementById("Q2-1-state").value;

  var link = "http://introtoapps.com/datastore.php?action=append&appid=215339949&objectid=";
  var linkcombine = link + usernameLOC + "&data=" + "," + eg2capital + "," + eg2state;
  $.get(linkcombine, function (data, status){alert("ExamGrade answer submitted");
  window.location.reload();
});
}

// NAVIGATION
document.addEventListener('init', function(event) {

  var page = event.target;

  if (page.id === 'menuP')
  {
    page.querySelector('#GotoRegis').onclick = function() {
      document.querySelector('#NAV').pushPage('register.html');
    };

    page.querySelector('#GotoLogin').onclick = function() {
      document.querySelector('#NAV').pushPage('login.html');
    };

    page.querySelector('#GotoQuizMS').onclick = function() {
      document.querySelector('#NAV').pushPage('MSQuiz.html');
    };

    page.querySelector('#GotoQuizEG').onclick = function() {
      document.querySelector('#NAV').pushPage('EGQuiz.html');
    };

    page.querySelector('#GotoScore').onclick = function() {
      document.querySelector('#NAV').pushPage('score.html');
    };

    page.querySelector('#GotoAbout').onclick = function() {
      document.querySelector('#NAV').pushPage('about.html');
    };
  }

  else if (page.id === 'register')
  {
    page.querySelector('#BackToMenu').onclick = function() {
      validatereg();
      // if(passREG != false){
      //   document.querySelector('#NAV').popPage(register.html);
      // }
    };
  }

  else if (page.id === 'login')
  {
    page.querySelector('#BackToMenu').onclick = function() {
      validatelog();
      if(passLOG != false){

        loguser($('#ulogin').val(), $('#ulogpass').val());
        document.querySelector('#NAV').popPage(login.html);
      }
    };
  }

  else if (page.id === 'MSQuiz')
  {
    page.querySelector('#BackToMenu').onclick = function() {
      MSsave();
      document.querySelector('#NAV').popPage(MSQuiz.html);
    };

    $.get("http://introtoapps.com/datastore.php?action=load&appid=215339949&objectid=quiz", function (data, status){

      console.log(data);
      getDataInQuiz = JSON.parse(data);

      //quiz title
      document.getElementById("Q1-0-title").innerHTML = getDataInQuiz[0].id+" - "+getDataInQuiz[0].title;

      //question mood survey 1. Date
      document.getElementById("Q1-0-Question0").innerHTML = getDataInQuiz[0].questions[0].id+". "+getDataInQuiz[0].questions[0].text;
      document.getElementById("Q1-0-Help0").innerHTML = '"hint: ' + getDataInQuiz[0].questions[0].help+'"';
      document.getElementById("Q1-0-date").type = getDataInQuiz[0].questions[0].type;

      //question mood survey 2. Name
      document.getElementById("Q1-0-Question1").innerHTML = getDataInQuiz[0].questions[1].id+". "+getDataInQuiz[0].questions[1].text;
      document.getElementById("Q1-0-Help1").innerHTML = '"hint: ' + getDataInQuiz[0].questions[1].help+'"';
      document.getElementById("Q1-0-name").type = getDataInQuiz[0].questions[1].type;

      //question mood survey 3. Diary
      document.getElementById("Q1-0-Question2").innerHTML = getDataInQuiz[0].questions[2].id+". "+getDataInQuiz[0].questions[2].text;
      document.getElementById("Q1-0-Help2").innerHTML = '"hint: ' + getDataInQuiz[0].questions[2].help+'"';
      document.getElementById("Q1-0-diary").type = getDataInQuiz[0].questions[2].type;

      //question mood survey 4. Gender
      document.getElementById("Q1-0-Question3").innerHTML = getDataInQuiz[0].questions[3].id+". "+getDataInQuiz[0].questions[3].text;
      document.getElementById("Q1-0-genderMale").innerHTML = " "+getDataInQuiz[0].questions[3].options[0];
      document.getElementById("Q1-0-genderFemale").innerHTML = " "+getDataInQuiz[0].questions[3].options[1];
      document.getElementById("Q1-0-genderOther").innerHTML = " "+getDataInQuiz[0].questions[3].options[2];

      //question mood survey 5. Mood
      document.getElementById("Q1-0-Question4").innerHTML = getDataInQuiz[0].questions[4].id+". "+getDataInQuiz[0].questions[4].text;
      document.getElementById("Q1-0-Options4").innerHTML = getDataInQuiz[0].questions[4].options;
      document.getElementById("Q1-0-OptionsVisuals4").innerHTML = getDataInQuiz[0].questions[4].optionVisuals;

      //question mood survey 6. Happiness Today
      document.getElementById("Q1-0-Question5").innerHTML = getDataInQuiz[0].questions[5].id+". "+getDataInQuiz[0].questions[5].text;

      //question mood survey 7. Blood Alcohol
      document.getElementById("Q1-0-Question6").innerHTML = getDataInQuiz[0].questions[6].id+". "+getDataInQuiz[0].questions[6].text;
  });
}

  else if (page.id === 'EGQuiz')
  {
    page.querySelector('#NextQuizEG2').onclick = function() {
      EGsave()
      document.querySelector('#NAV').pushPage('EGQuiz2.html');
    };

    $.get("http://introtoapps.com/datastore.php?action=load&appid=215339949&objectid=quiz", function (data, status){

      console.log(data);
      getDataInQuiz = JSON.parse(data);

    //page title
    document.getElementById("Q2-title1").innerHTML = getDataInQuiz[1].id+" - "+getDataInQuiz[1].title+", Page 1 - "+getDataInQuiz[1].questionsPerPage[0]+" Question";

    //question exam grade 1. SID
    document.getElementById("Q2-1-Question1").innerHTML = getDataInQuiz[1].questions[0].id+". "+getDataInQuiz[1].questions[0].text;
    document.getElementById("Q2-1-SID").type = getDataInQuiz[1].questions[0].type;

    //question exam grade 2. fullname
    document.getElementById("Q2-1-Question2").innerHTML = getDataInQuiz[1].questions[1].id+". "+getDataInQuiz[1].questions[1].text;
    document.getElementById("Q2-1-fullname").type = getDataInQuiz[1].questions[1].type;
  });
}

  else if (page.id === 'EGQuiz2')
  {
    page.querySelector('#BackToMenu').onclick = function() {
      EGsave2()
      //window.location.reload();
      //document.querySelector('#NAV').popPage(EGQuiz2.html);
    };

    $.get("http://introtoapps.com/datastore.php?action=load&appid=215339949&objectid=quiz", function (data, status){

      console.log(data);
      getDataInQuiz = JSON.parse(data);

    //page title
    document.getElementById("Q2-title2").innerHTML = getDataInQuiz[1].id+" - "+getDataInQuiz[1].title+", Page 2 - "+getDataInQuiz[1].questionsPerPage[1]+" Question";

    //question exam grade 3. What is the capital of Australia?
    document.getElementById("Q2-1-Question3").innerHTML = getDataInQuiz[1].questions[2].id+". "+getDataInQuiz[1].questions[2].text;
    document.getElementById("Q2-1-capital").type = getDataInQuiz[1].questions[2].type;
    document.getElementById("Q2-1-point3").innerHTML = '*score: ' + getDataInQuiz[1].questions[2].weighting;

    //question exam grade 4. What is the largest state in Australia?
    document.getElementById("Q2-1-Question4").innerHTML = getDataInQuiz[1].questions[3].id+". "+getDataInQuiz[1].questions[3].text;
    document.getElementById("Q2-1-state").type = getDataInQuiz[1].questions[3].type;
    document.getElementById("Q2-1-point4").innerHTML = '*score: ' + getDataInQuiz[1].questions[3].weighting;

    //question exam grade 5. What is the capital of Victoria?
    document.getElementById("Q2-1-Question5").innerHTML = getDataInQuiz[1].questions[4].id+". "+getDataInQuiz[1].questions[4].text;
    document.getElementById("Q2-1-capitalSydney").innerHTML = " "+getDataInQuiz[1].questions[4].options[0];
    document.getElementById("Q2-1-capitalBrisbane").innerHTML = " "+getDataInQuiz[1].questions[4].options[1];
    document.getElementById("Q2-1-capitalMelbourne").innerHTML = " "+getDataInQuiz[1].questions[4].options[2];
    document.getElementById("Q2-1-point5").innerHTML = '*score: ' + getDataInQuiz[1].questions[4].weighting;

    //question exam grade 6. Which are the territories of Australia?
    document.getElementById("Q2-1-Question6").innerHTML = getDataInQuiz[1].questions[5].id+". "+getDataInQuiz[1].questions[5].text;
    document.getElementById("Q2-1-stateACT").innerHTML = " "+getDataInQuiz[1].questions[5].options[0];
    document.getElementById("Q2-1-stateNSW").innerHTML = " "+getDataInQuiz[1].questions[5].options[1];
    document.getElementById("Q2-1-stateNT").innerHTML = " "+getDataInQuiz[1].questions[5].options[2];
    document.getElementById("Q2-1-stateQLD").innerHTML = " "+getDataInQuiz[1].questions[5].options[3];
    document.getElementById("Q2-1-stateSA").innerHTML = " "+getDataInQuiz[1].questions[5].options[4];
    document.getElementById("Q2-1-stateTAS").innerHTML = " "+getDataInQuiz[1].questions[5].options[5];
    document.getElementById("Q2-1-stateVIC").innerHTML = " "+getDataInQuiz[1].questions[5].options[6];
    document.getElementById("Q2-1-stateWA").innerHTML = " "+getDataInQuiz[1].questions[5].options[7];
    document.getElementById("Q2-1-point6").innerHTML = '*score: ' + getDataInQuiz[1].questions[5].weighting;
  });
}

  else if (page.id === 'score')
  {

  }

  else if (page.id === 'about')
  {

  }

});
