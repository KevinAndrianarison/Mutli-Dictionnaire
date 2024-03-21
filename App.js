import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import NavigationPage from "./components/NavigationPage";
import { appStyle } from "./style/AppStyle";

export default function Profil() {
  const [showNav, setShownav] = useState(false);
  const [logo, setLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
      setShownav(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.profil}>
      {showNav && <NavigationPage />}
      {logo && (
        <View style={[appStyle.logo, StyleSheet.absoluteFill]}>
          <Image style={appStyle.img} source={require("./assets/logo.png")} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  profil: {
    flex: 1,
  },
});
