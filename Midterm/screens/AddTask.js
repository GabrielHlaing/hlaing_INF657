import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddTask({ navigation, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // UseState for dropdown
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toISOString().split("T")[0]); // Format as YYYY-MM-DD
    console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  const handleSubmit = () => {
    if (title && description && category && selectedDate) {
      const newTask = {
        id: Date.now(), // Generate a unique ID
        title,
        description,
        category,
        date: selectedDate,
        image: require("../assets/newTask.png"), // Placeholder image
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task

      setTitle("");
      setDescription("");
      setCategory(null);
      setSelectedDate(null);
      navigation.goBack();
    } else {
      alert("Please Enter All of the Fields!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sec}>
        <TextInput
          placeholder="Task Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <DropDownPicker
          open={open}
          value={category}
          items={[
            { label: "Home", value: "Home" },
            { label: "Work", value: "Work" },
            { label: "Office", value: "Office" },
          ]}
          setOpen={setOpen}
          setValue={setCategory}
          placeholder="Select Category"
          containerStyle={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
        <View style={styles.date}>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        {selectedDate !== null && (
          <Text style={styles.dateText}>
            Selected Date: {selectedDate.toString()}{" "}
          </Text>
        )}
        <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
          <Text style={styles.addText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0ebe6",
    justifyContent: "center",
    alignItems: "center",
  },
  sec: {
    backgroundColor: "white",
    width: "50%",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: "#fff",
    borderBottomColor: "black",
  },
  dropdown: { width: "50%", alignSelf: "center", marginTop: 20 },
  dropdownContainer: {
    borderRadius: 15,
    padding: 20,
  },
  date: {
    paddingTop: 30,
    width: "50%",
  },
  dateText: {
    fontSize: 10,
  },
  addBtn: {
    width: "50%",
    borderWidth: 1,
    backgroundColor: "#ecf00c",
    borderColor: "#214a3b",
    borderRadius: 15,
    marginTop: 50,
  },
  addText: {
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
});
