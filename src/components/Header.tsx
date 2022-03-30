import { memo } from "react";

interface HeaderProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
}

function HeaderComponent (props: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
  )
}

export const Header = memo(HeaderComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.selectedGenre.title, nextProps.selectedGenre.title)
})