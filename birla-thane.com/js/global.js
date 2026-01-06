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

	// Regex
	const indiaPattern = /^[6-9]\d{9}$/;         // 10 digits, starts 6-9 (without +91)
	const intlPattern = /^\d{5,15}$/;            // Any country min 5 to max 15 digits

	// Remove old error
	$(".phone-error").remove();

	// Validation condition
	if (dialCode === "+91") {
		if (!indiaPattern.test(phoneInput)) {
			$("#phone").after(`<span class="phone-error" style="position:absolute;left:0;bottom:-18px;color:#e74c3c;font-size:13px;font-family:'Poppins',sans-serif;">Please enter a valid mobile number.</span>`);
			$("#submitBtn").css("pointer-events", "auto");
			return;
		}
	} else {
		if (!intlPattern.test(phoneInput)) {
			$("#phone").after(`<span class="phone-error" style="position:absolute;left:0;bottom:-18px;color:#e74c3c;font-size:13px;font-family:'Poppins',sans-serif;">Please enter a valid mobile number.</span>`);
			$("#submitBtn").css("pointer-events", "auto");
			return;
		}
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
             
        
        console.log("timer 1");
        // Now make a second fetch request to your PHP script to send the email
        let emailData = new FormData();
        emailData.append('name', form.name.value); 
        emailData.append('email', form.email.value || 'blank@riogapremium.com');
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
        emailData.append('salenumber_2', form.salesnumber_2.value || ''); 
        emailData.append('website', form.website.value); 
        emailData.append('bitly', form.link.value); 
        emailData.append('secondarysales_name', form.secondarysalesname.value || ''); 
        emailData.append('secondarysales_email', form.secondarysalesemail.value || '');
	emailData.append('g_recaptcha_response', form.g_recaptcha_response.value);
	emailData.append('sitekey', form.sitekey.value);

        console.log("timer 2");
        return fetch('https://riogapremium.in/server/sendmail3.php', { // Replace with your PHP email script
            method: 'POST',
            body: emailData
        })
        .then(res => res.text())
     .then(emailResponse => {
                        // Actions after successful form submission
                        if (window.formtypeData === "Download Brochure" && window.brochureAvailable === true) {
                             $("#dbbtn .dbbtn").trigger("click");
                        }

                        $("#submitBtn").html("Submitted").css("pointer-events", "unset");
                        $(".footerPop").hide();
                        $("body").css("pointer-events", "none");
                        $("#success-message").fadeIn();
                        $("#form-title").text("Thank You!");

                        // Redirect URL
                        const redirectURL = `${website}?showData=true&type=${window.formtypeData}&plan=${window.plantrigger}`;

                        // Redirect function
                        const redirectNow = () => {
                            window.location.href = redirectURL;
                        };

                        // Auto redirect after 3 seconds
                        const redirectTimer = setTimeout(redirectNow, 3000);

                        // Redirect immediately on OK button click
                        $(document).one("click", "#success-ok-btn", function () {
                            $("#success-message").hide();
                            clearTimeout(redirectTimer); // prevent double trigger
                            redirectNow();
                        });
                    })
            .catch(error => {
                console.error('Error:', error);
                $("#submitBtn").html("Error, try again.");
            });
        });

});