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
            backgroundColor: 'gray',
        },

        flex_container: {
            display: 'flex',
            flexDirection: 'row',
            width: '90vw',
            height: '90vh',
        },

        nav_container: {
            width: '15vw', 

            '@media (max-width: 764px)' : {
                    width: '25vw',
                } 
        },

        main_container: {
            width: '80vw',
        },

        footer_container: {
            backgroundColor: '#a7c4a0',
            height: '10vh',
            width: '90vw',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
});

export default styles;