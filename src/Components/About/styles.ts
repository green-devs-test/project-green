import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    aboutContainer: {
        marginTop: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    titlePage: {
        marginLeft: '20px',
    },
    colaborateCards: {
        backgroundColor: '#DDF5DB',
        borderRadius: '15px',
        margin: '10px 20px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-evenly',
        minWidth: '80%',
        minHeight: '100px',
    },
    colaborateFoto: {
        color: 'black',
        alignSelf: 'center',
    },
    icon: {
        fontSize: "3rem",
        color: "#404040",
        padding: "0px 30px",
    },
    cardHead: {
        fontWeight: 600,
        fontSize: '0.9rem',
        lineHeight: '1.1px',
    },
    cardPharagraph: {
        fontWeight: 400,
        fontSize: '0.7rem',
        lineHeight: '1.1px',
    },
    colaborateCardText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '7px',
    },
    WriteUsMsj: {
        textAlign: 'start',
        margin: '20px 0px',
        marginLeft: '20px',
    },
    link: {
        color: 'black',
        fontWeight: 700,

    },
});

export default styles;
