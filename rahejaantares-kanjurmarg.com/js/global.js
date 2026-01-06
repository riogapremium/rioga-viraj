$(document).ready(function() {


// Submit Form Data


let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    // alert();
    e.preventDefault();

   // Clean and validate phone
        const dialCode = $(".iti__selected-dial-code").html();
        const phoneInput = $("#phone").val().replace(/[\s\-()]/g, '');
        const fullPhone = dialCode + phoneInput;
        const phonePattern = /^(\+91)?[6-9]\d{9}$/;
    // remove any old error message first
        $(".phone-error").remove();
        if (!phonePattern.test(fullPhone)) {
            $("#phone").after(`<span class="phone-error" style="position:absolute;left:0;bottom:-18px;color:#e74c3c;font-size:13px;font-family:'Poppins',sans-serif;">Please enter a valid mobile number.</span>`);
            $("#submitBtn").css("pointer-events", "auto");
            return;
        }

    $("#phone2").val("'" + fullPhone + "'");
    
    $("#submitBtn").html('Submitting! Please Wait<span class="loading"> <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>');
    $("#submitBtn").css("pointer-events","none");
    //var newphone = $(".iti__selected-dial-code").html()+$("#phone").val()
    // alert($("#phone").val())
    //$("#phone2").attr("value","'"+newphone.replace(/(?!\+)\s+/g, ''))
    // alert(newphone)
    let data = new FormData(form);
    // console.log(data)
    
    // console.log("timer 0");
    // fetch('https://script.google.com/macros/s/AKfycbyZZh85c6V3-6wVcYRk2kuTNt2GOd_DZ_5NqlGco-zljNwTZnHIH7pPEV8DWkfnITYIRA/exec', {
    //     method: "POST",
    //     body: data,
        
        
    // })

    // .then(res => res.text())
    // .then(responseText => {

        // console.log("First response:", responseText);
        // Handle the response from the first fetch (optional)

        const website = document.getElementById("website").value;
        let secondarysalesname = "";
        let secondarysalesemail = "";
        
        console.log("timer 1");
        // Now make a second fetch request to your PHP script to send the email
        let emailData = new FormData();
        emailData.append('name', form.name.value); 
        emailData.append('email', form.email.value);
        emailData.append('country', $(".iti__a11y-text").html());
        emailData.append('phone', form.phone.value);
        emailData.append('type', form.type.value); 
        emailData.append('config', form.config.value || '');
        emailData.append('date', form.date.value || ''); 
        emailData.append('utm_source', form.utm_source.value || ''); 
        emailData.append('utm_medium', form.utm_medium.value || ''); 
        emailData.append('utm_campaign', form.utm_campaign.value || ''); 
        emailData.append('utm_term', form.utm_term.value || ''); 
        emailData.append('project_name', form.project_name.value); 

        emailData.append('sales_name', form.salesname.value); 
        emailData.append('sales_email', form.salesemail.value); 
        emailData.append('salenumber', form.salesnumber.value); 
        emailData.append('website', form.website.value); 
        emailData.append('bitly', form.link.value); 
        emailData.append('secondarysales_name', secondarysalesname); 
        emailData.append('secondarysales_email', secondarysalesemail);
	emailData.append('g_recaptcha_response', form.g_recaptcha_response.value);
	emailData.append('sitekey', form.sitekey.value);

        console.log("timer 2");
        return fetch('https://riogapremium.in/server/sendmail3.php', { // Replace with your PHP email script
            method: 'POST',
            body: emailData
        })
        .then(res => res.text())
        .then(emailResponse => {
                // console.log("timer 2");
                // console.log("Email response:", emailResponse);
                // Handle the response from the email sending
                if(window.formtypeData == "Download Brochure"){
                    $("#dbbtn .dbbtn").trigger("click")
                }
                $("#submitBtn").html("Submitted");
                $("#submitBtn").css("pointer-events","unset");
                // Optionally redirect after successful email send
               // ✅ Use website constant instead of hardcoded URL
                 const currentURL = $(location).attr("href");
                 const variques = currentURL === website ? "?" : "&";



                
                window.location.href = `${website}?showData=true&type=${window.formtypeData}&plan=${window.plantrigger}`;
            })
            .catch(error => {
                console.error('Error:', error);
                $("#submitBtn").html("Error, try again.");
            });
        });

});