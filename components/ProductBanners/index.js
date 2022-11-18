import Image from "next/image"
import Link from "next/link"
import bannerList from '../../content/banners'

export default function ProductBanners({banners}) {
  const bannersArr = []
  banners.forEach(e => {
    bannersArr.push({...bannerList.find(f => e.id == f.id), customTitle: e.customTitle, customDesc: e.customDesc})
  })
  return (
    <section className='product-banners'>
      {bannersArr.map((e,i) => (
        <div className={`product-banner ${i%2==0 && 'inv'}`} key={i}>
          <div className='img-wrapper'>
            <Image src={e.img} alt={e.title} width='800' height='350' sizes='100vw'/>
          </div>
          <div className='text'>
            <h3>{e.customTitle ? e.customTitle : e.title}</h3>
            <p>{e.customDesc ? e.customDesc : e.desc}</p>
            {e.disclaimer && <Link href={e.disclaimerLink}><a>{e.disclaimer}</a></Link>}
          </div>
        </div>
      ))}
    </section>
  )
}