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

var GameData =  [
  {
	"id": "quiz01",
	"title": "Mood Survey",
	"questions": [
		{"id": 1, "text": "Date", "type": "date", "help": "The date you started this quiz."},
  		{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},
  		{"id": 3, "text": "Diary", "type": "textarea", "help": "Write 4 paragraphs"},
  		{"id": 4, "text": "Gender", "type": "choice", "options": ["Male", "Female", "Depends what day it is"]},
  		{"id": 5, "text": "Mood", "type": "slidingoption", "options": ["Sad", "Happy", "Laughing"], "optionVisuals": [":(" , ":)", ":D"]},
  		{"id": 6, "text": "Happiness Today", "type": "scale", "start": 0, "end": 10, "increment": 1, "gradientStart": "#ff0000", "gradientEnd": "#00ff00"},
 		{"id": 7, "text": "Blood Alcohol", "type": "scale", "start": 0, "end": 0.5, "increment": 0.01}

	]
  },
	{
	"id": "quiz02",
	"title": "Exam Grade",
	"questionsPerPage": [2,4],
	"score": 20,
	"questions": [
		{"id": 1, "text": "Sid", "type": "textbox", "validate": "/[0-9]+/"},
  		{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},
  		{"id": 3, "text": "What is the capital of Australia?", "type": "textbox", "answer": "Canberra", "weighting": 5},
  		{"id": 4, "text": "What is the largest state in Australia?", "type": "textbox", "answer": ["Western Australia", "WA"], "weighting": 5},
  		{"id": 5, "text": "What is the capital of Victoria?", "type": "choice", "options": ["Sydney", "Brisbane", "Melbourne"], "answer": "Melbourne", "weighting": 5},
  		{"id": 6, "text": "Which are the territories of Australia?", "type": "multiplechoice", "options": ["ACT","NSW","NT","QLD","SA","TAS","VIC","WA"], "answer": ["ACT","NT"], "weighting": 5}

	]
  }
]

/* function to verify all the input data from user and immediate give user info
    what user mistake by check if corret and error prompt if wrong */
function verify(inputtype, inputvalue, displaymsg, correctmsg)
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

/* function to validate the user data if there no any info have been inputted and submit then
    it will alert user too fill the blank space*/

// #############VALIDATE REGISTER PAGE

function validatereg()
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

/* function to validate the user data if there no any info have been inputted and submit then
    it will alert user too fill the blank space*/

// #############VALIDATE LOGIN PAGE

var passLOG = false;

function validatelog(){
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

// register user and save all the data to cloud
function reguser(nameofuser, mailofuser, usernameofuser, passofuser) {
  var link = "http://introtoapps.com/datastore.php?action=save&appid=215339949&objectid=";
  var linkname = usernameofuser;
  var linkcombine = link + linkname + "&data=" + "name:" + nameofuser + "," + "email:" + mailofuser + "," + "username:" + usernameofuser + "," + "password:" + passofuser;
  $.get(linkcombine, function (data, status){alert("Successfuly registered!");
});
}

// login user and retrieve quiz data per user
function loguser(usernameofuser, passofuser) {
  var link = "http://introtoapps.com/datastore.php?action=load&appid=215339949&objectid=";
  var linkname = usernameofuser;
  var linkcombine = link + linkname;
  $.get(linkcombine, function (data, status){alert(data)

  var retrievedData = data;
  var keywords = retrievedData.split(',');

  keywords.forEach(function(entry){
    keywords = entry.split(':');

    if(keywords[0] == "password"){
      alert('password');
      console.log(keywords[1] + ", " + passofuser);

      if(keywords[1] == passofuser){
        alert('success');
      }
      else{
        alert('fails');
      }
    }
    console.log(keywords);
    });
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
      document.querySelector('#NAV').pushPage('menuP.html');
    };

    //quiz title
    document.getElementById("Q1-0-title").innerHTML = GameData[0].id+" - "+GameData[0].title;

    //question mood survey 1. Date
    document.getElementById("Q1-0-Question0").innerHTML = GameData[0].questions[0].id+". "+GameData[0].questions[0].text;
    document.getElementById("Q1-0-Help0").innerHTML = '"hint: ' + GameData[0].questions[0].help+'"';
    document.getElementById("Q1-0-date").type = GameData[0].questions[0].type;

    //question mood survey 2. Name
    document.getElementById("Q1-0-Question1").innerHTML = GameData[0].questions[1].id+". "+GameData[0].questions[1].text;
    document.getElementById("Q1-0-Help1").innerHTML = '"hint: ' + GameData[0].questions[1].help+'"';
    document.getElementById("Q1-0-name").type = GameData[0].questions[1].type;

    //question mood survey 3. Diary
    document.getElementById("Q1-0-Question2").innerHTML = GameData[0].questions[2].id+". "+GameData[0].questions[2].text;
    document.getElementById("Q1-0-Help2").innerHTML = '"hint: ' + GameData[0].questions[2].help+'"';
    document.getElementById("Q1-0-diary").type = GameData[0].questions[2].type;

    //question mood survey 4. Gender
    document.getElementById("Q1-0-Question3").innerHTML = GameData[0].questions[3].id+". "+GameData[0].questions[3].text;
    document.getElementById("Q1-0-genderMale").innerHTML = " "+GameData[0].questions[3].options[0];
    document.getElementById("Q1-0-genderFemale").innerHTML = " "+GameData[0].questions[3].options[1];
    document.getElementById("Q1-0-genderOther").innerHTML = " "+GameData[0].questions[3].options[2];

    //question mood survey 5. Mood
    document.getElementById("Q1-0-Question4").innerHTML = GameData[0].questions[4].id+". "+GameData[0].questions[4].text;
    document.getElementById("Q1-0-Options4").innerHTML = GameData[0].questions[4].options;
    document.getElementById("Q1-0-OptionsVisuals4").innerHTML = GameData[0].questions[4].optionVisuals;

    //question mood survey 6. Happiness Today
    document.getElementById("Q1-0-Question5").innerHTML = GameData[0].questions[5].id+". "+GameData[0].questions[5].text;

    //question mood survey 7. Blood Alcohol
    document.getElementById("Q1-0-Question6").innerHTML = GameData[0].questions[6].id+". "+GameData[0].questions[6].text;
  }

  else if (page.id === 'EGQuiz')
  {
    page.querySelector('#NextQuizEG2').onclick = function() {
      document.querySelector('#NAV').pushPage('EGQuiz2.html');
    };

    //page title
    document.getElementById("Q2-title1").innerHTML = GameData[1].id+" - "+GameData[1].title+", Page 1 - "+GameData[1].questionsPerPage[0]+" Question";

    //question exam grade 1. SID
    document.getElementById("Q2-1-Question1").innerHTML = GameData[1].questions[0].id+". "+GameData[1].questions[0].text;
    document.getElementById("Q2-1-SID").type = GameData[1].questions[0].type;

    //question exam grade 2. fullname
    document.getElementById("Q2-1-Question2").innerHTML = GameData[1].questions[1].id+". "+GameData[1].questions[1].text;
    document.getElementById("Q2-1-fullname").type = GameData[1].questions[1].type;
  }

  else if (page.id === 'EGQuiz2')
  {
    page.querySelector('#BackToMenu').onclick = function() {
      document.querySelector('#NAV').pushPage('menuP.html');
    };

    //page title
    document.getElementById("Q2-title2").innerHTML = GameData[1].id+" - "+GameData[1].title+", Page 2 - "+GameData[1].questionsPerPage[1]+" Question";

    //question exam grade 3. What is the capital of Australia?
    document.getElementById("Q2-1-Question3").innerHTML = GameData[1].questions[2].id+". "+GameData[1].questions[2].text;
    document.getElementById("Q2-1-capital").type = GameData[1].questions[2].type;
    document.getElementById("Q2-1-point3").innerHTML = '*score: ' + GameData[1].questions[2].weighting;

    //question exam grade 4. What is the largest state in Australia?
    document.getElementById("Q2-1-Question4").innerHTML = GameData[1].questions[3].id+". "+GameData[1].questions[3].text;
    document.getElementById("Q2-1-state").type = GameData[1].questions[3].type;
    document.getElementById("Q2-1-point4").innerHTML = '*score: ' + GameData[1].questions[3].weighting;

    //question exam grade 5. What is the capital of Victoria?
    document.getElementById("Q2-1-Question5").innerHTML = GameData[1].questions[4].id+". "+GameData[1].questions[4].text;
    document.getElementById("Q2-1-capitalSydney").innerHTML = " "+GameData[1].questions[4].options[0];
    document.getElementById("Q2-1-capitalBrisbane").innerHTML = " "+GameData[1].questions[4].options[1];
    document.getElementById("Q2-1-capitalMelbourne").innerHTML = " "+GameData[1].questions[4].options[2];
    document.getElementById("Q2-1-point5").innerHTML = '*score: ' + GameData[1].questions[4].weighting;

    //question exam grade 6. Which are the territories of Australia?
    document.getElementById("Q2-1-Question6").innerHTML = GameData[1].questions[5].id+". "+GameData[1].questions[5].text;
    document.getElementById("Q2-1-stateACT").innerHTML = " "+GameData[1].questions[5].options[0];
    document.getElementById("Q2-1-stateNSW").innerHTML = " "+GameData[1].questions[5].options[1];
    document.getElementById("Q2-1-stateNT").innerHTML = " "+GameData[1].questions[5].options[2];
    document.getElementById("Q2-1-stateQLD").innerHTML = " "+GameData[1].questions[5].options[3];
    document.getElementById("Q2-1-stateSA").innerHTML = " "+GameData[1].questions[5].options[4];
    document.getElementById("Q2-1-stateTAS").innerHTML = " "+GameData[1].questions[5].options[5];
    document.getElementById("Q2-1-stateVIC").innerHTML = " "+GameData[1].questions[5].options[6];
    document.getElementById("Q2-1-stateWA").innerHTML = " "+GameData[1].questions[5].options[7];
    document.getElementById("Q2-1-point6").innerHTML = '*score: ' + GameData[1].questions[5].weighting;
  }

  else if (page.id === 'about')
  {

  }

});
