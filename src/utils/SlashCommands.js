const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  CommandInteraction,
  CommandInteractionOptionResolver,
} = require("discord.js");
const ActivitiesBot = require("../index");

class SlashCommand extends SlashCommandBuilder {
  constructor() {
    super();
    this.type = 1;
    return this;
  }
  /**
   * Set Execution of the command
   * @param {(client: ActivitiesBot, interaction: CommandInteraction, options: CommandInteractionOptionResolver) => Promise<any>} callback
   */
  setRun(callback) {
    this.run = callback;
    return this;
  }
}

module.exports = SlashCommand;