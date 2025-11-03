export default function handler(req, res) {
    const data = [
        { "id": 1, "product_name": "قاب عکس", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-1.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 2, "product_name": "ماگ قابل طراحی", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-2.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 3, "product_name": "ماگ سرامیکی", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-3.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 4, "product_name": "ساک هدیه", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-4.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 5, "product_name": "کوسن", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-5.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 6, "product_name": "تیشرت زنانه", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-6.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 7, "product_name": "چمدان", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-7.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" }
    ]
    return res.status(200).json(data);
}