import react, { useState } from "react";
import { Form, Alert, InputGroup, ButtonGroup, Button } from "react-bootstrap";
import Crud from "./crud";
import "./addp.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("figure");
  const [Exist, setExist] = useState("");
  const [img, setImg] = useState("");

  let addFunc = (e) => {
    let pro = {
      category: category,
      exist: true,
      image: img,
      name: name,
      price: price,
    };
    Crud.addProduct(pro);
    console.log("bananana");
  };

  return (
    <>
      <Form.Group className="main-form mb-3">
        <InputGroup.Text className="inp">Add Product Name</InputGroup.Text>
        <Form.Control
          className="formP"
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <InputGroup.Text className="inp">Add Product image</InputGroup.Text>
        <Form.Control
          className="formP"
          type="text"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          accept="jpg"
          placeholder="Enter the name"
        />

        <InputGroup.Text className="inp">Add Product price</InputGroup.Text>
        <Form.Control
          className="formP"
          type="number"
          placeholder="Enter the name"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <InputGroup.Text>category</InputGroup.Text>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            console.log(category);
            console.log(e.target.value);
          }}
          name=""
          id=""
        >
          <option
            onSelect={(e) => {
                setCategory(e.target.value);
                console.log(e.target.value);
            }}
            value="figure"
          >
            figure
          </option>
          <option
            onSelect={(e) => {
              setCategory(e.target.value);
              console.log(e.target.value)
            }}
            value="image"
          >
            img
          </option>
          <option
            onSelect={(e) => {
              setCategory(e.target.value);
              console.log(e.target.value)
            }}
            value="sticker"
          >
            sticker
          </option>
        </select>

        <Button onClick={addFunc} type="submit">
          submit
        </Button>
      </Form.Group>
    </>
  );
};

export default AddProduct;
