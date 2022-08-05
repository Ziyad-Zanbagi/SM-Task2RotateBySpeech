var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()
recognition.lang = "ar-AE"

var text = $("#text")

var instructions = $("#instructions")

var content = ''

// Allow the serial port to be closed later.

recognition.continuous = true

//once recognition starts
recognition.onstart = function() {
    instructions.text("التعرف على الصوت فعال, ابدأ بالكلام")
}
recognition.onspeechend = function () {
    instructions.text("لا يوجد كلام")
}
recognition.onerror = function() {
    instructions.text("يوجد خطأ, حاول مرة اخرى")
}
recognition.onresult = function(event) {
    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript

    
	console.log("before: "+transcript);
    if(transcript.includes("يمين")) {
        content += transcript
//        var xhr = new XMLHttpRequest();
//        xhr.open("POST", "page.php" , true);
//        xhr.setRequestHeader('Content-Type', 'application/json');
//        xhr.send(JSON.stringify({
//            "value": 'r'
//        }));

 $.ajax({
            type : "POST",  //type of method
            url  : "page.php",  //your page
            data : { value : "R" }// passing the values

        });

    }
    if(transcript.includes("يسار")) {
        content += transcript
//       var xhr = new XMLHttpRequest();
//                xhr.open("POST", "page.php" , true);
//                xhr.setRequestHeader('Content-Type', 'application/json');
//                xhr.send(JSON.stringify({
//                    "value": 'l'
//                }));

				$.ajax({
                            type : "POST",  //type of method
                            url  : "page.php",  //your page
                            data : { value : "L" }// passing the values

                        });

    }
	console.log("after"+transcript);
    text.val(content)
}

$("#start-btn").click(function(event) {
    if(content.length) {
        content += ''
    }
    recognition.start()

})
$("#stop-btn").click(function(event) {
    recognition.stop()
    content = ''
})

