const theme = {
  color: {
    primary: "#FF385C",
    secondary: "#00848A",
    borderColor: "#ddd"
  },
  text: {
    primaryColor: "#777",
    secondaryColor: "#222",
    smallSize: "12px",
    normalSize: "14px",
    bigSize: "16px",
    boldWeight: 600
  },

  mixin: {
    boxShadow: `
      transition: box-shadow ease-in .1s;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
}

export default theme