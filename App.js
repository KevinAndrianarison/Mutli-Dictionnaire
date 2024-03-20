import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { Octicons } from "@expo/vector-icons";
import { appStyle } from "./style/AppStyle";

import axios from "axios";

export default function App() {
  const [selectedfrom, setSelectedfrom] = useState("en");
  const [isIndicator, setIsindicator] = useState(false);
  const [logo, setLogo] = useState(true);
  const [definition, setDefinition] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [antonyms, setAntonyms] = useState("");
  const [result, setResult] = useState("");
  const [searchvalue, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectedto, setSelectedto] = useState("fr");
  const [langageFrom, setLanguagefrom] = useState("English");
  const [langageto, setLanguageto] = useState("French");
  const [listLangage, seListlangage] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 3000);
  }, []);

  function switchLang() {
    let switchCode = selectedfrom;
    let switchLang = langageFrom;
    setSelectedfrom(selectedto);
    setLanguagefrom(langageto);
    setSelectedto(switchCode);
    setLanguageto(switchLang);
  }

  function traduction() {
    if (searchvalue === ""){
      Alert.alert("Attention !", "Veillez remplir le champs", [
        {
          text: "D'accord",
          onPress: () => {
            console.log("Fermer");
          },
        },
      ]);
    }
    else{
      setShow(false);
      setIsindicator(true);
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": "dcc4ff5544msh10b141c29048944p117081jsn8efe58cf7b95",
          "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
        },
        data: {
          q: searchvalue.toLocaleLowerCase(),
          source: selectedfrom,
          target: selectedto,
          format: "text",
        },
      };
  
      axios
        .request(options)
        .then((response) => {
          setResult(response.data.data.translations[0].translatedText);
          if (selectedfrom !== "en") {
            traductionInfos();
          }
          if (selectedfrom === "en") {
            getInfosInEn(searchvalue.toLocaleLowerCase());
          }
        })
        .catch((error) => {
          console.error("Erreur de GET langage : ", error);
          setIsindicator(false);
        });
    }
  }

  function traductiondefinition(definition, selectedto) {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "dcc4ff5544msh10b141c29048944p117081jsn8efe58cf7b95",
        "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
      },
      data: {
        q: definition,
        source: "en",
        target: selectedto,
        format: "text",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setDefinition(response.data.data.translations[0].translatedText);
      })
      .catch((error) => {
        console.error("Erreur de GET langage : ", error);
      });
  }

  function traductiondeAntonyme(antonyms, selectedto) {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "dcc4ff5544msh10b141c29048944p117081jsn8efe58cf7b95",
        "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
      },
      data: {
        q: antonyms,
        source: "en",
        target: selectedto,
        format: "text",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setAntonyms(response.data.data.translations[0].translatedText);
      })
      .catch((error) => {
        console.error("Erreur de GET langage : ", error);
      });
  }

  function traductiondeSynonyme(synonyms, selectedto) {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "dcc4ff5544msh10b141c29048944p117081jsn8efe58cf7b95",
        "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
      },
      data: {
        q: synonyms,
        source: "en",
        target: selectedto,
        format: "text",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setSynonyms(response.data.data.translations[0].translatedText);
        setIsindicator(false);
        setShow(true);
      })
      .catch((error) => {
        console.error("Erreur de GET langage : ", error);
      });
  }

  function getInfosInEn(valeur) {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${valeur}`)
      .then((response) => {
        let antonyms = response.data[0].meanings[0].antonyms.join(",");
        let definition = response.data[0].meanings[0].definitions[0].definition;
        let synonyms = response.data[0].meanings[0].synonyms.join(",");
        if (selectedto === "en") {
          setDefinition(definition);
          setAntonyms(antonyms);
          setSynonyms(synonyms);
          setIsindicator(false);
          setShow(true);
        }
        if (selectedto !== "en") {
          traductiondefinition(definition, selectedto);
          traductiondeAntonyme(antonyms, selectedto);
          traductiondeSynonyme(synonyms, selectedto);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function traductionInfos() {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "dcc4ff5544msh10b141c29048944p117081jsn8efe58cf7b95",
        "X-RapidAPI-Host": "google-translator9.p.rapidapi.com",
      },
      data: {
        q: searchvalue.toLocaleLowerCase(),
        source: selectedfrom,
        target: "en",
        format: "text",
      },
    };

    axios
      .request(options)
      .then((response) => {
        let resultEn = response.data.data.translations[0].translatedText;
        getInfosInEn(resultEn);
      })
      .catch((error) => {
        console.error("Erreur de GET langage : ", error);
      });
  }

  function getLang() {
    if (!listLangage.length) {
      const options = {
        method: "GET",
        url: "https://english-word-translator-api.p.rapidapi.com/languages",
        headers: {
          "X-RapidAPI-Key":
            "b2f30d9d52msh468fa56b2bf5bd4p1fafdajsndf8eb1ceb5a0",
          "X-RapidAPI-Host": "english-word-translator-api.p.rapidapi.com",
        },
      };
      axios
        .request(options)
        .then((response) => {
          let nombreLang = response.data.length

          let langueFromapi = [];
          for (let i = 0; i < nombreLang; i++) {
            langueFromapi.push({
              value: response.data[i].code,
              label: response.data[i].name,
            });
          }
          seListlangage(langueFromapi);
        })
        .catch((error) => {
          console.error("Erreur de GET langage : ", error);
        });
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={appStyle.app}>
        <View style={appStyle.head}>
          <Text style={appStyle.headTxt}>Mutli-Dictionnaire</Text>
        </View>
        <View style={appStyle.lang}>
          <View style={appStyle.langfrom}>
            <Dropdown
              style={[
                appStyle.dropdown,
                isFocus && {
                  borderColor: "blue",
                  marginRight: 15,
                  width: "120%",
                },
              ]}
              placeholderStyle={appStyle.placeholderStyle}
              selectedTextStyle={appStyle.selectedTextStyle}
              inputSearchStyle={appStyle.inputSearchStyle}
              iconStyle={appStyle.iconStyle}
              data={listLangage}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={langageFrom}
              searchPlaceholder="Search..."
              value={langageFrom}
              onFocus={() => {
                setIsFocus(true);
                getLang();
              }}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                if (item.label === langageto) {
                  switchLang();
                }
                setSelectedfrom(item.value);
                setLanguagefrom(item.label);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={appStyle.icone}>
            <TouchableOpacity onPress={switchLang}>
              <Octicons
                name="arrow-switch"
                size={24}
                color="rgba(99, 110, 114,1.0)"
              />
            </TouchableOpacity>
          </View>

          <View style={appStyle.langfrom}>
            <Dropdown
              style={[
                appStyle.dropdown,
                isFocus && {
                  borderColor: "blue",
                  marginRight: 15,
                  width: "120%",
                },
              ]}
              placeholderStyle={appStyle.placeholderStyle}
              selectedTextStyle={appStyle.selectedTextStyle}
              inputSearchStyle={appStyle.inputSearchStyle}
              iconStyle={appStyle.iconStyle}
              data={listLangage}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={langageto}
              searchPlaceholder="Search..."
              value={langageto}
              onFocus={() => {
                setIsFocus(true);
                getLang();
              }}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                if (item.label === langageFrom) {
                  switchLang();
                }
                setSelectedto(item.value);
                setLanguageto(item.label);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        <View style={appStyle.inputFrom}>
          <View style={appStyle.label}>
            <Text style={appStyle.labeltxt}>De</Text>
            <Text style={appStyle.labeltxt}>{langageFrom}</Text>
          </View>
          <View style={appStyle.inputContainer}>
            <TextInput
              style={appStyle.input}
              multiline
              placeholder="Ecrire ici... "
              value={searchvalue}
              onChangeText={(val) => {
                setSearch(val);
              }}
            />
            <View style={appStyle.find}>
              <TouchableOpacity onPress={traduction}>
                <FontAwesome
                  name="search"
                  size={30}
                  color="rgba(99, 110, 114,1.0)"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {show && (
          <View style={appStyle.result}>
            <View style={appStyle.title}>
              <Text style={appStyle.titleTxt}>Mot</Text>
              <Text style={appStyle.titleTxt}> {langageto}</Text>
            </View>
            <View style={appStyle.resultview}>
              <Text style={appStyle.resultTxt}>{result}</Text>
            </View>
            <View style={appStyle.descri}>
              <View>
                <Text style={appStyle.descrititre}>Definition</Text>
                <Text>{definition}</Text>
              </View>
              <View>
                <Text style={appStyle.descrititre}>Synonymes</Text>
                <Text>{synonyms}</Text>
              </View>
              <View>
                <Text style={appStyle.descrititre}>Antonymes</Text>
                <Text>{antonyms}</Text>
              </View>
            </View>
          </View>
        )}
        {isIndicator && (
          <ActivityIndicator
            style={[appStyle.indicator, StyleSheet.absoluteFill]}
            size="large"
            color={"rgba(0, 184, 148,1.0)"}
          />
        )}
        {logo && (
          <View style={[appStyle.logo, StyleSheet.absoluteFill]}>
            <Image style={appStyle.img} source={require("./assets/logo.png")} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
