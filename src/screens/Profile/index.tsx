import React, { useState } from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  SignOutButton,
  PhotoWrapper,
  Photo,
  PhotoButton,
  Content,
  Options,
  OptionButton,
  OptionTitle,
  Form,
  Footer,
} from "./styles";

export function Profile() {
  const navigate = useNavigation();
  const theme = useTheme();
  const { user, signOut, updateUser } = useAuth();

  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const [option, setOption] = useState<"dataOption" | "passwordOption">(
    "dataOption"
  );

  function handleBack() {
    navigate.goBack();
  }

  function handleOptionChange(newOption: "dataOption" | "passwordOption") {
    setOption(newOption);
  }

  async function handleAvatarSelect() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return Alert.alert(
        "Permissão negada",
        "Você precisa fornecer permissão para acessar a galeria de fotos!"
      );
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (result.cancelled) return;

    setAvatar((result as ImagePicker.ImageInfo).uri);
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        name: Yup.string().required("Nome é obrigatório"),
      });

      const data = { name, driverLicense };
      await schema.validate(data);

      await updateUser({
        name,
        driver_license: driverLicense,
        avatar,
        id: user.id,
        email: user.email,
      });

      Alert.alert("Tudo certo :)", "Perfil atualizado com sucesso!");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Ops", error.message);
      } else {
        Alert.alert("Algo deu errado", "Não foi possível atualizar o perfil!");
      }
    }
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color={theme.colors.background} onPress={handleBack} />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <SignOutButton onPress={signOut}>
            <Feather name="power" size={24} color={theme.colors.text_light} />
          </SignOutButton>
        </HeaderTop>

        <PhotoWrapper>
          {!!avatar && <Photo source={{ uri: avatar }} />}
          <PhotoButton onPress={handleAvatarSelect}>
            <Feather name="camera" size={24} color={theme.colors.background} />
          </PhotoButton>
        </PhotoWrapper>
      </Header>

      <Content>
        <Options>
          <OptionButton
            active={option === "dataOption"}
            onPress={() => handleOptionChange("dataOption")}
          >
            <OptionTitle active={option === "dataOption"}>Dados</OptionTitle>
          </OptionButton>

          <OptionButton
            active={option === "passwordOption"}
            onPress={() => handleOptionChange("passwordOption")}
          >
            <OptionTitle active={option === "passwordOption"}>
              Trocar senha
            </OptionTitle>
          </OptionButton>
        </Options>

        {option === "dataOption" ? (
          <Form>
            <Input
              iconName="user"
              placeholder="Nome"
              defaultValue={user.name}
              onChangeText={setName}
            />
            <Input iconName="mail" editable={false} defaultValue={user.email} />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              defaultValue={user.driver_license}
              onChangeText={setDriverLicense}
            />
          </Form>
        ) : (
          <Form>
            <PasswordInput iconName="lock" placeholder="Senha atual" />
            <PasswordInput iconName="lock" placeholder="Nova senha" />
            <PasswordInput iconName="lock" placeholder="Repetir senha" />
          </Form>
        )}
      </Content>

      <Footer>
        <Button title="Salvar alterações" onPress={handleProfileUpdate} />
      </Footer>
    </Container>
  );
}
