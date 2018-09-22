import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.section`
  background: lightgray;
  height: 94vh;
`

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  margin: 10px 0;
  width: 240px;
  background: lightblue;
  border: none;
  height: 30px;
  text-align: center;
  color: black;
  font-weight: bolder;
  outline: lightblue;
  font-size: 16px;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 60px 0;
  font-size: 27px;
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
`

const HaveAHomeSection = styled.section`
  display: flex;
  justify-content: center;
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
    this.setState({
      [name]: value
    })
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
          />
          <Input
            type="text"
            placeholder="Type"
            onChange={e => this.inputTracker(e)}
            name="type"
          />
          <Input
            type="text"
            placeholder="From"
            onChange={e => this.inputTracker(e)}
            name="from"
          />
          <Input
            type="text"
            placeholder="To"
            onChange={e => this.inputTracker(e)}
            name="to"
          />
          <Button>Search</Button>
        </InputContainer>
        <HaveAHomeSection>
          Have a home to list?
          <div>Click Here</div>
        </HaveAHomeSection>
      </Container>
    )
  }
}
