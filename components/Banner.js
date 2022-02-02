import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Header from "./Header";
const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000} >
            {/* <Image src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyjbjLdaSs4vgxiNzWXHdcv4PBuabQbdA6Stm0zcylkGwkSMIYANYzKNWaaXgDxizLEg&usqp=CAU' height={550} width={1200} className='w-screen max-h-85'/> */}
            <Image src = 'https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/06/Computer-Sience-Specializations-HERO.jpg' height={550} width={1200} className='w-screen max-h-85'/>
    <Image src = 'https://www.computersciencedegreehub.com/wp-content/uploads/2020/06/Is-Computer-Science-the-Same-as-Programming-1024x683.jpg' height={550} width={1200} className='mx-20'/>
    <Image src = 'https://cdn.ca.emap.com/wp-content/uploads/sites/9/2014/09/bigstock-Graduation-62226998.jpg' height={550} width={1200} className='mx-20'/>
    {/* <Image src = 'https://www.codingdojo.com/blog/wp-content/uploads/The-7-Most-In-Demand-Programming-Languages-of-2019-Header.png' height={550} width={1200} className='mx-20'/> */}
    
                {/* <div><img loading='lazy' src="https://m.media-amazon.com/images/I/71cM1-yWS5L._SX3000_.jpg" alt="" /></div>
                <div><img loading='lazy' src="https://m.media-amazon.com/images/I/713ifrFVLHL._SX3000_.jpg" alt="" /></div>
                <div><img loading='lazy' src="https://m.media-amazon.com/images/I/71THxMPy2ZL._SX3000_.jpg" alt="" /></div> */}
            </Carousel>
        </div>

    )
}

// export default Banner
// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

// function Banner(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }
Banner.layout = Header
export default Banner
