export default defineI18nConfig(() => {
  return {
    welcome: "Hoş geldiniz",
    //login
    login:{
      title:"Giriş Yap",
      username:"Kullanıcı Adı",
      password:"Şifre",
      button:"Giriş Yap",
      required:"Lütfen gerekli alanları doldurun",
      incorrect:"Kullanıcı adı veya şifre hatalı"
      
    },
    //navigation
    header:{
      nav: [
        { label: "Anasayfa", to: "/", target: "_self" },
        { label: "Ne Yapabiliriz", to: "/whatWeDo", target: "_self" },
        { label: "Öne Çıkan Projeler", to: "/featuredProjects", target: "_self" },
        { label: "Kayıt ol", to: "/registerNow", target: "_self" },
        { label: "Öne Çıkan Planlar", to: "/featuredPlans", target: "_self" },
        { label: "Referanslar", to: "/testimonials", target: "_self" },
        { label: "Müşteriler", to: "/clients", target: "_blank" },
      ],
      button:"BAŞLA",
      buttonlog:"ÇIKIŞ"
    },
    //home
    //slides
    slides: {
      items: [
        {
          title: "HİZMETLERİNİZİ TANITMAK İÇİN \n HARİKA ŞABLONLAR",
          text: "Garip latince kelimeler",
          image: "/images/slides/slide-4.jpg",
        },
        {
          title: "HİZMETLERİNİZİ TANITMAK İÇİN \n HARİKA ŞABLONLAR",
          text: "Garip latince kelime",
          image: "/images/slides/slide-1.jpg",
        },
        {
          title: "HİZMETLERİNİZİ TANITMAK İÇİN \n HARİKA ŞABLONLAR",
          text: "Garip latince kelimeorem Ipsum",
          image: "/images/slides/slide-2.jpg",
        },
        {
          title: "HİZMETLERİNİZİ TANITMAK İÇİN \n HARİKA ŞABLONLAR",
          text: "Garip latince kelime",
          image: "/images/slides/slide-3.jpg",
        },
      ],
      button:"DAHA FAZLASINI KEŞFET"
    },
    //our
    "our-all": {
      items: [
        {
          title: "MİSYONUMUZ",
          description: "Garip latince kelimeler",
          more: "Daha Fazla",
        },
        {
          title: "VİZYONUMUZ",
          description: "Garip latince kelimeler",
          more: "Daha Fazla",
        },
        {
          title: "İLERLEMEMİZ",
          description: "Garip latince kelimeler",
          more: "Daha Fazla",
        },
      ],
    },
    //what we can do
    services: {
      image: "/images/what-we-do.jpg",
      "sup-title": "Servisler",
      title: "Ne yapabiliriz",
      content: "Garip latince kelimeler",
      items: [
        {
          icon: "heroicons:light-bulb",
          header: "Uyarlanabilir Düzen",
          content: "Garip latince kelimeler",
        },
        {
          icon: "heroicons:sparkles",
          header: "İyi Ayarlar",
          content: "Garip latince kelimeler",
        },
        {
          icon: "heroicons:square-3-stack-3d",
          header: "Yaratıcı Tasarım",
          content: "Garip latince kelimeler",
        },
      ],
    },
    //featured projects
    projects: {
      "sup-title": "GELECEK PROJELER",
      title: "Gelecek Projelerimiz",
      content: "Garip latin cümleleri",
      items: [
        {
          image: "/images/featuredProjects/img-2.jpg",
          title: "İYİ PROJE",
          description: "Garip latin cümleleri",
          more: "Daha Fazla",
        },
        {
          image: "/images/featuredProjects/img-3.jpg",
          title: "EN İYİ PROJE",
          description: "Garip latin cümleleri",
          more: "Daha Fazla",
        },
        {
          image: "/images/featuredProjects/img-1.jpg",
          title: "HARİKA PROJE",
          description: "Garip latin cümleleri",
          more: "Daha Fazla",
        },
      ],
    },
    //registerNow
    register: {
      "sup-title": "KAYDOL",
      title: "Ücretsiz Deneme Sürümünüzü Başlatın",
      content: "Garip latin cümleleri",
      items: [
        "Uyarlanabilir Tasarım",
        "İyi Destek",
        "Herhangi Bir Cihazda Harika Görünün",
        "En Yüksek Hız",
        "Yeni Tasarım",
        "Kullanışlı ve Sezgisel Arayüz",
      ],
      form:{
        title:"ŞİMDİ KAYDOLUN",
        content:"Garip latin kelimeleri",
        successMessage:"Kaydınız için teşekkür ederiz!",
        requiredError:"Lütfen tüm alanları doldurun",
        nameError:"Adınız en az 3 harf uzunluğunda olmalıdır",
        emailError:"Lütfen geçerli bir e-posta adresi girin",
        telError:"Lütfen geçerli bir telefon numarası girin",
        yourName:"Ad",
        yourEmail:"E-posta",
        yourTel:"Telefon Numarası",
        button:"KAYDOL",
        info:"Kişisel bilgilerinizi asla paylaşmayacağız"
      }
    },
    //featured plans
    plans: [
      {
        star: "★",
        name: "TEMEL",
        price: "125₺",
        per: "AYLIK",
        buttonClass: "SİPARİŞ ET",
        features: [
          { name: "Tam Analitik", available: true },
          { name: "Mobil Site Ve Mağaza", available: true },
          { name: "24 Saat Destek", available: false },
          { name: "Sınırsız E-posta Hesabı", available: false },
        ],
      },
      {
        star: "★★★",
        name: "STANDART",
        price: "225₺",
        per: "AYLIK",
        buttonClass: "SİPARİŞ ET",
        features: [
          { name: "Tam Analitik", available: true },
          { name: "Mobil Site Ve Mağaza", available: true },
          { name: "24 Saat Destek", available: true },
          { name: "Sınırsız E-posta Hesabı", available: false },
        ],
      },
      {
        star: "★",
        name: "TİCARİ",
        price: "325₺",
        per: "AYLIK",
        buttonClass: "SİPARİŞ ET",
        features: [
          { name: "Tam Analitik", available: true },
          { name: "Mobil Site Ve Mağaza", available: true },
          { name: "24 Saat Destek", available: true },
          { name: "Sınırsız E-posta Hesabı", available: true },
        ],
      },
    ],
    //testimonials
    testimonials: {
      "sup-title": "REFERANSLAR",
      title: "En İyi Müşterimiz",
      content: "Garip latince kelimeler",
      items: [
        {
          name: "MORAD HAMDY",
          text: "Garip latince kelimeler",
          image: "/images/testimonials/testimonials-1.jpg",
        },
        {
          name: "AMR SADEK",
          text: "Garip latince kelimeler",
          image: "/images/testimonials/testimonials-2.jpg",
        },
        {
          name: "AHMED HAMDY",
          text: "Garip latince kelimeler",
          image: "/images/testimonials/testimonials-1.jpg",
        },
      ],
    },
    // client page
    actions: {
      "sup-title": "HAREKETE GEÇME ÇAĞRISI",
      title: "Şimdi Hazır Mısın?",
      content: "Garip latince kelimeler",
      "button-text": "BAŞLAMAYA HAZIR",
    },
  };
});
