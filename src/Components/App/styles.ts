import { StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({

        container: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },

        flex_container: {
            backgroundColor: 'lightgray',
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            height: '90vh',
        },

        nav_container: {
            width: '15vw', 
        },

        main_container: {
            width: '85vw',
        },

        footer_container: {
            backgroundColor: 'lightseagreen',
            height: '10vh',
        },

});

export default styles;