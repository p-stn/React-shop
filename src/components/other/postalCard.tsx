export default function Postalcard({postal_img,postal_name}) {
  return (
    <div className='w-[288px] h-[68px] rounded-[16px]'>
        <img className='w-full h-full rounded-[16px]' src={postal_img} alt={postal_name} />
    </div>
  )
}
