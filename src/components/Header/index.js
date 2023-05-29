import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo-codeboost.svg';
import { HeaderStyle } from './styles';
import { Container } from '../../styles/global';

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo do projeto" />
          </Link>
        </div>
        <nav className='navigation'>
          <ul>
            <li><Link href="/">Quem sou</Link></li>
            <li><Link href="/">Cases</Link></li>
            <li><Link href="/">Contato</Link></li>
          </ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
}
