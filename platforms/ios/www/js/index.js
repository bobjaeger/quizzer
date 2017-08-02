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

var GameData =  [
  {
	"id": "quiz01",
	"title": "Mood Survey",
	"questions": [
		{"id": 1, "text": "Date", "type": "date", "help": "The date you started this quiz."},
  		{"id": 2, "text": "Name", "type": "textbox", "help": "Your full name"},
  		{"id": 3, "text": "Diary", "type": "textarea", "help": "Write 4 paragraphs"},
  		{"id": 4, "text": "Gender", "type": "choice", "options": ["Male", "Female", "Depends what day it is"]},
  		{"id": 5, "text": "Mood", "type": "slidingoption", "options": ["Sad", "Happy", "Laughing"], "optionVisuals": ["ðŸ˜­","â˜ºï¸","ðŸ˜†"]},
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
/*
function pageScroll() {
    	window.scrollBy(0,50); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}*/

// NAVIGATION
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'menuP') {
    page.querySelector('#GotoLogin').onclick = function() {
      document.querySelector('#NAV').pushPage('login.html', {data: {title: 'Login'}});
    };
  } else if (page.id === 'login') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'menuP') {
    page.querySelector('#GotoQuizMS').onclick = function() {
      document.querySelector('#NAV').pushPage('MSQuiz.html', {data: {title: 'Mood Survey'}});
    };
  } else if (page.id === 'MSQuiz') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'menuP') {
    page.querySelector('#GotoQuizEG').onclick = function() {
      document.querySelector('#NAV').pushPage('EGQuiz.html', {data: {title: 'Exam Grade'}});
    };
  } else if (page.id === 'EGQuiz') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'menuP') {
    page.querySelector('#GotoAbout').onclick = function() {
      document.querySelector('#NAV').pushPage('about.html', {data: {title: 'About'}});
    };
  } else if (page.id === 'about') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
