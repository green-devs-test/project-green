import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({

    btn_option: {
        backgroundColor: 'whitesmoke',
        borderRadius: 8,
        border: '1px solid black',
        margin: 2,
        padding: 5,
        fontSize: '1rem',
        ':active' : {
            backgroundColor: 'rgb(163, 190, 163)',
            color: 'whitesmoke',
        },
        ':hover' : {
            backgroundColor: 'rgb(235, 235, 235)',
        },
    },

});

export default styles;