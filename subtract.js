let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let Myaudio = document.getElementById("Myaudio");
let answer=0;


const Generate_equation=()=>{
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let dummyAnswer1 = Math.floor(Math.random() * 13);
    let dummyAnswer2 = Math.floor(Math.random() * 13);
    let allAnswer=[];
    let SwitchAnswer=[];

    answer = num1 - num2;
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    allAnswer= [answer ,dummyAnswer1, dummyAnswer2];
    for(i = allAnswer.length; i--;){
        SwitchAnswer.push(allAnswer.splice(Math.floor(Math.random() * (i+1)),1 )[0]);
    }
    option1.innerHTML = SwitchAnswer[0]; 
    option2.innerHTML = SwitchAnswer[1]; 
    option3.innerHTML = SwitchAnswer[2]; 
}


option1.addEventListener('click',function(){
    if(option1.innerHTML == answer){
        Generate_equation();
    }else{
        Myaudio.play();
    }
})
option2.addEventListener('click',function(){
    if(option2.innerHTML == answer){
        Generate_equation();
    }else{
        Myaudio.play();
    }
})
option3.addEventListener('click',function(){
    if(option3.innerHTML == answer){
        Generate_equation();
    }else{
        Myaudio.play();
    }
})

Generate_equation();