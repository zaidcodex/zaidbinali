import React from "react";

const Carousel = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }}
        alt="Space visualization"
      />
      
      {/* Dark Overlay */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
      }}></div>
      
      {/* Centered Text Content */}
      <div style={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '1000px',
        zIndex: 2
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '2rem',
          letterSpacing: '-0.02em',
          lineHeight: '1.1'
        }}>
          ZAID BIN ALI
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.25rem, 3vw, 2rem)',
          color: '#e5e5e5',
          fontWeight: '300',
          lineHeight: '1.5'
        }}>
          Full Stack Dev
        </p>
      </div>
    </div>
  );
};

export default Carousel;