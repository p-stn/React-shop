export default function handler(req, res) {
    const data = [
        { "id": 1, "postal_img": "/postal_card_img/img1.png", "postal_name": "postal" },
        { "id": 2, "postal_img": "/postal_card_img/img2.png", "postal_name": "postal" },
        { "id": 3, "postal_img": "/postal_card_img/img3.png", "postal_name": "postal" },
        { "id": 4, "postal_img": "/postal_card_img/img4.png", "postal_name": "postal" },
        { "id": 5, "postal_img": "/postal_card_img/img5.png", "postal_name": "postal" },
        { "id": 6, "postal_img": "/postal_card_img/img6.png", "postal_name": "postal" }

    ]
    return res.status(200).json(data);
}