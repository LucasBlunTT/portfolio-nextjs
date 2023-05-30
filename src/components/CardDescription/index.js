import { CardStyle } from "./styles";
import codePc from "../../assets/pcCode.svg"
import Image from "next/image";

export function CardDescription() {
    return (
        <CardStyle>
            <div className="icon">
                <Image src={codePc} alt="Imagem PC com código dentro" />
            </div>
            <h3>
                Beyond the front end
            </h3>
            <p>
                Proin commodo orci sed magna consectetur elementum.
            </p>
        </CardStyle>
    )
}