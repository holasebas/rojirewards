import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { st } from '../../styles/utils'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../styles/colors';


export default function UserHomeView() {

    const [state, setState] = useState({
        stars:100
    })
    return (
    <View style={[, st.d_flex, st.col, st.bg_black]}>
        <View style={[{height:90}, st.d_flex, st.justify_end, st.pb_15, st.align_center]}>
            <Text>ROJI</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={[]}>

            <View style={[st.px_15, st.py_15]}>
                <Text style={[st.f_26, st.text_white]}>Good morning, <Text style={[st.bold,st.text_orange]}>Sebastian</Text></Text>
            </View>

            <View style={[st.px_15]}>
                <View style={[st.d_flex, st.flex_row, st.align_center]}>
                    <Text style={[st.f_36, st.bold, st.text_white, st.pe_5]}>{state.stars}</Text>
                    <AntDesign name="star" size={24} color={colors.red} />
                </View>
                <Text style={[st.px_5, st.text_white]}>Rojis</Text>
            </View>

            <View style={[st.px_15, st.my_15]}>
                <View style={[st.d_flex, st.flex_row, st.justify_center, st.align_center]}>

                    <View style={[st.col, {height:3, backgroundColor:state.stars >= 25 ? colors.red :colors.white}]}></View>
                    <View style={[st.relative]}>
                    <AntDesign name="star" size={24} color={state.stars >= 25 ? colors.red:colors.white} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, st.bold, st.text_white]}>25</Text>
                        </View>
                    </View>
    
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 50 ? colors.red :colors.white}]}></View>
                    <View style={[st.relative]}>
                    <AntDesign name="star" size={24} color={state.stars >= 50 ? colors.red:colors.white} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, st.bold, st.text_white]}>50</Text>
                        </View>
                    </View>

                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 100 ? colors.red : colors.white}]}></View>
                    <View style={[st.relative]}>
                    <AntDesign name="star" size={24} color={state.stars >= 100 ? colors.red:colors.white} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, st.bold, st.text_white]}>100</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 150 ? colors.red :colors.gray}]}></View>
                    <View style={[st.relative]}>
                    <AntDesign name="star" size={24} color={state.stars >= 150 ? colors.red:colors.white} />
                        <View style={[st.absolute, , st.w_100, {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center,st.bold, st.text_white]}>150</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? colors.red :colors.white}]}></View>
                    <View style={[st.relative]}>
                    <AntDesign name="star" size={30} color={state.stars >= 200 ? colors.red:colors.white} />
                        <View style={[st.absolute, , {bottom:-15}]}>
                            <Text style={[st.f_12, st.text_center, st.bold, st.text_white]}>200</Text>
                        </View>
                    </View>
                    <View style={[st.col,{height:3, backgroundColor:state.stars >= 200 ? colors.red :colors.white}]}></View>
                </View>
            </View>

            <View style={[st.px_10, st.mt_15, ]}>

                <View style={[st.card, st.bg_white, st.mt_15]}>

                  

                    <View style={[st.d_flex,{height:150}]}>
                        <Image style={[st.rt_15,{ height:'100%', resizeMode:'cover'}]} source={{uri:'https://api.lorem.space/image/drink?w=400&h=200'}}></Image>
                    </View>

                    <View style={[st.p_10]}>

                        <Text style={[st.f_18, st.bold, st.my_10]}>
                            Lorem Ipsum is simply dummy
                        </Text>

                        <Text style={[st.f_14]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Text>
                        <View style={[st.col]}></View>

                        <View style={[st.d_flex, st.flex_row, st.mt_15]}>
                            <View style={[st.col]}></View>

                            <TouchableOpacity style={[st.r_100, st.border_red, st.bg_red, st.px_30, st.py_10 ]}>
                                <Text style={[st.bold, st.text_white]}>Detalles</Text>
                            </TouchableOpacity>

                        </View>


                    </View>

              

                  
                </View>


                <View style={[{height:100}]}></View>


            </View>
        

        </ScrollView>
    </View>
    )
}
