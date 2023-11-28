var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Web Developer", "Data Analyst"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
});

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ltcephotos@gmail.com",
        Password : "7B0BDFFCB73BC476B7E098F3E94736CDCBD9",
        To : 'prashantprasad2002@gmail.com',
        From : "ltcephotos@gmail.com",
        Subject : "New Enquiry Portfolio",
        Body : "Name:" + document.getElementById("name").value
            + "<br> Email id: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent succesfully")
    );
}
window.addEventListener('mousemove', function(e) {
    [1, .9, .8, .5, .1].forEach(function(i) {
      var j = (1 - i) * 50;
      var elem = document.createElement('div');
      var size = Math.ceil(Math.random() * 10 * i) + 'px';
      elem.style.position = 'fixed';
      elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
      elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
      elem.style.width = size;
      elem.style.height = size;
      elem.style.background = 'hsla(' +
        Math.round(Math.random() * 360) + ', ' +
        '100%, ' +
        '50%, ' +
        i + ')';
      elem.style.borderRadius = size;
      elem.style.pointerEvents = 'none';
      document.body.appendChild(elem);
      window.setTimeout(function() {
        document.body.removeChild(elem);
      }, Math.round(Math.random() * i * 500));
    });
  }, false);
















