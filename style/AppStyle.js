import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
  img: {
    width: "25%",
    height: "20%",
  },
  logo: {
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 184, 148,1.0)",
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  descrititre: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(0, 184, 148,1.0)",
    marginBottom: 5,
  },
  descri: {
    marginTop: "2%",
    height: "65%",
    justifyContent: "space-around",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  resultview: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(178, 190, 195,1.0)",
  },
  resultTxt: {
    color: "rgba(45, 52, 54,1.0)",
    fontWeight: "bold",
    fontSize: 40,
    paddingLeft: 15,
  },
  titleTxt: {
    fontSize: 16,
    color: "rgba(0, 184, 148,1.0)",
    fontFamily: "Verdana",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "15%",
    alignItems: "center",
  },
  result: {
    width: "90%",
    height: "50%",
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "rgba(223, 230, 233,1.0)",
  },

  find: {
    width: "15%",
  },

  inputContainer: {
    height: "45%",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "rgba(223, 230, 233,1.0)",
  },

  input: {
    color: "gray",
    paddingLeft: 15,
    fontSize: 20,
    width: "80%",
  },
  label: {
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labeltxt: {
    fontWeight: "bold",
    color: "rgba(45, 52, 54,1.0)",
  },
  inputFrom: {
    height: "25%",
    width: "80%",
    paddingTop: "8%",
  },
  head: {
    height: "20%",
    backgroundColor: "rgba(0, 184, 148,1.0)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lang: {
    height: "8%",
    width: "80%",
    zIndex: 2,
    position: "absolute",
    top: "15%",
    flexDirection: "row",
    paddingTop: 5,
  },
  icone: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  langfrom: {
    width: "45%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 5,
    paddingLeft: 15,
    borderColor: "rgba(223, 230, 233,1.0)",
  },
  headTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
  app: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    backgroundColor: "white",
  },
  appTxt: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
