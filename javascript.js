email = prompt("Enter your email and I mask it...");

function maskEmail(email) {

  //check the index where start the email domain
  let emailCheck = email.indexOf("@");
   
  //Extract the email name
  let emailExtractName = email.slice(0, email.indexOf("@"));
   
  //Extract the email domain
  let emailExtractDomain = email.slice(email.indexOf("@"));
    
  //Extract characters to mask it
  let nameExtractChar = emailExtractName.slice(1, -1);  
  let nameExtractCharLength = nameExtractChar.length;
   
  //Mask characters
  let secret = "*";
  let repeatedSecret = secret.repeat(nameExtractCharLength);
  
  //Mask extracted characters
  let nameCharMask = emailExtractName.replace(emailExtractName.slice(1, -1), repeatedSecret);
 
  //Update masked email
  let updatedEmail = nameCharMask + emailExtractDomain;
  return updatedEmail;
};

alert("Here your suspicious stuff..." + "\n" +maskEmail(email));