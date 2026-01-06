$(document).ready(function() {

   $.getJSON("https://api.ipify.org/?format=json", function(e) {
        // alert(e.ip);
        $("#ipaddress_chatbot").attr("value",e.ip)
        //return e.ip;
    });


  const openBtn = document.getElementById("openChat");
  const closeBtn = document.getElementById("closeChat");
  const box = document.getElementById("chatbotBox");
  const body = document.getElementById("chatBody");
  const inputArea = document.getElementById("chatInputArea");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const countryCode = document.getElementById("countryCode");
  const project_name_chatbot = document.getElementById("project_name_chatbot").value;

  const bitly_chatbot = document.getElementById("bitly_chatbot").value;
  const website_chatbot = document.getElementById("website_chatbot").value;
  const salesnumber_chatbot = document.getElementById("salesnumber_chatbot").value;
  const salesemail_chatbot = document.getElementById("salesemail_chatbot").value;
  const salesname_chatbot = document.getElementById("salesname_chatbot").value;
  //const ipaddress_chatbot = document.getElementById("ipaddress_chatbot").value;


  let step = 0, userData = { option: "", name: "", mobile: "" ,project_name_chatbot: "" ,countryCode:"" };

  function addMsg(role, text){
    const div=document.createElement("div");
    div.className="msg "+role;
    div.innerHTML=`<div class="bubble">${text}</div>`;
    body.appendChild(div);
    body.scrollTop=body.scrollHeight;
  }

  function startChat(){
    body.innerHTML="";
    addMsg("bot","Hey, I'm Ritika Sharma! How can I help you understand this project?");
    showOptions();
  }

  function showOptions(){
    const div=document.createElement("div");
    div.className="msg bot";
    div.innerHTML=`<div class="bubble"><div class="options">
                  <button><i class="fa fa-home"></i> Pricing & Floor Plans</button>
                  <button><i class="fa fa-download"></i> Download Brochure</button>
                  <button><i class="fa fa-whatsapp"></i> Pricing on WhatsApp</button>
                  <button><i class="fa fa-phone"></i> Request a Call Back</button>
                  <button><i class="fa fa-tags"></i> Get the Best Quote</button>
                  <button><i class="fa fa-calendar"></i> Schedule a Site Visit</button>
    </div></div>`;
    body.appendChild(div);
    body.scrollTop=body.scrollHeight;

    div.querySelectorAll("button").forEach(btn=>{
      btn.onclick=()=>{
        userData.option=btn.textContent;
        addMsg("user",userData.option);
        askName();
      };
    });
  }

  function askName(){
    step=1;
    addMsg("bot","Great! Can I know your Name?");
    inputArea.style.display="flex";
    countryCode.style.display="none";
    userInput.type="text";
    userInput.placeholder="Enter your name";
    userInput.value="";
    userInput.focus();
  }

  // function askMobile(){
  //   step=2;
  //   addMsg("bot","Please Enter Your Mobile Number...");
  //   countryCode.style.display="block";
  //   userInput.type="tel";
  //   userInput.maxLength = 10;
  //   userInput.placeholder="Enter your mobile number";
  //   userInput.value="";
  //   userInput.addEventListener("input", function () {
  //       this.value = this.value.replace(/\D/g, "").slice(0, 10);
  //   });
  // }

  function askMobile() {
    step = 2;
    addMsg("bot", "Please enter your mobile number...");
    countryCode.style.display = "block";
    userInput.type = "tel";
    userInput.placeholder = "Enter your mobile number";
    userInput.value = "";
    // Create or reuse inline error message
   let errorMsg = document.getElementById("mobile-error");
if (!errorMsg) {
  errorMsg = document.createElement("div");
  errorMsg.id = "mobile-error";
  errorMsg.style.color = "red";
  errorMsg.style.fontSize = "13px";
  errorMsg.style.margin = "0px 0px 10px 0px";
  errorMsg.style.textAlign = "center";
  errorMsg.style.fontWeight = "500";
  // Insert errorMsg AFTER the entire chatInputArea div
  const chatInputArea = document.getElementById("chatInputArea");
  chatInputArea.parentNode.insertBefore(errorMsg, chatInputArea.nextSibling);
}
    function updateMobileRules() {
      const code = countryCode.value.replace("+", "");
      errorMsg.textContent = "";
      if (code === "91") {
        userInput.minLength = 10;
        userInput.maxLength = 10;
      } else {
        userInput.removeAttribute("minLength");
        userInput.maxLength = 10;
      }
    }
    updateMobileRules();
    countryCode.addEventListener("change", updateMobileRules);
    // Allow only digits
    userInput.addEventListener("input", function() {
      const maxLen = userInput.maxLength ? userInput.maxLength : 10;
      this.value = this.value.replace(/\D/g, "").slice(0, maxLen);
      errorMsg.textContent = ""; // clear while typing
    });
    // Validation function
    function validateMobile() {
    const code = countryCode.value.replace("+", "");
    const value = userInput.value.trim();
    const len = value.length;
    errorMsg.textContent = "";
    if (code === "91") {
      if (len !== 10) {
        errorMsg.textContent = "Please enter a valid 10-digit mobile number.";
        return false;
      }
      if (!/^[6-9]\d{9}$/.test(value)) {
        errorMsg.textContent = "Mobile number should start with 6, 7, 8, or 9.";
        return false;
      }
    } else {
      if (len === 0) {
        errorMsg.textContent = "Please enter your mobile number.";
        return false;
      }
      if (!/^\d+$/.test(value)) {
        errorMsg.textContent = "Mobile number should contain digits only.";
        return false;
      }
    }
    return true; // Passed all validations
  }
    // :white_check_mark: Send button behavior for step 2
    sendBtn.onclick = () => {
      const text = userInput.value.trim();
      if (!text) return;
      if (step === 2) {
        if (!validateMobile()) {
          userInput.focus();
          return; // Stop here if invalid
        }
        // Passed validation :white_check_mark:
        userData.countryCode = countryCode.value;
        userData.mobile = text;
        addMsg("user", userData.mobile);
        userInput.value = "";
        finish(); // Proceed to lead submission
      }
    };
  }

  sendBtn.onclick=()=>{
    const text=userInput.value.trim();
    if(!text) return;
    if(step===1){
      userData.name = text;
      addMsg("user", userData.name);
      askMobile();
    }
    else if(step===2){
      userData.countryCode = countryCode.value
      // userData.mobile = countryCode.value + " " + text;
      userData.mobile = text;
      addMsg("user", userData.mobile);
      finish();
    }
    userInput.value="";
  };



function downloadDirect(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'file.pdf'; // forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




  function finish() {

    console.log("timer 0");

    inputArea.style.display = "none";
    addMsg("bot", "&#9989; Thank you! We have received your details. Our team will contact you shortly.");
    
    const domain = window.location.hostname;
     if(userData.option==' Download Brochure'){
          //downloadDirect('https://'+domain+'/brochure.pdf', 'brochure.pdf');
     }

    const link = bitly_chatbot;
    const website = website_chatbot;
    const salesnumber = salesnumber_chatbot;
    const salesemail = salesemail_chatbot;
    const salesname = salesname_chatbot;
    const brochure = 'https://'+domain+'/brochure.pdf';


    const emailData = new FormData();
    emailData.append("name", userData.name);
    emailData.append("phone", userData.mobile);
    emailData.append("country", userData.countryCode);
    emailData.append('email', "chatbot@gmail.com");
    emailData.append("type", userData.option);
    emailData.append("config", "");
    emailData.append("date", "");
    emailData.append("utm_source", "Google");
    emailData.append("utm_medium", "Chatbot");
    emailData.append("utm_campaign", "");
    emailData.append("utm_term", "");
    emailData.append("project_name", project_name_chatbot);
    emailData.append("sales_name", salesname);
    emailData.append("sales_email", salesemail);
    emailData.append("salenumber", salesnumber);
    emailData.append("website", website);
    emailData.append("bitly", link);
    emailData.append("brochure", brochure);
    emailData.append("option", userData.option);
   // emailData.append("ipaddress", ipaddress_chat);

    let new_mobile = userData.mobile;
    let noSpaces = new_mobile.replace(/\s+/g, '');

         let data_1 = new FormData();
            // data_1.append("name", userData.name);
            // data_1.append("phone2", noSpaces);
            // data_1.append("project_name", project_name_chatbot);
            // data_1.append("ipaddress", '');
            // data_1.append("utm_source", "Google");
            // data_1.append("type", userData.option);
            // data_1.append('email', "chatbot@gmail.com");



            // console.log("timer 0");

            // fetch('https://script.google.com/macros/s/AKfycbyZZh85c6V3-6wVcYRk2kuTNt2GOd_DZ_5NqlGco-zljNwTZnHIH7pPEV8DWkfnITYIRA/exec', {
            //     method: "POST",
            //     body: data_1,
            // });

            console.log("timer 1");



    fetch("https://riogapremium.in/server/sendmail3.php", {
      method: "POST",
      body: emailData
    })
      .then(response => response.text())
      .then(text => {
        console.log("?? Raw response from server:", text);
        try {
          const data = JSON.parse(text);
          if (data.status === "success") {

               

           
            addMsg("bot", "? Thank you again! Weï¿½ll be in touch soon.");


            // let form = document.querySelector("form");
            // let data_1 = new FormData(form);

            // console.log("timer 0");

            // fetch('https://script.google.com/macros/s/AKfycbyZZh85c6V3-6wVcYRk2kuTNt2GOd_DZ_5NqlGco-zljNwTZnHIH7pPEV8DWkfnITYIRA/exec', {
            //     method: "POST",
            //     body: data_1,
            // });

          } else {
            addMsg("bot", "?? Oops! Something went wrong: " + (data.message || "Please try again later."));
          }
        } catch (e) {
          //console.error("? Invalid JSON returned:", text);
          //addMsg("bot", "?? Unexpected server response. Please try again later.");
        }
      })
      .catch(error => {
        //console.error("? Fetch failed:", error);
        //addMsg("bot", "? Network error. Please check your internet connection.");
      });
  }

  openBtn.onclick=()=>{ box.classList.add("open"); openBtn.style.display="none"; closeBtn.style.display="flex"; startChat(); };
  closeBtn.onclick=()=>{ box.classList.remove("open"); openBtn.style.display="flex"; closeBtn.style.display="none"; };

// Open & Close buttons
openBtn.onclick = () => {
  box.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "flex";
  startChat();
};
closeBtn.onclick = () => {
  box.classList.remove("open");
  openBtn.style.display = "flex";
  closeBtn.style.display = "none";
};

// Auto-open after 3 sec on page load
window.addEventListener("load", () => {
  setTimeout(() => {
    if (!box.classList.contains("open")) {  
      openBtn.click();   // ?? auto trigger button click
    }
  }, 15000);
});
// Allow Enter key to submit
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();   // line break na ho
    sendBtn.click();      // same as send button
  }
});
});