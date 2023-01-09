import React, { FC, useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { ITodo } from "../../data";

import s from "./AddTodoScreen.styles";

type AddTodoProps = {
  onClose: () => void;
  addTodo: (todo: ITodo) => void;
};

const AddTodoScreen: FC<AddTodoProps> = ({ onClose, addTodo }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const changeHandler = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const enteredValue = e.nativeEvent.text;
    enteredValue.trim() ? setIsValid(true) : setIsValid(false);
    setValue(enteredValue);
  };

  const createTodoHandler = () => {
    if (!value.trim()) return;

    const newTodo = {
      title: value,
      id: uuidv4(),
      completed: false,
    };
    addTodo(newTodo);
    setValue("");
    setIsValid(false);
    onClose();
  };

  return (
    <Modal>
      <View style={s.screen}>
        <TouchableOpacity style={s.header} onPress={onClose}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
          <Text style={s.text}>Вернуться назад</Text>
        </TouchableOpacity>
        <View style={s.content}>
          <Input value={value} onChange={changeHandler} />
          <Button
            title="Добавить"
            onPress={createTodoHandler}
            disabled={!isValid}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoScreen;
