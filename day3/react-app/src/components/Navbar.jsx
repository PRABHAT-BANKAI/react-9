const Navabar = () => {
  return (
    <nav style={{ height: "70px", backgroundColor: "grey",display:"flex",justifyContent:"space-between", alignItems:"center" }}>
      <h1>Logo</h1>
      <ul style={{display:"flex",listStyle:"none",gap:"10px"}}>
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navabar;
