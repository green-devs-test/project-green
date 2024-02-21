import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    
    body: {
        height: '80vh',
        padding: 7,
        boxSizing: 'border-box',
        zIndex: 1,
    },
    h1: {
        textAlign: 'center',
    },
    main_instructions: {
        textAlign: 'center',
        fontSize: '18px',
    },

    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    label: {
        display: 'flex',
        fontSize: 'large',
        fontWeight: 'bold',
        margin: '5px',
        verticalAlign: '50%',
    },

    select: {
        fontSize: 'large',
        borderRadius: '5px',
        textAlign: 'center',
    },

    options: {
        
        border: '2 px solid black',
    },    
    

    btn_search: {
        backgroundColor: '#ffb300',
        fontSize: 'x-large',
        padding: '0.5rem',
        borderRadius: '5px',
        boxShadow: 'none',
        border: '1 px solid black',
        color: '#212121',
    },

    table: {
        backgroundColor: '',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px',

    },

    th_style: {
        backgroundColor: '#c2eaba',
    },

});

export default styles;