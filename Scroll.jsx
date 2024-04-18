import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


const Scroll = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
  return (
    <div className='w-3/4 m-auto'>
        <div mt-20> 
        <Slider {...settings}> 
            {data.map((d)=>(
                <div style={{display:'flex',flexDirection:'column'}} className='bg-white h-[450px] text-black rounded-xl'>
                    <div key={d.id} style={{height:'350px',paddingTop:'20px', backgroundColor:'lightblue',display:'flex',justifyContent:'center',}}>
                        <img src={d.img} alt="" style={{height:'300px',width:'400px',borderRadius:'7px'}} />
                    </div>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',
                    justifyContent:'center', items:'center',gap:'5px'}}>
                        <p>{d.name}</p>
                        <p style={{color:'red'}}>{d.price}</p>
                    </div>
                </div>
                
                 ))}
                 </Slider>
                 <button><FaLessThan/></button> 
                        <button><FaGreaterThan/></button>
        </div>
    
    </div>
  )
}
const data  = [
    {
      id:"01",
      name:"LG 43 inches 4K UHD HDR LED webOS Smart TV (43UQ7590PUB) - 2022 - Dark Iron Grey",
      img:"/Products/banner3.jpg",
      price:"$80.50",
    },
    {id:"02",
      name:"Samsung 55 inches FHD 75Hz 5ms GTG IPS LED FreeSync Monitor (LF27T350FHNXZA) - Dark Blue Grey",
      img:"/Products/banner2.jpg",
      price:"$120.50",
    },
    {id:"03",
      name:"Acer 31.5 inches FHD 75Hz 1ms GTG Curved VA LED Monitor (ED320QR BI) - Black",
      img:"/Products/banner1.jpg",
      price:"$100.50",
    },
    {id:"04",
      name:"ASUS ZenScreen 15.6 inches FHD 60Hz 1ms GTG OLED Portable Monitor (MQ16AH) - Black",
      img:"/Products/tablet1.jpg",
      price:"$150.00",
    },
    {id:"05",
      name:"Apple iPad 10.9 inches 256GB with Wi-Fi 6 (10th Generation) - Silver",
      img:"/Products/tablet2.jpeg",
      price:"$150.00",
    },
  ];
  
export default Scroll
