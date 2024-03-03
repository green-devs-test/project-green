import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
    containerCards: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        position: 'relative',
        width: '350px',
        minWidth: '150px',
        margin: '20px',
        border: '1px solid black',
        borderRadius: '6px',
        overflow: 'hidden',
        background: '#FFF',
        cursor: 'default',
        transition: 'all 400ms ease',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.2)',
        padding: '15px',
	    textAlign: 'center',

        ":hover": {
            boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.4)',
	        transform: 'translateY(-3%)',
          },
      },
    cardContent : {

    },
    spotName: {
        backgroundColor: '#c2eaba',
        padding: '10px',
    },
    CardMaterials: {
	    justifyContent: 'center',
	    textAlign: 'center',
        display: 'inline-block',
	    padding: '5px',
	    borderRadius: '13px',
	    border: '1px solid black',
	    boxShadow: '2px 2px black',
	    margin: '10px 5px 10px 5px',
    },
    cardAdress: {
        verticalAlign: 'text-bottom',
    },
    cardBtnLocation: {
        backgroundColor: "#84b884",
        textDecoration: 'none',
        padding: '10px 10px',
        color: '#fff',
        border: "none",
        fontSize: '1rem',
        borderRadius: '5px',
        transition: "all 400ms ease",
        ":active": {
            background: "#5a965a",
          },
    },
});

export default styles;