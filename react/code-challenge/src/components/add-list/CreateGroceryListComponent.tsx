import React, { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { IGroceryList } from "../../models/IGroceryList";
import { addGroceryList } from "../../utility/api";

export interface IGroceryListProps {
  addGroceryList: (body: IGroceryList) => void;
  createGroceryListMessage: string;
}

export const CreateGroceryListComponent: React.FC<any> = (
  props: IGroceryListProps
) => {
  const [todaysDate, setTodaysDate] = useState(new Date());
  const [description, setDescription] = useState("");

  return (
    <>
      <div>
        <h2>Add Grocery List</h2>
        <Form
          className="groceryList"
          onSubmit={() =>
            addGroceryList({
              id: 0,
              todaysDate: todaysDate,
              description: description
            }).then(r => console.log(r.data))
          }
        >
          <FormGroup row>
            <Label for="todaysDate" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                required
                type="date"
                name="todaysDate"
                id="todaysDate"
                placeholder="Today's Date"
                onChange={val => setTodaysDate(new Date(val.target.value))}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                required
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                onChange={val => setDescription(val.target.value)}
              />
            </Col>
          </FormGroup>
          <Button color="btn btn-outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateGroceryListComponent;
