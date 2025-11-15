import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import COLORS from "../../constants/Color";
import Ellipsis from "../../assets/images/ellipsis-vertical.svg"

export default function arrowAndHeart({EllipsisFunction, }) {
  const [Heart, setHeart] = useState(false);
  const [showHeart, setshowHeart] = useState(false);
  const Router = useRouter();
  return (
    <View style={styles.backIcon}>
      <TouchableOpacity
        onPress={() => {
          Router.back = "/(auth)";
        }}
      >
        <Feather name="arrow-left" size={24} color={COLORS.shark[900]} />
      </TouchableOpacity>
    {
      showHeart ? : null
    }
      

        <View>
          <TouchableOpacity onPress={EllipsisFunction}>
          <Ellipsis/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"flex-start",
  },
  info:{
    flexDirection: "row",
    gap: 23.5,
  },
});
