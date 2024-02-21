import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({

    btn_option: {
        fontSize: '1rem',
        backgroundColor: '#84b884',
        textAlign: 'right',
        display: 'block',
        textDecoration: 'none',
        padding: '10px 10px',
        marginRight: '50px',
        color: '#fff',
        border: 'none',
        borderRight: '7px solid #65db65',
        transition: 'all 400ms ease',
        width: '100%',
                
        ':active' : {
            backgroundColor: '#65db65',
            color: '#333',
        },
        ':hover' : {
            borderRight: '5px solid #84b884',
            background: 'rgb(163, 190, 163)',
        },
    },

});

export default styles;