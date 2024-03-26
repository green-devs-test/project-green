import { StyleSheet } from "aphrodite";

const styles = StyleSheet.create({ 
    goUpButton: {
        backgroundColor: '#84b884',
        textAlign: 'center',
        color: '#fff',
        margin: 'auto',
        fontSize: 30,
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden', //delete when necessary
        border: '3px solid black',
        position: 'fixed',
        zIndex: 12,
        display: 'flex',
        right: 25,
        bottom: 15,
    },
});

export default styles;