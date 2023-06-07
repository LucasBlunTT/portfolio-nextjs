import Link from 'next/link';
import { FooterStyle } from './styles';
import { Container } from '../../styles/global';

export function Footer() {
  return (
    <FooterStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <strong>Lucas S.</strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </Link>
        </div>
        <span>
          Copyright 2023 - Todos os direitos reservados a Lucas da Silva
        </span>
      </Container>
    </FooterStyle>
  );
}
