import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.section`
  background: lightgray;
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin: 10px 0;
  width: 200px;
  background: lightblue;
  border: none;
  height: 30px;
  text-align: center;
  color: black;
  font-weight: bolder;
  outline: lightblue;
`

const Title = styled.h1``

export default class HomePageSearch extends Component {
  render() {
    return (
      <Container>
        <Title>Find Your Home Today.</Title>
        <InputContainer>
          <Input type="text" placeholder="Location" />
          <Input type="text" placeholder="Type" />
          <Input type="text" placeholder="From" />
          <Input type="text" placeholder="To" />
        </InputContainer>
      </Container>
    )
  }
}
