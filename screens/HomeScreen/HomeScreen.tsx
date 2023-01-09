import { useState } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Logo from "../../components/Logo/Logo";
import { AntDesign } from "@expo/vector-icons";
import TodosList from "../../components/TodosList/TodosList";
import { data, ITodo } from "../../data";
import s from "./HomeScreen.styles";
import AddTodoScreen from "../AddTodoScreen/AddTodoScreen";

const HomeScreen = () => {
  const [todos, setTodos] = useState(data);
  const [showAddTodo, setShowAddTodo] = useState(false);

  todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  const showAddTodoHandler = () => {
    setShowAddTodo(true);
  };
  const closeAddTodoHandler = () => {
    setShowAddTodo(false);
  };

  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]);
  };

  const completedTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const completed = !todo.completed;
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <View style={s.screen}>
      <Logo style={s.logo} />
      <TodosList
        style={s.list}
        completedTodo={completedTodo}
        todos={todos}
        deleteTodo={deleteTodo}
      />
      <TouchableOpacity style={s.addTodo} onPress={showAddTodoHandler}>
        <AntDesign name="pluscircle" size={56} color="black" />
      </TouchableOpacity>

      {showAddTodo && (
        <AddTodoScreen onClose={closeAddTodoHandler} addTodo={addTodo} />
      )}
    </View>
  );
};

export default HomeScreen;
