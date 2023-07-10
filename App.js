import "./App.css";
import React from "react";
import react, { useState, useEffect } from "react";
import Card from "./Components/Card/Card.js";
import imgw from "./images/drago.jpeg";
import { Form, Alert, InputGroup, ButtonGroup, Button } from "react-bootstrap";
import Crud from "./crud";
import { db } from "./firebaseConfig";
import { collection } from "firebase/firestore";
import { onSnapshot, query, doc, where } from "firebase/firestore";
import uuid from "react-uuid";
import "./App.css";
import Properties from "./Components/properties/Properties.js";
import UpdateProps from "./Components/updateProps/UpdateProps.js";
class App extends react.Component {
  constructor() {
    super();
    this.state = {
      store: [],
      save: 1,
      category: "image",
      pros: false,
      id: "",
      id2: "",
      pros2: false,
    };
  }
  handleR = (id) => {
    if (this.state.pros2) {
      this.setState({
        id: "",
        pros2: false,
      });
    } else {
      this.setState({
        id: id,
        pros: !this.state.pros,
        pros2: false,
      });
    }
  };

  handleR2 = (id) => {
    if (this.state.pros) {
      this.setState({
        id: "",
        pros: false,
      });
    }else{
      this.setState({
        id2: id,
        pros2: !this.state.pros2,
        pros:false
      });
    }

    console.log(this.state.pros2);
  };

  deletfunc(st) {
    Crud.updateProduct(st[1], {
      category: st[0].category,
      image: st[0].image,
      price: st[0].price,
      name: st[0].name,
      exist: false,
    });
  }

  updateProduct(id, pro){
    console.log(id );
    console.log(pro);
    Crud.updateProduct(id, pro);

  }

  componentDidMount() {
    fetch("/store")
      .then((res) => res.json())
      .then((store) => this.setState({ store }));
  }

  getData = ()=>{
    let arr = [];
    arr = this.state.store.map((st) => {
              if (st[0].exist && st[0].category == this.state.category) {
                return (
                  <div key={uuid()} className="eachC">
                    <Card
                      category={st[0].category}
                      image={st[0].image}
                      price={st[0].price}
                      name={st[0].name}
                    />
                    <section className="editS">
                      <Button
                        onClick={() => this.setState({ save: 1 }, () => {Crud.deleteProduct(st[1])})}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => {
                          this.handleR2(st[1]);
                          console.log(this.state.pros);
                        }}
                      >
                        Update
                      </Button>

                      <Button
                        onClick={() => {
                          this.handleR(st[1]);
                          console.log(this.state.pros);
                        }}
                      >
                        info
                      </Button>
                    </section>
                    {this.state.pros && st[1] == this.state.id && (
                      <Properties
                        remove={this.handleR}
                        name={st[0].name}
                        category={st[0].category}
                        exist={st[0].exist}
                        image={st[0].image}
                        price={st[0].price}
                      />
                    )}

                    {this.state.pros2 && st[1] == this.state.id2 && (
                      <UpdateProps
                        remove={this.handleR2}
                        name={st[0].name}
                        category={st[0].category}
                        exist={st[0].exist}
                        image={st[0].image}
                        price={st[0].price}
                        id={st[1]}
                        updateFunc={this.updateProduct}
                      />
                    )}
                  </div>
                );
              }
            })
            return arr;
  }

  render() {
    return (
      <div className="stdiv">
        <section>
          <Button
            onClick={() => {
              this.setState({ category: "image" });
            }}
          >
            Image
          </Button>
          <Button
            onClick={() => {
              this.setState({ category: "figure" });
            }}
          >
            Figure
          </Button>
          <Button
            onClick={() => {
              this.setState({ category: "sticker" });
            }}
          >
            Sticker
          </Button>
        </section>
        <section className="hello">{this.state.store && this.getData()
        }</section>
      </div>
    );
  }
}
export default App;
