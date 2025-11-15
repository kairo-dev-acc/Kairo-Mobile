import Feather from "@expo/vector-icons/Feather";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Ellipsis from "../../assets/images/ellipsis-vertical.svg";
import COLORS from "../../constants/Color";

export default function arrowAndHeart({ EllipsisFunction, arrowFunction, }) {
  const [Heart, setHeart] = useState(false);
  const [showHeart, setshowHeart] = useState(true);
  return (
    <View style={styles.backIcon}>
      <TouchableOpacity onPress={arrowFunction}>
        <Feather name="arrow-left" size={24} color={COLORS.shark[900]} />
      </TouchableOpacity>
      <View>
        <View style={styles.info}>
          {showHeart ? (
            <TouchableOpacity
              onPress={() => {
                setshowHeart(false);
              }}
            >
              <Feather name="heart" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setshowHeart(true);
              }}
            >
              <FontAwesome name="heart" size={24} color={COLORS.primary.Heart} />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={EllipsisFunction}>
            <Ellipsis />
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
    alignItems: "flex-start",
  },
  info: {
    flexDirection: "row",
    gap: 28.95,
  },
});
