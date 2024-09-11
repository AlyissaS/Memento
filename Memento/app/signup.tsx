import { StyleSheet, View, Text, Pressable} from "react-native";
import { Image } from 'expo-image';
import {Link} from 'expo-router';

export default function SignUpScreen() {
  	
  	return (
    		<View style={styles.registrationScreenPart2}>
      			<Image style={[styles.ripplepicIcon, styles.iconLayout]}contentFit="cover" source="assets/images/ripplepic.png" />
      			<Image style={[styles.fishesIcon, styles.iconLayout]} contentFit="cover" source="assets/images/fishes.png" />
      			<View style={[styles.registrationScreenPart2Child, styles.rectanglePressableShadowBox]} />
      			<View style={[styles.email, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.birthday, styles.email3Typo]}>Birthday</Text>
      			</View>
      			<View style={[styles.email1, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.birthday, styles.email3Typo]}>Phone Number</Text>
      			</View>
      			<View style={[styles.email2, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.email3, styles.email3Typo]}>Email</Text>
      			</View>
      			<View style={[styles.fullName, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.fullName1, styles.email3Typo]}>Full Name</Text>
      			</View>
      			<View style={[styles.password, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.fullName1, styles.email3Typo]}>Password</Text>
      			</View>
      			<View style={[styles.email4, styles.emailLayout]}>
        				<View style={styles.emailChild} />
        				<Text style={[styles.birthday, styles.email3Typo]}>Confirm Password</Text>
      			</View>
      			<Text style={styles.signUp}>Sign Up</Text>
      			<Image style={styles.registrationScreenPart2Item} contentFit="cover" source="assets/images/Group 1.png" />
      			<Text style={styles.areYouThe}>Are you the patient, primary caretaker or family member?</Text>
        				<View style={styles.rectangleParent}>
          					<View style={[styles.groupChild, styles.groupLayout]} />
          					<View style={[styles.groupItem, styles.groupLayout]} />
          					<View style={[styles.groupInner, styles.groupLayout]} />
          					<View style={[styles.rectangleView, styles.groupChildPosition]} />
          					<View style={[styles.groupChild1, styles.groupChildPosition]} />
          					<View style={[styles.groupChild2, styles.groupChildPosition]} />
        				</View>
        				<Text style={[styles.patient, styles.patientTypo]}>Patient</Text>
        				<Text style={[styles.female, styles.maleTypo]}>Female</Text>
        				<Text style={[styles.male, styles.maleTypo]}>Male</Text>
        				<Text style={[styles.genderFluid, styles.maleTypo]}>Gender Fluid</Text>
        				<Text style={[styles.caretaker, styles.patientTypo]}>Caretaker</Text>
        				<Text style={[styles.familyMember, styles.patientTypo]}>Family member</Text>
        				<Text style={[styles.gender, styles.email3Typo]}>Gender</Text>
        				<Text style={[styles.relationsToThe, styles.conditionTypo]}>Relations to the patient</Text>
        				<Text style={[styles.condition, styles.conditionTypo]}>Condition</Text>
        				<View style={[styles.registrationScreenPart2Inner, styles.registrationLayout]} />
        				<View style={[styles.registrationScreenPart2Child1, styles.registrationLayout]} />
                        <Link href="/dashboard">
        				<Pressable style={[styles.rectanglePressable, styles.rectanglePressableShadowBox]}/>
        				<Text style={[styles.submit, styles.email3Typo]}>Submit</Text>
                        </Link>
        				</View>);
      			};
      			
      			const styles = StyleSheet.create({
        				iconLayout: {
          					width: 430,
          					left: 0
        				},
        				rectanglePressableShadowBox: {
          					shadowOpacity: 1,
          					elevation: 4,
          					shadowRadius: 4,
          					shadowOffset: {
            						width: 0,
            						height: 4
          					},
          					shadowColor: "rgba(0, 0, 0, 0.25)",
          					position: "absolute"
        				},
        				emailLayout: {
          					height: 23,
          					width: 349,
          					position: "absolute"
        				},
        				email3Typo: {
          					height: 22,
          					alignItems: "center",
          					display: "flex",
          					textAlign: "left",
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					fontSize: 14,
          					position: "absolute"
        				},
        				groupLayout: {
          					height: 25,
          					backgroundColor: "#d9d9d9",
          					borderRadius: 10,
          					top: 0,
          					position: "absolute"
        				},
        				groupChildPosition: {
          					top: 251,
          					height: 25,
          					backgroundColor: "#d9d9d9",
          					borderRadius: 10,
          					position: "absolute"
        				},
        				patientTypo: {
          					height: 11,
          					fontSize: 11,
          					top: 403,
          					justifyContent: "center",
          					textAlign: "center",
          					alignItems: "center",
          					display: "flex",
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				maleTypo: {
          					top: 654,
          					height: 11,
          					fontSize: 11,
          					justifyContent: "center",
          					textAlign: "center",
          					alignItems: "center",
          					display: "flex",
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					position: "absolute"
        				},
        				conditionTypo: {
          					width: 168,
          					left: 35,
          					height: 22,
          					alignItems: "center",
          					display: "flex",
          					textAlign: "left",
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					fontSize: 14,
          					position: "absolute"
        				},
        				registrationLayout: {
          					width: 131,
          					backgroundColor: "#d9d9d9",
          					height: 23,
          					position: "absolute"
        				},
        				ripplepicIcon: {
          					height: 349,
          					top: 0,
          					position: "absolute"
        				},
        				fishesIcon: {
          					height: 430,
          					top: 0,
          					position: "absolute"
        				},
        				registrationScreenPart2Child: {
          					top: 210,
          					borderTopLeftRadius: 40,
          					borderTopRightRadius: 40,
          					backgroundColor: "#fffbfb",
          					height: 722,
          					width: 430,
          					left: 0
        				},
        				emailChild: {
          					top: 22,
          					borderStyle: "solid",
          					borderColor: "#000",
          					borderTopWidth: 1,
          					width: 350,
          					height: 1,
          					left: 0,
          					position: "absolute"
        				},
        				birthday: {
          					width: 132,
          					left: 0,
          					top: 0
        				},
        				email: {
          					top: 686,
          					left: 34
        				},
        				email1: {
          					top: 723,
          					left: 34
        				},
        				email3: {
          					width: 49,
          					left: 0,
          					top: 0
        				},
        				email2: {
          					top: 494,
          					left: 35
        				},
        				fullName1: {
          					width: 76,
          					left: 0,
          					top: 0
        				},
        				fullName: {
          					top: 451,
          					left: 35
        				},
        				password: {
          					top: 538,
          					left: 35
        				},
        				email4: {
          					top: 578,
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
        				areYouThe: {
          					top: 343,
          					width: 344,
          					height: 32,
          					justifyContent: "center",
          					textAlign: "center",
          					left: 35,
          					alignItems: "center",
          					display: "flex",
          					color: "#000",
          					fontFamily: "Belgrano-Regular",
          					fontSize: 14,
          					position: "absolute"
        				},
        				groupChild: {
          					left: 242,
          					width: 103
        				},
        				groupItem: {
          					left: 121,
          					width: 77
        				},
        				groupInner: {
          					width: 77,
          					left: 0
        				},
        				rectangleView: {
          					left: 1,
          					width: 77
        				},
        				groupChild1: {
          					left: 92,
          					width: 77
        				},
        				groupChild2: {
          					left: 186,
          					width: 90
        				},
        				rectangleParent: {
          					top: 396,
          					width: 345,
          					height: 276,
          					left: 34,
          					position: "absolute"
        				},
        				patient: {
          					width: 53,
          					left: 46
        				},
        				female: {
          					width: 53,
          					left: 46
        				},
        				male: {
          					left: 138,
          					width: 53
        				},
        				genderFluid: {
          					left: 223,
          					width: 81
        				},
        				caretaker: {
          					left: 164,
          					width: 59
        				},
        				familyMember: {
          					left: 276,
          					width: 103
        				},
        				gender: {
          					top: 618,
          					width: 64,
          					left: 35
        				},
        				relationsToThe: {
          					top: 767
        				},
        				condition: {
          					top: 829
        				},
        				registrationScreenPart2Inner: {
          					top: 792,
          					left: 35
        				},
        				registrationScreenPart2Child1: {
          					top: 854,
          					left: 34
        				},
        				rectanglePressable: {
          					top: 877,
          					left: 259,
          					borderRadius: 20,
          					backgroundColor: "#ff8e47",
          					width: 120,
          					height: 31
        				},
        				submit: {
          					top: 882,
          					left: 292,
          					width: 54
        				},
        				registrationScreenPart2: {
          					backgroundColor: "#558cbf",
          					flex: 1,
          					width: "100%",
          					height: 932,
          					overflow: "hidden"
        				}
      			});
      			