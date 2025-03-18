async function MovePngUp()
{
    //Make Mario Go UPPPP
    let mario = document.getElementById("MarioPNG");
    mario.style.visibility = "visible";
    mario.classList.add("MovePngUP");
    
    //Make Mario Go "WAHOOOOOO!!!"
    let wahoo = new Audio("wahoo.mp3");
    await sleep(1000);
    wahoo.play();
    
    //Make Luigi Go Right
    let luigi = document.getElementById("LuigiPNG");
    luigi.classList.add("MovePngRight");
    //Make Luigi Go WOWOWOWOWOWOWOW
    let wow = new Audio("LuigiWOW.wav");
    await sleep(300);
    wow.play();
    await sleep(2000);
    window.location = "glory.html";
    // let glory = document.getElementById("glory");
    // glory.style.visibility = "visible";
    // console.log("Eseguito!!!");
}

function sleep(ms)
{     
        return new Promise(resolve => setTimeout(resolve, ms)); 
}