export default function CategoryCard({category_img,category_name}) {        
    return (        
        <div className="flex flex-col border border-gray-4 w-[184px] h-[128px] gap-2 rounded-2xl p-2 text-center">
            <img src={category_img} className="w-[168px] h-[80px] rounded-[8px]" alt={category_name} />
            <p className="text-gray-10"> {category_name}</p>                        
        </div>
    )
}
