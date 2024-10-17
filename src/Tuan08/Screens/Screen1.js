import { View, StyleSheet, Text, FlatList, TextInput, Pressable, Image } from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function DonutItem({item}) {
    return (
        <View style={{flexDirection: 'row', width: '100%', height: 115, backgroundColor: '#F4DDDD', borderRadius: 10, alignItems: 'center', marginTop: 10}}>
            <Image source={require('../assets/donut_yellow.png')} style={{borderRadius: 10, marginRight: 10, marginLeft: 10}}></Image>
            <View style={{height: '100%', justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 20, fontWeight: '700'}}>{item.name}</Text>
                <Text style={{fontSize: 15, fontWeight: '700', color: '#0000008A'}}>{item.description}</Text>
                <Text style={{fontSize: 20, fontWeight: '700'}}>{USDollar.format(item.price)}</Text>
            </View>
            <Pressable style={{position: 'absolute', bottom: 0, right: 0}}>
                <Image source={require('../assets/plus_button.png')}></Image>
            </Pressable>
        </View>
    );
}

const Screen1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://67111bf34eca2acdb5f3b0a9.mockapi.io/donuts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error));
    }, []);

    // console.log(data);

    return (
        <View style={styles.container}>
            <View style={{flex: 1, width: '100%', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 14, paddingRight: 14}}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>Welcome, Jala!</Text>
                <Text style={{fontSize: 20, fontWeight: '700'}}>Choice you Best food</Text>
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
                    <TextInput placeholder='Search food'
                        style={{width: 266, height: 46, borderColor: '#C4C4C4', backgroundColor: '#C4C4C41A', borderWidth: 1, borderRadius: 3}}
                    ></TextInput>
                    <Pressable style={{width: 50, height: 50, backgroundColor: '#F1B000', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/search.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={{flex: 3.5, padding: 14}}>
                <View style={styles.rowContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Donut</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Pink Donut</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Floating</Text>
                    </Pressable>
                </View>
                <View>
                    {/* <DonutItem DonutItem={data[0]}></DonutItem> */}
                    <FlatList
                        data={data}
                        renderItem={({item}) => <DonutItem item={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 101,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00000033',
        backgroundColor: '#C4C4C42B'
    }, 
    buttonText: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 35,
    }
});

export default Screen1;