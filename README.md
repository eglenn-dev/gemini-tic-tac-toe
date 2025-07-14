<div align="center">
    <h1>Gemini Tic-Tac-Toe</h1>
    <p>Created exclusively with the Gemini CLI</p>
    <p>
        <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
        <img alt="Svelte" src="https://img.shields.io/badge/-Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white" />
        <img alt="SCSS" src="https://img.shields.io/badge/-SCSS-CC6699?style=flat-square&logo=sass&logoColor=white" />
        <img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
        <img alt="Gemini" src="https://img.shields.io/badge/-Gemini-4285F4?style=flat-square&logo=google-gemini&logoColor=white" />
    </p>
</div>

## Overview

This was a vibe coding test using the Gemini CLI to create a Tic-Tac-Toe game in Svelte. The game is designed to be played against an AI opponent, or another local player, with the computer using a simple algorithm to make its moves.

I did not write any code in order to make this app work, neither did I run a single command in the terminal. This project was entirely created using the Gemini CLI, which generated all the necessary files and code based on the prompts provided.

> [!NOTE]
> I did make two additional commits to deploy the project to GitHub Pages. I should have done this before the final commit, but I forgot to do so.

## Gemini CLI Usage

After Creating the app using the prompts below, this was the CLI summary of the usage of the Gemini CLI:

![Gemini CLI Screenshot](/public/gemini-usage.png)

## Gemini CLI Log

Here is a full log of the conversation with the Gemini CLI:

```json
[
    {
        "messageId": 0,
        "type": "user",
        "message": "/help",
        "timestamp": "2025-07-14T03:04:25.748Z"
    },
    {
        "messageId": 1,
        "type": "user",
        "message": "/tools",
        "timestamp": "2025-07-14T03:05:08.556Z"
    },
    {
        "messageId": 2,
        "type": "user",
        "message": "/extensions",
        "timestamp": "2025-07-14T03:05:29.703Z"
    },
    {
        "messageId": 3,
        "type": "user",
        "message": "/clear",
        "timestamp": "2025-07-14T03:05:48.784Z"
    },
    {
        "messageId": 4,
        "type": "user",
        "message": "Create a tic tac toe website in svelte. Create a new folder for this project. The game should have an easy, medium, and hard mode, and you should be able to play against the computer, or someone else. Make sure the user can select all of those options. Use SCSS for styling, and make the game look modern. It should also be responsive for mobile devices.",
        "timestamp": "2025-07-14T03:10:18.102Z"
    },
    {
        "messageId": 5,
        "type": "user",
        "message": "Add a light and a dark mode toggle",
        "timestamp": "2025-07-14T03:21:37.818Z"
    },
    {
        "messageId": 6,
        "type": "user",
        "message": "There are some UI bugs. For example, the game board goes out of the main tag after a board section has been populated with an X or a Y. When the board is full, the reset game button also appears on top of the board. Fix these UI bugs",
        "timestamp": "2025-07-14T03:29:20.857Z"
    },
    {
        "messageId": 7,
        "type": "user",
        "message": "Generate an image for the favicon and replace the Vite one that is there, and update the title of the app that appears in the tab header",
        "timestamp": "2025-07-14T03:37:55.502Z"
    },
    {
        "messageId": 8,
        "type": "user",
        "message": "/quit",
        "timestamp": "2025-07-14T03:45:09.734Z"
    }
]
```
