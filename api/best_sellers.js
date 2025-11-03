export default function handler(req, res) {
    const data = [
        { "id": 1, "product_name": "ماگ قابل طراحی", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img1.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 2, "product_name": "باکس غذا", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img2.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 3, "product_name": "ماگ سرامیکی", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img3.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 4, "product_name": "دفتر سیمی", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img4.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 5, "product_name": "تیشرت زنانه", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img5.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 6, "product_name": "تیشرت مردانه", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img6.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 7, "product_name": "قاب موبایل آیفون", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img7.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 8, "product_name": "کلاه مردانه", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/bestSellers_img/img8.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" }
    ]
    return res.status(200).json(data);
}
