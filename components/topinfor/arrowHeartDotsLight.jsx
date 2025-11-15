import Feather from "@expo/vector-icons/Feather";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Ellipsis from "../../assets/images/state=heroicons-mini, colour=ellipsis-vertical.svg";
import COLORS from "../../constants/Color";


export default function arrowHeartDotsLigth({ EllipsisFunction, arrowFunction, showHeart = true, showEllipsis = true, showALL = true, }) {
  const [Heart, setHeart] = useState(false);


  return (
    <View style={styles.backIcon}>
      <TouchableOpacity onPress={arrowFunction}>
        <Feather name="arrow-left" size={24} color={COLORS.primary.white} />
      </TouchableOpacity>
      <View>

        {
          showALL ? (<View style={styles.info}>
          <View>
            {
              showHeart ? (<>
                {Heart ? (
            <TouchableOpacity
              onPress={() => {
                setHeart(false);
              }}
            >
              <Feather name="heart" size={24} color={COLORS.primary.white} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setHeart(true);
              }}
            >
              <FontAwesome name="heart" size={24} color={COLORS.primary.Heart} />
            </TouchableOpacity>
          )}

              </>) : (
                <>
                </>
              )
            }
          </View>
        {
          showEllipsis ? (<TouchableOpacity onPress={EllipsisFunction}>
            <Ellipsis />
          </TouchableOpacity>) : (
            <>
            </>
          )
        }
          
        </View>) : (<>
        </>)
        }
        
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
