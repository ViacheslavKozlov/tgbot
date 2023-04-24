# Telegram Bot

This is a Telegram bot that allows users to interact with it through various commands. The bot is built using the Telegraf library and uses a LocalSession middleware to store user session data.

## Getting Started

To get started with this project, you will need to have a Telegram account and create a new bot using the BotFather. Once you have created a bot, you will need to obtain the bot token and add it to your `.env` file.

### Prerequisites

- Telegram account
- Bot token from BotFather `https://t.me/botfather`
- Node.js installed on your machine

### Installation

1. Clone the repository to your local machine
2. Run `npm install` to install all dependencies
3. Create a `.env` file in the root directory of the project and add your bot token as `TOKEN=your_bot_token_here`
4. Run `npm run dev` to start the bot in dev mode for further development
5. Run `npm start` to start the bot
   
## Commands

The bot currently supports the following commands:

- `/start` - starts the bot and prompts the user to like or dislike the bot
- `/help` - displays a list of available commands

## Code Structure

The project is structured as follows:

- `app.ts` - the main entry point of the application, initializes the bot and starts listening for incoming messages
- `config.service.ts` - a service that reads the .env file and provides access to the configuration variables
- `commands` folder - contains all the available commands that the bot supports

## Available Commands

### Start Command

The start command prompts the user to like or dislike the bot using an inline keyboard. The user's response is stored in their session data.

### Help Command

The help command displays a list of available commands that the user can use to interact with the bot.

## Configuration

The configuration for the bot is stored in a `.env` file in the root directory of the project. The `config.service.ts` file reads the .env file and provides access to the configuration variables.

## Conclusion

This project provides a basic template for building Telegram bots using the Telegraf library. It demonstrates how to use sessions to store user data, how to create custom commands. For production pls use Redis instead of `sessions.json` file. With this foundation, you can build more complex bots that could perform a wide range of tasks.