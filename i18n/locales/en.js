export default defineI18nConfig(() => {
  return {
    welcome: "Welcome",
    //login
    login: {
      title: "Login",
      username: "Username",
      password: "Password",
      button: "Login",
      required: "Please fill in the required fields",
      incorrect: "Username or password is incorrect",
    },
    //signUp
    signUp:{
      title:"Sign Up",
      username:"Username",
      email:"E-mail",
      password:"Password",
      button:"Sign Up",
      required: "Please fill in the required fields",
      usernameError: "Username must be at least 3 letters long",
      emailError: "Please enter a valid email address",
      passwordError: "Password must be at least 6 characters long",
      successMessage: "Successfully registered!",
    },
    //navigation
    header: {
      nav: [
        { label: "Home", to: "/", target: "_self" },
        { label: "What We Do", to: "/whatWeDo", target: "_self" },
        {
          label: "Featured Projects",
          to: "/featuredProjects",
          target: "_self",
        },
        { label: "Register Now", to: "/registerNow", target: "_self" },
        { label: "Featured Plans", to: "/featuredPlans", target: "_self" },
        { label: "Testimonials", to: "/testimonials", target: "_self" },
        { label: "Clients", to: "/clients", target: "_self" },
      ],
      button: "READY TO START",
      buttonlog: "LOG OUT",
      user:"Welcome"
    },
    //home
    //slider
    slides: {
      items: [
        {
          title: "AWESOME TEMPLATES \n TO PROMOTE YOUR SERVICES",
          text: "Lorem Ipsum",
          image: "/images/slides/slide-4.jpg",
        },
        {
          title: "AWESOME TEMPLATES \n TO PROMOTE YOUR SERVICES",
          text: "Lorem Ipsum",
          image: "/images/slides/slide-1.jpg",
        },
        {
          title: "AWESOME TEMPLATES \n TO PROMOTE YOUR SERVICES",
          text: "Lorem Ipsum",
          image: "/images/slides/slide-2.jpg",
        },
        {
          title: "AWESOME TEMPLATES \n TO PROMOTE YOUR SERVICES",
          text: "Lorem Ipsum",
          image: "/images/slides/slide-3.jpg",
        },
      ],
      button: "EXPLORE MORE",
    },
    //our
    "our-all": {
      items: [
        {
          title: "OUR MISSION",
          description: "Lorem Ipsum",
          more: "Read More",
        },
        {
          title: "OUR VISION",
          description: "Lorem Ipsum",
          more: "Read More",
        },
        {
          title: "OUR PROCESS",
          description: "Lorem Ipsum",
          more: "Read More",
        },
      ],
    },
    //what we can do
    services: {
      image: "/images/what-we-do.jpg",
      "sup-title": "Services",
      title: "What We Can Do",
      content: "Lorem Ipsum",
      items: [
        {
          icon: "heroicons:light-bulb",
          header: "Responsive Layout",
          content: "Lorem Ipsum",
        },
        {
          icon: "heroicons:sparkles",
          header: "Great Settings",
          content: "Lorem Ipsum",
        },
        {
          icon: "heroicons:square-3-stack-3d",
          header: "Creative Design",
          content: "Lorem Ipsum",
        },
      ],
    },
    //featuredProjects
    projects: {
      "sup-title": "Featured Projects",
      title: "Our Featured Projects",
      content: "Lorem Ipsum",
      items: [
        {
          image: "/images/featuredProjects/img-2.jpg",
          title: "GREAT PROJECT",
          description: "Lorem Ipsum",
          more: "Read More",
        },
        {
          image: "/images/featuredProjects/img-3.jpg",
          title: "THE BEST PROJECT",
          description: "Lorem Ipsum",
          more: "Read More",
        },
        {
          image: "/images/featuredProjects/img-1.jpg",
          title: "AWESOME PROJECT",
          description: "Lorem Ipsum",
          more: "Read More",
        },
      ],
      path: {
        en: "/featuredProjects",
      },
    },
    //registerNow
    register: {
      "sup-title": "REGISTER",
      title: "Start Your Free Trial",
      content: "Lorem Ipsum",
      items: [
        "Responsive Design",
        "Great Support",
        "Look Great on Any Devices",
        "Highest Speed",
        "Fresh Design",
        "Useful and Intuitive Interface",
      ],
      form: {
        title: "REGISTER NOW",
        content: "Lorem Ipsum",
        successMessage: "Thank you for your submission!",
        requiredError: "Please fill out all fields",
        nameError: "Name must be at least 3 letters long",
        emailError: "Please enter a valid email address",
        telError: "Please enter a valid phone number",
        yourName: "Name",
        yourEmail: "Email",
        yourTel: "Phone Number",
        button: "READY TO START",
        info: "We will never share your personal info",
      },
    },
    //featured plans
    plans: [
      {
        star: "★",
        name: "BASIC",
        price: "$125",
        per: "PER MONTH",
        buttonClass: "ORDER NOW",
        features: [
          { name: "Full Analytic", available: true },
          { name: "Mobile Site and Store", available: true },
          { name: "24h Support", available: false },
          { name: "Unlimited Email Accounts", available: false },
        ],
      },
      {
        star: "★★★",
        name: "STANDARD",
        price: "$225",
        per: "PER MONTH",
        buttonClass: "ORDER NOW",
        features: [
          { name: "Full Analytic", available: true },
          { name: "Mobile Site and Store", available: true },
          { name: "24h Support", available: true },
          { name: "Unlimited Email Accounts", available: false },
        ],
      },
      {
        star: "★",
        name: "BUSINESS",
        price: "$325",
        per: "PER MONTH",
        buttonClass: "ORDER NOW",
        features: [
          { name: "Full Analytic", available: true },
          { name: "Mobile Site and Store", available: true },
          { name: "24h Support", available: true },
          { name: "Unlimited Email Accounts", available: true },
        ],
      },
    ],
    //testimonials
    testimonials: {
      "sup-title": "TESTIMONIALS",
      title: "Our Best Client",
      content: "Lorem Ipsum",
      items: [
        {
          name: "MORAD HAMDY",
          text: "Lorem Ipsum",
          image: "/images/testimonials/testimonials-1.jpg",
        },
        {
          name: "AMR SADEK",
          text: "Lorem Ipsum",
          image: "/images/testimonials/testimonials-2.jpg",
        },
        {
          name: "AHMED HAMDY",
          text: "Lorem Ipsum",
          image: "/images/testimonials/testimonials-1.jpg",
        },
      ],
      path: "/testimonials",
    },
    // client page
    actions: {
      "sup-title": "CALL TO ACTION",
      title: "Are You Ready Now?",
      content: "Lorem Ipsum",
      "button-text": "READY TO START",
    },
  };
});
