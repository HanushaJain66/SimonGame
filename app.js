let gameSeq=[];
let userSeq=[];
let btns=["red","pink","yellow","green"];

let started=false;
let level=0;
let h2=document.querySelector('h2');

let start=document.querySelector('#start');

// BECAUSE WE WANT THAT WHENEVER ANY BUTTO ON THE SCREEN IS PRESSED THEN THE GAME WILL START WE ARE GOING TO ADD EVENET LISTNER ON THE DOCUMENT ONLY
start.addEventListener("click", function(event) {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
        start.style.display="none";
    }
});


// FUNCTION FOR FLASHING OF A BUTTON
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

// FUNCTION FOR LEVEL UP
function levelup()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbtn);
}

// NOTE->THE SIZE OF USERSEQ AND GAMESEQ IS EQUAL TO THE CURRENT LEVEL

function checkans(idx)
{
    // console.log("Current level: ",level);
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx])
        {
        //    two conditions we are at the last idx then will do level up
        if(userSeq.length==gameSeq.length)
            {
                setTimeout(levelup,1000);
            }
        }
    
    else{
        h2.innerHTML=`Wrong value!! Game is over ! Your score was <b>${level} !! Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150)
        
        reset();
    }
}



// THIS IS FOR KEEPING THE TRACK OF BUTTON PRESSED BY USER
function btnpress()
{
    console.log(this);
    let btn=this;
    btnflash(btn);

    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(usercolor);

    checkans(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
// console.dir(allbtns);
for(btn of allbtns)
    {
        btn.addEventListener("click",btnpress);
    }


// RESETTING
function reset()
{
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
    start.style.display="block";
    start.style.textAlign="center";
}