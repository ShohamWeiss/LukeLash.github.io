window.onload = () => {

  document.getElementById("emailContactButton").addEventListener("mouseover", emailTextToActive); //This listens for a mouseOVER on the email contact button

  function emailTextToActive() { //This changes the text in the emailContactButton to "llasher2@illinois.edu" on mouseOver
            document.getElementById('emailContactButton').innerHTML
                = 'llasher2@illinois.edu';
        }

  document.getElementById("emailContactButton").addEventListener("mouseout", emailTextToPassive); //This listens for a mouseOUT on the email contact button


  function emailTextToPassive() { //This returns the text in the emailContactButton back to "Email" on mouseOUT
            document.getElementById('emailContactButton').innerHTML
                = 'Email';
        }



  document.getElementById("phoneContactButton").addEventListener("mouseover", phoneTextToActive); //This listens for a mouseOVER on the phone contact button

  function phoneTextToActive() { //This changes the text in the emailContactButton to "(309) 531-3494" on mouseOver
            document.getElementById('phoneContactButton').innerHTML
                = '(309) 531-3494';
        }

  document.getElementById("phoneContactButton").addEventListener("mouseout", phoneTextToPassive); //This listens for a mouseOUT on the phone contact button


  function phoneTextToPassive() { //This returns the text in the emailContactButton back to "Email" on mouseOUT
            document.getElementById('phoneContactButton').innerHTML
                = 'Phone';
        }





  document.getElementById("LinkedInContactButton").addEventListener("mouseover", linkedInTextToActive); //This listens for a mouseOVER on the LinkedIn contact button

  function linkedInTextToActive() { //This changes the text in the emailContactButton to "Click to Visit LinkedIn Page" on mouseOver
            document.getElementById('LinkedInContactButton').innerHTML
                = 'Click to Visit <br> LinkedIn Page';
        }

  document.getElementById("LinkedInContactButton").addEventListener("mouseout", linkedInTextToPassive); //This listens for a mouseOUT on the LinkedIn contact button


  function linkedInTextToPassive() { //This returns the text in the emailContactButton back to "LinkedIn" on mouseOUT
            document.getElementById('LinkedInContactButton').innerHTML
                = 'LinkedIn';
        }

}
