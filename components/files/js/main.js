var app = new Vue ({
    el: "#ep-app",
    data: {
        langs: [
            {
                langCode: "RU",
                langText: "Русский",
                langImage: "components/images/flags/RU.png",
                langHeader: "Заголовок",
                langTabs: ["Водонагреватели", "Котлы", "Запасные части"],
                langColor: "Цвета:"
            },
            {
                langCode: "ENG",
                langText: "English",
                langImage: "components/images/flags/ENG.png",
                langHeader: "Header",
                langTabs: ["Gas water heaters", "Gas boilers", "Spare parts"],
                langColor: "Colors:"
            }
        ],
        selectLang: 0,
        selectedTab: 0
    },
    methods: {
        changeLang(index) {
            return this.selectLang = index;
        }
        
    }
})