import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Pressable,
	Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { IconSvg, LogoSvg } from "../svg";
import { spacing } from "../theme/spacing";

export default function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<View style={styles.icon}>
				<LogoSvg />
			</View>
			<View style={styles.details}>
				<IconSvg />
				<Text style={styles.title}>Non-Contact {"\n"} Deliveries</Text>
				<Text style={styles.desc}>
					When placing an order, select the option “Contactless delivery” and
					the courier will leave your order at the door.
				</Text>
				<Pressable style={styles.orderBtn}>
					<Text style={styles.btnText}>Order Now</Text>
				</Pressable>
				<Text style={styles.dismiss}>Dismiss</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg.primary,
		paddingTop: spacing[10],
	},
	icon: {
		flex: 1,
	},
	details: {
		paddingVertical: spacing[5],
		paddingHorizontal: spacing[5],
		alignItems: "center",
		backgroundColor: colors.bg.light,
		borderTopRightRadius: spacing[5],
		borderTopLeftRadius: spacing[5],
	},
	title: {
		fontSize: 34,
		fontWeight: "700",
		textAlign: "center",
		color: colors.text.primary,
		marginVertical: spacing[4],
	},
	desc: {
		fontSize: 17,
		fontWeight: "400",
		textAlign: "center",
		color: colors.text.secondary,
	},
	orderBtn: {
		alignItems: "center",
		justifyContent: "center",
		marginVertical: spacing[4],
		height: 45,
		width: "100%",
		backgroundColor: colors.primaryBtn,
		borderRadius: spacing[2],
	},
	btnText: {
		fontSize: 15,
		fontWeight: "600",
		color: colors.text.white,
		textTransform: "uppercase",
	},
	dismiss: {
		fontSize: 15,
		fontWeight: "600",
		color: colors.text.secondary,
		textTransform: "uppercase",
	},
});
