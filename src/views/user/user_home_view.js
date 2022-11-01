import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { st } from '../../styles/utils'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 


export default function UserHomeView() {

    const [state, setState] = useState({
        stars:199
    })
    return (
    <View style={[, st.d_flex, st.col]}>
        <View style={[{height:90}, st.d_flex, st.justify_end, st.pb_15, st.align_center]}>
            <Text>ROJI</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={[st.border]}>

            <View style={[st.px_15, st.py_15]}>
                <Text style={[st.f_26]}>Good morning, <Text style={[st.bold,{color:'#045A8F'}]}>Sebastian</Text></Text>
            </View>

            <View style={[st.px_15]}>
                <View style={[st.d_flex, st.flex_row, st.align_center]}>
                    <Text style={[st.f_36, st.bold]}>62</Text>
                    <AntDesign name="star" size={24} color="#F9951E" />
                </View>
                <Text style={[st.px_5]}>Rojis</Text>
            </View>

            <View style={[st.px_15]}>
                <View style={[st.d_flex, st.flex_row, st.justify_center, st.align_center]}>
                    <View style={[st.col, {height:3, backgroundColor:state.stars >= 25 ? '#F9951E' :'#CCC'}]}></View>

                    <MaterialIcons style={[st.border]} name="ramen-dining" size={24} color={state.stars >= 25 ? '#F9951E' :'#CCC'} />

                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 50 ? '#F9951E' :'#CCC'}]}></View>
                    <MaterialIcons name="ramen-dining" size={24} color={state.stars >= 50 ? '#F9951E' :'#CCC'} />
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 100 ? '#F9951E' :'#CCC'}]}></View>
                    <MaterialIcons name="ramen-dining" size={24} color={state.stars >= 100 ? '#F9951E' :'#CCC'} />
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 150 ? '#F9951E' :'#CCC'}]}></View>
                    <MaterialIcons name="ramen-dining" size={24} color={state.stars >= 150 ? '#F9951E' :'#CCC'} />
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? '#F9951E' :'#CCC'}]}></View>
                    <MaterialIcons name="ramen-dining" size={24} color={state.stars >= 200 ? '#F9951E' :'#CCC'} />
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? '#F9951E' :'#CCC'}]}></View>
                </View>
                
                <View style={[st.d_flex, st.flex_row, st.justify_center, st.align_center]}>
                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_14, {color:"#666",width:40}]}>25</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_14, {color:"#666",width:40}]}>50</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_14, {color:"#666",width:40}]}>100</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_14, {color:"#666",width:40}]}>150</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_14, {color:"#666", width:40}, ]}>200+</Text>

                    <View style={[st.col, {height:3}]}></View>
                    


                
                </View>
                
            </View>
        

        </ScrollView>
    </View>
    )
}
