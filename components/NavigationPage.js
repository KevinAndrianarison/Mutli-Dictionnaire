import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Dictionnaire from "./Dictionnaire";
import Traduction from "./Translation";

const Tab = createBottomTabNavigator();

export default function NavigationPage() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "rgba(0, 184, 148,1.0)",
          headerStyle: {
            height: "none",
          },
        }}
      >
        <Tab.Screen
          name="Dictionnaire"
          component={Dictionnaire}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Traduction"
          component={Traduction}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="translate" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
