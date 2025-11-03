export default function handler(req, res) {
    const data = [
        { "id": 1, "special_name": "مدرسه و اداره", "special_img": "/special_offers_img/img1.png", "offers": "10%" },
        { "id": 2, "special_name": "پوشاک", "special_img": "/special_offers_img/img2.png", "offers": "30%" },
        { "id": 3, "special_name": "استیکر", "special_img": "/special_offers_img/img3.png", "offers": "50%" },
        { "id": 4, "special_name": "دیجیتال", "special_img": "/special_offers_img/img4.png", "offers": "20%" },
        { "id": 5, "special_name": "لوازم خانه", "special_img": "/special_offers_img/img5.png", "offers": "30%" }
    ]
    return res.status(200).json(data);
}



