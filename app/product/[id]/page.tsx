'use client';

import { styled } from '../../../stitches.config';
import { notFound } from 'next/navigation';

const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  padding: '$8 $4',
  '@md': {
    padding: '$9 $6',
  },
});

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  '@md': {
    gridTemplateColumns: '1.2fr 1fr',
    gap: '$9',
    alignItems: 'start',
  },
});

const ImageGallery = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const MainImageContainer = styled('div', {
  aspectRatio: '4/5',
  backgroundColor: '$border',
  overflow: 'hidden',
  width: '100%',
});

const MainImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: '$8',
});

const Title = styled('h1', {
  fontSize: '$5',
  fontWeight: '$regular',
  marginBottom: '$2',
  '@md': {
    fontSize: '$6',
  },
});

const Price = styled('p', {
  fontSize: '$4',
  color: '$textSecondary',
  marginBottom: '$6',
});

const Description = styled('p', {
  fontSize: '$3',
  lineHeight: '$body',
  color: '$textSecondary',
  marginBottom: '$6',
});

const Button = styled('button', {
  padding: '$4',
  backgroundColor: '$textPrimary',
  color: '$surface',
  fontSize: '$3',
  fontWeight: '$medium',
  textTransform: 'uppercase',
  letterSpacing: '$wide',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  width: '100%',
  marginBottom: '$4',
  '&:hover': {
    backgroundColor: '$accent',
  },
});

const DetailList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderTop: '1px solid $border',
  marginTop: '$6',
});

const DetailItem = styled('li', {
  padding: '$4 0',
  borderBottom: '1px solid $border',
  fontSize: '$2',
  color: '$textSecondary',
  display: 'flex',
  justifyContent: 'space-between',
});

const ALL_PRODUCTS = [
  { id: '1', name: 'Edition 01 - Canvas', price: '$180', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000', desc: 'A minimalist canvas shoe perfect for everyday wear. Lightweight and breathable.' },
  { id: '2', name: 'Edition 02 - Leather', price: '$240', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000', desc: 'Premium Italian leather. Designed to age beautifully and mold to your feet.' },
  { id: '3', name: 'Edition 03 - Runner', price: '$195', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000', desc: 'An athletic silhouette refined for the city. Superior cushioning.' },
  { id: '4', name: 'Edition 04 - High Top', price: '$210', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000', desc: 'A classic high-top with a modern twist. Support and style in one.' },
  { id: '5', name: 'Edition 05 - Slip On', price: '$150', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000', desc: 'Effortless style. Slip in and out with absolute ease.' },
  { id: '6', name: 'Edition 06 - Suede', price: '$260', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000', desc: 'Rich, soft suede construction. The ultimate luxury sneaker.' },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = ALL_PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <Grid>
        <ImageGallery>
          <MainImageContainer>
            <MainImage src={product.image} alt={product.name} />
          </MainImageContainer>
        </ImageGallery>

        <ProductDetails>
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
          <Description>{product.desc}</Description>

          <Button>Add to Cart</Button>

          <DetailList>
            <DetailItem>
              <span>Materials</span>
              <span>Premium sourced</span>
            </DetailItem>
            <DetailItem>
              <span>Fit</span>
              <span>True to size</span>
            </DetailItem>
            <DetailItem>
              <span>Shipping</span>
              <span>Free worldwide</span>
            </DetailItem>
          </DetailList>
        </ProductDetails>
      </Grid>
    </Container>
  );
}
