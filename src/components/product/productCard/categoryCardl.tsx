export default function CategoryCardl({ special_name, special_img, offers }) {
  return (
    <div className='w-[288px] h-[276px] rounded-[16px] relative'>
      <div className=" absolute top-0 left-[27px] !w-[57px] !h-[97px] bg-tint-7 flex justify-center items-center flex-col text-white !text-wrap">{offers} <span>OFF</span></div>
      <img className="w-full h-full" src={special_img} alt={special_name} />
      <h4 className="absolute text-tint-3 right-[32px] bottom-[25px]">{special_name}</h4>
    </div>
  )
}
