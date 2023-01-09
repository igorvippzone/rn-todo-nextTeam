import { FC, useRef } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import Todo from "../Todo/Todo";
import { ITodo } from "../../data";

import s from "./TodosList.style";
import gStyle from "../../gStyle";

type TodoListProps = {
  style?: {};
  completedTodo: (id: string) => void;
  todos: ITodo[];
  deleteTodo: (id: string) => void;
};
const TodosList: FC<TodoListProps> = ({
  style = {},
  completedTodo,
  todos,
  deleteTodo,
}) => {
  const listTodos = todos.map((todo) => ({ ...todo, key: todo.id }));

  const fadeAnim = new Animated.Value(1);
  const fadeOut = (key:string) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver:true
    }).start(()=>{
      deleteTodo(key);
    });
  };
  
  const deleteTodoHandler = (data: any) => {
    fadeOut(data.key)
  };

  return (
    <View style={s.todos}>
      <SwipeListView
        style={{}}
        data={listTodos}
        renderItem={({ item }) => {
          return (
            <View style={{

            }}>
              <Pressable
                onPress={() => completedTodo(item.id)}
                style={{
                  marginVertical: 8,
                }}
              >
                <Todo {...item} />
              </Pressable>
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          return (
            <Animated.View
              style={{
                marginHorizontal: 20,
                marginVertical: 8,
                flex: 1,
                opacity: fadeAnim
              }}
            >
              <View
                style={{
                  backgroundColor: gStyle.RED_COLOR,
                  borderRadius: 8,
                  flex: 1,
                }}
              >
              </View>
            </Animated.View>
          );
        }}
        leftActivationValue={150}
        rightActivationValue={-150}
        leftActionValue={600}
        rightActionValue={-600}
        onLeftActionStatusChange={deleteTodoHandler}
        onRightActionStatusChange={deleteTodoHandler}
      />
    </View>
  );
};

export default TodosList;
