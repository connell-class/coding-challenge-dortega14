import { connect } from "react-redux";
import { IState } from "../../utility";
import { CreateGroceryListComponent } from "./CreateGroceryListComponent";
import { createGroceryList } from "../../action-mappers/add-list-action";

const mapStateToProps = (state: IState) => {
  return {
    createListMessage: state.groceryListState.createListMessage
  };
};

const mapDispatchToProps = {
  createGroceryList
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroceryListComponent);