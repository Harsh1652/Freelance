import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

import tile1 from '@/assets/images/productImg/tiles/crums .jpeg';
import tile2 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_h60bmfh60bmfh60b.jpeg';
import tile3 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_j7ottj7ottj7ottj.jpeg';
import tile4 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_xhsx9qxhsx9qxhsx.jpeg';
import tile5 from '@/assets/images/productImg/tiles/Gemini_Generated_Image_3sjrc23sjrc23sjr (1).jpeg';

const tiles = [tile1, tile2, tile3, tile4, tile5].reverse();

const ProductIntroTiles = () => (
  <Box sx={{ 
    display: 'flex', 
    gap: 2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    mt: 2,
    mb: 2,
    flexWrap: 'wrap'
  }}>
    {tiles.map((img, idx) => (
      <Box 
        key={idx} 
        sx={{ 
          width: { xs: 60, sm: 70, md: 80 }, 
          height: { xs: 60, sm: 70, md: 80 }, 
          borderRadius: 1, 
          overflow: 'hidden', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)', 
          bgcolor: '#fff',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
          }
        }}
      >
        <Image 
          src={img} 
          alt={`tile-${tiles.length-idx}`} 
          width={80} 
          height={80} 
          style={{ 
            objectFit: 'cover', 
            width: '100%', 
            height: '100%' 
          }} 
        />
      </Box>
    ))}
  </Box>
);

export default ProductIntroTiles; 