export default function handler(req, res) {
    const data = [
        { "id": 1, "category_name": "دکور خانه", "category_img": "/category_img/1.png" },
        { "id": 2, "category_name": "لباس", "category_img": "/category_img/2.png" },
        { "id": 3, "category_name": "لوازم تحریر", "category_img": "/category_img/3.png" },
        { "id": 4, "category_name": "اکسسوری", "category_img": "/category_img/4.png" },
        { "id": 5, "category_name": "کارت تبریک", "category_img": "/category_img/5.png" },
        { "id": 6, "category_name": "قاب موبایل", "category_img": "/category_img/6.png" }
    ]
      return res.status(200).json(data);
}
