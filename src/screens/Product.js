import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Pressable,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { FontAwesome } from "@expo/vector-icons";

export default function Product() {
	return (
		<ScrollView>
			<View style={styles.imageView}>
				<Image source={require("../../assets/image/lettuce.png")} />
			</View>
			<View style={styles.productDetails}>
				<Text style={styles.productTitle}>Boston Lettuce</Text>
				<View style={styles.productPrice}>
					<Text style={styles.price}>1.10</Text>
					<Text style={styles.priceWord}>€ / piece</Text>
				</View>
				<Text style={styles.productWeight}>~ 150 gr / piece</Text>
				<Text style={styles.productSubTitle}>Spain</Text>
				<Text style={styles.productDesc}>
					Lettuce is an annual plant of the daisy family, Asteraceae. It is most
					often grown as a leaf vegetable, but sometimes for its stem and seeds.
					Lettuce is most often used for salads, although it is also seen in
					other kinds of food, such as soups, sandwiches and wraps; it can also
					be grilled.
				</Text>
				<Pressable style={styles.orderBtn}>
					<Text style={styles.btnText}>Add To Cart</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	imageView: {
		height: 250,
	},
	productDetails: {
		backgroundColor: colors.bg.light,
		borderTopRightRadius: spacing[5],
		borderTopLeftRadius: spacing[5],
		paddingVertical: spacing[5],
		paddingHorizontal: spacing[4],
	},
	productTitle: {
		fontWeight: "700",
		color: colors.text.primary,
		fontSize: 30,
	},
	productPrice: {
		marginVertical: spacing[3],
		flexDirection: "row",
		alignItems: "center",
	},
	price: {
		fontWeight: "700",
		color: colors.text.primary,
		fontSize: 32,
		lineHeight: 43,
		marginRight: spacing[2],
	},
	priceWord: {
		fontWeight: "400",
		color: colors.text.secondary,
		fontSize: 24,
		marginLeft: spacing[2],
	},
	productWeight: {
		color: "#06BE77",
		fontSize: 17,
	},
	productSubTitle: {
		color: colors.text.primary,
		fontWeight: "700",
		fontSize: 22,
		marginTop: spacing[5],
		marginBottom: spacing[3],
	},
	productDesc: {
		color: colors.text.secondary,
		fontSize: 17,
	},
});
