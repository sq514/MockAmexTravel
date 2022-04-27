import React from 'react'
import style from './Recommendations.module.scss'

const Recommendations = () => {
    const mockRecommendations = [
        {
            imageUrl: "https://cdn.switchfly.com/www.cfmedia.vfmleonardo.com/imageRepo/6/0/98/625/296/lonch-exterior-6329-hor-clsc_H.jpg",
            title: "London Marriott Hotel County Hall",
            location: "London, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022\n" +
                "Specials Available (Some Rooms)",
            price: "£444.38"
        }, {
            imageUrl: "https://cdn.switchfly.com/www.cfmedia.vfmleonardo.com/imageRepo/5/0/87/915/732/Deluxe-Double_H.jpg",
            title: "Apex City of Bath Hotel",
            location: "Bath, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022 Specials Available (Some Rooms)",
            price: "£206.51"
        }, {
            imageUrl: "https://media.iceportal.com/47861/photos/65545998_M.jpg",
            title: "Best Western Plus The Connaught Hotel & Spa",
            location: "London, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022\n" +
                "Specials Available (Some Rooms)",
            price: "£151.51"
        },{
            imageUrl: "https://cdn.switchfly.com/www.cfmedia.vfmleonardo.com/imageRepo/6/0/96/664/623/brsry-exterior-0053-hor-clsc_H.jpg",
            title: "Bristol Marriott Royal Hotel",
            location: "Bristol, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022",
            price: "£164.26"
        }, {
            imageUrl: "https://media.iceportal.com/59356/photos/72387217_M.jpg",
            title: "Hilton Cardiff",
            location: "Cardiff, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022",
            price: "£128.26"
        },
        {
            imageUrl: "https://cdn.switchfly.com/www.cfmedia.vfmleonardo.com/imageRepo/5/0/91/97/580/Nov17_exterior4_H.jpg",
            title: "Grassmarket",
            location: "Edinburgh, United Kingdom",
            availability: "*For stays between 11 May - 15 May 2022",
            price: "£186.04"
        }
    ];
    return (
        <div className={style.RecommendationsWrapper}>
            <div className={style.RecommendationsHeader}>
                Hotels: Top Picks for Cardmembers
            </div>
            <div className={style.RecommendationsContent}>
                {mockRecommendations.map(card => (
                    <div className={style.RecommendationsCard} key={card.title}>
                        <div className={style.CardHeader}>
                            <img src={card.imageUrl}></img>
                        </div>
                        <div className={style.cardDescription}>
                            <h1>{card.title}</h1>
                            <h2>{card.subTitle}</h2>
                            <p>{card.availability})</p>
                            <p>avg/person</p>
                            <div className={style.cardPrice}>
                                {card.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
};

export default Recommendations;