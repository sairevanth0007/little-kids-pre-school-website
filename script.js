
//setting date we are counting down to
var countDownDate = new Date ("January 27,2023 8:00:00").getTime();

//updating count down every 1 sec
var x = setInterval (function() {

    //today date
    var now = new Date () .getTime();

    //distance now and countdown date
    var distance = countDownDate - now;

    //time calc days, hours, mins , secs
    var days = Math.floor(distance/ (1000 * 60 *60 *24));
    var hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 *60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance %(1000 * 60)) / 1000);

    //displaying results
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s"; 

}, 1000);

//receiving form data on email
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "coderflame3@gmail.com",
        Password : "47478BDF7049F0520C462AF5C6484C3A6004",
        To : 'travinskielewinskie@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form inquiry",
        Body : "Name:"+ document.getElementById("name").value
            + "<br> Email:" +document.getElementById("contact-email")
            + "<br> + Phone number:" + document.getElementById("phone")
            + "<br> + Message:" + document.getElementById("message")

    }).then(
      message => alert("message sent successfully")
    );
}

//making my sections visible only on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll){

entries.forEach(entry => {
    if(!entry.isIntersecting){
        return
    }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    }
})
},
appearOptions)

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})


