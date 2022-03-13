import Image from "next/image";
import { useEffect, useRef, useState } from "react";
 
 const Body = () => {

    const mainRef = useRef(null)

    const [children , setChildren] = useState([]);
    const checkView  = (e, observer) => {
        e.forEach(el => {
            console.log(el.isIntersecting)
            if(el.isIntersecting){
                children.forEach(element => {
                    element.classList.add('appear')
                });
    
            }else {
                children.forEach(element => {
                    element.classList.remove('appear')
                });
            }
        })
    }

    const options = {
        rootMargin: '0px',
        threshold: 0,
      }



    useEffect(()=> {
        if(!mainRef.current)return
        setChildren([...mainRef.current.children]);
        const observer= new IntersectionObserver(checkView , options)
        observer.observe(mainRef.current)
    },[])

  return (
    <>
      <section ref={mainRef} className="main_section">
        <h1 className="type_writer"> hello </h1>
        <img src={'/hero.png'}/>
      </section>
    </>

  )
};


export default Body