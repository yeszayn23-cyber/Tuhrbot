// قاعدة بيانات التطبيق (تخزين محلي مؤقت)
const DEV_ID = "8928289703"; // هذا هو الايدي الخاص بك

let appData = {
    isInitialized: false, // هل تم إدخال كلمة السر لأول مرة؟
    password: null,
    theme: 'dark', // 'light' أو 'dark'
    language: 'ar', // 'ar' أو 'en'
    
    cycleInfo: {
        periodDays: 0,
        cycleLength: 0,
        lastPeriodDate: null
    },
    
    currentUser: {
        // هذه البيانات يجب أن تأتي من تيليجرام API
        telegramId: "8928289703", 
        username: "المبرجة",
        bio: "طُهر - تطبيق العبادة والعافية",
        avatarUrl: "https://via.placeholder.com/150" // ضع هنا رابط صورتك الحقيقية لاحقاً
    },
    
    libraryBooks: [
        { id: 1, title: "فقه الطهارة الميسر", isFavorite: false, bookmark: 0 },
        { id: 2, title: "حصن المسلمة", isFavorite: true, bookmark: 15 },
        { id: 3, title: "شرح عمدة الأحكام", isFavorite: false, bookmark: 0 }
    ],
    
    articles: [
        { id: 1, title: "أهمية الطهارة في الإسلام", content: "محتوى المقال هنا..." },
        { id: 2, title: "كيفية الغسل الصحيح", content: "محتوى المقال هنا..." }
    ],
    
    audios: [
        { id: 1, title: "سورة البقرة - مشاري العفاسي", url: "#" },
        { id: 2, title: "أذكار الصباح", url: "#" }
    ]
};

// دوال التعامل مع البيانات (محاكاة للخلفية)
const dataManager = {
    savePassword: (pass) => {
        appData.password = pass;
        appData.isInitialized = true;
        localStorage.setItem('tuhr_app_data', JSON.stringify(appData));
    },
    load: () => {
        const saved = localStorage.getItem('tuhr_app_data');
        if (saved) appData = JSON.parse(saved);
        return appData;
    },
    saveCycleInfo: (days, length, date) => {
        appData.cycleInfo = { periodDays: days, cycleLength: length, lastPeriodDate: date };
        localStorage
