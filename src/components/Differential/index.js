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
                    <CardDescription image={<i className="devicon-postgresql-plain"></i>} titleDescription={"POSTGRES"} />
                    <CardDescription image={<i className="devicon-sass-original"></i>} titleDescription={"SASS"} />
                    <CardDescription image={<i className="devicon-react-original"></i>} titleDescription={"React"} />
                    <CardDescription image={<i className="devicon-nextjs-original"></i>} titleDescription={"NEXT JS"} />
                    <CardDescription image={<i className="devicon-git-plain"></i>} titleDescription={"GIT"} />
                    <CardDescription image={<i className="devicon-ubuntu-plain"></i>} titleDescription={"UBUNTU"} />
                </div>
            </Container>
        </DifferentialStyle>
    )
}