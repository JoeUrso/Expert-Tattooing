import React from "react";
import { Link } from "react-router-dom";

export default function CityButton({ city }) {
    return <Link to="/">{city}</Link>;
}
