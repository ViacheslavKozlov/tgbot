import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { StartCommand } from "./commands/start.comand";
import { Command } from "./commands/comand.class";
import { IBotContext } from "./context/context.interface";

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor(private readonly ConfigService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.ConfigService.get("TOKEN"));
    this.bot.use(new LocalSession({ database: "sessions.json" }).middleware());
  }

  init() {
    this.commands = [new StartCommand(this.bot)];

    for (const command of this.commands) {
      command.handle();
    }
    this.bot.launch;
  }
}

const bot = new Bot(new ConfigService());
bot.init();
