'use client';

import { styled } from '../stitches.config';
import Link from 'next/link';

const Hero = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '$8 $4',
  minHeight: '70vh',
  backgroundColor: '$background',
});

const HeroTitle = styled('h1', {
  fontSize: '$6',
  fontWeight: '$bold',
  letterSpacing: '$tighter',
  lineHeight: '$heading',
  maxWidth: '800px',
  marginBottom: '$4',
  '@md': {
    fontSize: '$8',
  },
});

const HeroSubtitle = styled('p', {
  fontSize: '$3',
  color: '$textSecondary',
  maxWidth: '600px',
  marginBottom: '$6',
  lineHeight: '$body',
  '@md': {
    fontSize: '$4',
  },
});

const Button = styled(Link, {
  display: 'inline-block',
  padding: '$3 $6',
  backgroundColor: '$textPrimary',
  color: '$surface',
  fontSize: '$2',
  fontWeight: '$medium',
  letterSpacing: '$wide',
  textTransform: 'uppercase',
  borderRadius: '$pill',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    backgroundColor: '$accent',
    transform: 'translateY(-2px)',
  },
});

const Section = styled('section', {
  padding: '$8 $4',
  maxWidth: '$container',
  margin: '0 auto',
  '@md': {
    padding: '$9 $6',
  },
});

const SectionTitle = styled('h2', {
  fontSize: '$5',
  fontWeight: '$regular',
  letterSpacing: '$tight',
  marginBottom: '$6',
  textAlign: 'center',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const ProductCard = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  color: 'inherit',
});

const ImageContainer = styled('div', {
  aspectRatio: '4/5',
  backgroundColor: '$border',
  marginBottom: '$3',
  overflow: 'hidden',
  position: 'relative',
});

const ProductImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease',
  [`${ProductCard}:hover &`]: {
    transform: 'scale(1.05)',
  },
});

const ProductInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
});

const ProductName = styled('h3', {
  fontSize: '$3',
  fontWeight: '$medium',
});

const ProductPrice = styled('p', {
  fontSize: '$3',
  color: '$textSecondary',
});

const StorySection = styled('section', {
  padding: '$9 $4',
  backgroundColor: '$surface',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const StoryText = styled('p', {
  fontSize: '$4',
  fontWeight: '$light',
  maxWidth: '700px',
  lineHeight: '1.8',
  color: '$textPrimary',
  '@md': {
    fontSize: '$5',
  },
});

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Edition 01 - Canvas',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000', // Placeholder
  },
  {
    id: '2',
    name: 'Edition 02 - Leather',
    price: '$240',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000', // Placeholder
  },
  {
    id: '3',
    name: 'Edition 03 - Runner',
    price: '$195',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000', // Placeholder
  }
];

export default function Home() {
  return (
    <>
      <Hero>
        <HeroTitle>Redefining Footwear.</HeroTitle>
        <HeroSubtitle>
          Minimalist design. Premium materials. Crafted for the modern individual who values aesthetics and comfort.
        </HeroSubtitle>
        <Button href="/shop">Explore Collection</Button>
      </Hero>

      <Section>
        <SectionTitle>Featured Drops</SectionTitle>
        <Grid>
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard href={`/product/${product.id}`} key={product.id}>
              <ImageContainer>
                <ProductImage src={product.image} alt={product.name} />
              </ImageContainer>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </Grid>
      </Section>

      <StorySection>
        <StoryText>
          &quot;We believe in simplicity. Stripping away the unnecessary to reveal the essential beauty of form and function.&quot;
        </StoryText>
      </StorySection>
    </>
  );
}
