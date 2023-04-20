import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import axiosService from "../../services/axiosService";

export interface Card {
  id: string,
  title: string,
  content: string
  authorName: string,
  authorImg:string,
  categoryName: string,
  createdAt: string,
  tags:string[],
  timeToRead:string,
  img: string
}


export interface CardsFeed {
  cards: Card[],
}

const initialState: CardsFeed = {
  cards: []
}

export let cardsFeedSlice = createSlice({
  name: 'cardsFeed',
  initialState,
  reducers: {
    downloadOther10Cards: (state, action: PayloadAction<CardsFeed>) => {
      axiosService.cardsRequests.getAnother10Cards((cards: Card[]) => {
        state.cards.push(...cards);
      }, (e: Error) => {
        console.log(`Error when calling getOther10Cards: ${e.message}`);
      })
    },
    TEST_GetAllCards: (state) => {
      return {
        cards: [
          {
            id: "1",
            title: "Bill Gates: People Don't Realize What's Coming",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",
            authorName: "John Doe",
            authorImg: "https://miro.medium.com/v2/resize:fill:48:48/1*xzr2IEDPCx-UWEd3EAQDfg.jpeg",
            categoryName: "Technology",
            createdAt: "Jan 8",
            tags: ["Mac"],
            timeToRead: "13 min",
            img: "https://miro.medium.com/v2/resize:fill:224:224/1*8UwcxNMjdWjipC_XZu8qYg.png"
          },
          {
            id: "2",
            title: "Node.js Developer Roadmap 2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug",
            authorName: "John Doe",
            authorImg: "https://miro.medium.com/v2/resize:fill:48:48/1*AzY7YeI5L397_VE2biGHvQ.jpeg",
            categoryName: "Technology",
            createdAt: "Jan 9",
            tags: ["Programming"],
            timeToRead: "6 min",
            img: "https://miro.medium.com/v2/resize:fill:224:224/0*51beacbmyp82xuxN"
          }
        ]
      }
    }
  }
});

