import React, { Component } from "react"
import styled from "styled-components"
import house from "../../assets/house.png"

const Container = styled.section`
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 7px;
`

const CardContainer = styled.section`
  width: 280px;
  height: 223px;
  border-radius: 5px;
  background: white;
  padding: 15px;
  margin-bottom: 12px;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
`

const HouseImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
`

const Button = styled.button`
  width: 310px;
  background: white;
  padding: 10px;
  color: #547086;
  font-weight: bold;
  font-size: 18px;
  border: none;
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 1);
  margin-bottom: 35px;
`

const HouseName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 3px 0;
`

const RentPerMonth = styled.div`
  font-style: italic;
  font-size: 14px;
  margin: 3px 0;
`

const Rating = styled.div`
  margin: 3px 0;
`
const FeaturedListings = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin-bottom: 20px;
  color: white;
  font-weight: 500;
`

export default class HomePageCards extends Component {
  state = {
    cardsRendered: [],
    cardCount: 3
  }

  render() {
    // eslint-disable-next-line
    let cardArray = [...this.state.cardCount]
    // eslint-disable-next-line
    let card = (
      <CardContainer>
        <div>
          <HouseImg src={house} />
        </div>
        <HouseName>Splendida Casa</HouseName>
        <RentPerMonth>$450/Mo</RentPerMonth>
        <Rating>RATING</Rating>
      </CardContainer>
    )

    return (
      <Container>
        <FeaturedListings>Featured Listings</FeaturedListings>
        <CardContainer>
          <div>
            <HouseImg src={house} />
          </div>
          <HouseName>Splendida Casa</HouseName>
          <RentPerMonth>$450/Mo</RentPerMonth>
          <Rating>RATING</Rating>
        </CardContainer>
        <CardContainer>
          <div>
            <HouseImg src={house} />
          </div>
          <HouseName>Splendida Casa</HouseName>
          <RentPerMonth>$450/Mo</RentPerMonth>
          <Rating>RATING</Rating>
        </CardContainer>
        <Button>Show More</Button>
      </Container>
    )
  }
}
