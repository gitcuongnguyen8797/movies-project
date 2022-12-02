import React from "react";
import '../../styles/component/postercard.css';

export interface PropsPosterCard {
    id: number;
    movieName: string;
    rate: number;
    describe: string;
    image: string;
}

const PosterCard: React.FC<PropsPosterCard> = ({id, movieName, rate, describe, image}) => (
    <div className="poster-card">
        <div className="poster-card__header">
            <img src={image} alt="Poster" className="poster-image"/>
        </div>
    </div>
)

export default PosterCard;