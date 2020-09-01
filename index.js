window.onload = () => {

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open('oops.html');
    }

// On Campus Button
  document.getElementById('Button1').addEventListener('click', function() {location.href = 'index.html'}, false);

// In Industry Button
  document.getElementById('Button2').addEventListener('click', function() {location.href = 'OnCampus.html'}, false);

// LinkedIn Button
  document.getElementById("Button3").addEventListener("mouseover", onLinkedIn);

  function onLinkedIn() {
            document.getElementById('Button3').innerHTML
                = 'Go to My LinkedIn';
        }

  document.getElementById("Button3").addEventListener("mouseout", offLinkedIn);

    function offLinkedIn() {
              document.getElementById('Button3').innerHTML
                  = 'LinkedIn';
          }

  document.getElementById("Button3").addEventListener("click", toLinkedIn);

    function toLinkedIn() {
      window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
    }

// Contact Button
  document.getElementById('Button4').addEventListener('click', function() {location.href = 'ConnectWithMe.html'}, false);


}
