import React, { Component } from "react"
import styled from "styled-components"
import Footer from "../../Components/Footer/Footer"
import HomePageCards from "./HomePageCards"

const Container = styled.section`
  height: 100%;
`

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin: 10px 0;
  width: 240px;
  background: white;
  border: none;
  height: 32px;
  text-align: center;
  color: black;
  font-weight: bolder;
  outline: lightblue;
  font-size: 16px;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
  &:details summary::-webkit-details-marker {
    display: none;
  }
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 60px 0 40px;
  font-size: 27px;
  color: white;
  text-shadow: -2px 1px 6px rgba(150, 150, 150, 1);
`

const Button = styled.button`
  width: 240px;
  background: #547086;
  color: white;
  padding: 5px;
  border: none;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin: 10px 0;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
`

const HaveAHomeSection = styled.section`
  display: flex;
  justify-content: center;
  font-size: 19px;
  margin-top: 16px;
`

export default class HomePageSearch extends Component {
  state = {
    location: "",
    type: "",
    from: "",
    to: ""
  }

  inputTracker = e => {
    let { name, value } = e.target
    this.setState(
      {
        [name]: value
      },
      _ => console.log(this.state)
    )
  }
  render() {
    return (
      <Container>
        <Title>Find Your Home Today.</Title>
        <InputContainer>
          <Input
            type="text"
            placeholder="Location"
            onChange={e => this.inputTracker(e)}
            name="location"
            required
          />
          <div style={{ position: "relative" }}>
            <Input
              style={{ paddingLeft: "12px" }}
              type="search"
              placeholder="Type"
              onChange={e => this.inputTracker(e)}
              name="type"
              list="cities"
              required
            />
            <datalist id="cities">
              <option>All</option>
              <option>Homes</option>
              <option>Apartments</option>
            </datalist>
          </div>
          <div style={{ display: "flex" }}>
            <Input
              style={{ width: "117px", marginRight: "5px" }}
              type="number"
              placeholder="From"
              onChange={e => this.inputTracker(e)}
              name="from"
            />
            <Input
              style={{ width: "117px" }}
              type="number"
              placeholder="To"
              onChange={e => this.inputTracker(e)}
              name="to"
            />
          </div>
          <Button>Search</Button>
        </InputContainer>
        <HaveAHomeSection>
          Have a home to list?
          <div style={{ marginLeft: "6px", paddingBottom: "30px" }}>
            Click Here
          </div>
        </HaveAHomeSection>
        <HomePageCards />
        <Footer />
      </Container>
    )
  }
}
