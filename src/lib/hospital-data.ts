// Premium hospital data - شفای نوین بیمارستان
// Comprehensive, editorial, professional content

export const HOSPITAL_INFO = {
  name: "بیمارستان تخصصی شفای نوین",
  shortName: "شفای نوین",
  tagline: "مرجع درمان تخصصی ایران",
  englishName: "Shafa Novin Specialty Hospital",
  established: 1378,
  establishedGregorian: 1999,
  phone: "۰۲۱-۲۲۳۴۵۶۷۸",
  emergencyPhone: "۱۹۰",
  email: "info@shafanovin.ir",
  address: "تهران، خیابان ولیعصر، بالاتر از پارک‌وی، پلاک ۲۴۵",
  addressShort: "ولیعصر، تهران",
  workingHours: "۲۴ ساعته",
  latitude: "35.7575",
  longitude: "51.4100",
  social: {
    instagram: "@shafanovin_hospital",
    telegram: "@shafa_novin",
    twitter: "@shafanovin",
    linkedin: "shafa-novin-hospital",
  },
};

// Hero images - real medical photography
export const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1519494026890-80ed4e7c4b15?w=1600&q=80",
  secondary: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  doctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80",
  surgery: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80",
  building: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80",
  patient: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80",
};

export const STATS = [
  { value: 25, suffix: "+", label: "سال تجربه تخصصی", sublabel: "از سال ۱۳۷۸" },
  { value: 80, suffix: "+", label: "پزشک متخصص", sublabel: "فلوشیپ بین‌المللی" },
  { value: 120, suffix: "هزار+", label: "بیمار درمان‌شده", sublabel: "رضایت ۹۸٪" },
  { value: 30, suffix: "+", label: "بخش تخصصی", sublabel: "تجهیزات روز دنیا" },
];

export const DEPARTMENTS = [
  {
    slug: "cardiology",
    name: "قلب و عروق",
    englishName: "Cardiology",
    description:
      "مرکز قلب شفای نوین با تیمی از فلوشیپ‌های مداخله‌ای و تجهیزات پیشرفته شامل کات‌لب ه ybrid، ارائه‌دهنده کامل‌ترین خدمات تشخیصی و درمانی بیماری‌های قلبی در کشور است. از آنژیوپلاستی اورژانسی تا جراحی‌های پیچیده قلب باز.",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80",
    features: [
      "آنژیوگرافی و آنژیوپلاستی",
      "تست ورزش قلب (استرس تست)",
      "هولتر مانیتورینگ ۲۴ ساعته",
      "اکوکاردیوگرافی سه‌بعدی",
      "پیس‌میکر و ICD",
      "جراحی بای‌پس قلب",
      "تعویض دریچه قلب",
    ],
    color: "from-rose-500/15 to-red-500/5",
    accentColor: "rose",
    stats: { procedures: "+۱۲٬۰۰۰", satisfaction: "۹۸٪" },
  },
  {
    slug: "neurology",
    name: "مغز و اعصاب",
    englishName: "Neurology",
    description:
      "مرکز جامع مغز و اعصاب با واحد سکته مغزی حاد (Stroke Unit)، بخش جراحی مغز و اعصاب و فیزیوتراپی تخصصی. تیمی از برترین نورولوژیست‌ها و نوروسرجن‌های ایران در خدمت بیماران عزیز.",
    icon: "brain",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    features: [
      "MRI مغز و اعصاب ۳ تسلا",
      "EEG (نوار مغز)",
      "EMG (نوار عصب و عضله)",
      "درمان سکته مغزی حاد (tPA)",
      "جراحی مغز و ستون فقرات",
      "تشنج و صرع مقاوم",
      "بیماری پارکینسون",
    ],
    color: "from-violet-500/15 to-purple-500/5",
    accentColor: "violet",
    stats: { procedures: "+۸٬۵۰۰", satisfaction: "۹۶٪" },
  },
  {
    slug: "orthopedics",
    name: "ارتوپدی و زانو",
    englishName: "Orthopedics",
    description:
      "بخش ارتوپدی شفای نوین پیشرو در جراحی‌های تعویض مفصل، آرتروسکوپی و جراحی ستون فقرات است. با تجربه بیش از ۳۰۰۰ جراحی موفق تعویض مفصل، بهترین نتایج را به بیماران ارائه می‌دهیم.",
    icon: "bone",
    image: "https://images.unsplash.com/photo-1583912267550-d44c9c2c78d1?w=800&q=80",
    features: [
      "تعویض مفصل زانو و لگن",
      "آرتروسکوپی زانو و شانه",
      "درمان شکستگی‌های پیچیده",
      "فیزیوتراپی پیشرفته",
      "جراحی ستون فقرات",
      "اسپورت ارتوپدی",
      "رترومیکروسکوپی",
    ],
    color: "from-amber-500/15 to-yellow-500/5",
    accentColor: "amber",
    stats: { procedures: "+۳٬۰۰۰", satisfaction: "۹۹٪" },
  },
  {
    slug: "obstetrics",
    name: "زنان و زایمان",
    englishName: "Obstetrics & Gynecology",
    description:
      "مرکز تخصصی زنان و زایمان شفای نوین با بخش IVF پیشرفته، تصویربرداری 4D جنین و واحد نوزادان نارس، در کنار شما در تمام مراحل بارداری است. شفقت و تخصص در کنار هم.",
    icon: "baby",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    features: [
      "مراقبت دوران بارداری",
      "IVF و ناباروری",
      "زایمان طبیعی و سزارین",
      "تشخیص و درمان سرطان‌های زنانه",
      "تصویربرداری 4D جنین",
      "جراحی‌های لاپاراسکوپی",
      "ماما و آموزش",
    ],
    color: "from-pink-500/15 to-rose-500/5",
    accentColor: "pink",
    stats: { procedures: "+۶٬۸۰۰", satisfaction: "۹۷٪" },
  },
  {
    slug: "pediatrics",
    name: "اطفال و نوزادان",
    englishName: "Pediatrics",
    description:
      "بخش اطفال شفای نوین با واحد نوزادان نارس (NICU) پیشرفته، تیم نئوناتولوژیست و امکانات بازی درمانی، محیطی آرام و تخصصی برای کوچک‌ترین بیماران ما فراهم کرده است.",
    icon: "stethoscope",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    features: [
      "نوزادان نارس (NICU)",
      "بیماری‌های عفونی کودکان",
      "واکسیناسیون",
      "جراحی اطفال",
      "مشاوره رشد و نمو",
      "بخش اورژانس اطفال",
      "آلرژی و ایمونولوژی",
    ],
    color: "from-cyan-500/15 to-sky-500/5",
    accentColor: "cyan",
    stats: { procedures: "+۴٬۲۰۰", satisfaction: "۹۸٪" },
  },
  {
    slug: "internal-medicine",
    name: "داخلی و غدد",
    englishName: "Internal Medicine",
    description:
      "بخش داخلی شفای نوین با زیرشاخه‌های گوارش، کبد، کلیه، ریه و غدد، تشخیص و درمان جامع بیماری‌های داخلی را با رویکرد فردی‌سازی‌شده ارائه می‌دهد.",
    icon: "activity",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    features: [
      "گوارش و کبد (آندوسکوپی)",
      "ریه و تنفس (اسپیرومتری)",
      "کلیه و مجاری ادراری",
      "غدد و دیابت",
      "فشار خون و قند",
      "روماتولوژی",
      "هماتولوژی",
    ],
    color: "from-emerald-500/15 to-green-500/5",
    accentColor: "emerald",
    stats: { procedures: "+۹٬۶۰۰", satisfaction: "۹۵٪" },
  },
  {
    slug: "surgery",
    name: "جراحی عمومی و تخصصی",
    englishName: "Surgery",
    description:
      "اتاق‌های عمل مجهز شفای نوین با ۸ اتاق عمل پیشرفته شامل سیستم لامینار airflow و رباتیک جراحی، آماده انجام انواع جراحی‌های تخصصی با کمترین تهاجم و سریع‌ترین نقاهت.",
    icon: "scissors",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    features: [
      "جراحی لاپاراسکوپی",
      "جراحی روزانه",
      "سرطان‌های دستگاه گوارش",
      "فتق و بواسیر",
      "کیسه صفرا",
      "جراحی چاقی (Bariatric)",
      "جراحی تیروئید",
    ],
    color: "from-indigo-500/15 to-blue-500/5",
    accentColor: "indigo",
    stats: { procedures: "+۱۵٬۰۰۰", satisfaction: "۹۷٪" },
  },
  {
    slug: "emergency",
    name: "اورژانس و تروما",
    englishName: "Emergency & Trauma",
    description:
      "مرکز فوریت‌های پزشکی شفای نوین ۲۴ ساعته فعال با پزشک متخصص طب اورژانس همیشه حاضر، بخش تروما، اتاق احیای پیشرفته و آمبولانس‌های مجهز. در شرایط بحرانی، به ما اعتماد کنید.",
    icon: "siren",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    features: [
      "پزشک متخصص ۲۴ ساعته",
      "احیا و CPR پیشرفته",
      "تروما و تصادفات",
      "آمبولانس ویژه",
      "اتاق عمل اورژانس",
      "بخش CCU اورژانس",
      "سکته حاد",
    ],
    color: "from-red-500/15 to-orange-500/5",
    accentColor: "red",
    stats: { procedures: "+۴۵٬۰۰۰", satisfaction: "۹۶٪" },
  },
];

export const DOCTORS = [
  {
    slug: "dr-mohammadi",
    name: "دکتر علی محمودی",
    title: "متخصص قلب و عروق",
    specialty: "فلوشیپ مداخله‌های قلبی",
    department: "cardiology",
    bio: "فلوشیپ مداخله‌های قلبی از دانشگاه علوم پزشکی تهران با بیش از ۱۸ سال تجربه در آنژیوپلاستی و استنت‌گذاری. عضو انجمن قلب آمریکا (ACC) و انجمن قلب اروپا (ESC). پیشرو در جراحی‌های پیچیده کرونر با تکنیک‌های نوین.",
    experience: 18,
    education: [
      "فلوشیپ مداخله‌های قلبی - دانشگاه علوم پزشکی تهران",
      "متخصص قلب و عروق - دانشگاه علوم پزشکی شهید بهشتی",
      "دکترای پزشکی - دانشگاه تهران",
    ],
    certifications: ["ACC Member", "ESC Fellow", "Board Certified"],
    rating: 4.9,
    reviews: 342,
    available: true,
    languages: ["فارسی", "انگلیسی"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    slug: "dr-ahmadi",
    name: "دکتر سارا احمدی",
    title: "متخصص مغز و اعصاب",
    specialty: "نورولوژیست و متخصص سکته",
    department: "neurology",
    bio: "متخصص بیماری‌های عصبی با تخصص ویژه در درمان سکته مغزی حاد و صرع مقاوم به درمان. عضو انجمن سکته مغزی آمریکا (AHA/ASA). پیشرو در راه‌اندازی واحد سکته حاد بیمارستان.",
    experience: 14,
    education: [
      "فلوشیپ سکته مغزی - دانشگاه علوم پزشکی ایران",
      "متخصص مغز و اعصاب - دانشگاه علوم پزشکی تهران",
      "دکترای پزشکی - دانشگاه شیراز",
    ],
    certifications: ["AHA/ASA Member", "ESO Fellow"],
    rating: 4.8,
    reviews: 287,
    available: true,
    languages: ["فارسی", "انگلیسی", "آلمانی"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    slug: "dr-rezaei",
    name: "دکتر حسن رضایی",
    title: "متخصص ارتوپدی",
    specialty: "فلوشیپ تعویض مفصل زانو و لگن",
    department: "orthopedics",
    bio: "پیشگام در جراحی‌های تعویض مفصل در کشور با انجام بیش از ۳۰۰۰ جراحی موفق. فلوشیپ آلمان با تکنیک‌های روز دنیا. عضو انجمن ارتوپدی آمریکا (AAOS).",
    experience: 22,
    education: [
      "فلوشیپ تعویض مفصل - آلمان",
      "متخصص ارتوپدی - دانشگاه علوم پزشکی مشهد",
      "دکترای پزشکی - دانشگاه تهران",
    ],
    certifications: ["AAOS Member", "EOA Fellow", "ISAKOS"],
    rating: 5.0,
    reviews: 521,
    available: true,
    languages: ["فارسی", "انگلیسی", "آلمانی"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
  {
    slug: "dr-karimi",
    name: "دکتر مریم کریمی",
    title: "متخصص زنان و زایمان",
    specialty: "فلوشیپ ناباروری و IVF",
    department: "obstetrics",
    bio: "فلوشیپ ناباروری با موفقیت بیش از ۷۰٪ در درمان IVF و کمک به هزاران خانواده برای داشتن فرزند. عضو انجمن باروری آمریکا (ASRM).",
    experience: 16,
    education: [
      "فلوشیپ ناباروری - بلژیک",
      "متخصص زنان و زایمان - دانشگاه علوم پزشکی تهران",
      "دکترای پزشکی - دانشگاه اصفهان",
    ],
    certifications: ["ASRM Member", "ESHRE Fellow"],
    rating: 4.9,
    reviews: 398,
    available: false,
    languages: ["فارسی", "انگلیسی", "فرانسوی"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
  {
    slug: "dr-hosseini",
    name: "دکتر رضا حسینی",
    title: "متخصص اطفال و نوزادان",
    specialty: "نئوناتولوژیست (نوزادان نارس)",
    department: "pediatrics",
    bio: "مدیر بخش NICU بیمارستان با تخصص ویژه در مراقبت از نوزادان نارس و کم‌وزن. عضو آکادمی پزشکی اطفال آمریکا (AAP).",
    experience: 19,
    education: [
      "فلوشیپ نوزادان - دانشگاه علوم پزشکی تهران",
      "متخصص اطفال - دانشگاه علوم پزشکی شهید بهشتی",
      "دکترای پزشکی - دانشگاه تبریز",
    ],
    certifications: ["AAP Member", "ESPR Fellow"],
    rating: 4.9,
    reviews: 456,
    available: true,
    languages: ["فارسی", "انگلیسی"],
    image: "https://images.unsplash.com/photo-1537368910025-9a4d0f5c0deb?w=600&q=80",
  },
  {
    slug: "dr-moradi",
    name: "دکتر فاطمه مرادی",
    title: "متخصص داخلی",
    specialty: "فلوشیب غدد و دیابت",
    department: "internal-medicine",
    bio: "متخصص بیماری‌های غدد و دیابت با رویکرد درمانی جامع و تغذیه‌درمانی. فلوشیپ دیابت از انگلستان.",
    experience: 12,
    education: [
      "فلوشیب دیابت - انگلستان",
      "متخصص داخلی - دانشگاه علوم پزشکی اصفهان",
      "دکترای پزشکی - دانشگاه شیراز",
    ],
    certifications: ["EASD Member", "ADA Fellow"],
    rating: 4.7,
    reviews: 234,
    available: true,
    languages: ["فارسی", "انگلیسی"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
  },
  {
    slug: "dr-nemati",
    name: "دکتر امیر نعمتی",
    title: "جراح عمومی",
    specialty: "فلوشیپ جراحی سرطان",
    department: "surgery",
    bio: "جراح برجسته در جراحی‌های لاپاراسکوپی با کمترین تهاجم و سریع‌ترین دوره نقاهت. فلوشیپ جراحی سرطان از فرانسه.",
    experience: 17,
    education: [
      "فلوشیپ جراحی سرطان - فرانسه",
      "متخصص جراحی عمومی - دانشگاه علوم پزشکی تهران",
      "دکترای پزشکی - دانشگاه مشهد",
    ],
    certifications: ["ESSO Member", "SAGES Fellow"],
    rating: 4.8,
    reviews: 312,
    available: true,
    languages: ["فارسی", "انگلیسی", "فرانسوی"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
  },
  {
    slug: "dr-sadeghi",
    name: "دکتر نرگس صادقی",
    title: "پزشک اورژانس",
    specialty: "فلوشیپ تروما",
    department: "emergency",
    bio: "مدیر گروه اورژانس با تخصص در مدیریت تروما و فوریت‌های بحرانی. فلوشیپ تروما از آمریکا.",
    experience: 15,
    education: [
      "فلوشیپ تروما - آمریکا",
      "متخصص طب اورژانس - دانشگاه علوم پزشکی ایران",
      "دکترای پزشکی - دانشگاه تهران",
    ],
    certifications: ["ACEP Member", "ATLS Instructor"],
    rating: 4.9,
    reviews: 278,
    available: true,
    languages: ["فارسی", "انگلیسی"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
];

export const FACILITIES = [
  {
    slug: "icu",
    name: "مراقبت‌های ویژه (ICU/CCU)",
    description:
      "بخش مراقبت‌های ویژه پیشرفته با ۲۴ تخت مجهز به دستگاه‌های تنفس مصنوعی نسل جدید، مانیتورینگ لحظه‌ای و کادر پرستاری تخصصی. واحد CCU مجزا برای بیماران قلبی.",
    icon: "monitor-heart",
    image: "https://images.unsplash.com/photo-1519494026890-80ed4e7c4b15?w=800&q=80",
    stats: "۲۴ تخت",
  },
  {
    slug: "operation-theater",
    name: "اتاق‌های عمل پیشرفته",
    description:
      "۸ اتاق عمل مجهز به سیستم لامینار airflow، جراحی رباتیک و تجهیزات کامل برای انواع جراحی‌های تخصصی. اتاق عمل هیبریدی برای جراحی‌های قلب و عروق.",
    icon: "scissors",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    stats: "۸ اتاق عمل",
  },
  {
    slug: "imaging",
    name: "مرکز تصویربرداری پیشرفته",
    description:
      "مجهز به دستگاه MRI ۳ تسلا، CT Scan ۱۶۰ برشی، سونوگرافی ۴ بعدی و ماموگرافی دیجیتال. مرکز تصویربرداری ۲۴ ساعته در خدمت بیماران.",
    icon: "scan",
    image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80",
    stats: "۲۴ ساعته",
  },
  {
    slug: "laboratory",
    name: "آزمایشگاه تشخیصی",
    description:
      "آزمایشگاه ۲۴ ساعته با جدیدترین دستگاه‌های اتومات جهت انجام انواع آزمایش‌های تخصصی، پاتولوژی و ژنتیک. نتایج آنلاین و سریع.",
    icon: "flask-conical",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    stats: "۲۴ ساعته",
  },
  {
    slug: "pharmacy",
    name: "داروخانه ۲۴ ساعته",
    description:
      "داروخانه مجهز با تمامی داروهای تخصصی و کمیاب، در دسترس بیماران و مراجعین به صورت ۲۴ ساعته. مشاوره دارویی رایگان.",
    icon: "pill",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    stats: "۲۴ ساعته",
  },
  {
    slug: "nicu",
    name: "بخش نوزادان نارس (NICU)",
    description:
      "بخش ویژه نوزادان نارس با اینکیوبیتورهای پیشرفته، ونتیلاتورهای نوزادی و کادر تخصصی نئوناتولوژی. مراقبت ۲۴ ساعته از کوچک‌ترین بیماران.",
    icon: "baby",
    image: "https://images.unsplash.com/photo-1606613593900-94d12c8e3e3d?w=800&q=80",
    stats: "۱۸ اینکیوبیتور",
  },
];

export const PACKAGES = [
  {
    slug: "basic-checkup",
    title: "چکاپ پایه سلامت",
    englishTitle: "Essential Health Check",
    description: "مناسب برای افراد سالم جهت کنترل سالیانه",
    price: "۸۹۰٬۰۰۰",
    duration: "۲ ساعت",
    category: "checkup",
    popular: false,
    features: [
      "مشاوره با پزشک عمومی",
      "آزمایش خون کامل (CBC)",
      "قند خون و چربی",
      "عملکرد کبد و کلیه",
      "اورینالیز",
      "نوار قلب (ECG)",
      "فشار خون و گلوکومتر",
    ],
  },
  {
    slug: "comprehensive-checkup",
    title: "چکاپ جامع تخصصی",
    englishTitle: "Comprehensive Health Check",
    description: "محبوب‌ترین پکیج با بررسی کامل بدن",
    price: "۲٬۴۹۰٬۰۰۰",
    duration: "۴ ساعت",
    category: "checkup",
    popular: true,
    features: [
      "تمام موارد چکاپ پایه",
      "آزمایش تیروئید (T3, T4, TSH)",
      "ویتامین D و B12",
      "آهن و فریتین",
      "اکوکاردیوگرافی قلب",
      "سونوگرافی شکم و لگن",
      "اسپیرومتری (تست ریه)",
      "تست ورزش قلب",
      "مشاوره با متخصص قلب",
    ],
  },
  {
    slug: "premium-checkup",
    title: "چکاپ VIP پریمیوم",
    englishTitle: "Premium VIP Health Check",
    description: "بررسی همه‌جانبه با MRI و مشاوره تخصصی",
    price: "۵٬۸۹۰٬۰۰۰",
    duration: "یک روز کامل",
    category: "package",
    popular: false,
    features: [
      "تمام موارد چکاپ جامع",
      "MRI مغز و اعصاب",
      "CT Scan قفسه سینه",
      "ماموگرافی / پروستات",
      "آندوسکوپی معده",
      "مشاوره با متخصصین: قلب، داخلی، مغز",
      "تغذیه‌درمانی تخصصی",
      "پرونده سلامت دیجیتال",
      "پیگیری ۶ ماهه رایگان",
    ],
  },
  {
    slug: "cardiac-package",
    title: "پکیج سلامت قلب",
    englishTitle: "Cardiac Health Package",
    description: "بررسی تخصصی سیستم قلبی-عروقی",
    price: "۳٬۲۹۰٬۰۰۰",
    duration: "۳ ساعت",
    category: "package",
    popular: false,
    features: [
      "مشاوره متخصص قلب",
      "اکوکاردیوگرافی ۳ بعدی",
      "تست ورزش قلب (استرس تست)",
      "هولتر مانیتورینگ ۲۴ ساعته",
      "آزمایش چربی کامل",
      "تروپونین و CPK",
      "HS-CRP",
    ],
  },
];

export const NEWS = [
  {
    slug: "new-mri-installed",
    title: "راه‌اندازی دستگاه MRI ۳ تسلا نسل جدید در شفای نوین",
    excerpt:
      "با هدف ارائه خدمات تصویربرداری با کیفیت بی‌سابقه، دستگاه MRI ۳ تسلا جدیدترین نسل جهانی در مرکز تصویربرداری بیمارستان نصب شد.",
    content: "متن کامل خبر...",
    category: "news",
    image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80",
    author: "روابط عمومی",
    featured: true,
    date: "۱۴۰۳/۰۷/۱۵",
    readTime: "۳ دقیقه",
  },
  {
    slug: "heart-month-campaign",
    title: "ماه قلب سالم: ۲۰٪ تخفیف روی چکاپ قلب",
    excerpt:
      "به مناسبت روز جهانی قلب، بیمارستان شفای نوین تخفیف ویژه ۲۰ درصدی روی پکیج سلامت قلب ارائه می‌دهد.",
    content: "متن کامل خبر...",
    category: "campaign",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    author: "روابط عمومی",
    featured: true,
    date: "۱۴۰۳/۰۷/۱۰",
    readTime: "۲ دقیقه",
  },
  {
    slug: "new-doctor-joined",
    title: "پیوستن فلوشیپ جراحی سرطان از فرانسه به کادر پزشکی",
    excerpt:
      "دکتر امیر نعمتی، فلوشیپ جراحی سرطان از دانشگاه پاریس، به جمع پزشکان متخصص بیمارستان شفای نوین پیوست.",
    content: "متن کامل خبر...",
    category: "news",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    author: "روابط عمومی",
    featured: false,
    date: "۱۴۰۳/۰۶/۲۸",
    readTime: "۲ دقیقه",
  },
  {
    slug: "diabetes-prevention-tips",
    title: "۷ راهکار طلایی برای پیشگیری از دیابت نوع ۲",
    excerpt:
      "دیابت نوع ۲ یکی از شایع‌ترین بیماری‌های متابولیک است. در این مقاله به روش‌های علمی پیشگیری از آن می‌پردازیم.",
    content: "متن کامل خبر...",
    category: "article",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    author: "دکتر مرادی",
    featured: false,
    date: "۱۴۰۳/۰۶/۲۰",
    readTime: "۵ دقیقه",
  },
  {
    slug: "kid-transplant-success",
    title: "موفقیت ۱۰۰٪ در پیوند کلیه در ۶ ماه گذشته",
    excerpt:
      "تیم جراحی پیوند اعضای بیمارستان شفای نوین با انجام ۲۴ پیوند کلیه موفق، رکوردی جدید رقم زد.",
    content: "متن کامل خبر...",
    category: "news",
    image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80",
    author: "روابط عمومی",
    featured: true,
    date: "۱۴۰۳/۰۶/۱۵",
    readTime: "۳ دقیقه",
  },
  {
    slug: "healthy-heart-tips",
    title: "۵ عادت روزانه برای حفظ سلامت قلب شما",
    excerpt:
      "قلب موتور زندگی است. با رعایت این ۵ عادت ساده روزانه می‌توانید سلامت قلب خود را برای دهه‌ها حفظ کنید.",
    content: "متن کامل خبر...",
    category: "article",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    author: "دکتر محمودی",
    featured: false,
    date: "۱۴۰۳/۰۶/۰۸",
    readTime: "۴ دقیقه",
  },
];

export const FAQS = [
  {
    category: "نوبت‌دهی",
    question: "چگونه می‌توانم نوبت آنلاین بگیرم؟",
    answer:
      "برای دریافت نوبت آنلاین کافی است روی دکمه «دریافت نوبت» در بالای سایت کلیک کنید، پزشک و بخش مورد نظر را انتخاب نموده و پس از انتخاب تاریخ و ساعت مناسب، فرم را تکمیل کنید. پس از تکمیل فرم، نوبت شما بلافاصله تأیید و از طریق پیامک برای شما ارسال خواهد شد. در صورت نیاز به تغییر یا لغو نوبت، می‌توانید حداقل ۲۴ ساعت قبل از موعد از طریق پنل کاربری خود این کار را انجام دهید.",
  },
  {
    category: "نوبت‌دهی",
    question: "آیا برای ویزیت اورژانس نیاز به نوبت قبلی دارم؟",
    answer:
      "خیر، بخش اورژانس بیمارستان شفای نوین به صورت ۲۴ ساعته فعال است و نیازی به نوبت قبلی ندارد. در صورت بروز شرایط اورژانسی، کافی است به بیمارستان مراجعه کنید یا با شماره ۱۹۰ تماس بگیرید تا آمبولانس اعزام شود. کادر اورژانس آماده پذیرش و درمان فوری بیماران در هر ساعت از شبانه‌روز است.",
  },
  {
    category: "نوبت‌دهی",
    question: "آیا می‌توانم نوبت خود را لغو یا تغییر دهم؟",
    answer:
      "بله، امکان لغو یا تغییر نوبت تا ۲۴ ساعت قبل از موعد وجود دارد. برای این کار وارد پنل کاربری خود شوید، به بخش «نوبت‌های من» مراجعه کنید و نوبت مورد نظر را ویرایش یا لغو کنید. در صورت لغو کمتر از ۲۴ ساعت قبل، ممکن است هزینه رزرو قابل بازگشت نباشد. این سیاست به ما کمک می‌کند تا نوبت‌ها به بیماران دیگر اختصاص یابد.",
  },
  {
    category: "خدمات",
    question: "چه پکیج‌های چکاپ سلامت در بیمارستان ارائه می‌شود؟",
    answer:
      "بیمارستان شفای نوین چهار پکیج چکاپ متنوع ارائه می‌دهد: چکاپ پایه (۸۹۰ هزار تومان)، چکاپ جامع تخصصی (۲.۴۹ میلیون تومان)، چکاپ VIP پریمیوم (۵.۸۹ میلیون تومان) و پکیج تخصصی قلب (۳.۲۹ میلیون تومان). همه پکیج‌ها شامل مشاوره با متخصص، آزمایش‌های لازم و ارائه گزارش کامل سلامت هستند. برای اطلاعات بیشتر به بخش «پکیج‌های درمانی» مراجعه کنید.",
  },
  {
    category: "خدمات",
    question: "آیا بیمارستان خدمات بیمه‌ای ارائه می‌دهد؟",
    answer:
      "بله، بیمارستان شفای نوین با تمامی بیمه‌های پایه (تأمین اجتماعی، سلامت، نیروهای مسلح، ایران و کشاورزی) و اکثر بیمه‌های تکمیلی قرارداد دارد. برای اطمینان از پوشش خدمات شما توسط بیمه تکمیلی، می‌توانید پیش از مراجعه با کارشناسان بیمه تماس بگیرید یا لیست بیمه‌های همکار را در بخش «اطلاعات بیمه‌ای» سایت بررسی کنید.",
  },
  {
    category: "خدمات",
    question: "آیا امکان بستری شدن در بیمارستان وجود دارد؟",
    answer:
      "بله، بیمارستان دارای ۳۵۰ تخت استاندارد، ۶۰ تخت VIP و ۲۴ تخت مراقبت ویژه (ICU/CCU) است. بستری شدن بر اساس تجویز پزشک متخصص و در دسترس بودن تخت انجام می‌شود. برای رزرو تخت می‌توانید با شماره پذیرش تماس بگیرید یا از طریق پنل کاربری درخواست دهید. اتاق‌های VIP شامل خدمات هتلی، همراه‌پذیری کامل و غذای رژیمی اختصاصی هستند.",
  },
  {
    category: "پرونده پزشکی",
    question: "چگونه به سوابق پزشکی خود دسترسی داشته باشم؟",
    answer:
      "تمام بیماران شفای نوین پس از اولین مراجعه، پرونده دیجیتال سلامت دریافت می‌کنند. با ورود به پنل کاربری می‌توانید به سوابق کامل خود شامل: نتایج آزمایش‌ها، گزارش تصویربرداری، نسخه‌ها، گزارش جراحی، نوبت‌های قبلی و فاکتورها دسترسی داشته باشید. امکان بارگذاری مدارک پزشکی خارج از بیمارستان نیز برای داشتن یک پرونده جامع وجود دارد.",
  },
  {
    category: "پرونده پزشکی",
    question: "آیا می‌توانم مدارک پزشکی قبلی خود را بارگذاری کنم؟",
    answer:
      "بله، در پنل کاربری بخشی به نام «مدارک پزشکی» وجود دارد که می‌توانید تصاویر آزمایش‌ها، نسخه‌ها، گزارش تصویربرداری و سایر مدارک پزشکی خود را در آن بارگذاری کنید. این مدارک به صورت امن و رمزنگاری شده ذخیره شده و تنها پزشک معالج شما به آن‌ها دسترسی خواهد داشت. این ویژگی به پزشک کمک می‌کند تا سابقه کامل سلامت شما را در نظر بگیرد.",
  },
  {
    category: "تماس",
    question: "ساعات کاری بیمارستان چگونه است؟",
    answer:
      "بیمارستان شفای نوین به صورت ۲۴ ساعته فعال است. بخش اورژانس، داروخانه، آزمایشگاه و تصویربرداری به صورت شبانه‌روزی خدمات ارائه می‌کنند. کلینیک‌های سرپایی و پذیرش از ساعت ۶ صبح تا ۱۲ شب در دسترس هستند. مطب پزشکان متخصص بر اساس برنامه هفتگی هر پزشک که در صفحه اختصاصی هر پزشک قابل مشاهده است، فعال می‌باشند.",
  },
  {
    category: "تماس",
    question: "چگونه می‌توانم با پزشک معالجم ارتباط برقرار کنم؟",
    answer:
      "بیماران بستری شده می‌توانند از طریق پنل کاربری خود پیام به پزشک معالج ارسال کنند. پزشکان معمولاً در پایان شیفت خود پاسخ می‌دهند. در موارد فوری لطفاً با شماره کلینیک تماس بگیرید. برای مشاوره‌های غیراورژانسی از طریق پیام رسان اختصاصی پنل کاربری اقدام کنید. لطفاً توجه داشته باشید که این سرویس جایگزین ویزیت حضوری نیست.",
  },
];

export const TESTIMONIALS = [
  {
    name: "محمد رضایی",
    role: "بیمار بخش قلب",
    text: "بعد از جراحی قلب در بیمارستان شفای نوین، واقعاً متولد شدم. کادر پزشکی فوق‌العاده و مراقبت پرستاری بی‌نقص. به همه دوستانم این بیمارستان را پیشنهاد می‌کنم.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    procedure: "جراحی بای‌پس قلب",
  },
  {
    name: "زهرا محمدی",
    role: "مادر نوزاد NICU",
    text: "بخش نوزادان نارس واقعاً معجزه کرد. دختر من با وزن ۹۰۰ گرم به دنیا آمد و الان کاملاً سالم است. کادر NICU خانم‌های مهربان و حرفه‌ای هستند.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    procedure: "مراقبت نوزاد نارس",
  },
  {
    name: "علی کریمی",
    role: "جراحی تعویض مفصل زانو",
    text: "دکتر رضایی واقعاً هنر کرد. سه هفته بعد از جراحی تعویض مفصل زانو، بدون درد راه می‌روم. امکانات بیمارستان در سطح جهانی است.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    procedure: "تعویض مفصل زانو",
  },
];

// New: Patient journey steps
export const PATIENT_JOURNEY = [
  {
    step: 1,
    title: "نوبت‌دهی آنلاین",
    description:
      "به سادگی از طریق سایت یا اپلیکیشن، نوبت خود را رزرو کنید. در کمتر از ۲ دقیقه.",
    icon: "calendar",
    duration: "۲ دقیقه",
  },
  {
    step: 2,
    title: "ویزیت تخصصی",
    description:
      "توسط بهترین پزشکان متخصص کشور ویزیت شوید. پرونده دیجیتال شما تشکیل می‌شود.",
    icon: "stethoscope",
    duration: "۳۰ دقیقه",
  },
  {
    step: 3,
    title: "تشخیص و آزمایش",
    description:
      "در صورت نیاز، آزمایش‌های تخصصی و تصویربرداری در همان روز انجام می‌شود.",
    icon: "scan",
    duration: "همان روز",
  },
  {
    step: 4,
    title: "درمان و پیگیری",
    description:
      "درمان تخصصی با جدیدترین روش‌ها و پیگیری منظم روند بهبودی شما.",
    icon: "heart",
    duration: "تا بهبود کامل",
  },
];

// New: Awards and certifications
export const AWARDS = [
  { name: "ISO 9001:2015", description: "مدیریت کیفیت", year: "۲۰۲۳" },
  { name: "JCI Accreditation", description: "اعتبار بین‌المللی", year: "۲۰۲۲" },
  { name: "وزارت بهداشت", description: "تأییدیه بیمارستانی", year: "۲۰۲۴" },
  { name: "Green Hospital", description: "بیمارستان سبز", year: "۲۰۲۳" },
];

// New: Insurance partners
export const PARTNERS = [
  "تأمین اجتماعی",
  "بیمه سلامت",
  "نیروهای مسلح",
  "بیمه ایران",
  "بیمه کشاورزی",
  "بیمه پاسارگاد",
  "بیمه آسیا",
  "بیمه البرز",
];

// New: Case studies / Success stories
export const CASE_STUDIES = [
  {
    title: "جراحی موفق قلب نوزاد ۶ ماهه",
    summary:
      "تیم جراحی قلب کودکان شفای نوین با انجام جراحی پیچیده تعویض دریچه قلب روی نوزاد ۶ ماهه با وزن ۵ کیلوگرم، جان این کودک را نجات داد.",
    department: "قلب و عروق",
    date: "۱۴۰۳/۰۵",
    image: "https://images.unsplash.com/photo-1559757175-08fda86d0b1d?w=800&q=80",
    doctor: "دکتر علی محمودی",
    duration: "۸ ساعت جراحی",
    outcome: "ترخیص پس از ۱۰ روز",
  },
  {
    title: "پیوند کلیه موفق به بیمار ۷۰ ساله",
    summary:
      "اولین پیوند کلیه موفق در بیمار بالای ۷۰ سال در کشور، توسط تیم ارولوژی شفای نوین انجام شد.",
    department: "جراحی",
    date: "۱۴۰۳/۰۴",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    doctor: "دکتر امیر نعمتی",
    duration: "۵ ساعت جراحی",
    outcome: "ترخیص پس از ۷ روز",
  },
  {
    title: "جراحی تومور مغزی پیچیده با بیداری بیمار",
    summary:
      "جراحی تومور مغزی در حالی که بیمار بیدار بود و صحبت می‌کرد، برای اولین بار در کشور در شفای نوین انجام شد.",
    department: "مغز و اعصاب",
    date: "۱۴۰۳/۰۳",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    doctor: "دکتر سارا احمدی",
    duration: "۱۰ ساعت جراحی",
    outcome: "ترخیص پس از ۵ روز",
  },
];
