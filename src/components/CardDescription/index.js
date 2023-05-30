import { CardStyle } from "./styles";
import Image from "next/image";

export function CardDescription({image, titleDescription, description}) {
    return (
        <CardStyle>
            <div className="icon">
                <Image src={image} alt="Imagem description" />
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