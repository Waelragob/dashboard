 

    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us")); // افتراضي إذا فشل
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.18/js/utils.js" // لتحسين التنسيق والتحقق
    });

    // اختياري: تأكد من أن القيمة تحتوي على الرمز عند الإرسال
    const form = input.closest("form");
    if (form) {
        form.addEventListener("submit", function() {
            console.log("الرقم الكامل مع الرمز الدولي:", iti.getNumber());
        });
    }
