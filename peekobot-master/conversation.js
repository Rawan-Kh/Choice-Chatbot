const chat = {
    1: {
        text: 'Hi! Welcome to Esaal.',
        options: [
            {
                text: 'Need Help',
                next: 2
            },
            {
                text: 'Book Now',
                next: 6
            },
            {
                text: 'Services',
                next: 9
            },
            {
                text: 'Promocodes / Bundles',
                next: 14
            }
        ]
    },
    2: {
        text: 'Do you need help in which of the following',
        options: [
            {
                text: 'Booking / Subscription',
                next: 3
            },
            {
                text: 'Payment',
                next: 4
            },
            {
                text: 'Account',
                next: 5
            },
            {
                text: 'Promocodes / Bundles',
                next: 14
            }
        ]
    },
    3: {
        text: 'Do you need help in Booking or Subscription',
        options: [
            {
                text: "Booking",
                next: 13
            },
            {
                text: "Subscription",
                next: 33
            }
        ]
    },
    4: {
        text: 'What help do you need with your Payment',
        options: [
            {
                text: "Checking the Wallet",
                next: 27
            },
            {
                text: "Refund",
                next: 34
            },
            {
                text: "Payment Options",
                next: 15
            }
        ]
    },
    5: {
        text: 'What help do you need with your Account',
        options: [
            {
                text: "Create Account",
                next: 21
            },
            {
                text: "Login/ Logout",
                next: 18
            },
            {
                text: "Change Credentials",
                next: 11
            },
            {
                text: "Insurance ",
                next: 35
            }
        ]
    },
    6: {
        text: 'Which specialization would you like to book',
        options: [
            {
                text: "Mental Health",
                next: 7
            },
            {
                text: "Nutrition",
                // next: 36
                next:41
            },
            {
                text: "Medical",
                // next: 37
                next:42
            }
        ]
    },
    7: {
        text: 'What would you like to choose more specifcally',
        options: [
            {
                text: "Marriage consultation",//(not yet) either ask for preferences or throw in the specfic page
                next: 4
            },
            {
                text: "Nutrition",//(not yet)
                next: 5
            },
            {
                text: "Medical",//(not yet)
                next: 5
            },{
                text: "More options",
                next: 8
            }
        ]
    },
    8: {
        text: 'Other mental options',
        options: [
            {
                text: "Marriage consultation 2",//(not yet)
                next: 4
            },
            {
                text: "Nutrition",//(not yet)
                next: 5
            },
            {
                text: "Medical",//(not yet)
                next: 5
            }
        ]
    },
    9: {
        text: 'List of services avaliable: ',
        options: [
            {
                text: "Video",
                next: 10
            },
            {
                text: "Text",
                next: 26
            },
            {
                text: "Teleconsultation",
                next: 38
            }
        ]
    },
    10: {
        text: 'Need help with your video session',
        options: [
            {
                text: "Booking video session",
                next: 13
            },
            {
                text: "Cancel video session",
                next: 23
            },
            {
                text: "Reschedule video session",
                next: 24
            }
        ]
    },
    11: {
        text: 'What would you like to reset',
        options: [
            {
                text: "Passwords",
                next: 22
            },
            {
                text: "Email",
                next: 28
            },
            {
                text: "Phone number",
                next: 28
            }
        ]
    },
    13: {
        text: 'How would you like us to help you with the booking',
        options: [
            {
                text: "Need Expert to open new Appointment",
                next: 29
            },
            {
                text: "Expert not showing",
                next: 25
            },
            {
                text: "Payment issue",
                next: 4
            }
        ]
    },
    14: {
        text: 'Which are you interested in?',
        options: [
            {
                text: "Promocodes",
                next: 39
            },
            {
                text: "Bundles",
                next: 17
            }
        ]
    },
    15: {
        text: 'The available payment methods include:(Fawry / Vodafone Cash / Credit Card). <br> which do you prefer to know about:',
        options: [
            {
                text: "Paying with fawry",
                next:30
            },
            {
                text: "Pay with Vodafone Cash",
                next:31
            },
            {
                text: "Pay with Visa",
                next:32
            }
        ]
    },
    16:  {
                text:"You will enter the site through the below link:  <br> After that you will click on “Login / create an account, a page will appear and you will click on “Create an account”, and then another page will appear to register you will enter the required data (phone number - password - confirm password). And if you would like to register through an e-mail, you will click on “register through email” or through Google you will click on “register using Google”, And if you would like to register through Facebook you will click on “register using Facebook” and your new account will be created immediately.",
                options: [
                    {
                        text: "Follow the link",
                        url: "https://esaal.me/ar/home"
                    }
                ]
            },
            17: {
                text: 'You will see all the Available appointments for the expert you chose, then you will choose the day, and then the available session times will appear for you on the day that you chose, you will choose the session time that suits you, and then you will click “Book this session”, then a page will appear with the available packages you will choose the package that you prefer. And you will be transferred to the payment page. Also, if you have money in your wallet, you can use it by activating the button next to “Use the wallet”. It is also important that you read the session instructions before confirming.'
            },
            18:{
                text: 'Do you need help with login or logout',
                options: [
                    {
                        text: "Login",
                        next: 19
                    },
                    {
                        text: "Logout",
                        next: 20
                    }
                ]
            },
            19:{
        text: 'You will access the site through the below link: <br>After that you will click on “Login / create an account”, a page will appear and you will click on “Login”, and then another page will appear to Login, now enter the (phone number - password) that you want to register with, and then you will click on the login. And if you would like to login with your Google account, click on “login Using Google”, And if you would like to login with your Facebook account click on “login Using Facebook”, and you will be logged in immediately.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    20:{
        text: 'You will access the site through the below link: <br> And You will click on “≡" that appears on the left and then another page will appear, you will click on “Logout”. Or you can log out by clicking on “My Account”, and another page will appear, and you can click on “Logout”.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    21:{
        text: 'You will enter the site through the below link: </br> After that you will click on  “Login / create an account”, ”, a page will appear and you will click on “Login”, and then another page will appear to Login , then you will click on “Reset password “and another page will appear  to enter the phone number that you registered with , you will receive an SMS with 4-digit code , and if you created your account through an e-mail, you will click on “login through e-mail” and then you will click on “Send a new activation code ( a 4-digit code will be sent to your email , and you will enter it from left to right, after that another page will appear to  enter a new password, and then you will click on "Change Password" and your password will be changed.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    22:{
        text: 'You will enter the site through the below link: </br> After that you will click on  “Login / create an account”, ”, a page will appear and you will click on “Login”, and then another page will appear to Login , then you will click on “Reset password “and another page will appear to enter the phone number that you registered with , you will receive an SMS with 4-digit code , and if you created your account through an e-mail, you will click on “login through e-mail” and then you will click on “Send a new activation code ( a 4-digit code will be sent to your email , and you will enter it from left to right, after that another page will appear to  enter a new password, and then you will click on "Change Password" and your password will be changed.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    23:{
        text: 'You will enter the site through the below link: </br> And you will log in with the same account you booked the session with, and then your sessions will appear to you, after that you will click on “Cancel this consultation”. and another page will appear to you with the cancellation policy" you will need to check it before confirming the cancellation". Then you will click "Yes" and the cancellation will take place.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/mysessions?vendor"
            }
        ]
    },
    24:{
        text: ' I\’m sorry but it is not possible to postpone the sessions at the time being, you can cancel the session and book another session, and please make sure that you checked the cancellation policy before confirming the session cancellation.',
    },
    25:{
        text: 'We are sorry to inform you that the doctor has a Personal emergency situation and he will not be able to join the session at the moment, but you can book another session for free as a compensation from our side using the code” Repayment100”',
    },
    26:{
        text: 'You will enter the site through the below link: </br> And you will choose “Ask a question”, and from it you will Choose a field for your question, and you can write your question in any of the available fields and your question will be sent immediately to the relevant expert.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    27:{
        text: 'You will enter the site through the below link: </br> and your personal account will appear and you will be able to view your wallet, but you must be already login with your account.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/myaccount"
            }
        ]
    },
    28:{
        text:'You will enter the site through the below link: </br> and your personal account will appear. You will click on the information/Data that you want to change, and you will click “Change” and after that you will click “Save”.  but you have to be login in order to be able to change any of your Data.',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/myaccount"
            }
        ]
    },
    29:{
        text:'We are Sorry, The expert is only available at times on the site. You can check the available appointments of the expert and choose one of it.',
    },
    30:{
        text:'You will choose Fawry as a payment method, after that you will enter the mobile number and the email, then you will click on a confirmation button. You will receive a message with the session details and the amount that required to be paid, and you will go to any place where payment through Fawry is available, and after Payment you will receive another message as a confirmation',
    },
    31:{
        text:'You will choose Vodafone Cash as a payment method  , after that you will  enter the mobile number "Your Vodafone Cash wallet number",  it must be the same number that you made your account with, after you enter the number, you will click on a confirmation button , you will need to enter the password for your Vodafone Cash wallet, After that, an OTP message will be sent to you , you will enter it in their field, and then a confirmation message will be sent with the session reservation information. It is important to make sure that the wallet contains the amount of the session Price. It is also important that you read the instructions for the session before confirming.',
    },
    32:{
        text:'You will choose the visa payment method, then you will be transferred to the Payment related details, you will need to enter (card number - expiry date - CVV), and all the details will be visible to you (Your request - service cost - total cost), and you will click on a confirmation to book the session. It is also important that you read the session instructions before confirming.',
    },
    33:{
        text:'You can subscribe through opeing the text consultation button at home then you will be routed...',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    34:{
        text: ' I\’m sorry but it is not possible to get a refund .....',
    },
    35:{
        text:'You can Sign in as an Allianz user through......',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/myaccount"
            }
        ]
    },
    36: {
        text: 'What would you like to choose more specifcally',
        options: [
            {
                text: "Marriage consultation",
                next: 4
            },
            {
                text: "Nutrition",//(not yet)
                next: 5
            },
            {
                text: "Medical",//(not yet)
                next: 5
            },{
                text: "More options",
                next: 8
            }
        ]
    },
    37: {
        text: 'What would you like to choose more specifcally',
        options: [
            {
                text: "Marriage consultation",//(not yet) either ask for preferences or throw in the specfic page
                next: 4
            },
            {
                text: "Nutrition",//(not yet)
                next: 5
            },
            {
                text: "Medical",//(not yet)
                next: 5
            },{
                text: "More options",
                next: 8
            }
        ]
    },
    38:{
        text:'You can subscribe through opeing the text consultation button at home then you will be routed...',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/ar/home"
            }
        ]
    },
    39:{
        text:'Take a look at the avaliable promocodes that suits your needs',
        options: [
            {
                text: "Promo1"
            },
            {
                text: "Promo2"
            },
            {
                text: "Promo3"
            }
        ]
    },
    40:{
        text:'Book your video sessions through the following link',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/en/online-consultation?CatId="
            }
        ]  
    },
    41:{
        text:'Book your video sessions through the following link',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/en/online-consultation?CatId=22"
            }
        ]  
    },
    42:{
        text:'Book your video sessions through the following link',
        options: [
            {
                text: "Follow the link",
                url: "https://esaal.me/en/online-consultation?CatId=4"
            }
        ]  
    }
       
};
