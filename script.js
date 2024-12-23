       // References to buttons and forms
       const signInButton = document.getElementById("signInButton");
       const signUpButton = document.getElementById("signUpButton");
       const signInForm = document.getElementById("signInForm");
       const signUpForm = document.getElementById("signUpForm");

       //Initially hide both forms
       
       signInForm.classList.add("hidden");
       signUpForm.classList.add("hidden");
       
       //Show Sign In form and hide Sign Up form
    
       signInButton.addEventListener("click", () => {
           signInForm.classList.remove("hidden"); //Show Sign In form
           signUpForm.classList.add("hidden"); //Hide Sign Up form
       });
       
       //Show Sign Up form and hide Sign In form
       
       signUpButton.addEventListener("click", () => {
           signUpForm.classList.remove("hidden"); //Show sign Up form
           signInForm.classList.add("hidden"); // Hide sign in form
       });
    //Validating Your form

    //Sign-Up Validation
     function validateSignUp () {
        let isValid = true;

        //Clear previous errors

        document.getElementById('signUpEmailError').innerText = '';
        document.getElementById('signUpPasswordError').innerText = '';
        document.getElementById('signUpError').innerText = '';

        //Get Form Values
        const email = document.getElementById('signUpEmail').value.trim();
        const password = document.getElementById('signUpPassword').value.trim();


        if (!email || ! email.includes('@') || email.includes ('.')) {

            document.getElementById('sgnUpEmailEror').innerText = 
            'Please enter a valid email address.'; 
            isValid = false;

         // Password Validation
        if (!password || password.length < 6) {
            document.getElementById('signUpPasswordError').innerText = 
            'Password must be at least 6 characters long.';
            isValid = false;
        }

        // Custom Sign-Up Error (e.g., email already exists)
        if (isValid) {
            const emailExists = false; // Replace with actual backend check
            if (emailExists) {
            document.getElementById('signUpError').innerText = 
            'Email already exists. Please try a different email.';
            isValid = false;
            }
        }

        return isValid;
        }

            // Sign-In Validation
        function validateSignIn() {
            let isValid = true;
    
            // Clear previous errors
            document.getElementById('signInEmailError').innerText = '';
            document.getElementById('signInPasswordError').innerText = '';
            document.getElementById('signInError').innerText = '';
        
            // Get form values
            const email = document.getElementById('signInEmail').value.trim();
            const password = document.getElementById('signInPassword').value.trim();
        
            // Email Validation
        if (!email || !email.includes('@') || !email.includes('.')) {
            document.getElementById('signInEmailError').innerText = 'Please enter a valid email address.';
            isValid = false;
            }
    
            // Password Validation
         if (!password) {
            document.getElementById('signInPasswordError').innerText = 'Password is required.';
            isValid = false;
            }
    
            // Custom Sign-In Error
            if (isValid) {
            const credentialsCorrect = false; // Replace with actual backend check
            if (!credentialsCorrect) {
                document.getElementById('signInError').innerText = 'Incorrect email or password.';
                isValid = false;
              }
            }
        
            return isValid;
            }
        }