const en = {
  nav: {
    home: "Home",
    about: "About",
    check: "Check",
    report: "Report Phone",
    delait: "Delait Report",
    signup: "Sign Up",
  },

  home: {
    title1: "Protect Your",
    title2: "Phone Security",
    desc:
      "Fight mobile phone theft, verify IMEI numbers, and help return stolen devices to their rightful owners.",
    checkBtn: "Check IMEI",
    learnMore: "Learn More",
  },

  about: {
    title: "About PhoneSecurity",
  
    p1: "PhoneSecurity is a platform created to help fight mobile phone theft and prevent the resale of stolen devices.",
  
    p2: "Our mission is to allow users to check the status of a phone before buying it, avoid purchasing stolen phones, and help owners recover their lost or stolen devices.",
  
    p3: "Users can create an account on the platform, save their phone information, and report their device if it gets stolen. If a phone was already registered or the IMEI was forgotten, users can log back into their account and retrieve their information.",
  
    p4: "By working together, we can reduce phone theft, stop illegal resale, and return stolen phones to their rightful owners.",
  
    features: {
      checkTitle: "Check IMEI",
      checkDesc: "Verify if a phone has been reported as stolen before buying it.",
  
      reportTitle: "Report Phone",
      reportDesc: "Declare your lost or stolen device and help protect others.",
  
      secureTitle: "Secure Phone",
      secureDesc: "Create account to manage and save your phone information securely."
    }
  },

  check: {
    title: "Check IMEI",
    description: "Enter your IMEI number to verify if the phone has been reported as stolen.",
    placeholder: "Enter IMEI (15 digits)",
    disclaimer: "I confirm that I am checking this IMEI in good faith and accept full responsibility.",
    button: "Check",
    clean: "✅ This phone is CLEAN. No reports found.",
    stolen: "❌ This phone is reported as STOLEN.",
    owner: "Owner",
    phone: "Phone",
    email: "Email",
    country: "Country",
  },

  report: {
    title1: "Report",
    title2: "Stolen Phone",
    description:
      "If your phone has been lost or stolen, declare it here using the IMEI number and your contact information. If someone checks it, they will be able to contact you.",
    imeiPlaceholder: "IMEI number (15 digits)",
    brandPlaceholder: "Phone brand (Samsung, iPhone...)",
    colorPlaceholder: "Phone color",
    contactPlaceholder: "Your phone number or email",
    disclaimer:
      "By submitting this form, you confirm that the information is accurate and that you are the rightful owner of this device. PhoneSecurity is not responsible for misuse.",
    checkbox:
      "I confirm that the information provided is accurate and I accept full responsibility for this declaration.",
    button: "Report Phone",
    invalidImei: "❌ Invalid IMEI. It must contain exactly 15 digits.",
    success: "✔ Your phone has been successfully reported.",
    alreadyChecked: "⚠️ This IMEI has already been checked by other users.",
    recoverySent: "🔐 A recovery code has been sent to your contact information.",
    keepSafe:
      "Keep it safe. You will need it to remove the report if your phone is recovered.",
  },

  delait: {
    title1: "Remove",
    title2: "Report",
    description:
      "If you have recovered your phone, you can remove the stolen report by entering the IMEI number and the recovery code sent to your contact information.",
    imeiPlaceholder: "IMEI (15 digits)",
    codePlaceholder: "Recovery code (6 digits)",
    confirm:
      "I confirm that I am the rightful owner of this phone and I take full responsibility for removing this report.",
    button: "Remove Report",
    invalidImei: "❌ IMEI must contain exactly 15 digits.",
    invalidCode: "❌ Recovery code must contain 6 digits.",
    success: "The report has been successfully removed.",
    successDesc: "This phone is no longer marked as stolen.",
    error: "Invalid IMEI or recovery code.",
  },

  signup: {
    title1: "Create",
    title2: "Account",
    email: "Email address",
    password: "Password",
    confirmPassword: "Confirm password",
    show: "Show",
    hide: "Hide",
    strength: "Password strength:",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    agree: "I agree to the terms and conditions.",
    create: "Create Account",
    creating: "Creating Account...",
    haveAccount: "Already have an account?",
    login: "Login",
    passwordWeak: "❌ Password is too weak.",
    passwordMismatch: "❌ Passwords do not match.",
  },

  login: {
    title: "Login",
    email: "Email address",
    password: "Password",
    show: "Show",
    hide: "Hide",
    button: "Login",
    loading: "Logging in...",
    noAccount: "No account found.",
    invalid: "Invalid email or password.",
    forgot: "Forgot your password?",
    reset: "Reset it",
  },

  forgot: {
    title: "Reset Password",
    step1Desc: "Enter your email address and we will send you a reset code.",
    step2Desc: "Enter the reset code and choose a new password.",
    email: "Email address",
    code: "Reset code (6 digits)",
    newPassword: "New password",
    confirmPassword: "Confirm new password",
    sendButton: "Send Reset Code",
    sending: "Sending...",
    resetButton: "Reset Password",
    resetting: "Resetting...",
    invalidEmail: "Please enter a valid email address.",
    invalidCode: "Invalid reset code.",
    weakPassword: "Password is too weak.",
    passwordMismatch: "Passwords do not match.",
    show: "Show",
    hide: "Hide",
  },

  dashboard: {
    my: "My",
    phone: "Phone",
    logout: "Logout",
    description: "Manage and save your phone information securely.",
    imei: "IMEI (15 digits)",
    brand: "Phone brand",
    color: "Phone color",
    save: "Save Phone Information",
    saved: "Phone information saved successfully.",
    savedInfo: "Saved Phone Information",
    imeiLabel: "IMEI:",
    brandLabel: "Brand:",
    colorLabel: "Color:",
    secure: "All information is secure.",
    invalidImei: "IMEI must contain exactly 15 digits.",
    reportNow: "Report This Phone"
  },
  
  
  
  
  
};


export default en;
