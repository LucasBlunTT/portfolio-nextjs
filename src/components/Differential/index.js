import { Container } from "../../styles/global";
import { DifferentialStyle } from "./styles";
import { CardDescription } from '../CardDescription/index';

export function Differential() {
    return (
        <DifferentialStyle>
            <Container>
                <div className="title">
                    <h2>Meus diferenciais</h2>
                    <p><strong>Transformo design</strong> em páginas para a web com agilidade, qualidade e <strong>alta perfomance.</strong></p>
                </div>
                <div className="differential-description">
                    <CardDescription />
                    <CardDescription />
                    <CardDescription />
                    <CardDescription />
                    <CardDescription />
                    <CardDescription />
                </div>
            </Container>
        </DifferentialStyle>
    )
}