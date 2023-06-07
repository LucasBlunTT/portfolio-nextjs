import { CardStyle } from "./styles";
import Image from "next/image";

export function CardDescription({ image, titleDescription, description }) {
    return (
        <CardStyle>
            <div className="icon">
                {image}
            </div>
            <h3>
                {titleDescription}
            </h3>
            <p>
                {description}
            </p>
        </CardStyle>
    )
}