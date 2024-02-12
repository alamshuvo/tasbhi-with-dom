const subhanallahIncBtn=document.getElementById("subhanallah-inc-btn");
const subhanallahDicBtn=document.getElementById("subhanallah-dic-btn");
const alhamdullihaIncBtn=document.getElementById("alhamdulliha-inc-btn");
const alhamdullihaDicBtn=document.getElementById("alhamdulliha-dic-btn");
const allahuakbarIncBtn=document.getElementById("allahhuakbar-inc-btn");
const allahuakbarDicBtn=document.getElementById("allahhuakbar-dic-btn");
const subhanallahDisplay=document.getElementById("subhanallah-display");
const  alhamdullihaDisplay=document.getElementById("alhamdulliha-display");
const  allahhuakbarDisplay=document.getElementById("allahhuakbar-display");
const resetBtn=document.getElementById("reset-btn");
let subhanallahInitalValue=0;
let alhamdullihaInitalValue=0;
let allahhuakbarInitialValue=0;

subhanallahIncBtn.addEventListener('click',function () {
    if (subhanallahInitalValue===33) {
        return alert("your subhanallah is complited.")
    }
    subhanallahInitalValue +=1;
    subhanallahDisplay.innerText=subhanallahInitalValue;
})
subhanallahDicBtn.addEventListener("click",function () {
    if (subhanallahInitalValue===0) {
        return alert("you cant added negative value")
    }
    subhanallahInitalValue -=1;
    subhanallahDisplay.innerText=subhanallahInitalValue;

})

// alhamdulliha
alhamdullihaIncBtn.addEventListener("click",function () {
    if (alhamdullihaInitalValue===33) {
        return alert("your alhamdullha is complited")
    }
    alhamdullihaInitalValue +=1;
    alhamdullihaDisplay.innerText=alhamdullihaInitalValue;
})
alhamdullihaDicBtn.addEventListener("click",function () {
    if (alhamdullihaInitalValue===0) {
        return alert("you dont added negative value")
    }
    alhamdullihaInitalValue -=1;
    alhamdullihaDisplay.innerText=alhamdullihaInitalValue;
})

// allahhuakbar
allahuakbarIncBtn.addEventListener("click",function () {
    if (allahhuakbarInitialValue===33) {
        return alert("your allahuakbar is complited");
    }
    allahhuakbarInitialValue +=1;
    allahhuakbarDisplay.innerText=allahhuakbarInitialValue;
})
allahuakbarDicBtn.addEventListener("click",function () {
    if (allahhuakbarInitialValue===0) {
        return alert("you dont added negative value")
    }
    allahhuakbarInitialValue -=1;
    allahhuakbarDisplay.innerText=allahhuakbarInitialValue;
})
// reset btn
resetBtn.addEventListener("click",function () {
    subhanallahDisplay.innerText=0;
    alhamdullihaDisplay.innerText=0;
    allahhuakbarDisplay.innerText=0;
    subhanallahInitalValue=0;
    alhamdullihaInitalValue=0;
    allahhuakbarInitialValue=0;
})