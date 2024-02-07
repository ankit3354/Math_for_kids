const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const MyAudio = document.getElementById('Myaudio');
let answer=0;

const GenrateEqaution=()=>{
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let dummyAnswer1 = Math.floor(Math.random() * 13);
    let dummyAnswer2 = Math.floor(Math.random() * 13);
    let Allanswer = [];
    let SwitchAnswer = [];

    answer = num1 * num2;
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    Allanswer = [ answer, dummyAnswer1,dummyAnswer2];

    for(i = Allanswer.length; i--;){
        SwitchAnswer.push(Allanswer.splice(Math.floor(Math.random() *(i+1)),1)[0]);   
    }

    option1.innerHTML = SwitchAnswer[0]
    option2.innerHTML = SwitchAnswer[1]
    option3.innerHTML = SwitchAnswer[2]


}


option1.addEventListener('click',function(){
    if(option1.innerHTML == answer){
        GenrateEqaution();
    }
    else{
        MyAudio.play();
    }

})

option2.addEventListener('click',function(){
    if(option2.innerHTML == answer){
        GenrateEqaution();
    }
    else{
        MyAudio.play();
    }

})

option3.addEventListener('click',function(){
    if(option3.innerHTML == answer){
        GenrateEqaution();
    }
    else{
        MyAudio.play();
    }

})
 GenrateEqaution();


