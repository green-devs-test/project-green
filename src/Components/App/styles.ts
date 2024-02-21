import { StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({

        container: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },

        flex_container: {
            display: 'flex',
            flexDirection: 'column',
            width: '90vw',
            height: '90vh',
        },
        main_container: {
            width: '90vw',
        },
        
        main_body_container:{
            display: 'flex',
        },
        footer_container: {
            backgroundColor: '#a7c4a0',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        sidebar_default:{
            '@media (max-width: 1024px)': {
                display: 'none',
                width: '30vw',
            }
        },
});

export default styles;