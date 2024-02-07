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

        nav_container: {
           
        },

        main_container: {
            width: '90vw',
        },

        footer_container: {
            backgroundColor: '#a7c4a0',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
});

export default styles;