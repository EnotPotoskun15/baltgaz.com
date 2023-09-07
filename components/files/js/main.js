Vue.component('product-4512t', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="flex product">
        <div class="col-md-5">
            <img :src="image" alt="">
        </div>
        <div class="col-md-3 productColor">
            <h6>{{ waterHeaterDescription[selectlang].descriptionColor }}</h6>
            <div class="color"
            v-for="(color, index) in waterHeaterVariants"
            :style="{ background:color.variantColor }"
            @mouseover="selectedColor(index)"></div>
        </div>
        <div class="col-md-4 product-text">
            <h5>{{ waterHeaterName }}</h5>
            <div class="productDiscription">
                <p>{{ waterHeaterDescription[selectlang].descriptionText }}</p>
                <ul>
                    <li v-for="(list, index) in waterHeaterDescription[selectlang].descriptionList"
                    >{{ list }}</li>
                </ul>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            waterHeaterName: "BaltGaz 4512T",
            waterHeaterDescription: [
                {
                    descriptionColor: "Цвета:",
                    descriptionText: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все образ вопроса даль которой.",
                    descriptionList: ["Далеко-далеко за словесными горами.",
                                    "Алфавит лучше не lorem.",
                                    "Щеке грамматики переулка имеет.",
                                    "Которое города даль за!",
                                    "Реторический запятой от всех однажды!",
                                    "Всемогущая единственное грамматики большого." ] 
                },
                {
                    descriptionColor: "Colors:",
                    descriptionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate commodi praesentium totam tenetur delectus!",
                    descriptionList: ["Lorem ipsum dolor sit amet.",
                                    "Alias numquam fugiat quibusdam vitae.",
                                    "Quia tempore nostrum neque atque.",
                                    "Est ducimus fugit doloremque natus.",
                                    "Officia cum sed culpa earum!",
                                    "Ab voluptatem voluptas soluta maxime." ]
                }
            ],
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
            selectedVariant: 0
        }
    },
    methods: {
        selectedColor(index) {
            return this.selectedVariant = index;            
        }
    },
    computed: {
        image() {
            return this.waterHeaterVariants[this.selectedVariant].variantImage;
        }
    }
})


Vue.component('product-4510t', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="flex product">
        <div class="col-md-5">
            <img :src="image" alt="">
        </div>
        <div class="col-md-3 productColor">
            <h6>{{ waterHeaterDescription[selectlang].descriptionColor }}</h6>
            <div class="color"
            v-for="(color, index) in waterHeaterVariants"
            :style="{ background:color.variantColor }"
            @mouseover="selectedColor(index)"></div>
        </div>
        <div class="col-md-4 product-text">
            <h5>{{ waterHeaterName }}</h5>
            <div class="productDiscription">
                <p>{{ waterHeaterDescription[selectlang].descriptionText }}</p>
                <ul>
                    <li v-for="(list, index) in waterHeaterDescription[selectlang].descriptionList"
                    >{{ list }}</li>
                </ul>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            waterHeaterName: "BaltGaz 4510T",
            waterHeaterDescription: [
                {
                    descriptionColor: "Цвета:",
                    descriptionText: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все образ вопроса даль которой.",
                    descriptionList: ["Далеко-далеко за словесными горами.",
                                    "Алфавит лучше не lorem.",
                                    "Щеке грамматики переулка имеет.",
                                    "Которое города даль за!",
                                    "Реторический запятой от всех однажды!",
                                    "Всемогущая единственное грамматики большого." ] 
                },
                {
                    descriptionColor: "Colors:",
                    descriptionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate commodi praesentium totam tenetur delectus!",
                    descriptionList: ["Lorem ipsum dolor sit amet.",
                                    "Alias numquam fugiat quibusdam vitae.",
                                    "Quia tempore nostrum neque atque.",
                                    "Est ducimus fugit doloremque natus.",
                                    "Officia cum sed culpa earum!",
                                    "Ab voluptatem voluptas soluta maxime." ]
                }
            ],
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
            selectedVariant: 0
        }
    },
    methods: {
        selectedColor(index) {
            return this.selectedVariant = index;            
        }
    },
    computed: {
        image() {
            return this.waterHeaterVariants[this.selectedVariant].variantImage;
        }
    }
})


var app = new Vue ({
    el: "#ep-app",
    data: {
        langs: [
            {
                langCode: "RU",
                langText: "Русский",
                langImage: "components/images/flags/RU.png",
                langHeader: "Заголовок",
                langTabs: ["Водонагреватели", "Котлы", "Запасные части"]
            },
            {
                langCode: "ENG",
                langText: "English",
                langImage: "components/images/flags/ENG.png",
                langHeader: "Header",
                langTabs: ["Gas water heaters", "Gas boilers", "Spare parts"]
            }
        ],
        selectlang: 0,
        selectedTab: 0,
    },
    methods: {
        changeLang(index) {
            return this.selectlang = index;
        },
    },
    computed: {
        
    }
})