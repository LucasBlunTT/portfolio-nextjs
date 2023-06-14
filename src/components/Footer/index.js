import Link from 'next/link';
import { FooterStyle } from './styles';
import { Container } from '../../styles/global';

export function Footer() {
  return (
    <FooterStyle>
      <Container>
        <span>
          Copyright 2023 - Todos os direitos reservados a Lucas da Silva
        </span>
      </Container>
    </FooterStyle>
  );
}
