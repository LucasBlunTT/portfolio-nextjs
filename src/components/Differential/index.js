import { Container } from "../../styles/global";
import { DifferentialStyle } from "./styles";
import { CardDescription } from '../CardDescription/index';
import CodePc from "../../assets/pcCode.svg"
import Framework from "../../assets/framework.svg"
import Code from "../../assets/code.svg"

const differentials = [
    {
        icon: CodePc,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
    {
        icon: Framework,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
    {
        icon: Code,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
    {
        icon: CodePc,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
    {
        icon: Framework,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
    {
        icon: Code,
        titleDescription: 'Beyond the front end',
        description: 'Proin commodo orci sed magna consectetur elementum'
    },
];

export function Differential() {
    return (
        <DifferentialStyle>
            <Container>
                <div className="title">
                    <h2>Meus diferenciais</h2>
                    <p><strong>Transformo design</strong> em páginas para a web com agilidade, qualidade e <strong>alta perfomance.</strong></p>
                </div>
                <div className="differential-description">
                    {
                        differentials.map(({ icon, titleDescription, description }) => {
                            return (
                                <CardDescription image={icon} titleDescription={titleDescription} description={description} />
                            )
                        })
                    }
                </div>
            </Container>
        </DifferentialStyle>
    )
}