import { Dispatch, SetStateAction } from "react";
import { Modal, Text, View } from "react-native";

const ManageExpense = (props: {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { modalVisible, setModalVisible } = props;
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View>
        <Text>Manage Expenses</Text>
      </View>
    </Modal>
  );
};

export default ManageExpense;
