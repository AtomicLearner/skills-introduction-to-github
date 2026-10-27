'use client';

import { styled } from '../../stitches.config';
import Link from 'next/link';

const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  padding: '$8 $4',
  minHeight: '80vh',
  '@md': {
    padding: '$9 $6',
  },
});

const PageHeader = styled('div', {
  marginBottom: '$8',
  textAlign: 'center',
});

const Title = styled('h1', {
  fontSize: '$6',
  fontWeight: '$regular',
  letterSpacing: '$tight',
  marginBottom: '$2',
});

const Description = styled('p', {
  fontSize: '$3',
  color: '$textSecondary',
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8 $6', // Higher row gap
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
});

const ProductImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  [`${ProductCard}:hover &`]: {
    transform: 'scale(1.05)',
  },
});

const ProductInfo = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginTop: '$2',
});

const ProductName = styled('h3', {
  fontSize: '$3',
  fontWeight: '$medium',
});

const ProductPrice = styled('p', {
  fontSize: '$3',
  color: '$textSecondary',
});

// Expanded mock data
const ALL_PRODUCTS = [
  { id: '1', name: 'Edition 01 - Canvas', price: '$180', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', name: 'Edition 02 - Leather', price: '$240', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000' },
  { id: '3', name: 'Edition 03 - Runner', price: '$195', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000' },
  { id: '4', name: 'Edition 04 - High Top', price: '$210', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000' },
  { id: '5', name: 'Edition 05 - Slip On', price: '$150', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000' },
  { id: '6', name: 'Edition 06 - Suede', price: '$260', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000' },
];

export default function ShopPage() {
  return (
    <Container>
      <PageHeader>
        <Title>All Footwear</Title>
        <Description>Explore our complete collection of premium styles.</Description>
      </PageHeader>

      <Grid>
        {ALL_PRODUCTS.map((product) => (
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
    </Container>
  );
}
