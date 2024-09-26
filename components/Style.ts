import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    marginTop: "20%",
    width: "90%",
    marginLeft: "4.7%",
    alignItems: "center", // Center the content horizontally
  },
  container: {
    flexDirection: "column", // Changed to column
    margin: 12,
  },
  content: {
    width: "73%",
    marginLeft: "3.7%",
    fontWeight: "400",
  },
  content2: {
    width: "90%",
    marginLeft: "1%",
    fontWeight: "400",
    alignSelf:"flex-start",
  },
  image1: {
    width: "98%",
    height: 280,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    marginBottom: 10,
  },
  image2: {
    width: "98%",
    height: 280,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    marginTop: "5%", // Add space between the image and title
  },
  title2: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 19,
    marginBottom: 5, // Add some margin below the title
    alignSelf:"flex-start",
    marginLeft:"1%"
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 60,
    height: 60,
    marginRight: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700", 
    lineHeight: 19,
  },
  minute: {
    marginRight: "23%",
    color:"rgb(189, 189, 189)"
  },
  minute2: {
    position:"static",
    alignItems:"flex-start",
    color:"rgb(189, 189, 189)",
    justifyContent:"flex-start",
    alignSelf:"flex-start",
    marginTop:"1%",
    marginLeft:"1%"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 26,
    marginTop: 60,
    height: "7%",
  },
  searchbar: {
    width: 393,
    height: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)", 
    borderRadius: 100, 
    backgroundColor: "rgb(246, 246, 246)", 
    padding: 10,
    color: "gray",
    paddingLeft: 20,
  },
  search: {
    marginTop: 60,
    position: "relative",
    width:363,
  },
  topContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 16,
  },
  back: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
    color: "rgb(93, 176, 117)",
    textAlign: "left",
    width: 38,
    height: 19,
    marginTop: 8,
  },
  filter: {
    marginTop: 8,
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
    color: "rgb(93, 176, 117)",
    textAlign: "right",
    left: "89%",
    width: 39,
    height: 19,
  },
  feed: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    width: 71,
    height: 36,
    left: "40%",
  },
  cont: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    width: 118,
    height: 36,
    left: "35%",
  },
  blank:{
    position:"absolute",
    width:343,
    height:227.98,
    borderRadius:10,
    marginTop:"147%",
    backgroundColor:"rgb(240, 240, 240)",
    alignSelf:"center"
  },
  footer:{
    position:"absolute",
    width:"100%",
    height:83,
    backgroundColor:"rgb(250, 250, 250)",
    alignSelf:"center",
    marginTop:"190%"
  },
  footer2:{
    position:"absolute",
    width:"100%",
    height:83,
    backgroundColor:"rgb(250, 250, 250)",
    alignSelf:"center",
    marginTop:"199%"
  },
  icon:{
    position:"absolute",
    width:32,
    height:32,
    left:"8%",
    top:15,
    backgroundColor:"rgb(93, 176, 117)",
    borderRadius:100
  },
  icon1:{
    position:"absolute",
    width:32,
    height:32,
    left:"27%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon2:{
    position:"absolute",
    width:32,
    height:32,
    left:"46%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon3:{
    position:"absolute",
    width:32,
    height:32,
    left:"65%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  icon4:{
    position:"absolute",
    width:32,
    height:32,
    left:"85%",
    top:15,
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  circleContainer:{
    position:"static",
    width:40,
    height:8,
    alignSelf:"flex-end",
    marginTop:"5%",
    marginRight:"2%"
  },
  circle:{
    position:"absolute",
    width:8,
    height:8,
    backgroundColor:"rgb(93, 176, 117)",
    borderRadius:100
  },
  circle2:{
    position:"absolute",
    width:8,
    height:8,
    marginLeft:"40%",
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  },
  circle3:{
    position:"absolute",
    width:8,
    height:8,
    marginLeft:"80%",
    backgroundColor:"rgb(232, 232, 232)",
    borderRadius:100
  }
});
