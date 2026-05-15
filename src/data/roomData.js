export const roomData = {
    exec: {
        id: "exec",
        name_zh: "行政套房 (一大床)",
        name_en: "Executive Suite (1 King)",
        name_cn: "行政套房 (一大床)",
        name_ja: "エグゼクティブスイート (キング1台)",
        price_zh: "平日 $5,000 / 假日 $5,500",
        price_en: "Weekday $5,000 / Holiday $5,500",
        prices: { fixed: '10,800', holiday: '5,500', weekday: '5,000' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)', cn: '2人(标准入住人数)', ja: '2名(標準定員)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包,頂級按摩浴缸', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags, Jacuzzi', cn: '吹风机,电视,冰箱,冷气,暖气,无线网路,热水壶,茶包,顶级按摩浴缸', ja: 'ヘアドライヤー, テレビ, 冷蔵庫, 冷暖房, WiFi, 電気ケトル, ティーバッグ, ジャグジー' },
        desc_zh: "20坪尊榮空間，配備一大床與獨立客廳。房內設施包含頂級按摩浴缸、熱水壺及南洋藤製家具，住宿包含精緻早餐，給您最尊貴的享受。",
        desc_en: "66m² premium suite with 1 King bed and a private living area. Features a Jacuzzi, electric kettle, and Nanyang rattan furniture. Includes breakfast for a truly distinguished stay.",
        desc_cn: "20坪尊荣空间，配备一大床与独立客厅。房内设施包含顶级按摩浴缸、热水壶及南洋藤制家具，住宿包含精致早餐，给您最尊贵的享受。",
        desc_ja: "20坪のプレミアム空間。キングベッド1台と独立したリビング。ジャグジー、電気ケトル、南洋ラタン家具を完備。朝食付き。",
        images: [
            "/room-types/VIP/vip1.jpg",
            "/room-types/VIP/vip2.jpg",
            "/room-types/VIP/vip3.jpg",
            "/room-types/VIP/vip4.jpg"
        ]
    },
    elegant: {
        id: "elegant",
        name_zh: "典雅客房 (一大一小床)",
        name_en: "Elegant Room (1 King + 1 Single)",
        name_cn: "典雅客房 (一大一小床)",
        name_ja: "エレガントルーム (キング1台+シングル1台)",
        price_zh: "平日 $3,300 / 假日 $3,800",
        price_en: "Weekday $3,300 / Holiday $3,800",
        prices: { fixed: '10,800', holiday: '3,800', weekday: '3,300' },
        occupancy: { zh: '3人(標準入住人數)', en: '3 Guests (Standard)', cn: '3人(标准入住人数)', ja: '3名(標準定員)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags', cn: '吹风机,电视,冰箱,冷气,暖气,无线网路,热水壶,茶包', ja: 'ヘアドライヤー, テレビ, 冷蔵庫, 冷暖房, WiFi, 電気ケトル, ティーバッグ' },
        desc_zh: "適合3人入住的典雅空間，配備一大一小床。房內提供冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，適合家庭出遊或商務旅客。",
        desc_en: "Elegant space for up to 3 guests, featuring 1 King and 1 Single bed. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, perfect for families or business travelers.",
        desc_cn: "适合3人入住的典雅空间，配备一大一小床。房内提供冷暖气、液晶电视、冰箱及免费无线网络，住宿包含精致早餐，适合家庭出游或商务旅客。",
        desc_ja: "3名様まで宿泊可能なエレガントな空間。キング1台とシングル1台。冷暖房、テレビ、冷蔵庫、無料Wi-Fi完備。朝食付き。",
        images: [
            "/room-types/TRP/trp1.jpg",
            "/room-types/TRP/trp2.jpg",
            "/room-types/TRP/trp3.jpg"
        ]
    },
    elite: {
        id: "elite",
        name_zh: "精英客房 (一大床)",
        name_en: "Elite Room (1 King)",
        name_cn: "精英客房 (一大床)",
        name_ja: "エリートートルーム (キング1台)",
        price_zh: "平日 $2,700 / 假日 $3,300",
        price_en: "Weekday $2,700 / Holiday $3,300",
        prices: { fixed: '10,800', holiday: '3,300', weekday: '2,700' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)', cn: '2人(标准入住人数)', ja: '2名(標準定員)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags', cn: '吹风机,电视,冰箱,冷气,暖气,无线网路,热水壶,茶包', ja: 'ヘアドライヤー, テレビ, 冷蔵庫, 冷暖房, WiFi, 電気ケトル, ティーバッグ' },
        desc_zh: "標準雙人入住空間，配備舒適一大床。房內提供冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，讓您感受賓至如歸的溫暖。",
        desc_en: "Comfortable space for 2 guests, featuring 1 King bed. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast for a cozy and relaxing stay.",
        desc_cn: "标准双人入住空间，配备舒适一大床。房内提供冷暖气、液晶电视、冰箱及免费无线网络，住宿包含精致早餐，让您感受宾至如归的温暖。",
        desc_ja: "キングベッド1台を備えた快適な2名様用空間。冷暖房、テレビ、冷蔵庫、無料Wi-Fi完備。朝食付き。",
        images: [
            "/room-types/DS/ds1.jpg",
            "/room-types/DS/ds2.jpg",
            "/room-types/DS/ds3.jpg"
        ]
    },
    boutique: {
        id: "boutique",
        name_zh: "精緻客房 (兩小床)",
        name_en: "Boutique Room (2 Twin)",
        name_cn: "精致客房 (两小床)",
        name_ja: "ブティックルーム (ツイン2台)",
        price_zh: "平日 $2,700 / 假日 $3,300",
        price_en: "Weekday $2,700 / Holiday $3,300",
        prices: { fixed: '10,800', holiday: '3,300', weekday: '2,700' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)', cn: '2人(标准入住人数)', ja: '2名(標準定員)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags', cn: '吹风机,电视,冰箱,冷气,暖气,无线网路,热水壶,茶包', ja: 'ヘアドライヤー, テレビ, 冷蔵庫, 冷暖房, WiFi, 電気ケトル, ティーバッグ' },
        desc_zh: "簡約大方的雙人空間，提供兩張單人床。房內配備冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，是親友同遊金門的最佳選擇。",
        desc_en: "Simple and clean layout for 2 guests with 2 Twin beds. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, ideal for friends traveling together.",
        desc_cn: "简约大方的双人空间，提供两张单人床。房内配备冷暖气、液晶电视、冰箱及免费无线网络，住宿包含精致早餐，是亲友同游金门的最佳选择。",
        desc_ja: "ツインベッド2台を備えたシンプルで清潔な空間。冷暖房、テレビ、冷蔵庫、無料Wi-Fi完備。朝食付き。",
        images: [
            "/room-types/ST/st1.jpg",
            "/room-types/ST/st2.jpg"
        ]
    },
    family: {
        id: "family",
        name_zh: "親子房 (兩大床)",
        name_en: "Family Room (2 King)",
        name_cn: "亲子房 (两大床)",
        name_ja: "ファミリールーム (キング2台)",
        price_zh: "平日 $4,400 / 假日 $4,900",
        price_en: "Weekday $4,400 / Holiday $4,900",
        prices: { fixed: '10,800', holiday: '4,900', weekday: '4,400' },
        occupancy: { zh: '4人(標準入住人數)', en: '4 Guests (Standard)', cn: '4人(标准入住人数)', ja: '4名(標準定員)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags', cn: '吹风机,电视,冰箱,冷气,暖气,无线网路,热水壶,茶包', ja: 'ヘアドライヤー, テレビ, 冷蔵庫, 冷暖房, WiFi, 電気ケトル, ティーバッグ' },
        desc_zh: "簡約大方的適合家住空間，提供兩張加大雙人床。房內配備冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，是親友同遊金門的最佳選擇。",
        desc_en: "Simple and clean layout for family guests with 2 King beds. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, ideal for friends traveling together.",
        desc_cn: "简约大方的适合家住空间，提供两张加大双人床。房内配备冷暖气、液晶电视、冰箱及免费无线网络，住宿包含精致早餐，是亲友同游金门的最佳选择。",
        desc_ja: "ご家族向けの広々とした空間。キングベッド2台。冷暖房、テレビ、冷蔵庫、無料Wi-Fi完備。朝食付き。",
        images: [
            "/room-types/CHR/chr1.jpg",
            "/room-types/CHR/chr2.jpg",
            "/room-types/CHR/chr3.jpg",
            "/room-types/CHR/chr4.jpg",
            "/room-types/CHR/chr5.jpg",
            "/room-types/CHR/chr6.jpg"
        ]
    }
};
