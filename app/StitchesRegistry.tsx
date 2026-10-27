'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { getCssText, globalStyles, styled } from '../stitches.config';
import { ShoppingBag, Menu } from 'lucide-react';
import Link from 'next/link';

// Inject global styles
globalStyles();

const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$4 $6',
  backgroundColor: '$surface',
  borderBottom: '1px solid $border',
});

const Logo = styled('div', {
  fontSize: '$4',
  fontWeight: '$bold',
  letterSpacing: '$tighter',
});

const Nav = styled('nav', {
  display: 'none',
  gap: '$4',
  '@md': {
    display: 'flex',
  },
});

const NavLink = styled(Link, {
  fontSize: '$2',
  color: '$textSecondary',
  fontWeight: '$medium',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '$textPrimary',
  },
});

const Icons = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
});

const IconButton = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Footer = styled('footer', {
  padding: '$8 $6',
  backgroundColor: '$surface',
  borderTop: '1px solid $border',
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
});

const FooterText = styled('p', {
  fontSize: '$2',
  color: '$textSecondary',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return (
      <style
        id="stitches"
        dangerouslySetInnerHTML={{ __html: getCssText() }}
      />
    );
  });

  return (
    <>
      <Header>
        <Logo>
          <Link href="/">ATELIER</Link>
        </Logo>
        <Nav>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/journal">Journal</NavLink>
        </Nav>
        <Icons>
          <IconButton>
            <ShoppingBag size={20} strokeWidth={1.5} />
          </IconButton>
          <IconButton css={{ '@md': { display: 'none' } }}>
            <Menu size={20} strokeWidth={1.5} />
          </IconButton>
        </Icons>
      </Header>

      <main>
        {children}
      </main>

      <Footer>
        <Logo css={{ fontSize: '$3' }}>ATELIER</Logo>
        <FooterText>© {new Date().getFullYear()} Atelier Footwear. Premium aesthetics.</FooterText>
      </Footer>
    </>
  );
}
