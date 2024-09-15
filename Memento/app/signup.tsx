import { StyleSheet, View, Text, Pressable, ScrollView} from "react-native";
import { Image } from 'expo-image';
import {Link, useLocalSearchParams} from 'expo-router';
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const { type } = useLocalSearchParams<{ type: string }>();
	const auth = FIREBASE_AUTH;

	const signUp = async () => {
		setLoading(true);
		try {
			const response = await createUserWithEmailAndPassword(auth,email,password);
			console.log(response);
			alert('Check your emails!');
		} catch(error : any){
			console.log(error);
			alert('Registeration failed:' + error.message);
		}finally {
			setLoading(false);
		}
	}
  	
  	return (
		<ScrollView>
				<View style={styles.registrationScreenPart2}>
	<Image style={[styles.ripplepic2Icon, styles.iconLayout]} contentFit="cover" source="assets/images/ripplepic.png" />
	<Image style={[styles.fishes1Icon, styles.iconLayout]} contentFit="cover" source="assets/images/fishes.png" />
	<View style={[styles.registrationScreenPart2Child, styles.childShadowBox]} />
	<View style={[styles.birthday, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.birthday1, styles.email1Layout]}>Birthday</Text>
	</View>
	<View style={[styles.number, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.birthday1, styles.email1Layout]}>Phone Number</Text>
	</View>
	<View style={[styles.email, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.email1, styles.email1Layout]}>Email</Text>
	</View>
	<View style={[styles.fullName, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.fullName1, styles.email1Layout]}>Full Name</Text>
	</View>
	<View style={[styles.password, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.fullName1, styles.email1Layout]}>Password</Text>
	</View>
	<View style={[styles.email2, styles.emailLayout]}>
	<View style={styles.birthdayChild} />
	<Text style={[styles.birthday1, styles.email1Layout]}>Confirm Password</Text>
	</View>
	<Text style={styles.signUp}>Sign Up</Text>
	<Image style={styles.registrationScreenPart2Item} contentFit="cover" source="assets/images/Group 1.png" />
	<View style={styles.rectangleParent}>
	<View style={[styles.groupChild, styles.groupLayout]} />
	<View style={[styles.groupItem, styles.groupLayout]} />
	<View style={[styles.groupInner, styles.groupLayout]} />
	<Text style={[styles.genderFluid, styles.maleTypo]}>Gender Fluid</Text>
	<Text style={[styles.male, styles.maleTypo]}>Male</Text>
	<Text style={[styles.female, styles.maleTypo]}>Female</Text>
	<Text style={[styles.gender, styles.email1Layout]}>Gender</Text>
	</View>
	<View style={styles.rectangleGroup}>
	<View style={[styles.rectangleView, styles.groupChildPosition]} />
	<View style={[styles.groupChild1, styles.groupChild1Layout]} />
	<View style={[styles.groupChild2, styles.groupChildPosition]} />
	<Text style={[styles.familyMember, styles.patientFlexBox]}>Family member</Text>
	<Text style={[styles.caretaker, styles.patientFlexBox]}>Caretaker</Text>
	<Text style={[styles.patient, styles.patientFlexBox]}>Patient</Text>
	<Text style={[styles.areYouThe, styles.areYouThePosition]}>Are you the patient, primary caretaker or family member?</Text>
	</View>
	<View style={[styles.relations, styles.relationsLayout]}>
	<View style={styles.relationsChild} />
	<Text style={[styles.relationsToThe, styles.email1Layout]}>Relations to the patient</Text>
	</View>
	<View style={[styles.condition, styles.relationsLayout]}>
	<View style={styles.relationsChild} />
	<Text style={[styles.condition1, styles.areYouThePosition]}>Condition</Text>
	</View>
	</View>
	<Link href="/dashboard" style={[styles.submitButton, styles.submitLayout]}>
	<Pressable style={[styles.submitButtonChild, styles.submitLayout]}>
	<Text style={[styles.submit]}>Submit</Text>
	</Pressable>
	</Link>
						</ScrollView>
						);
      			};
      			
      			const styles = StyleSheet.create({
					iconLayout: {
					width: 430,
					position: "absolute"
					},
					childShadowBox: {
					shadowOpacity: 1,
					elevation: 4,
					shadowRadius: 4,
					shadowOffset: {
					width: 0,
					height: 4
					},
					shadowColor: "rgba(0, 0, 0, 0.25)",
					left: 0
					},
					emailLayout: {
					height: 23,
					width: 349,
					position: "absolute"
					},
					email1Layout: {
					height: 22,
					textAlign: "left"
					},
					groupLayout: {
					height: 25,
					borderRadius: 10,
					top: 29,
					backgroundColor: "#d9d9d9",
					position: "absolute"
					},
					maleTypo: {
					height: 11,
					fontSize: 11,
					top: 36,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					groupChildPosition: {
					top: 67,
					height: 25,
					backgroundColor: "#d9d9d9",
					borderRadius: 10,
					position: "absolute"
					},
					groupChild1Layout: {
					width: 103,
					left: 242
					},
					patientFlexBox: {
					top: 74,
					height: 11,
					justifyContent: "center",
					fontSize: 11,
					textAlign: "center",
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					areYouThePosition: {
					left: 1,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					top: 0,
					position: "absolute"
					},
					relationsLayout: {
					height: 48,
					position: "absolute"
					},
					submitLayout: {
					height: 31,
					width: 120,
					position: "absolute"
					},
					ripplepic2Icon: {
					height: 349,
					left: 0,
					top: 0
					},
					fishes1Icon: {
					height: 430,
					left: 0,
					top: 0
					},
					registrationScreenPart2Child: {
					top: 210,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
					backgroundColor: "#fffbfb",
					height: 722,
					width: 430,
					position: "absolute"
					},
					birthdayChild: {
					top: 22,
					borderStyle: "solid",
					borderColor: "#000",
					borderTopWidth: 1,
					width: 350,
					height: 1,
					left: 0,
					position: "absolute"
					},
					birthday1: {
					width: 132,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					birthday: {
					top: 670,
					left: 34
					},
					number: {
					top: 712,
					left: 34
					},
					email1: {
					width: 49,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					email: {
					top: 473,
					left: 35
					},
					fullName1: {
					width: 76,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					fullName: {
					top: 432,
					left: 35
					},
					password: {
					top: 514,
					left: 35
					},
					email2: {
					top: 555,
					left: 35
					},
					signUp: {
					top: 255,
					fontSize: 40,
					color: "#ff8e47",
					textAlign: "center",
					left: 35,
					fontFamily: "Belgrano-Regular",
					position: "absolute"
					},
					registrationScreenPart2Item: {
					top: 184,
					left: 198,
					width: 34,
					height: 12,
					position: "absolute"
					},
					groupChild: {
					width: 77,
					left: 0
					},
					groupItem: {
					left: 91,
					width: 77
					},
					groupInner: {
					left: 185,
					width: 90
					},
					genderFluid: {
					left: 188,
					width: 81
					},
					male: {
					left: 103,
					width: 53
					},
					female: {
					left: 11,
					width: 53
					},
					gender: {
					width: 64,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					rectangleParent: {
					top: 597,
					width: 275,
					height: 54,
					left: 34,
					position: "absolute"
					},
					rectangleView: {
					width: 77,
					left: 0
					},
					groupChild1: {
					top: 67,
					height: 25,
					backgroundColor: "#d9d9d9",
					borderRadius: 10,
					position: "absolute"
					},
					groupChild2: {
					left: 121,
					width: 77
					},
					familyMember: {
					width: 103,
					left: 242
					},
					caretaker: {
					left: 130,
					width: 59
					},
					patient: {
					left: 12,
					width: 53
					},
					areYouThe: {
					width: 344,
					height: 32,
					justifyContent: "center",
					left: 1,
					textAlign: "center"
					},
					rectangleGroup: {
					top: 321,
					width: 345,
					height: 92,
					left: 34,
					position: "absolute"
					},
					relationsChild: {
					top: 25,
					width: 131,
					backgroundColor: "#d9d9d9",
					height: 23,
					left: 0,
					position: "absolute"
					},
					relationsToThe: {
					width: 168,
					alignItems: "center",
					display: "flex",
					color: "#000",
					fontFamily: "Belgrano-Regular",
					fontSize: 14,
					height: 22,
					textAlign: "left",
					position: "absolute",
					left: 0,
					top: 0
					},
					relations: {
					top: 753,
					width: 168,
					left: 35
					},
					condition1: {
					width: 168,
					height: 22,
					textAlign: "left",
					left: 1
					},
					condition: {
					top: 809,
					width: 169,
					left: 34
					},
					submitButtonChild: {
					borderRadius: 20,
					backgroundColor: "#ff8e47",
					shadowOpacity: 1,
					elevation: 4,
					shadowRadius: 4,
					shadowOffset: {
					width: 0,
					height: 4
					},
					shadowColor: "rgba(0, 0, 0, 0.25)",
					left: 0,
					top: 0
					},
					submit: {
						top: 7,
						left: 35,
						width: 54,
						alignItems: "center",
						display: "flex",
						color: "#000",
						fontFamily: "Belgrano-Regular",
						fontSize: 14,
						height: 22,
						textAlign: "center",
						position: "absolute"
					},
					submitButton: {
					top: 876,
					left: 155
					},
					registrationScreenPart2: {
					backgroundColor: "#558cbf",
					flex: 1,
					width: "100%",
					height: 932,
					overflow: "hidden"
					}
					});
					