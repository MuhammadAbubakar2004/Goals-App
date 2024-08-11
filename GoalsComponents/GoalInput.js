import { useState } from "react";
import { TextInput,View,StyleSheet ,Button, Modal, Image} from "react-native";

function   GoalInput (props){
    const [enterGoalText,setEnterGoalText] =useState('');
    function goaInputHandler(enterText){
        setEnterGoalText(enterText);
       };
       function addGoalHandler(){
        props.onAddGoal(enterGoalText);
        setEnterGoalText('')
       }
    //    console.log(enterGoalText);
       
    return(
        <Modal visible={props.visible}  animationType="slide">
        <View style={styles.AppContainer2}>
        {/* <Image style={styles.image}source={require('../assets/images/goal (1).png')}/> */}
        <TextInput style={styles.textInput} 
        placeholder ='your course goals'
         onChangeText={goaInputHandler}
         value={enterGoalText}
         ></TextInput>
         <View style={styles.buttonContainer}>
        <View style={styles.Button}>
        <Button title='Add  goals' onPress={addGoalHandler} color={'#5e0acc'}></Button>
        </View>
        <View style={styles.Button}>
        <Button title="Cancel" onPress={props.onCancel} color={'#f31282'}/>

        </View>
       
         </View>
       </View>
       </Modal>
    );
};
export default GoalInput;
const styles = StyleSheet.create({
    AppContainer2:{
        flex:1,
    // flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:24,
    padding: 20,
    borderBottomWidth:2,
    backgroundColor:'#311b6b',
    borderBottomColor:'blue',
    },
    textInput:{
        flex:0,
        alignItems:'center',
        borderWidth:3,
        borderColor:'#e4d0ff',
        width :'90%',
       backgroundColor:'#e4d0ff',
        marginRight:8,
        padding:8,
        // alignItems= ''
    },
    buttonContainer:{
        flexDirection:'row',
    },
    Button:{
        width:100,
        marginHorizontal:8,
        marginTop:16,
        // alignItems:'center',
    image:{
        width:1000,
        height:100,
        margin:20
    },
    },
});
