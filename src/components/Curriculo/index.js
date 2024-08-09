import Link from 'next/link';
import { CurriculoStyle } from './styles';

export function Curriculo() {
  return (
    <CurriculoStyle>
      <Link
        href={'https://portfolio-nextjs-eta-navy.vercel.app/cv.pdf'}
        target="_blank"
        rel="noopener noreferrer"
      >
        DOWNLOAD CV
      </Link>
    </CurriculoStyle>
  );
}
