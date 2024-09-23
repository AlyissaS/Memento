import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Bubble, GiftedChat, MessageProps } from 'react-native-gifted-chat';

interface IMessage {
    _id: string | number; 
    text: string;
    createdAt: number;
    user: {
        _id: number;
    };
}

const Chat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleInputText = (text: string) => {
        setInputMessage(text);
    };

    const renderMessage = (props: MessageProps<IMessage>) => {
        const { currentMessage } = props;

        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: currentMessage.user._id === 1 ? "flex-end" : "flex-start" }}>
                <Bubble {...props}
                    wrapperStyle={{
                        right: {
                            backgroundColor: "white",
                            marginRight: 12,
                            marginVertical: 12
                        },
                        left: {
                            backgroundColor: "lightgray",
                            marginLeft: 12,
                            marginVertical: 12
                        }
                    }}
                    textStyle={{
                        right: {
                            color: "black",
                            fontWeight: "bold"
                        },
                        left: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }}
                />
            </View>
        );
    };

    const submitHandler = () => {
        const message: IMessage = {
            _id: Math.random().toString(36).substring(7),
            text: inputMessage,
            createdAt: new Date().getTime(),
            user: { _id: 1 }
        };

        setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));
        setInputMessage("");
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <GiftedChat
                    messages={messages}
                    renderInputToolbar={() => null}
                    user={{ _id: 1 }}
                    minInputToolbarHeight={0}
                    renderMessage={renderMessage}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputMessageContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here..."
                            placeholderTextColor="black"
                            value={inputMessage}
                            onChangeText={handleInputText}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={submitHandler}>
                            <FontAwesome name="send" size={22} color={"Black"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        height: 72,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputMessageContainer: {
        height: 54,
        width: '90%',
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 16,
        alignItems: 'center',
        borderColor: "rgba(128,128,128,.4)",
        borderWidth: 1,
        top: -70
    },
    input: {
        color: "black",
        flex: 1,
        paddingHorizontal: 10,
    },
    sendButton: {
        backgroundColor: "white",
        padding: 4,
        borderRadius: 999,
        marginHorizontal: 6
    }
});

export default Chat;
