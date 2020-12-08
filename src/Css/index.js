import { StyleSheet, Dimensions, StatusBar } from 'react-native';
let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    alignCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        marginTop: 40
    },
    cardStyle: {
        // borderWidth: 0.2,
        // borderColor: 'lightgray',
        marginBottom: 10,
        elevation: 3,
        borderRadius: 10,
        backgroundColor: "#FFF",
        position: "relative"

    },
    row: {
        flexDirection: 'row'
    },
    padding10: {
        padding: 10
    },
    restImage: {
        height: height * 0.15,
        width: height * 0.15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        resizeMode: "contain"
    },
    titleView: {
        paddingVertical: 10
    },
    title: {
        fontFamily: 'CircularStd-Bold',
        color: "green",
        fontSize: 20,
        width: width * 0.40
    },
    address: {
        width: width * 0.59
    },
    mobile: {
        marginTop: 5
    },
    rightBottomButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        color: "red"

    },
    badgeContainer: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: "#FFA500",
        justifyContent: "center",
        alignItems: "center"
    },
    badgeText: {
        color: "#FFF"
    },
    headerRight: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: 10
    },
    errorText: {
        color: '#FF0000'
    }
});
