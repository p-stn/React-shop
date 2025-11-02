export default function handler(req, res) {
    const data = [
    {"id":1,"popular_name":"بک گراند قاب موبایل","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img1.png"},
    {"id":2,"popular_name":"استیکر","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img2.png"},
    {"id":3,"popular_name":"استیکر","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img3.png"},
    {"id":4,"popular_name":"استیکر","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img4.png"},
    {"id":5,"popular_name":"استیکر حروف","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img5.png"},
    {"id":6,"popular_name":"استیکر","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img6.png"},
    {"id":7,"popular_name":"تصویر آفتابگردان","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img5.png"},
    {"id":8,"popular_name":"استیکر حروف","popular_info":"قابل طراحی و چاپ بر روی انواع محصولات","product_like":false,"popular_img":"/popular_designs_img/img5.png"}
  ]
      return res.status(200).json(data);
}
