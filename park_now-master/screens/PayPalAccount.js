import React from "react";
import { View, Image,Text,TextInput,TouchableOpacity ,StyleSheet} from "react-native";

export default class PayPalAccount extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            isValidPassword:true,
            isValidEmail:true,       
         };
    
        }


  validate(text,type){
        num=/^[0-9a-zA-Z]+$/
        email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(type=='email'){
            if(email.test(text))
            {
            this.setState({
                isValidEmail:true,
            })
            }
            else{

                this.setState({
                    isValidEmail:false,
                })
            } 
        }
        else if(type=='password'){
            if((num.test(text)) && (text.trim().length >7))
            {
            this.setState({
                isValidPassword:true,
            })
            }
            else{

                this.setState({
                    isValidPassword:false,
                })
            }
        }


        }
   








      
    render() {
        return (
            <View style={{

                flex: 1,
                justifyContent:"center",
                alignItems:"center",
                textAlign: "center",
                backgroundColor:"#ebf7fc"
            }}>
            <View   style={styles.container}>
                 <Image
                style={styles.stretch}
                source={require('../assets/paypal2.png')}
              />
              <Text style={styles.text}>Pay With PayPal</Text>
              <Text style={styles.subtext}>Enter your email and your password to get start.</Text>
              <TextInput
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:25}}
                    placeholder="Enter Your Email"
                    onChangeText={(text)=>this.validate(text,'email')}
                    />
                 {this.state.isValidEmail ? null : 
                    <View> 
                        <Text style={styles.ErrMsg}>Email must follow Email format. </Text>
                        </View>
                 }


                  <TextInput
                   secureTextEntry
                    style={{ height: 45, width:310,borderColor: 'gray', borderWidth: 1 ,borderRadius:5,marginTop:7,}}
                    placeholder="Enter Your Password"
                    onChangeText={(text)=>this.validate(text,'password')}
                    />

                        {this.state.isValidPassword ? null : 
                            <View> 
                                <Text style={styles.ErrMsg}>Password must be 8 long char and number  . </Text>
                                </View>
                        }

               <TouchableOpacity
                    style={{ width: 310, height: 45 ,backgroundColor:"#00457C",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:15}}                
                     > 
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}> Log In</Text>
                  
                </TouchableOpacity>
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"center"}}>
                <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    width:150,
                    marginTop:50
                }}
                ></View>       
                <Text style={{marginBottom:0,color:"#696969"}}>or</Text>


                 <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    width:150,
                    marginTop:50
                }}
                />
                </View>
                <TouchableOpacity
                    
                    onPress={()=>this.props.navigation.navigate("CreateAccount")}
                    style={{ width: 310, height: 45 ,backgroundColor:"#C0C0C0",borderRadius:5, flexDirection:"row",alignItems:"center", justifyContent:"center",marginTop:30}}                
                     > 
                    <Text style={{color:"#fff",textAlign:"center",fontSize:22,paddingLeft:3}}>Create Account</Text>
                  
                </TouchableOpacity>
                     </View>
                     
            
        </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        textAlign: "center",
       backgroundColor:"#ebf7fc",
    },
    stretch: {
        width: 300,
        height: 70,
        resizeMode: 'stretch',
        marginTop:55
      },
      text:{
       fontSize:25,
       color:"#696969",
       marginTop:15

      },
      subtext:{
        fontSize:15,
        marginTop:5,
        color:"gray"
 

      },
      ErrMsg:{
        color:"red",
        fontSize:12,
        marginTop:1,
      
    }

});