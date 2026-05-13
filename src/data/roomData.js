export const roomData = {
    exec: {
        id: "exec",
        name_zh: "行政套房 (一大床)",
        name_en: "Executive Suite (1 King)",
        price_zh: "平日 $5,000 / 假日 $5,500",
        price_en: "Weekday $5,000 / Holiday $5,500",
        prices: { fixed: '15,800', holiday: '5,500', weekday: '5,000' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,按摩浴缸,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, Jacuzzi, WiFi, Kettle, Tea Bags' },
        desc_zh: "20坪尊榮空間，配備一大床與獨立客廳。房內設施包含頂級按摩浴缸、熱水壺及南洋藤製家具，住宿包含精緻早餐，給您最尊貴的享受。",
        desc_en: "66m² premium suite with 1 King bed and a private living area. Features a Jacuzzi, electric kettle, and Nanyang rattan furniture. Includes breakfast for a truly distinguished stay.",
        images: [
            "/room-types/VIP/vip1.jpg",
            "/room-types/VIP/vip2.jpg",
            "/room-types/VIP/vip3.jpg",
            "/room-types/VIP/vip4.jpg",
            "/room-types/VIP/vip5.jpg"
        ]
    },
    elegant: {
        id: "elegant",
        name_zh: "典雅客房 (一大一小床)",
        name_en: "Elegant Room (1 King + 1 Single)",
        price_zh: "平日 $3,300 / 假日 $3,800",
        price_en: "Weekday $3,300 / Holiday $3,800",
        prices: { fixed: '10,800', holiday: '3,800', weekday: '3,300' },
        occupancy: { zh: '3人(標準入住人數)', en: '3 Guests (Standard)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags' },
        desc_zh: "適合3人入住的典雅空間，配備一大一小床。房內提供冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，適合家庭出遊或商務旅客。",
        desc_en: "Elegant space for up to 3 guests, featuring 1 King and 1 Single bed. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, perfect for families or business travelers.",
        images: [
            "/room-types/TRP/trp3.jpg",
            "/room-types/TRP/trp2.jpg",
            "/room-types/TRP/trp1.jpg",
            "/room-types/TRP/trp4.jpg",
            "/room-types/TRP/trp5.jpg",
            "/room-types/TRP/trp6.jpg",
            "/room-types/TRP/trp7.jpg",
            "/room-types/TRP/trp8.jpg"
        ]
    },
    elite: {
        id: "elite",
        name_zh: "精英客房 (一大床)",
        name_en: "Elite Room (1 King)",
        price_zh: "平日 $2,700 / 假日 $3,300",
        price_en: "Weekday $2,700 / Holiday $3,300",
        prices: { fixed: '10,800', holiday: '3,300', weekday: '2,700' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags' },
        desc_zh: "標準雙人入住空間，配備舒適一大床。房內提供冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，讓您感受賓至如歸的溫暖。",
        desc_en: "Comfortable space for 2 guests, featuring 1 King bed. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast for a cozy and relaxing stay.",
        images: [
            "/room-types/DS/ds1.jpg",
            "/room-types/DS/ds2.jpg",
            "/room-types/DS/ds3.jpg",
            "/room-types/DS/ds4.jpg"
        ]
    },
    boutique: {
        id: "boutique",
        name_zh: "精緻客房 (兩小床)",
        name_en: "Boutique Room (2 Twin)",
        price_zh: "平日 $2,700 / 假日 $3,300",
        price_en: "Weekday $2,700 / Holiday $3,300",
        prices: { fixed: '9,800', holiday: '3,300', weekday: '2,700' },
        occupancy: { zh: '2人(標準入住人數)', en: '2 Guests (Standard)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags' },
        desc_zh: "簡約大方的雙人空間，提供兩張單人床。房內配備冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，是親友同遊金門的最佳選擇。",
        desc_en: "Simple and clean layout for 2 guests with 2 Twin beds. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, ideal for friends traveling together.",
        images: [
            "/room-types/ST/st1.jpg",
            "/room-types/ST/st2.jpg"
        ]
    },
    family: {
        id: "family",
        name_zh: "親子房 (兩大床)",
        name_en: "Family Room (2 King)",
        price_zh: "平日 $4,400 / 假日 $4,900",
        price_en: "Weekday $4,400 / Holiday $4,900",
        prices: { fixed: '9,800', holiday: '4,900', weekday: '4,400' },
        occupancy: { zh: '4人(標準入住人數)', en: '4 Guests (Standard)' },
        equipment: { zh: '吹風機,電視,冰箱,冷氣,暖氣,無線網路,熱水壺,茶包', en: 'Hairdryer, TV, Refrigerator, AC, Heating, WiFi, Kettle, Tea Bags' },
        desc_zh: "簡約大方的雙人空間，提供兩張單人床。房內配備冷暖氣、液晶電視、冰箱及免費無線網路，住宿包含精緻早餐，是親友同遊金門的最佳選擇。",
        desc_en: "Simple and clean layout for 2 guests with 2 Twin beds. Equipped with AC/heating, TV, refrigerator, and free WiFi. Includes breakfast, ideal for friends traveling together.",
        images: [
            "/room-types/CHR/chr1.jpg",
            "/room-types/CHR/chr2.jpg",
            "/room-types/CHR/chr3.jpg",
            "/room-types/CHR/chr4.jpg"
        ]
    }
};
