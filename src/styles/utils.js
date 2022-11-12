
import { StyleSheet } from 'react-native'
import { colors } from './colors';
import {color} from './properties/color'
// import { color } from './properties/color';

export const st = StyleSheet.create({

    border:{
        borderWidth:1,
        borderColor:'red'
    },
    borderB:{
        borderBottomWidth:1,
        borderColor:'#DDD'
    },
    borderT:{
        borderTopWidth:1,
        borderColor:'#DDD'
    },
    bg_red:{
        backgroundColor:'red'
    },
    border_1:{
        borderWidth:1,
        borderColor:"#777",
        
    },

    f_12: {
        fontSize:12
    },
    f_14: {
        fontSize:14
    },
    f_16: {
        fontSize:16
    },
    f_18: {
        fontSize:18
    },
    f_20: {
        fontSize:20
    },
    f_22: {
        fontSize:22
    },
    f_24: {
        fontSize:24
    },
    f_26: {
        fontSize:26
    },
    f_28: {
        fontSize:28
    },
    f_30: {
        fontSize:30
    },
    f_32: {
        fontSize:32
    },
    f_36: { 
        fontSize:36
    },
    bold:{
        fontWeight:'bold'
    },
    bolder:{
        fontWeight:'900'
    },
    d_flex:{
        display:'flex',
        flexDirection:'column'
    },
    col:{
        flex:1
    },
    justify_center:{
        justifyContent:'center'
    },
    justifySpace:{
        justifyContent:'space-between'
    },
    justify_end:{
        justifyContent:'flex-end'
    },
    align_center:{
        alignItems:'center'
    },
    align_end:{
        alignItems:'flex-end'
    },
    flex_row:{
        flexDirection:'row'
    },
    text_right:{
        textAlign:'right'
    },
    text_center:{
        textAlign:'center'
    },
    w_100:{
        width:'100%'
    },
    h_100:{
        height:'100%'
    },
    w_75:{
        width:'75%'
    },
    mt_5:{
        marginTop:5
    },
    mt_10:{
        marginTop:10
    },
    mt_15:{
        marginTop:15
    },
    mt_auto:{
        marginTop:'auto'
    },
    my_auto:{
        marginBottom:'auto',
        marginTop:'auto'
    },
    my_5:{
        marginVertical:5
    },
    my_10:{
        marginVertical:10
    },
    my_15:{
        marginVertical:15
    },
    mx_5:{
        marginHorizontal:5
    },
    mx_10:{
        marginHorizontal:10
    },
    mx_15:{
        marginHorizontal:15
    },
    p_5:{
        padding:5
    },
    p_10:{
        padding:10
    },
    p_15:{
        padding:15
    },
    ps_5:{
        paddingLeft:5
    },
    ps_10:{
        paddingLeft:10
    },
    ps_15:{
        paddingLeft:15
    },
    
    py_5:{
        paddingVertical:5
    },
    py_10:{
        paddingVertical:10
    },
    py_15:{
        paddingVertical:15
    },
    py_75:{
        paddingVertical:75
    },
    px_5:{
        paddingHorizontal:5
    },
    px_10:{
        paddingHorizontal:10
    },
    px_15:{
        paddingHorizontal:15
    },
    px_20:{
        paddingHorizontal:20
    },
    px_30:{
        paddingHorizontal:30
    },
    pe_5:{
        paddingRight:5
    },
    pe_10:{
        paddingHpaddingRightorizontal:10
    },
    pe_15:{
        paddingRight:15
    },
    pe_20:{
        paddingRight:20
    },
    pxe_30:{
        paddingRight:30
    },
    pt_35:{
        paddingTop:35
    },
    pb_75:{
        paddingTop:75
    },
    pb_5:{
        paddingBottom:5
    },
    pb_10:{
        paddingBottom:10
    },
    pb_15:{
        paddingBottom:15
    },
    r_100:{
        borderRadius:'100%'
    },
    r_5:{
        borderRadius:5
    },
    r_10:{
        borderRadius:10
    },
    r_15:{
        borderRadius:15
    },
    r_20:{
        borderRadius:20
    },
    r_25:{
        borderRadius:25
    },
    r_30:{
        borderRadius:30
    },

    rt_5:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    rt_10:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    rt_15:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    rt_20:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    
    bg_white:{
        backgroundColor:'white'
    },
    relative:{
        position:'relative'
    },
    absolute:{
        position:'absolute'
    },
    b_0:{
        bottom:0
    },
    card:{
        
        backgroundColor: 'white',
        borderRadius: 5,
      
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      
      },
      underline:{
        textDecorationLine:'underline'
      },
      bg_yellow:{
        backgroundColor:colors.yellow
      },
      ...color
  
   
      
      
      

  
    
    
    

    
});
