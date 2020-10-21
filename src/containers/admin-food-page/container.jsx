import React from "react";
import FoodItemList from "./partials/FoodItemList";
import AddFoodItem from "./partials/AddFoodItem";
import logo from "../../assets/menu.png";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      food: "",
      foodType: "",
      foodSubType: "",
      url: "",
      cost: "",
      description: "",
      status: false,
      foodItem: {},
      foodItems: [],
      editing: false,
      All: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
  }
  componentDidMount() {
    const responce_type = fetch(
      "https://traineer-064a.restdb.io/rest/category",
      {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5f81fab25799e648a5a8eec6",
          "cache-control": "no-cache",
        },
      }
    )
      .then((responce_type) => responce_type.json())
      .then((data) => {
        console.log(data);
        this.setState({ All: data });
        this.setState({ foodType: data[0].categoryType });
      });
    console.log(responce_type);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      description: this.state.description,
      foodType: this.state.foodType,
      foodSubType: this.state.foodSubType,
      url: this.state.url,
      userId: this.state.userId,
      statu: this.state.status,
    };
    this.setState({
      food: "",
      cost: "",
      description: "",
      foodSubType: "",
      foodType: "",
      url: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem],
    });
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter((item) => item.id !== id);
    this.setState({ foodItems: foodItems });
    if (this.state.editing === true) {
      window.location.reload();
    }
  }

  render() {
    const { foodItems } = this.state;
    return (
      <div className="App">
        <div className="topnav">
          <a className="active" href="#home">
            Welcome
          </a>
          <a href="#home" id="mobilea">
            {" "}
            , UserName
            <img alt="menu1" id="menu1" src={logo} />
          </a>

          <a id="username" href="#news">
            Username{" "}
          </a>
          <img
            alt="user"
            id="img"
            src="https://t3.ftcdn.net/jpg/01/44/52/94/240_F_144529471_9LhgvhXAYfy50nDjir1aadtMuiMiYUDX.jpg"
          />

          <img
            alt="menu"
            id="menu"
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
          />
        </div>
        <div className="container">
          <div className="row App-main">
            {
              <AddFoodItem
                food={this.state.food}
                cost={this.state.cost}
                description={this.state.description}
                url={this.state.url}
                SubType={this.state.SubType}
                All={this.state.All}
                foodType={this.state.foodType}
                foodSubType={this.state.foodSubType}
                handleInputChange={this.handleInputChange}
                addFoodItem={this.addFoodItem}
              />
            }
          </div>

          <div className="vl"></div>
          <div id="divapp" className="col-4">
            <FoodItemList
              id="list"
              foodItems={foodItems}
              deleteFoodItem={this.deleteFoodItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
