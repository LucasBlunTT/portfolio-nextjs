import React from 'react';
import Link from 'next/link';
import { HeaderStyle } from './styles';
import { Container } from '../../styles/global';
import { Curriculo } from '../Curriculo';

export function Header() {
  return (
    <HeaderStyle>
      <Container data-aos="fade-up">
        <div className="logo">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <strong>Lucas S.</strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
        <div className="cv">
          <Curriculo />
        </div>
        <nav className="navigation">
          <ul>
            <li key={1}>
              <Link href="https://github.com/LucasBlunTT" target="_blank">
                <i className="devicon-github-original"></i>
              </Link>
            </li>
            <li key={2}>
              <Link href="https://www.linkedin.com/in/lucas-da-silva-b63b59a3/">
                <i className="devicon-linkedin-plain" target="_blank"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
}
