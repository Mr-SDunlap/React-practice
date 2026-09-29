function ButtonInternal() {
  const styles = {
    padding: "20px",
    background: "#f0f3f3",
    border: "1px solid rgb(222, 221, 221)",
    borderRadius: "0.5rem",
    color: "#333",
    fontFamily: '"jost", sans-serif',
    fontWeight: "500",
    fontSize: "16px",
    boxShadow: "3px 3px 5px hsla(0, 0%, 0%, 0.1)",
    transition: "background 150ms ease",
  };

  return <button style={styles}>Click me</button>;
}

export default ButtonInternal;
