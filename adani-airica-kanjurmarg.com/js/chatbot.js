$(document).ready(function() {
  const openBtn = document.getElementById("openChat");
  const closeBtn = document.getElementById("closeChat");
  const box = document.getElementById("chatbotBox");
  const body = document.getElementById("chatBody");
  const inputArea = document.getElementById("chatInputArea");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const countryCode = document.getElementById("countryCode");

  let step = 0, userData = { option: "", name: "", mobile: "" };

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
    addMsg("bot","Great! Can I know your First Name?");
    inputArea.style.display="flex";
    countryCode.style.display="none";
    userInput.type="text";
    userInput.placeholder="Enter your name";
    userInput.value="";
    userInput.focus();
  }

  function askMobile(){
    step=2;
    addMsg("bot","Please Enter Your Mobile Number...");
    countryCode.style.display="block";
    userInput.type="tel";
    userInput.maxLength = 10;
    userInput.placeholder="Enter your mobile number";
    userInput.value="";
    userInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
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
      userData.mobile = countryCode.value + " " + text;
      addMsg("user", userData.mobile);
      finish();
    }
    userInput.value="";
  };

  function finish() {
    inputArea.style.display = "none";
    addMsg("bot", "✅ Thank you! We have received your details. Our team will contact you shortly.");

    const link = "bit.ly/A-airica";
    const website = "https://adani-airica-kanjurmarg.com/";
    const salesnumber = "919867160002";
    const salesemail = "aasims@riogapremium.com";
    const salesname = "Aasim S";

    const emailData = new FormData();
    emailData.append("name", userData.name);
    emailData.append("phone", userData.mobile);
    emailData.append('email', "chatbot@gmail.com");
    emailData.append("type", "chatbot");
    emailData.append("config", "");
    emailData.append("date", "");
    emailData.append("utm_source", "chatbot");
    emailData.append("utm_medium", "");
    emailData.append("utm_campaign", "");
    emailData.append("utm_term", "");
    emailData.append("project_name", "Adani Airica");
    emailData.append("sales_name", salesname);
    emailData.append("sales_email", salesemail);
    emailData.append("salenumber", salesnumber);
    emailData.append("website", website);
    emailData.append("bitly", link);

    fetch("https://riogapremium.in/server/sendmail.php", {
      method: "POST",
      body: emailData
    })
      .then(response => response.text())
      .then(text => {
        console.log("📥 Raw response from server:", text);
        try {
          const data = JSON.parse(text);
          if (data.status === "success") {
           
            addMsg("bot", "✅ Thank you again! We’ll be in touch soon.");
          } else {
            addMsg("bot", "⚠️ Oops! Something went wrong: " + (data.message || "Please try again later."));
          }
        } catch (e) {
          //console.error("❌ Invalid JSON returned:", text);
          //addMsg("bot", "⚠️ Unexpected server response. Please try again later.");
        }
      })
      .catch(error => {
        //console.error("❌ Fetch failed:", error);
        //addMsg("bot", "❌ Network error. Please check your internet connection.");
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
  }, 3000);
});
// Allow Enter key to submit
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();   // line break na ho
    sendBtn.click();      // same as send button
  }
});
});