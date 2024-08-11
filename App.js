// import { useState } from "react";
// import {  Text,StyleSheet,View,Button,TextInput , FlatList} from "react-native";


// export default function App(){
//      const [enterGoalText,setEnterGoalText]=useState('')
//     const [courseGoals ,setCourseGoals ]=useState([]);
//     function goalInputHandler(enterText){
//         setEnterGoalText(enterText);
//     };
//     function addGoalHandler(enterGoalText){ 
//         setCourseGoals((currentGoalCourse)=>
//         [...currentGoalCourse , 
//             enterGoalText])
//         setEnterGoalText('');
          
//     };
   
//     return(
//        < View style = {styles.AppContainer}>
//       <View style={styles.AppContainer2}>
//         <TextInput
//          style={styles.textInput} 
//          placeholder ='your course goals'
//           onChangeText={goalInputHandler}></TextInput>
//         <Button title='Add your goals' onPress={addGoalHandler}></Button>
//        </View>
       
       
//        <View style = {styles.goals}>
//    <ScrollView alwaysBounceVertical={false}>
//       {courseGoals.map((goal) => (
//         <Text key={goal} style={styles.goalsText}>
//           {goal}
//         </Text>
//       ))}
//     </ScrollView>
       
//        </View>
//        </View>
//     );
// };



// // function goalInputHandler(enterText) {
// //     setEnterGoalText(enterText);
// //   }

// //   function addGoalHandler() {
// //     setCourseGoals((currentGoalCourse) => [...currentGoalCourse, enterGoalText]);
// //     setEnterGoalText(''); // Clear the input field after adding a goal

// //     console.log(courseGoals)
// //   }

// //   return (
// //     <View style={styles.AppContainer}>
// //       <View style={styles.AppContainer2}>
// //         <TextInput
// //           style={styles.textInput}
// //           placeholder="your course goals"
// //           onChangeText={goalInputHandler}
// //           value={enterGoalText} // Bind the input value to the state
// //         />
// //         <Button title="Add your goals" onPress={addGoalHandler} />
// //       </View>

// //       <View style={styles.goals}>
// //         <ScrollView alwaysBounceVertical={false}>
// //           {courseGoals.map((goal, index) => (
// //                <View key = {index} style= {styles. goalItem}>
// //             <Text  style={styles.goalsText}>{goal}</Text>
// //             </View>
            
// //           ))}
// //         </ScrollView>
// //       </View>
// //     </View>
// //   );
// // }


// const styles = StyleSheet.create({
//     AppContainer:{
//         flex:1,
//         paddingTop: 100,
//         paddingHorizontal:25,
//     },
//     AppContainer2:{
//         flex:1,
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     paddingBottom:20,
//     borderBottomWidth:4,
    
//     borderBottomColor:'blue',
//     },
//     textInput:{
//         flex:1,
        
//         borderWidth:1,
//         borderColor:'black',
//         width :'70%',
//         marginRight:8,
//         paddingHorizontal:8,
//         // alignItems= ''
//     },
//     goals:{
//         flex :6,
//     },
//     goalItem:{
//         margin :10,
//         padding : 10,
//         borderRadius :10,
//         backgroundColor :'#5e0acc',
//         // color :'white',
//     },
//     goalsText: {
//         color: 'white',
//         // Add other text styles here if needed
//       },
// });

import { useState } from "react";
import { StyleSheet , Text , View ,TextInput,Button, goal, FlatList}
from "react-native";
import{StatusBar} from 'expo-status-bar';

import GoalItem from "./GoalsComponents/goalItem";
import GoalInput from "./GoalsComponents/GoalInput";

export default function App(){
  const [modalIsVisible,setmodalIsVisible]=useState('false')
  const [courseGoals ,setCourseGoals ]=useState([]);
  
  function addStartGoalHandler(){
    setmodalIsVisible(true);
  }
function endGoalHandler(){
  setmodalIsVisible(false);
};

  function addGoalHandler(enterGoalText){
    setCourseGoals (currentCourseGoals =>
      [...currentCourseGoals ,
       {text:enterGoalText , id:Math.random().toString()}])
      //  endGoalHandler()and setmodalIsVisible(false);=====true
      // setmodalIsVisible(false);
      endGoalHandler();
  };
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter( (goal)=> goal.id !== id)
    })
  }

  return(
    <>
    <StatusBar style="light" />
    < View style = {styles.AppContainer}>
      <Button title = 'Add your  goals' color ={'#5e0acc'}
       onPress={addStartGoalHandler}
       /> 
       
        {<GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}
        onCancel={endGoalHandler} />}
        
         <View style={styles.goals}>
         <FlatList data={courseGoals} renderItem={(itemData)=>{
          return <GoalItem 
          text={itemData.item.text}
          id={itemData.item.id}
           onDeleteItem={deleteGoalHandler} />
          value={enterGoalText}
         }}
         keyExtrator ={(item ,index)=>{
          return (item.text)
            
        }}
         alwaysBounceVertical={false}/>
  
          
          </View>
          </View>
          </>
  )
};
const styles = StyleSheet.create({
      AppContainer:{
          flex:1,
          paddingTop: 100,
          paddingHorizontal:25,
          backgroundColor:'#1e085a',
      },
     
      goals:{
          flex :5,
      },
     
  });
