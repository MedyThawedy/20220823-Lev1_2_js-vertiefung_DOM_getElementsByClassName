let b = false;

// First possibility

function myFunction() {
    if (b === false) {
        for (let i = 0; i < document.getElementsByClassName('example').length; i++) {
            document.getElementsByClassName('example')[i].style.backgroundColor = "#0b0a0a";
        }
        document.getElementsByTagName('button')[0].style.color = "#fff";
        //document.body.style.backgroundColor = "red";   
        b = true;
    } else {
        for (let i = 0; i < document.getElementsByClassName('example').length; i++) {
            document.getElementsByClassName('example')[i].style.backgroundColor = "#666";
        }
        document.getElementsByTagName('button')[0].style.color = "#0b0a0a";
        document.getElementsByTagName('button')[0].style.backgroundColor = "rgb(207 207 207)";
        b = false;
    }


}

// Second possibility
// const elementBtn = document.getElementsByTagName('button');
/* 
elementBtn[0].addEventListener('click', (e) => {
    console.log('It works!!!');
});
*/
