import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#DFDFDF",
    padding: 20,
    zIndex: 1,
    position: "relative",
    bottom: 0,
  },
  footerLink: {
    fontWeight: 400,
    fontSize: '0.8rem',
    lineHeight: '20px',
    textDecoration: 'none',
    color: '#000000',
  },
  footerLogo: {
    fontWeight: 700,
    lineHeight: '19.5px',
    fontSize: '1rem',
  },
  footerMail: {
    fontWeight: 400,
    fontSize: '0.8rem',
    lineHeight: '20px',
    textDecoration: 'none',
    color: '#000000',
    margin: '0',
  },
});

export default styles;
