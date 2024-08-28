import * as React from "react";
import {StyleSheet, View, Text, Pressable} from "react-native";
import { Image } from 'expo-image';

export default function login() {
  	
  	return (
    		<View style={styles.loginScreen}>
      			<View style={styles.loginScreenChild} />
      			<Pressable style={styles.dontHaveAnContainer} onPress={()=>{}}>
        				<Text style={styles.text}>
          					<Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
          					<Text style={styles.signUp}>Sign Up</Text>
        				</Text>
      			</Pressable>
      			<View style={[styles.google, styles.googleLayout]}>
        				<View style={[styles.googleChild, styles.childPosition]} />
        				<Text style={styles.google1}>Google</Text>
        				<Image style={styles.vectorIcon} source="Vector.png" />
      			</View>
      			<Text style={styles.logIn}>Log In</Text>
      			<View style={[styles.password, styles.emailPosition]}>
        				<View style={[styles.passwordChild, styles.childLayout]} />
        				<Text style={[styles.password1, styles.email1Typo]}>Password</Text>
      			</View>
      			<View style={[styles.email, styles.emailPosition]}>
        				<View style={[styles.emailChild, styles.childLayout]} />
        				<Text style={[styles.email1, styles.email1Layout]}>Email</Text>
      			</View>
      			<View style={[styles.logIn1, styles.logLayout]}>
        				<View style={[styles.logInChild, styles.logLayout]} />
        				<Text style={[styles.logIn2, styles.logIn2FlexBox]}>Log In</Text>
      			</View>
      			<Text style={[styles.forgotPassword, styles.logIn2FlexBox]}>Forgot password?</Text>
        				<Image style={[styles.ripplepic1Icon, styles.iconPosition]} source="ripplepic.png" />
        				<Image style={[styles.untitledArtwork1Icon, styles.iconPosition]} source="fullpad.png" />
        				</View>);
      			};
      			
      			const styles = StyleSheet.create({
        				googleLayout: {
          					height: 37,
          					width: 118,
          					position: "absolute"
        				},
        				childPosition: {
          					borderRadius: 20,
          					top: 0,
          					left: 0
        				},
        				emailPosition: {
          					width: 349,
          					left: 35,
          					position: "absolute"
        				},
        				childLayout: {
          					height: 1,
          					width: 350,
          					borderTopWidth: 1,
          					borderColor: "#000",
          					borderStyle: "solid",
          					left: 0,
          					position: "absolute"
        				},
        				email1Typo: {
          					fontSize: 14,
          					alignItems: "center",
          					display: "flex",
          					textAlign: "left",
          					top: 0,
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				email1Layout: {
          					height: 22,
          					left: 0
        				},
        				logLayout: {
          					height: 55,
          					width: 345,
          					position: "absolute"
        				},
        				logIn2FlexBox: {
          					justifyContent: "center",
          					alignItems: "center",
          					display: "flex",
          					color: "#000",
          					textAlign: "center",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				iconPosition: {
          					top: 0,
          					width: 430,
          					position: "absolute"
        				},
        				loginScreenChild: {
          					top: 332,
          					shadowColor: "rgba(0, 0, 0, 0.25)",
          					shadowOffset: {
            						width: 0,
            						height: 4
          					},
          					shadowRadius: 4,
          					elevation: 4,
          					shadowOpacity: 1,
          					borderTopLeftRadius: 40,
          					borderTopRightRadius: 40,
          					backgroundColor: "#fffbfb",
          					height: 600,
          					width: 430,
          					left: 0,
          					position: "absolute"
        				},
        				dontHaveAn: {
          					color: "#000"
        				},
        				signUp: {
          					color: "#ff8e47"
        				},
        				text: {
          					textAlign: "center",
          					fontFamily: "Belgrano-Regular",
          					fontSize: 12
        				},
        				dontHaveAnContainer: {
          					left: 121,
          					top: 836,
          					position: "absolute"
        				},
        				googleChild: {
          					backgroundColor: "#e7e7e7",
          					height: 37,
          					width: 118,
          					position: "absolute"
        				},
        				google1: {
          					left: 46,
          					width: 42,
          					height: 13,
          					alignItems: "center",
          					display: "flex",
          					textAlign: "left",
          					top: 12,
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					fontSize: 12,
          					position: "absolute"
        				},
        				vectorIcon: {
          					top: 8,
          					left: 7,
          					width: 19,
          					height: 21,
          					position: "absolute"
        				},
        				google: {
          					top: 789,
          					left: 163
        				},
        				logIn: {
          					top: 378,
          					fontSize: 40,
          					left: 35,
          					color: "#ff8e47",
          					textAlign: "center",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				passwordChild: {
          					top: 18
        				},
        				password1: {
          					width: 81,
          					height: 17,
          					left: 0
        				},
        				password: {
          					top: 568,
          					height: 18
        				},
        				emailChild: {
          					top: 22
        				},
        				email1: {
          					width: 49,
          					fontSize: 14,
          					alignItems: "center",
          					display: "flex",
          					textAlign: "left",
          					top: 0,
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				email: {
          					top: 487,
          					height: 23
        				},
        				logInChild: {
          					backgroundColor: "#ff8e47",
          					borderRadius: 20,
          					top: 0,
          					left: 0
        				},
        				logIn2: {
          					left: 140,
          					fontSize: 16,
          					width: 60,
          					height: 31,
          					top: 12,
          					justifyContent: "center"
        				},
        				logIn1: {
          					top: 644,
          					left: 39
        				},
        				forgotPassword: {
          					top: 709,
          					height: 22,
          					left: 0,
          					justifyContent: "center",
          					fontSize: 12,
          					width: 430
        				},
        				ripplepic1Icon: {
          					height: 331,
          					left: 0
        				},
        				untitledArtwork1Icon: {
          					left: -36,
          					height: 347
        				},
        				loginScreen: {
          					backgroundColor: "#558cbf",
          					flex: 1,
          					width: "100%",
          					height: 932,
          					overflow: "hidden"
        				}
      			});
      			
