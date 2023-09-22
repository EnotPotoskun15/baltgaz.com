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
                <div>
                    <h5>{{ part.partName[selectlang] }}</h5>
                    <p>{{ langVendorCode[selectlang] }} {{ part.partCode }}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            parts: [
                {
                    partName: ["Блок управления","Idarəetmə bloku","მართვის ბლოკი","Կառավարման բլոկ","Control unit"],
                    partImage: "components/images/products/spare_parts/31294.png",
                    partCode: 31294 
                },
                {
                    partName: ["Теплообменник","İstilik dəyişdiricisi","თბოგადამცემი","Ջերմափոխանակիչ","Heat exchanger"],
                    partImage: "components/images/products/spare_parts/31283.png",
                    partCode: 31283
                },
                {
                    partName: ["Водогазовый узел","Su-qaz qurğusu","წყალ-აირის კვანძი","Ջրագազային հանգույց","Gas water valve"],
                    partImage: "components/images/products/spare_parts/25886.png",
                    partCode: 25886 
                },
                {
                    partName: ["Вентилятор","Sərinkeş","ვენტილატორი","Օդափոխիչ","Fan"],
                    partImage: "components/images/products/spare_parts/31291.png",
                    partCode: 31291
                },
                {
                    partName: ["Свечи розжига и ионизации","Alovlama və ionizasiya şamları","ანთებისა და იონიზაციის სანთლები","Վառոցքի և իոնացման մոմեր","Ingnition and ionization electrode"],
                    partImage: "components/images/products/spare_parts/31193.png",
                    partCode: 31193 
                },
                {
                    partName: ["Дисплей","Displey","დისპლეი","Դիսփլեյ","Display"],
                    partImage: "components/images/products/spare_parts/25892.png",
                    partCode: 25892
                },
                {
                    partName: ["Ручка","Qələm","სახელური","Բռնակ","Knob"],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 35495
                },
                {
                    partName: ["Датчик температуры","Temperatur sensoru","ტემპერატურის გადამწოდი","Ջերմաստիճանի հաղորդիչ","Temperature sensor"],
                    partImage: "components/images/products/spare_parts/30666.png",
                    partCode: 30666
                },
                {
                    partName: ["Набор прокладок","Ara qatı dəsti","შუასადების ნაკრები","Միջադիրների հավաքածու","Set of seals"],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Плата управления котлом","Qazan idarəetmə lövhəsi","ქვაბით მართვის პლატა","Կաթսայի կառավարման տախտակ","Control unit for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Теплообменник котла 2,3 кг","Qazanın istilik dəyişdiricisi 2,3 kq","ქვაბის თბოგადამცემი 2.3 კგ","Կաթսայի ջերմափոխանակիչ 2,3 կգ","Heat exchanger for boiler 2.3KG"],
                    partImage: "components/images/products/spare_parts/30679.png",
                    partCode: 30679 
                },
                {
                    partName: ["Теплообменник котла 3,2 кг","Qazanın istilik dəyişdiricisi 3,2 kq","ქვაბის თბოგადამცემი 3.2 კგ","Կաթսայի ջերմափոխանակիչ 3,2 կգ","Heat exchanger for boiler 3.2KG"],
                    partImage: "components/images/products/spare_parts/30679.png",
                    partCode: 0
                },
                {
                    partName: ["Теплообменник котла 4,4 кг","Qazanın istilik dəyişdiricisi 4,4 kq","ქვაბის თბოგადამცემი 4.4 კგ","Կաթսայի ջերմափոխանակիչ 4,4 կգ","Heat exchanger for boiler 4.4KG"],
                    partImage: "components/images/products/spare_parts/30679.png",
                    partCode: 0
                },
                {
                    partName: ["Расширительный бак","Genişləndirici çən","საფართოებელი ავზი","Ընդարձակման բաք","Expansion tank for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Расширительный бак","Genişləndirici çən","საფართოებელი ავზი","Ընդարձակման բաք","Expansion tank for boiler"],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Вторичный теплообменник с трёхходовым клапаном","Üç kodlu klapanlı ikincil istilik dəyişdiricisi","მეორეული თბოგადამცემი სამსვლიანი სარქველით","Երկրորդային ջերմափոխանակիչ եռամուտք փականով","Plate heat exchanger for boiler / 3-way valve motor "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Фильтр санитарный","Sanitar filtri","სანიტარული ფილტრი","Սանիտարական ֆիլտր","Sanitary filter "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Свечи розжига и ионизации","Alovlama və ionizasiya şamları","ანთებისა და იონიზაციის სანთლები","Վառոցքի և իոնացման մոմեր","Ignition and ionization electrode "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Трубка входа воды","Su giriş borusu","წყლის შემავალი მილი","Ջրի մուտքի խողովակ","Water inlet pipe "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Трубка выхода воды","Su çıxış borusu","წყლის გამავალი მილი","Ջրի ելքի խողովակ","Water outlet pipe "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Датчик температуры погружной","Sualtı temperaturun sensoru","ტემპერატურის გადამწოდი ჩასაძირი","Ջերմաստիճանի հաղորդիչ՝ ընկղմվող","DHW NTC sensor "],
                    partImage: "components/images/products/spare_parts/30291.png",
                    partCode: 30291
                },
                {
                    partName: ["Датчик температуры накладной","Yükləmə temperaturun sensoru","ტემპერატურის გადამწოდი ზესადები","Ջերմաստիճանի հաղորդիչ՝ վերադիր","CH NTC sensor "],
                    partImage: "components/images/products/spare_parts/30289.png",
                    partCode: 30289 
                },
                {
                    partName: ["Манометр","Manometr","მანომეტრი","Մանոմետր","Pressure gauge "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                },
                {
                    partName: ["Дисплей","Displey","დისპლეი","Դիսփլեյ","Display "],
                    partImage: "components/images/products/spare_parts/nofoto.png",
                    partCode: 0
                }
            ],
            langVendorCode: ["Артикул:", "satıcı kodu:", "გამყიდველი კოდი:", "վաճառողի կոդը՝", "Vendor code:"]
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
            boilerName: "BaltGaz 40",
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
                    descriptionText: "Məcburi istilik daşıyıcısı dövriyyəsi və qapalı yanma kamerası ilə, gücü 34 - 40 kVt arasında olan divara quraşdırılmış ikikonturlu qazlı istilik qazanı",
                    descriptionList: ["One Piece Flow texnologiyası - \"bir qazan - bir usta\"",
                                    "Ekoloji cəhətdən təmiz olan mis istilik dəyişdiricisi",
                                    "Daxili saatlıq və həftəlik proqramlaşdırıcı",
                                    "\"ECO\" rejimi qazanın işini idarə etməklə qazın istifadəsinə qənaət etmək üçün nəzərdə tutulmuşdur",
                                    "Antifriz funksiyası - qazanın donmasına imkan verməyən daxildə quraşdırılmış bir sistemidir",
                                    "İstilik daşıyıcısının temperaturun optimal tənzimlənməsi, habelə sistemdə həddindən artıq istiləşmənin qarşısının alınması üçün \"İsti döşəmə\" rejimi",
                                    "Qazanın təbii (G20) və ya mayeləşdirilmiş (G30) qazda işləmək imkanı",
                                    "Kompakt ölçülər: 740x510x313 mm",
                                    "Yüksək faydalı iş əmsalı: 92.5%-ə qədər"] 
                },
                {
                    descriptionText: "კედლის ორკონტურიანი გაზის გამათბობელი ქვაბი, თბომატარებლის იძულებითი ცირკულაციით და დახურული წვის კამერით, სიმძლავრით 34-დან 40 კვტ-მდე.",
                    descriptionList: ["One Piece Flow ტექნოლოგია - \"ერთი ქვაბი - ერთი ოსტატი\"",
                                    "ეკოლოგიურად სუფთა სპილენძის თბოგადამცემი",
                                    "ჩაშენებული საათობრივი და ყოველკვირეული პროგრამატორი",
                                    "\"ЕCO\" რეჟიმი განკუთვნილია ქვაბის მუშაობის მართვის გზით აირის მოხმარების დაზოგვისთვის",
                                    "გაყინვის საწინააღმდეგო ფუნქცია - ქვაბის გაყინვისაგან დაცვის  ჩაშენებული სისტემა",
                                    "\"თბილი იატაკის\" რეჟიმი თბომატარებლის ტემპერატურის ოპტიმალური რეგულირებისთვის და სისტემაში მისი გადახურების თავიდან ასაცილებლად",
                                    "ქვაბის ბუნებრივ (G20) ან თხევად აირზე (G30) მუშაობის შესაძლებლობა",
                                    "კომპაქტური ზომები 740x510x313 მმ",
                                    "მაღალი მარგი ქმედების კოეფიციენტი 92.5%-მდე"] 
                },
                {
                    descriptionText: "Պատի վրա տեղադրվող երկկողմանի գազի կաթսա՝ ջերմակրիչի հարկադիր շրջանառությամբ և փակ այրման խցիկով ՝34-40 կՎտ հզորությամբ",
                    descriptionList: ["One Piece Flow տեխնելեգիա– «մեկ կաթսա-մեկ վարպետ»",
                                    "էկոլոգիապես մաքուր պղնձե ջերմափոխանակիչ",
                                    "ներկառուցված ժամային և շաբաթական ծրագրավորող",
                                    "«ԷԿՈ» ռեժիմը նախատեսված է կաթսայի աշխատանքի վերահսկման միջոցով գազի սպառումը խնայելու համար",
                                    "հակասառեցման գործառույթ -  կաթսայի հակասառեցման ներկառուցված համակարգ է",
                                    "«Տաք հատակ» ռեժիմը ջերմակրիչի ջերմաստիճանի օպտիմալ կարգավորման և համակրգում վերջինիս գերտաքացումից խուսափելու համար է",
                                    "կաթսան բնական (G20) կամ հեղուկ գազով (G30) շահագործելու հնարավորություն",
                                    "Կոմպակտ չափեր 740х510х313 мм",
                                    "Բարձր ՕԳԳ մինչև 92.5%"] 
                },
                {
                    descriptionText: "Wall-mounted two-circuit gas heating boiler with forced coolant circulation and closed combustion chamber, power from 34 to 40 kW",
                    descriptionList: ["One Piece Flow technology - \"one boiler - one master\"",
                                    "environmentally friendly copper heat exchanger",
                                    "built-in hourly and weekly programmer",
                                    "ECO mode - designed to optimise gas consumption by controlling boiler operation",
                                    "anti-freeze function - a built-in system prevents the boiler from freezing",
                                    "Warm Floors mode for optimal coolant temperature regulation and prevention of its overheating in the system",
                                    "ability to work on natural gas (G20) or liquefied gas (G30)",
                                    "compact dimensions - 740x510x313 mm",
                                    "high efficiency up to 92.5%"] 
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
            boilerName: "BaltGaz 32",
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
                    descriptionText: "Məcburi istilik daşıyıcısı dövriyyəsi və qapalı yanma kamerası ilə, gücü 26 - 32 kVt arasında olan divara quraşdırılmış ikikonturlu qazlı istilik qazanı",
                    descriptionList: ["One Piece Flow texnologiyası - \"bir qazan - bir usta\"",
                                    "Ekoloji cəhətdən təmiz olan mis istilik dəyişdiricisi",
                                    "Daxili saatlıq və həftəlik proqramlaşdırıcı",
                                    "\"ECO\" rejimi qazanın işini idarə etməklə qazın istifadəsinə qənaət etmək üçün nəzərdə tutulmuşdur",
                                    "Antifriz funksiyası - qazanın donmasına imkan verməyən daxildə quraşdırılmış bir sistemidir",
                                    "İstilik daşıyıcısının temperaturun optimal tənzimlənməsi, habelə sistemdə həddindən artıq istiləşmənin qarşısının alınması üçün \"İsti döşəmə\" rejimi",
                                    "Qazanın təbii (G20) və ya mayeləşdirilmiş (G30) qazda işləmək imkanı",
                                    "Kompakt ölçülər: 740x410x313 mm",
                                    "Yüksək faydalı iş əmsalı: 92.5%-ə qədər"] 
                },
                {
                    descriptionText: "კედლის ორკონტურიანი გაზის გამათბობელი ქვაბი, თბომატარებლის იძულებითი ცირკულაციით და დახურული წვის კამერით, სიმძლავრით 26-დან 32 კვტ-მდე.",
                    descriptionList: ["One Piece Flow ტექნოლოგია - \"ერთი ქვაბი - ერთი ოსტატი\"",
                                    "ეკოლოგიურად სუფთა სპილენძის თბოგადამცემი",
                                    "ჩაშენებული საათობრივი და ყოველკვირეული პროგრამატორი",
                                    "\"ЕCO\" რეჟიმი განკუთვნილია ქვაბის მუშაობის მართვის გზით აირის მოხმარების დაზოგვისთვის",
                                    "გაყინვის საწინააღმდეგო ფუნქცია - ქვაბის გაყინვისაგან დაცვის  ჩაშენებული სისტემა",
                                    "\"თბილი იატაკის\" რეჟიმი თბომატარებლის ტემპერატურის ოპტიმალური რეგულირებისთვის და სისტემაში მისი გადახურების თავიდან ასაცილებლად",
                                    "ქვაბის ბუნებრივ (G20) ან თხევად აირზე (G30) მუშაობის შესაძლებლობა",
                                    "კომპაქტური ზომები 740x410x313 მმ",
                                    "მაღალი მარგი ქმედების კოეფიციენტი 92.5%-მდე"] 
                },
                {
                    descriptionText: "Պատի վրա տեղադրվող երկկողմանի գազի կաթսա՝ ջերմակրիչի հարկադիր շրջանառությամբ և փակ այրման խցիկով ՝26-32 կՎտ հզորությամբ",
                    descriptionList: ["One Piece Flow տեխնելեգիա– «մեկ կաթսա-մեկ վարպետ»",
                                    "էկոլոգիապես մաքուր պղնձե ջերմափոխանակիչ",
                                    "ներկառուցված ժամային և շաբաթական ծրագրավորող",
                                    "«ԷԿՈ» ռեժիմը նախատեսված է կաթսայի աշխատանքի վերահսկման միջոցով գազի սպառումը խնայելու համար",
                                    "հակասառեցման գործառույթ -  կաթսայի հակասառեցման ներկառուցված համակարգ է",
                                    "«Տաք հատակ» ռեժիմը ջերմակրիչի ջերմաստիճանի օպտիմալ կարգավորման և համակրգում վերջինիս գերտաքացումից խուսափելու համար է",
                                    "կաթսան բնական (G20) կամ հեղուկ գազով (G30) շահագործելու հնարավորություն",
                                    "Կոմպակտ չափեր 740х410х313 мм",
                                    "Բարձր ՕԳԳ մինչև 92.5%"] 
                },
                {
                    descriptionText: "Wall-mounted two-circuit gas heating boiler with forced coolant circulation and closed combustion chamber, power from 26 to 32 kW",
                    descriptionList: ["One Piece Flow technology - \"one boiler - one master\"",
                                    "environmentally friendly copper heat exchanger",
                                    "built-in hourly and weekly programmer",
                                    "ECO mode - designed to optimise gas consumption by controlling boiler operation",
                                    "anti-freeze function - a built-in system prevents the boiler from freezing",
                                    "Warm Floors mode for optimal coolant temperature regulation and prevention of its overheating in the system",
                                    "ability to work on natural gas (G20) or liquefied gas (G30)",
                                    "compact dimensions - 740x410x313 mm",
                                    "high efficiency up to 92.5%"] 
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
            boilerName: "BaltGaz 24",
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
                                    "высокий КПД до 92.5%"] 
                },
                {
                    descriptionText: "Məcburi istilik daşıyıcısı dövriyyəsi və qapalı yanma kamerası ilə, gücü 10 - 24 kVt arasında olan divara quraşdırılmış ikikonturlu qazlı istilik qazanı",
                    descriptionList: ["One Piece Flow texnologiyası - \"bir qazan - bir usta\"",
                                    "Ekoloji cəhətdən təmiz olan mis istilik dəyişdiricisi",
                                    "Daxili saatlıq və həftəlik proqramlaşdırıcı",
                                    "\"ECO\" rejimi qazanın işini idarə etməklə qazın istifadəsinə qənaət etmək üçün nəzərdə tutulmuşdur",
                                    "Antifriz funksiyası - qazanın donmasına imkan verməyən daxildə quraşdırılmış bir sistemidir",
                                    "İstilik daşıyıcısının temperaturun optimal tənzimlənməsi, habelə sistemdə həddindən artıq istiləşmənin qarşısının alınması üçün \"İsti döşəmə\" rejimi",
                                    "Qazanın təbii (G20) və ya mayeləşdirilmiş (G30) qazda işləmək imkanı",
                                    "Kompakt ölçülər: 700x410x252 mm",
                                    "Yüksək faydalı iş əmsalı: 92.5%-ə qədər"] 
                },
                {
                    descriptionText: "კედლის ორკონტურიანი გაზის გამათბობელი ქვაბი, თბომატარებლის იძულებითი ცირკულაციით და დახურული წვის კამერით, სიმძლავრით 10-დან 24 კვტ-მდე.",
                    descriptionList: ["One Piece Flow ტექნოლოგია - \"ერთი ქვაბი - ერთი ოსტატი\"",
                                    "ეკოლოგიურად სუფთა სპილენძის თბოგადამცემი",
                                    "ჩაშენებული საათობრივი და ყოველკვირეული პროგრამატორი",
                                    "\"ЕCO\" რეჟიმი განკუთვნილია ქვაბის მუშაობის მართვის გზით აირის მოხმარების დაზოგვისთვის",
                                    "გაყინვის საწინააღმდეგო ფუნქცია - ქვაბის გაყინვისაგან დაცვის  ჩაშენებული სისტემა",
                                    "\"თბილი იატაკის\" რეჟიმი თბომატარებლის ტემპერატურის ოპტიმალური რეგულირებისთვის და სისტემაში მისი გადახურების თავიდან ასაცილებლად",
                                    "ქვაბის ბუნებრივ (G20) ან თხევად აირზე (G30) მუშაობის შესაძლებლობა",
                                    "კომპაქტური ზომები 700x410x252 მმ",
                                    "მაღალი მარგი ქმედების კოეფიციენტი 92.5%-მდე"] 
                },
                {
                    descriptionText: "Պատի վրա տեղադրվող երկկողմանի գազի կաթսա՝ ջերմակրիչի հարկադիր շրջանառությամբ և փակ այրման խցիկով ՝10-24 կՎտ հզորությամբ",
                    descriptionList: ["One Piece Flow տեխնելեգիա– «մեկ կաթսա-մեկ վարպետ»",
                                    "էկոլոգիապես մաքուր պղնձե ջերմափոխանակիչ",
                                    "ներկառուցված ժամային և շաբաթական ծրագրավորող",
                                    "«ԷԿՈ» ռեժիմը նախատեսված է կաթսայի աշխատանքի վերահսկման միջոցով գազի սպառումը խնայելու համար",
                                    "հակասառեցման գործառույթ -  կաթսայի հակասառեցման ներկառուցված համակարգ է",
                                    "«Տաք հատակ» ռեժիմը ջերմակրիչի ջերմաստիճանի օպտիմալ կարգավորման և համակրգում վերջինիս գերտաքացումից խուսափելու համար է",
                                    "կաթսան բնական (G20) կամ հեղուկ գազով (G30) շահագործելու հնարավորություն",
                                    "Կոմպակտ չափեր 700х410х252 мм",
                                    "Բարձր ՕԳԳ մինչև 92.5%"] 
                },
                {
                    descriptionText: "Wall-mounted two-circuit gas heating boiler with forced coolant circulation and closed combustion chamber, power from 10 to 24 kW",
                    descriptionList: ["One Piece Flow technology - \"one boiler - one master\"",
                                    "environmentally friendly copper heat exchanger",
                                    "built-in hourly and weekly programmer",
                                    "ECO mode - designed to optimise gas consumption by controlling boiler operation",
                                    "anti-freeze function - a built-in system prevents the boiler from freezing",
                                    "Warm Floors mode for optimal coolant temperature regulation and prevention of its overheating in the system",
                                    "ability to work on natural gas (G20) or liquefied gas (G30)",
                                    "compact dimensions - 700x410x252 mm",
                                    "high efficiency up to 92.5%"] 
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
                    descriptionColor: "Rənglər:",
                    descriptionText: "“BALTGAZ 4512T” su qızdırıcısı dəqiqədə 24 litr suyu qızdırmaq üçün nəzərdə tutulub. Onun fərqli xüsusiyyəti – üzləmənin lakonik və klassik dizaynı, qapalı yanma kamerası, quraşdırılmış buraxılış klapanlı bürünc su-qaz qurğusudur. “BALTGAZ 4512T” su qızdırıcısı quruluşca sadə və rahatdır, xidməti cəhətdən yığcamdır. Bu, yanma kamerası ilə birləşdirilmiş korpus sayəsində əldə edilir, hansı ki quraşdırma və texniki xidmətin asanlığını təmin edir.",
                    descriptionList: ["Bütün müasir təhlükəsizlik sistemləri.",
                                    "Avtomatik alovlanma",
                                    "Alov söndükdə qazın verilməsinin avtomatik olaraq dayandırılması",
                                    "Bürünc su qurğusu",
                                    "Qoruyucu klapan",
                                    "Məlumat displeyi",
                                    "Təzyiq açarı ilə \"birbaşa\" əlaqəni təmin edən Venturi borusu ilə sərinkeş",
                                    "Bürünc və qurğuşun olmadan mis istilik dəyişdiricisi",
                                    "Soyuq havadan qorunma",
                                    "Fiş və qoruyucu söndürmə cihazı ilə bağlantılı kabel" ] 
                },
                {
                    descriptionColor: "ფერები:",
                    descriptionText: "BALTGAZ 4512T წყლის გამაცხელებელი განკუთვნილია წუთში 24 ლიტრი წყლის გასათბობად. განსაკუთრებულ თავისებურებას წარმოადგენს შემონაკერის ლაკონური კლასიკური დიზაინი, დახურული წვის კამერა, თითბერის წყალ-გაზის კვანძი ჩამონტაჟებული განმტვირთავი სარქველით. BALTGAZ 4512T წყლის გამაცხელებელი მარტივია და მოხერხებულია მომსახურებაში, კომპაქტური. ეს მიიღწევა წვის კამერასთან კომბინირებული კორპუსის წყალობით, რომელიც ასევე უზრუნველყოფს მონტაჟისა და მომსახურების მოხერხებულობას.",
                    descriptionList: ["ყველა თანამედროვე უსაფრთხოების სისტემები",
                                    "ავტომატური ანთება",
                                    "აირის მიწოდების ავტომატური გაშიშვა სანთურის ჩაქრობისას",
                                    "თითბერის წყლის კვანძი",
                                    "მცველი სარქველი",
                                    "საინფორმაციო დისპლეი",
                                    "ვენტილატორი ვენტურის მილით, რომელიც უზრუნველყოფს \"პირდაპირ\" კავშირს პრესოსტატთან",
                                    "სპილენძის თბოგადამცემი კალის და ტყვიის გარეშე",
                                    "დაცვა ცივი ჰაერის მოხვედრისგან",
                                    "დამაკავშირებელი კაბელი ჩანგლით და დამცავი გათიშვის მოწყობილობით" ] 
                },
                {
                    descriptionColor: "Գույները՝",
                    descriptionText: "BALTGAZ 4512T ջրատաքացուցիչը նախատեսված է րոպեում 24 լիտր ջուր տաքացնելու համար։ Հատկանշական առանձնահատկություն է հանդիսանում երեսպատման լակոնիկ դասական ձևավորումը, փակ այրման խցիկը, արույրե ջրագազային հանգույցը ներկառուցված օգնության փականով: BALTGAZ 4512T ջրատաքացուցիչը պարզ է, հեշտ սպասարկվող և կոմպակտ՝ ի շնորհիվ պատյանի՝  համակցված այրման խցիկի հետ, որը նաև ապահովում է տեղադրման և սպասարկման հարմարավետությունը:",
                    descriptionList: ["բոլոր ժամանակակից անվտանգության համակարգերը",
                                    "ավտոմատացված բռնկում",
                                    "գազի մատակարարման ավտոմատացված դադարեցում այրիչի հանգման դեպքում",
                                    "արույրե ջրային հանգույց",
                                    "անվտանգության փական",
                                    "տեղեկատվական դիսփլեյ",
                                    "ճնշման անջատիչի հետ «ուղիղ» կապ ապահովող օդափոխիչ՝ Վենտուրի խողովակով",
                                    "պղնձե ջերմափոխանակիչ առանց թիթեղի և կապարի",
                                    "պաշտպանություն սառը օդի ներթափանցումից",
                                    "միացման մալուխ խրոցով և պաշտպանական անջատման սարքով" ] 
                },
                {
                    descriptionColor: "Colors:",
                    descriptionText: "The BALTGAZ 4512T water heater is designed to heat 24 litres of water per minute. Its distinguishing features are the laconic classic design of the cladding, closed combustion chamber, brass water-gas unit with an inbuilt discharge valve. The BALTGAZ 4512T water heater is simple, easy to operate and compact. This is achieved by combining the housing with the combustion chamber, allowing for easy installation and maintenance as well.",
                    descriptionList: ["all modern safety systems",
                                    "automatic ignition",
                                    "automatic gas shut-off on burner extinguishment",
                                    "brass water unit",
                                    "safety valve",
                                    "information display",
                                    "Venturi tube fan with \"direct\" connection to the pressostat",
                                    "tin- and lead-free copper heat exchanger",
                                    "cold air protection",
                                    "connection cable with plug and safety disconnection device" ] 
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
                    descriptionColor: "Rənglər:",
                    descriptionText: "“BALTGAZ 4510T” su qızdırıcısı dəqiqədə 24 litr suyu qızdırmaq üçün nəzərdə tutulub. Onun fərqli xüsusiyyəti – üzləmənin lakonik və klassik dizaynı, qapalı yanma kamerası, quraşdırılmış buraxılış klapanlı bürünc su-qaz qurğusudur. “BALTGAZ 4510T” su qızdırıcısı quruluşca sadə və rahatdır, xidməti cəhətdən yığcamdır. Bu, yanma kamerası ilə birləşdirilmiş korpus sayəsində əldə edilir, hansı ki quraşdırma və texniki xidmətin asanlığını təmin edir.",
                    descriptionList: ["Bütün müasir təhlükəsizlik sistemləri.",
                                    "Avtomatik alovlanma",
                                    "Alov söndükdə qazın verilməsinin avtomatik olaraq dayandırılması",
                                    "Bürünc su qurğusu",
                                    "Qoruyucu klapan",
                                    "Məlumat displeyi",
                                    "Təzyiq açarı ilə \"birbaşa\" əlaqəni təmin edən Venturi borusu ilə sərinkeş",
                                    "Bürünc və qurğuşun olmadan mis istilik dəyişdiricisi",
                                    "Soyuq havadan qorunma",
                                    "Fiş və qoruyucu söndürmə cihazı ilə bağlantılı kabel" ] 
                },
                {
                    descriptionColor: "ფერები:",
                    descriptionText: "BALTGAZ 4510T წყლის გამაცხელებელი განკუთვნილია წუთში 24 ლიტრი წყლის გასათბობად. განსაკუთრებულ თავისებურებას წარმოადგენს შემონაკერის ლაკონური კლასიკური დიზაინი, დახურული წვის კამერა, თითბერის წყალ-გაზის კვანძი ჩამონტაჟებული განმტვირთავი სარქველით. BALTGAZ 4510T წყლის გამაცხელებელი მარტივია და მოხერხებულია მომსახურებაში, კომპაქტური. ეს მიიღწევა წვის კამერასთან კომბინირებული კორპუსის წყალობით, რომელიც ასევე უზრუნველყოფს მონტაჟისა და მომსახურების მოხერხებულობას.",
                    descriptionList: ["ყველა თანამედროვე უსაფრთხოების სისტემები",
                                    "ავტომატური ანთება",
                                    "აირის მიწოდების ავტომატური გაშიშვა სანთურის ჩაქრობისას",
                                    "თითბერის წყლის კვანძი",
                                    "მცველი სარქველი",
                                    "საინფორმაციო დისპლეი",
                                    "ვენტილატორი ვენტურის მილით, რომელიც უზრუნველყოფს \"პირდაპირ\" კავშირს პრესოსტატთან",
                                    "სპილენძის თბოგადამცემი კალის და ტყვიის გარეშე",
                                    "დაცვა ცივი ჰაერის მოხვედრისგან",
                                    "დამაკავშირებელი კაბელი ჩანგლით და დამცავი გათიშვის მოწყობილობით" ] 
                },
                {
                    descriptionColor: "Գույները՝",
                    descriptionText: "BALTGAZ 4510T ջրատաքացուցիչը նախատեսված է րոպեում 24 լիտր ջուր տաքացնելու համար։ Հատկանշական առանձնահատկություն է հանդիսանում երեսպատման լակոնիկ դասական ձևավորումը, փակ այրման խցիկը, արույրե ջրագազային հանգույցը ներկառուցված օգնության փականով: BALTGAZ 4510T ջրատաքացուցիչը պարզ է, հեշտ սպասարկվող և կոմպակտ՝ ի շնորհիվ պատյանի՝  համակցված այրման խցիկի հետ, որը նաև ապահովում է տեղադրման և սպասարկման հարմարավետությունը:",
                    descriptionList: ["բոլոր ժամանակակից անվտանգության համակարգերը",
                                    "ավտոմատացված բռնկում",
                                    "գազի մատակարարման ավտոմատացված դադարեցում այրիչի հանգման դեպքում",
                                    "արույրե ջրային հանգույց",
                                    "անվտանգության փական",
                                    "տեղեկատվական դիսփլեյ",
                                    "ճնշման անջատիչի հետ «ուղիղ» կապ ապահովող օդափոխիչ՝ Վենտուրի խողովակով",
                                    "պղնձե ջերմափոխանակիչ առանց թիթեղի և կապարի",
                                    "պաշտպանություն սառը օդի ներթափանցումից",
                                    "միացման մալուխ խրոցով և պաշտպանական անջատման սարքով" ] 
                },
                {
                    descriptionColor: "Colors:",
                    descriptionText: "The BALTGAZ 4510T water heater is designed to heat 24 litres of water per minute. Its distinguishing features are the laconic classic design of the cladding, closed combustion chamber, brass water-gas unit with an inbuilt discharge valve. The BALTGAZ 4510T water heater is simple, easy to operate and compact. This is achieved by combining the housing with the combustion chamber, allowing for easy installation and maintenance as well.",
                    descriptionList: ["all modern safety systems",
                                    "automatic ignition",
                                    "automatic gas shut-off on burner extinguishment",
                                    "brass water unit",
                                    "safety valve",
                                    "information display",
                                    "Venturi tube fan with \"direct\" connection to the pressostat",
                                    "tin- and lead-free copper heat exchanger",
                                    "cold air protection",
                                    "connection cable with plug and safety disconnection device" ] 
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
                langCode: "AZ",
                langText: "Azərbaycan",
                langImage: "components/images/flags/AZ.png",
                langHeader: "İstehsalçıdan qaz avadanlığı",
                langTabs: ["Su qızdırıcıları", "Qazanlar", "Ehtiyat hissələri"]
            },
            {
                langCode: "GE",
                langText: "ქართული",
                langImage: "components/images/flags/GE.png",
                langHeader: "გაზის აღჭურვილობა მწარმოებლისგან",
                langTabs: ["წყლის გამაცხელებლები", "ქვაბები", "სათადარიგო ნაწილები"]
            },
            {
                langCode: "HY",
                langText: "Հայերեն",
                langImage: "components/images/flags/HY.png",
                langHeader: "Գազային սարքավորումներ արտադրողից",
                langTabs: ["Ջրատաքացուցիչներ", "Կաթսաներ", "Պահեստամասեր"]
            },
            {
                langCode: "ENG",
                langText: "English",
                langImage: "components/images/flags/ENG.png",
                langHeader: "Gas equipment from the manufacturer",
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