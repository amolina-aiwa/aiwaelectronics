import AccordionItem from '../AccordionItem'
import features from '../../content/features'
import { products } from '../../content/products'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductSpecsTable({prod}) {
  const [tableProd, setTableProd] = useState(prod)
  const prodFeatures = []
  tableProd.features.forEach(e => {
    prodFeatures.push({...features.find(f => e.id == f.id), value: e.value})
  })
  function changeTableData(sku){
    const res = products.find(e => e.sku == sku)
    res && setTableProd(res)
  }
  return (
    <section id='prod-specs'>
      <AccordionItem classes='prod-specs-table' name='Especificaciones'>
        <div className='table-cell-container'>
          {/* <div className='table-cell sku'>
            {tableProd.variants.map((e,i) => (
              <button key={i} className={e.sku == tableProd.sku ? 'active' : 'not-active'}
              onClick={() => changeTableData(e.sku)}>
                {e.sku}
              </button>
            ))}
          </div> */}
          {prodFeatures.map((e,i) => (
            <div className='table-cell' key={i}>
              <div className='title'>{e.name}</div>
              <p className='desc'>{e.value}</p>
            </div>
          ))}
        </div>
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Incluye'>
            <p>{prod.includes}</p>
      </AccordionItem>
      <AccordionItem classes='prod-specs-table' name='Descargas'>
        <div className='download-items'>
            {prod.downloads.map((e,i) => (
              <a href={e.link} key={i}>
                <e.icon />
                {e.name}
              </a>
            ))}
        </div>
      </AccordionItem>
      {prod.variants.length > 0 && (
        <AccordionItem classes='prod-specs-table variants' name='Otras versiones'>
            <div className="download-items">
              {prod.variants.map((e,i) => (
                <Link href={e.link} key={i}>
                  <a>
                    {e.sku}
                  </a>
                </Link>
            ))}
            </div>
        </AccordionItem>
      )}
    </section>
  )
}