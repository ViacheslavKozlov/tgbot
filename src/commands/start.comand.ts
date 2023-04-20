import { Markup, Telegraf } from "telegraf";
import { Command } from "./comand.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handle(): void {
    this.bot.start(ctx => {
      ctx.reply(
        "Did u like it",
        Markup.inlineKeyboard([Markup.button.callback("yes", "liked"), Markup.button.callback("no", "disliked")])
      );
    });

    this.bot.action("liked", ctx => {
      ctx.session.like = true;
      ctx.editMessageText("TY");
    });

    this.bot.action("disliked", ctx => {
      ctx.session.like = false;
      ctx.editMessageText("Why so?");
    });
  }
}
