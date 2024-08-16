import React from 'react';

const ErrorPage = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      color: '#333',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    },
    title: {
      fontSize: '3em',
      marginBottom: '0.5em',
      color: '#e74c3c',
    },
    message: {
      fontSize: '1.5em',
      marginBottom: '1em',
      color: '#555',
    },
    button: {
      fontSize: '1em',
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#e74c3c',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#c0392b',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <a
        href="/"
        style={{ ...styles.button }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
