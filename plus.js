const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const MyAudio = document.getElementById('Myaudio');
let answer=0;


Generateequation=()=>{
    let num1 = Math.floor(Math.random() * 15);
    let num2 = Math.floor(Math.random() * 15);
    let dummyAnswer1 = Math.floor(Math.random() * 15);
    let dummyAnswer2 = Math.floor(Math.random() * 15);
    let Allanswer = [];
    let Switchanswer = [];

    answer = num1 + num2;
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    Allanswer = [answer, dummyAnswer1, dummyAnswer2];

    for(i = Allanswer.length;  i--;){
        Switchanswer.push(Allanswer.splice(Math.floor(Math.random() * (i+1)),1)[0]);
    }

    option1.innerHTML = Switchanswer[0];
    option2.innerHTML = Switchanswer[1];
    option3.innerHTML = Switchanswer[2];
}

option1.addEventListener('click',function(){
    if(option1.innerHTML == answer){
        Generateequation();
    }else{
        MyAudio.play();
    }
})

option2.addEventListener('click',function(){
    if(option2.innerHTML == answer){
        Generateequation();
    }else{
        MyAudio.play();
    }
})

option3.addEventListener('click',function(){
    if(option3.innerHTML == answer){
        Generateequation();
    }else{
        MyAudio.play();
    }
})

Generateequation();