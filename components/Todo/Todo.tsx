import { FC } from "react";
import { View, Text } from "react-native";

import CheckBox from "../UI/CheckBox/CheckBox";

import s from "./Todo.styles";

type TodoProps = {
  title: string;
  completed: boolean;
};

const Todo: FC<TodoProps> = ({ title, completed }) => {

  return (
    <View style={s.todo}>
      <CheckBox checked={completed} />
      <Text style={[s.todoText, completed ? s.todoTextComplete : {}]}>
        {title}
      </Text>
    </View>
  );
};

export default Todo;
