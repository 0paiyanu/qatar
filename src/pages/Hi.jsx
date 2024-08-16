import React from 'react';

const Hi = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      textAlign: 'center',
      backgroundColor: '#61dafb',
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    heading: {
      fontSize: '3rem',
      margin: '0 0 20px 0',
    },
    paragraph: {
      fontSize: '1.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Hi, Welcome!</h1>
        <p style={styles.paragraph}>This is a simple "Hi" page built using React.</p>
      </div>
    </div>
  );
};

export default Hi;