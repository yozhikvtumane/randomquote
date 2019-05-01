document.addEventListener("DOMContentLoaded", function(){
	//Setting vars
	var submitButton = document.getElementsByClassName('message-submit');
	var chatMain = document.getElementsByClassName('chat-main');

	//Chat window scroll to bottom
	chatMain[0].scrollTop = chatMain[0].scrollHeight;

	//loading json files
	//jokes.json
	var request = new XMLHttpRequest();
	var url = './json/data.json';
	var dataJSON = "";
	request.open('GET', url, true);
	request.send();
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
				dataJSON = JSON.parse(request.responseText);
			}
	}

	document.addEventListener('keydown' , (e)=> {
		console.log(e)
		if (e.keyCode === 13) {
			getQuoteJoke()
		}
	})
	
	submitButton[0].addEventListener('click' , getQuoteJoke)
	
	//Randomizing and appending messages
	function getQuoteJoke() {
		var rand;
		var inputText = document.getElementsByClassName('message-input');
		var choise = inputText[0].value;
		
		
		
		if (choise == "/joke") {
			
			var htmlText= "";
			rand = Math.floor(Math.random()*(9 - 0 + 1)+0);
			htmlText = chatMain[0].innerHTML;
			
			var img = '<img src="img/tweet.png" alt="Tweet This Message!">';
			htmlText += '<div class="human-message message"><p>/joke</p></div><hr>';
			htmlText += '<div class="bot-message message"><p>' + dataJSON.header[rand] + '</p><p>'+ dataJSON.jokeText[rand] + '</p>';
			htmlText += '<a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=' + dataJSON.header[rand] + '. ' + dataJSON.jokeText[rand]+'">'+ img + '</a></div><hr>';
			
			chatMain[0].innerHTML = htmlText;
			chatMain[0].scrollTop = chatMain[0].scrollHeight;
			inputText[0].value = "";
			
		} else if (choise == "/quote") {
			
			var htmlText= "";
			rand = Math.floor(Math.random()*(9 - 0 + 1)+0);
			htmlText = chatMain[0].innerHTML;
			
			var img = '<img src="img/tweet.png" alt="Tweet This Message!">';
			htmlText += '<div class="human-message message"><p>/quote</p></div><hr>';
			htmlText += '<div class="bot-message message"><p>"' + dataJSON.quote[rand] +'"</p><p class="message-author">' + dataJSON.author[rand] + '</p>';
			htmlText += '<a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=' + dataJSON.quote[rand] + dataJSON.author[rand]+'">'+ img + '</a></div><hr>';
			
			chatMain[0].innerHTML = htmlText;
			chatMain[0].scrollTop = chatMain[0].scrollHeight;
			inputText[0].value = "";
			
		} else if (choise == ""){
			
			var htmlText= "";
			
		} else {
			
			var htmlText= "";
			htmlText = chatMain[0].innerHTML;
			htmlText += '<div class="human-message message"><p>'+ choise + '</p></div><hr>';
			htmlText += '<div class="bot-message message"><p>Sorry, uknown command.</p><p>Type /joke or /quote</p></div><hr>';
			chatMain[0].innerHTML = htmlText;
			chatMain[0].scrollTop = chatMain[0].scrollHeight;
			inputText[0].value = "";
			
		}
	}
});
	

