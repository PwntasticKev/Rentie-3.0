import React, { Component } from "react"
import Header from "../Components/Header"
import HomePageSearch from "../Views/HomePage/HomePageSearch"

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePageSearch />
      </div>
    )
  }
}
