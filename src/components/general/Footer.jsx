const Footer = () => {
    return (
      <footer style={{ backgroundColor: 'white', padding: '10px 0', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>Derechos de autor {new Date().getFullYear()} © Joel Arguello</p>
      </footer>
    );
  };
  
  export default Footer;
  