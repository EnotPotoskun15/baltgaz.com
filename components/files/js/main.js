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
                    partName: ["Блок управления",
                    "Control unit"],
                    partImage: "components/images/products/spare_parts/31294.png" 
                },
                {
                    partName: ["Теплообменник",
                    "Heat exchanger"],
                    partImage: "components/images/products/spare_parts/31283.png"
                },
                {
                    partName: ["Водогазовый узел",
                    "Gas water valve"],
                    partImage: "components/images/products/spare_parts/25886.png" 
                },
                {
                    partName: ["Вентилятор",
                    "Fan"],
                    partImage: "components/images/products/spare_parts/31291.png"
                },
                {
                    partName: ["Свечи розжига и ионизации",
                    "Ingnition and ionization electrode"],
                    partImage: "components/images/products/spare_parts/31193.png" 
                },
                {
                    partName: ["Дисплей",
                    "Display"],
                    partImage: "components/images/products/spare_parts/25892.jpg"
                },
                {
                    partName: ["Ручка",
                    "Knob"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
                },
                {
                    partName: ["Датчик температуры",
                    "Temperature sensor"],
                    partImage: "components/images/products/spare_parts/30666.jpg"
                },
                {
                    partName: ["Набор прокладок",
                    "Set of seals"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
                },
                {
                    partName: ["Плата управления котлом",
                    "Control unit for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Теплообменник котла 2,3 кг",
                    "Heat exchanger for boiler 2.3KG"],
                    partImage: "components/images/products/spare_parts/30679.jpg" 
                },
                {
                    partName: ["Теплообменник котла 3,2 кг",
                    "Heat exchanger for boiler 3.2KG"],
                    partImage: "components/images/products/spare_parts/30679.jpg"
                },
                {
                    partName: ["Теплообменник котла 4,4 кг",
                    "Heat exchanger for boiler 4.4KG"],
                    partImage: "components/images/products/spare_parts/30679.jpg" 
                },
                {
                    partName: ["Расширительный бак",
                    "Expansion vessel for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Расширительный бак",
                    "Expansion vessel for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
                },
                {
                    partName: ["Вторичный теплообменник с трёхходовым клапаном",
                    "Plate heat exchanger for boiler / 3-way valve motor for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Фильтр санитарный",
                    "Sanitary filter for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Свечи розжига и ионизации",
                    "Ignition and ionization electrode for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
                },
                {
                    partName: ["Трубка входа воды",
                    "Water inlet pipe for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Трубка выхода воды",
                    "Water outlet pipe for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
                },
                {
                    partName: ["Датчик температуры погружной",
                    "DHW NTC sensor for boiler"],
                    partImage: "components/images/products/spare_parts/30291.png"
                },
                {
                    partName: ["Датчик температуры накладной",
                    "CH NTC sensor for boiler"],
                    partImage: "components/images/products/spare_parts/30289.jpg" 
                },
                {
                    partName: ["Манометр",
                    "Pressure gauge for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png"
                },
                {
                    partName: ["Дисплей",
                    "Display for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png" 
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
                    descriptionText: "Котел отопительный газовый настенный двухконтурный, с принудительной циркуляцией теплоносителя и закрытой камерой сгорания, мощностью от 34 до 40 кВт.",
                    descriptionList: ["технология One Piece Flow – «один котел - один мастер»",
                                    "экологически чистый медный теплообменник",
                                    "встроенный часовой и недельный программатор",
                                    "режим «ЕCO» предназначен для экономии расхода газа путем управления работой котла",
                                    "функция антизамерзания – это встроенная система защиты от замерзания котла",
                                    "режим «Теплые полы» для оптимального регулирования температуры теплоносителя и исключения его перегрева в системе",
                                    "возможность работы котла на природном (G20) или сжиженном газе (G30)",
                                    "компактные размеры 740х510х313 мм",
                                    "высокий КПД до 92,5%"]  
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
                    descriptionText: "Котел отопительный газовый настенный двухконтурный, с принудительной циркуляцией теплоносителя и закрытой камерой сгорания, мощностью от 26 до 32 кВт.",
                    descriptionList: ["технология One Piece Flow – «один котел - один мастер»",
                                    "экологически чистый медный теплообменник",
                                    "встроенный часовой и недельный программатор",
                                    "режим «ЕCO» предназначен для экономии расхода газа путем управления работой котла",
                                    "функция антизамерзания – это встроенная система защиты от замерзания котла",
                                    "режим «Теплые полы» для оптимального регулирования температуры теплоносителя и исключения его перегрева в системе",
                                    "возможность работы котла на природном (G20) или сжиженном газе (G30)",
                                    "компактные размеры 740х410х313 мм",
                                    "высокий КПД до 92,5%"] 
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
                    descriptionText: "Котел отопительный газовый настенный двухконтурный, с принудительной циркуляцией теплоносителя и закрытой камерой сгорания, мощностью от 10 до 24 кВт.",
                    descriptionList: ["технология One Piece Flow – «один котел - один мастер»",
                                    "экологически чистый медный теплообменник",
                                    "встроенный часовой и недельный программатор",
                                    "режим «ЕCO» предназначен для экономии расхода газа путем управления работой котла",
                                    "функция антизамерзания – это встроенная система защиты от замерзания котла",
                                    "режим «Теплые полы» для оптимального регулирования температуры теплоносителя и исключения его перегрева в системе",
                                    "возможность работы котла на природном (G20) или сжиженном газе (G30)",
                                    "компактные размеры 700х410х252 мм",
                                    "высокий КПД до 92,5%"] 
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
    <div class="row product">
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
    <div class="row product">
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
                langHeader: "Газовое оборудование от производителя",
                langTabs: ["Водонагреватели", "Котлы", "Запасные части"]
            },
            {
                langCode: "ENG",
                langText: "English",
                langImage: "components/images/flags/ENG.png",
                langHeader: "Gas equipment from the manufacturer",
                langTabs: ["Gas water heaters", "Gas boilers", "Spare parts"]
            },
            {
                langCode: "GE",
                langText: "ქართული",
                langImage: "components/images/flags/GE.png",
                langHeader: "სათაური",
                langTabs: ["გაზის წყლის გამაცხელებლები", "გაზის ქვაბები", "Სათადარიგო ნაწილების"]
            },
            {
                langCode: "AZ",
                langText: "Azərbaycan",
                langImage: "components/images/flags/AZ.png",
                langHeader: "სათაური",
                langTabs: ["გაზის წყლის გამაცხელებლები", "გაზის ქვაბები", "Სათადარიგო ნაწილების"]
            },
            {
                langCode: "HY",
                langText: "հայերեն",
                langImage: "components/images/flags/HY.png",
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