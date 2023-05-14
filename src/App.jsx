import React from "react"
import './App.css'
import Products from './Products'

function App() {
 const products =[
  {
    title:"Shoe", img:"https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_640.png", price:34, discount:1.5
  },
{
  title:"Bag",img:"https://ae01.alicdn.com/kf/S41b831c0027e43dca02cc7a5a6ec82d4K/2022-Shoulder-Bag-Messenger-Bag-Flap-Designed-Ladies-Shoulder-Chain-Tote-PU-Leather-Silk-Scarf-Crossbody.jpg_220x220xz.jpg_.webp", price:15, discount:2
},
{
  title:"Headset", img:"https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_640.png",price:20, discount:2.03
},
{
  title:"Bicycle", img:"https://cdn.pixabay.com/photo/2013/07/13/12/40/bike-160096_640.png", price:200, discount:5
},
{
  title:"Suit", img:"https://ae01.alicdn.com/kf/Sbc1b5c8d20c740bdb86244edc81ddd21a/Men-Brand-Blazers-3-Pieces-Sets-Business-Suits-Vest-Blue-Coats-Wedding-Formal-Elegant-Jackets-Party.jpg_220x220xz.jpg_.webp", price:64, discount:1.5
},
{
title:"Bicycle Helmet",img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/O/68819_1660718959.jpg", price:6, discount:2.5
},
{
title:"Television", img:"https://ae01.alicdn.com/kf/S7de62df6c680428e8cd3e1fb06729a16X/Bulk-Flat-Screen-Low-Price-TV-12V-2K-Android-Plasma-Television-Monitor-LED-32-Inch-Panel.jpg_220x220xz.jpg_.webp",price:70, discount:5.15
},
{
title:"Mobile Phone", img:"https://ae01.alicdn.com/kf/Sb4cc63098c7a4f49bf088cd59c06004fx/Mobile-Phones-S23-Ultra-6-8-HD-Screen-SmartPhone-Original-5G-4G-Dual-Sim-Celulares-Android.jpg_220x220xz.jpg_.webp", price:70, discount:9.5
},
{
  title:"Desktop PC", img:"https://ae01.alicdn.com/kf/H0d9d6418710d4a36abbb5fdaf2664233S/Eglobal-gaming-desktop-pc-DDR4-Intel-Core-i5-8250U-8259U-system-unit-computer-VGA-HD-LAN.jpg_220x220xz.jpg_.webp", price:80, discount:1.5
},
{
title:"Laptop PC",img:"https://ae01.alicdn.com/kf/S48e037d252664981a87072c0466de623Z/Notebook-15-6-inch-Laptop-Windows-11-10-Pro-1920-1080-Cheap-Portable-Intel-Laptop-D4.jpg_220x220xz.jpg_.webp", price:15, discount:2
},
{
title:"Digital Camera", img:"https://ae01.alicdn.com/kf/Sc0a0a6ebcd94418bae1f84bb43c6c4c1G/Portable-Travel-Vlog-Camera-Photography-16X-Digital-Zoom-1080P-HD-SLR-Camera-Anti-Shake-Photo-Cameras.jpg_220x220xz.jpg_.webp",price:120, discount:12.03
},
{
title:"Hijab", img:"https://ae01.alicdn.com/kf/HTB1gQQqK3HqK1RjSZFkq6x.WFXaO/Muslim-Bandana-Scarf-Islamic-3-layers-Niqab-Burqa-Bonnet-Hijab-Cap-Veil-Headwear-Black-Face-Cover.jpg_220x220xz.jpg_.webp", price:20, discount:2
}
 ]

  return (
  
    <main className="main">
    
      {
        (products.length >0)?
        products.map((value, index)=>{
          return(
            <div key={index} className="product">
              < Products title={value.title} img={value.img} price={value.price} discount={value.discount}/> 
            </div>
          )
        }):
        <h2>No Products available</h2>
      }
    </main>
  )
}

export default App
