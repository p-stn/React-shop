export default function handler(req, res) {
    const data = [
        { "id": 1, "product_name": "قاب عکس", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-1.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 1, "product_name": "قاب عکس", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-1.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" },
        { "id": 1, "product_name": "قاب عکس", "product_info": "دارای رنگ بندی، قابل طراحی", "product_img": "/weekly_new_designs_img/img-1.png", "product_like": false, "product_price": "تومان۱۵۰,۰۰۰" }

    ]
    return res.status(200).json(data);
}