 (() => {
    window.SpeechRecognition = window.webkitSpeechRecognition || window.webkitSpeechRecognition;
    
    const recognition = new window.SpeechRecognition();
    const btnElem = document.querySelector('.control')
    let transcripts = []
    function onClick(){
        const isPausing = btnElem.classList.contains('record');

        if(isPausing){
            recognition.start();
            btnElem.classList.remove('record');
            btnElem.classList.add('stop');
        } else{
            recognition.stop();
            btnElem.classList.remove('stop');
            btnElem.classList.add('record');
        }
    }

    function onResult(event) {
        // console.log(event)
        const textElem = document.querySelector('.text');
        const { transcript } = event.results[0][0];
        // console.log(transcript)
        transcripts.push(transcript)
        textElem.innerText = transcripts.join(' ');
    }

    function onEnd(){
        const isRecording = btnElem.classList.contains('stop');
        
        if (isRecording){
            recognition.start();
        }
    }

    function run() {
        recognition.lang = 'th-TH';
        
        recognition.addEventListener('result', onResult);
        recognition.addEventListener('end', onEnd);
        btnElem.addEventListener('click', onClick);
    }

    run();
 })();