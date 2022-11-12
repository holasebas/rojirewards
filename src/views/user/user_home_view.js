import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { st } from '../../styles/utils'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../styles/colors';


export default function UserHomeView() {

    const [state, setState] = useState({
        stars:124
    })
    return (
    <View style={[, st.d_flex, st.col, st.bg_white]}>
        <View style={[{height:90}, st.d_flex, st.justify_end, st.pb_15, st.align_center]}>
            <Text>ROJI</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={[]}>

            <View style={[st.px_15, st.py_15]}>
                <Text style={[st.f_26]}>Good morning, <Text style={[st.bold,{color:colors.blue}]}>Sebastian</Text></Text>
            </View>

            <View style={[st.px_15]}>
                <View style={[st.d_flex, st.flex_row, st.align_center]}>
                    <Text style={[st.f_36, st.bold]}>{state.stars}</Text>
                    <AntDesign name="star" size={24} color={colors.orange} />
                </View>
                <Text style={[st.px_5]}>Rojis</Text>
            </View>

            <View style={[st.px_15, st.mt_15]}>
                <View style={[st.d_flex, st.flex_row, st.justify_center, st.align_center]}>

                    <View style={[st.col, {height:3, backgroundColor:state.stars >= 25 ? '#F9951E' :'#CCC'}]}></View>
                    <View style={[st.relative]}>
                        <MaterialIcons style={[]} name="ramen-dining" size={24} color={state.stars >= 25 ? colors.orange:colors.gray} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, {color:"#666"}]}>25</Text>
                        </View>
                    </View>
    
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 50 ? colors.orange :colors.gray}]}></View>
                    <View style={[st.relative]}>
                        <MaterialIcons style={[]} name="ramen-dining" size={24} color={state.stars >= 50 ? colors.orange:colors.gray} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, {color:"#666"}]}>50</Text>
                        </View>
                    </View>

                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 100 ? colors.orange : colors.gray}]}></View>
                    <View style={[st.relative]}>
                        <MaterialIcons style={[]} name="ramen-dining" size={24} color={state.stars >= 100 ? colors.orange:colors.gray} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, {color:"#666"}]}>100</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 150 ? colors.orange :colors.gray}]}></View>
                    <View style={[st.relative]}>
                        <MaterialIcons style={[]} name="ramen-dining" size={24} color={state.stars >= 150 ? colors.orange:colors.gray} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, {color:"#666"}]}>150</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? colors.orange :colors.gray}]}></View>
                    <View style={[st.relative]}>
                        <MaterialIcons style={[]} name="ramen-dining" size={26} color={state.stars >= 200 ? colors.orange:colors.gray} />
                        <View style={[st.absolute, , {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, {color:"#666"}]}>200</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? colors.orange :colors.gray}]}></View>
                </View>
                
                {/* <View style={[st.d_flex, st.flex_row, st.justify_center, st.align_center]}>
                    <View style={[st.col, {height:3, }]}></View>
                    <Text style={[st.f_12, st.text_center, , {color:"#666", width:30}]}>25</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_12, st.text_center, , {color:"#666",width:30}]}>50</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_12, st.text_center, , {color:"#666",width:30}]}>10</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_12, st.text_center, , {color:"#666",width:30}]}>10</Text>

                    <View style={[st.col, {height:3}]}></View>
                    <Text style={[st.f_12, st.text_center, , {color:"#666",width:30}, ]}>2+</Text>

                    <View style={[st.col, {height:3}]}></View>
                </View> */}
                
            </View>

            <View style={[st.px_10, st.mt_15, st.border,  {height:400}]}>

                <View style={[st.card]}>

                  

                    <View style={[st.d_flex,{height:150}]}>
                        <Image style={[st.rt_5,{ height:'100%', resizeMode:'cover'}]} source={{uri:'https://api.lorem.space/image/drink?w=400&h=200'}}></Image>
                    </View>

                    <View style={[st.p_10]}>

                        <Text style={[st.f_16, st.bold, st.my_5, {color:colors.blue}]}>
                            Lorem Ipsum is simply dummy
                        </Text>

                        <Text style={[st.f_14, {color:'#555'}]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Text>
                        <View style={[st.col]}><Text>asd asd as dsadasd as </Text></View>

                        <View style={[st.d_flex, st.flex_row, st.mt_15]}>
                            <View style={[st.col]}></View>

                            <TouchableOpacity style={[st.r_100, st.border_blue, st.bg_white, st.px_30, st.py_10 ]}>
                                <Text style={[st.bold, st.text_blue]}>Detalles</Text>
                            </TouchableOpacity>

                        </View>


                    </View>

              

                  
                </View>


            </View>
        

        </ScrollView>
    </View>
    )
}
