import React from "react";
import { Link } from "react-router-dom";
import "./CityButton.scss";

interface IProps {
    city: string;
}

export default function CityButton({ city }: IProps) {
    return (
        <Link to="/" className="city-button">
            {city}
        </Link>
    );
}
