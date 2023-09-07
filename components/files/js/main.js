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
        waterHeaters: [
            {
                waterHeaterName: "BaltGaz 4510T",
                waterHeaterVariants: [
                    {
                        variantColor: "black",
                        variantImage: "components/images/products/4510t-black.jpeg"
                    },
                    {
                        variantColor: "gray",
                        variantImage: "components/images/products/4510t-grey.jpeg"
                    },
                    {
                        variantColor: "white",
                        variantImage: "components/images/products/4510t-white.jpeg"
                    }
                ],

            }
        ],
        boilers: [

        ],
        selectLang: 0,
        selectedTab: 0,
        selectedVariant: 0,
        selectedProduct: 0
    },
    methods: {
        changeLang(index) {
            return this.selectLang = index;
        },
        selectedColor(index) {
            return this.selectedVariant = index;            
         },
         changeProduct(index) {
            return this.selectedProduct = index;
         }
    },
    computed: {
        image() {
            return this.waterHeaters[this.selectedProduct].waterHeaterVariants[this.selectedVariant].variantImage;
        }
    }
})