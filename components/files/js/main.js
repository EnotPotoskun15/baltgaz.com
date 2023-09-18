Vue.component('product-parts', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="row">    
        <div class="col-sm-6 col-md-4 col-lg-3 parts" v-for="(part, index) in parts">
            <div class="part">
                <img :src="part.partImage" alt="" style="width:100%;">
                <h5>{{ part.partName[selectlang] }}</h5>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            parts: [
                {
                    partName: ["Блок управления JSG-W002",
                    "Control unit JSG-W002"],
                    partImage: "components/images/products/4510t-grey.png" 
                },
                {
                    partName: ["Теплообменник",
                    "Heat exchanger JSG-W002"],
                    partImage: "components/images/products/4510t-grey.png"
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png" 
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png"
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png" 
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png"
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png" 
                },
                {
                    partName: ["Название запчасти",
                    "Name of spare part"],
                    partImage: "components/images/products/4510t-grey.png"
                }
            ]
        }
    }
})


Vue.component('product-40', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="flex product">
                    <div class="col-md-5">
                        <img :src="boilerImage" alt="">
                    </div>
                    <div class="col-md-7 product-text">
                        <h5>{{ boilerName }}</h5>
                        <div class="productDiscription">
                            <p>{{ boilerDescription[selectlang].descriptionText }}</p>
                            <ul>
                                <li v-for="(list, index) in boilerDescription[selectlang].descriptionList"
                                >{{ list }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            boilerName: "BaltGaz 40кВт",
            boilerImage: "components/images/products/baltgaz-boiler.png",
            boilerDescription: [
                {
                    descriptionText: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все образ вопроса даль которой.",
                    descriptionList: ["Далеко-далеко за словесными горами.",
                                    "Алфавит лучше не lorem.",
                                    "Щеке грамматики переулка имеет.",
                                    "Которое города даль за!",
                                    "Реторический запятой от всех однажды!",
                                    "Всемогущая единственное грамматики большого." ] 
                },
                {
                    descriptionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate commodi praesentium totam tenetur delectus!",
                    descriptionList: ["Lorem ipsum dolor sit amet.",
                                    "Alias numquam fugiat quibusdam vitae.",
                                    "Quia tempore nostrum neque atque.",
                                    "Est ducimus fugit doloremque natus.",
                                    "Officia cum sed culpa earum!",
                                    "Ab voluptatem voluptas soluta maxime." ]
                }
            ]
        }
    }
})


Vue.component('product-32', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="flex product">
                    <div class="col-md-5">
                        <img :src="boilerImage" alt="">
                    </div>
                    <div class="col-md-7 product-text">
                        <h5>{{ boilerName }}</h5>
                        <div class="productDiscription">
                            <p>{{ boilerDescription[selectlang].descriptionText }}</p>
                            <ul>
                                <li v-for="(list, index) in boilerDescription[selectlang].descriptionList"
                                >{{ list }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            boilerName: "BaltGaz 32кВт",
            boilerImage: "components/images/products/baltgaz-boiler.png",
            boilerDescription: [
                {
                    descriptionText: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все образ вопроса даль которой.",
                    descriptionList: ["Далеко-далеко за словесными горами.",
                                    "Алфавит лучше не lorem.",
                                    "Щеке грамматики переулка имеет.",
                                    "Которое города даль за!",
                                    "Реторический запятой от всех однажды!",
                                    "Всемогущая единственное грамматики большого." ] 
                },
                {
                    descriptionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate commodi praesentium totam tenetur delectus!",
                    descriptionList: ["Lorem ipsum dolor sit amet.",
                                    "Alias numquam fugiat quibusdam vitae.",
                                    "Quia tempore nostrum neque atque.",
                                    "Est ducimus fugit doloremque natus.",
                                    "Officia cum sed culpa earum!",
                                    "Ab voluptatem voluptas soluta maxime." ]
                }
            ]
        }
    }
})


Vue.component('product-24', {
    props: {
        selectlang: {
            type: Number,
            required: true
        }
    },
    template: `
    <div class="flex product">
                    <div class="col-md-5">
                        <img :src="boilerImage" alt="">
                    </div>
                    <div class="col-md-7 product-text">
                        <h5>{{ boilerName }}</h5>
                        <div class="productDiscription">
                            <p>{{ boilerDescription[selectlang].descriptionText }}</p>
                            <ul>
                                <li v-for="(list, index) in boilerDescription[selectlang].descriptionList"
                                >{{ list }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            boilerName: "BaltGaz 24кВт",
            boilerImage: "components/images/products/baltgaz-boiler.png",
            boilerDescription: [
                {
                    descriptionText: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все образ вопроса даль которой.",
                    descriptionList: ["Далеко-далеко за словесными горами.",
                                    "Алфавит лучше не lorem.",
                                    "Щеке грамматики переулка имеет.",
                                    "Которое города даль за!",
                                    "Реторический запятой от всех однажды!",
                                    "Всемогущая единственное грамматики большого." ] 
                },
                {
                    descriptionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate commodi praesentium totam tenetur delectus!",
                    descriptionList: ["Lorem ipsum dolor sit amet.",
                                    "Alias numquam fugiat quibusdam vitae.",
                                    "Quia tempore nostrum neque atque.",
                                    "Est ducimus fugit doloremque natus.",
                                    "Officia cum sed culpa earum!",
                                    "Ab voluptatem voluptas soluta maxime." ]
                }
            ]
        }
    }
})


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
        <div class="col-md-2 productColor">
            <div><h6>{{ waterHeaterDescription[selectlang].descriptionColor }}</h6></div>
            <div class="color"
            v-for="(color, index) in waterHeaterVariants"
            :style="{ background:color.variantColor }"
            @mouseover="selectedColor(index)"></div>
        </div>
        <div class="col-md-5 product-text">
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
                    descriptionText: "Водонагреватель BALTGAZ 4512Т предназначен для нагрева 24 литра воды в минуту. Отличительной особенностью является лаконичный, классический дизайн облицовки, закрытая камера сгорания, латунный водогазовой узел со встроенным сбросным клапаном. Водонагреватель BALTGAZ 4512T прост и удобен в обслуживании, компактен. Это достигается благодаря совмещенному корпусу с камерой сгорания, который так же обеспечивает удобство проведения монтажа и обслуживания.",
                    descriptionList: ["все современные системы безопасности",
                                    "автоматический розжиг",
                                    "автоматическое отключение подачи газа при погасании горелки",
                                    "латунный водяной узел",
                                    "предохранительный клапан",
                                    "информационный дисплей",
                                    "вентилятор с трубкой Вентури, обеспечивающий «прямую» связь с прессостатом",
                                    "медный теплообменник без олова и свинца",
                                    "защита от попадания холодного воздуха",
                                    "кабель подключения с вилкой и устройством защитного отключения" ]  
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
                    variantImage: "components/images/products/4510t-black.png"
                },
                {
                    variantColor: "gray",
                    variantImage: "components/images/products/4510t-grey.png"
                },
                {
                    variantColor: "white",
                    variantImage: "components/images/products/4510t-white.png"
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
        <div class="col-md-2 productColor">
            <div><h6>{{ waterHeaterDescription[selectlang].descriptionColor }}</h6></div>
            <div class="color"
            v-for="(color, index) in waterHeaterVariants"
            :style="{ background:color.variantColor }"
            @mouseover="selectedColor(index)"></div>
        </div>
        <div class="col-md-5 product-text">
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
                    descriptionText: "Водонагреватель BALTGAZ 4510Т предназначен для нагрева 24 литра воды в минуту. Отличительной особенностью является лаконичный, классический дизайн облицовки, закрытая камера сгорания, латунный водогазовой узел со встроенным сбросным клапаном. Водонагреватель BALTGAZ 4510T прост и удобен в обслуживании, компактен. Это достигается благодаря совмещенному корпусу с камерой сгорания, который так же обеспечивает удобство проведения монтажа и обслуживания.",
                    descriptionList: ["все современные системы безопасности",
                                    "автоматический розжиг",
                                    "автоматическое отключение подачи газа при погасании горелки",
                                    "латунный водяной узел",
                                    "предохранительный клапан",
                                    "информационный дисплей",
                                    "вентилятор с трубкой Вентури, обеспечивающий «прямую» связь с прессостатом",
                                    "медный теплообменник без олова и свинца",
                                    "защита от попадания холодного воздуха",
                                    "кабель подключения с вилкой и устройством защитного отключения" ] 
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
                    variantImage: "components/images/products/4510t-black.png"
                },
                {
                    variantColor: "gray",
                    variantImage: "components/images/products/4510t-grey.png"
                },
                {
                    variantColor: "white",
                    variantImage: "components/images/products/4510t-white.png"
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
            },
            {
                langCode: "GE",
                langText: "ქართული",
                langImage: "components/images/flags/ENG.png",
                langHeader: "სათაური",
                langTabs: ["გაზის წყლის გამაცხელებლები", "გაზის ქვაბები", "Სათადარიგო ნაწილების"]
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