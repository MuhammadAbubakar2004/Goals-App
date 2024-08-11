import { StyleSheet , Text , View , Pressable} from "react-native";
function GoalItem(props){
    return(
        
        <View  style= {styles. goalItem}>
        <Pressable android_ripple={{color:"#4b0082"}} 
        onPress={props.onDeleteItem.bind(this , props.id)}
        style={(pressed)=> pressed&&styles.pressItem}
        >
           <Text  style={styles.goalsText}>{props.text}</Text>
      </Pressable>
                </View>
                
    )
};
export default GoalItem;
const styles = StyleSheet.create({
    goalItem:{
        margin :10,
        // padding : 10,
        borderRadius :10,
        backgroundColor :'#5e0acc',
        color :'white',
    },
    pressItem:{
        opacity:3.5,
    },
    goalsText: {
        color: 'white',
        padding : 15,
        // Add other text styles here if needed
      },
});
