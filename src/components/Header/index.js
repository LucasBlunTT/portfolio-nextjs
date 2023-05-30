import Link from 'next/link';
import { HeaderStyle } from './styles';
import { Container } from '../../styles/global';

export function Header() {
  return (
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <strong>Lucas S.</strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </Link>
        </div>
        <nav className='navigation'>
          <ul>
            <li key={1}><Link href="/">Quem sou</Link></li>
            <li key={2}><Link href="/">Cases</Link></li>
            <li key={3}><Link href="/">Contato</Link></li>
          </ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
}
