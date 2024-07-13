import React,{useEffect,useRef} from 'react'
import cards_data from '../Components/cards_data'
import styles from '../Css/TitleCards.module.css'



const TitleCards = ({title, category}) => {

    const cardsRef = useRef();

const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <div className={styles.tittlecards}>
        <h2>{title?title:"Popular on Movieflix"}</h2>
    <div className={styles.list} ref={cardsRef}>
        {cards_data.map((card, index)=>{
            return <div className={styles.card} key={index}>
                <img src={card.image}/>
                <p>{card.name}</p>
            </div>
        })}
    </div>
      
    </div>
  )
}

export default TitleCards;
