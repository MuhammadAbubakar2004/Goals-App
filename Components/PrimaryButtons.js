import { View } from "react-native";

function Primarybuttons({Children}){
    return(
        <View>
            <Text>{Children}</Text> 
        </View>
    )
};

export default Primarybuttons;