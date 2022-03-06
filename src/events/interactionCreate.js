/**
 *
 * @param {import("../index")} client
 * @param {import("discord.js").Interaction}interaction
 */

module.exports = {
  name: "interactionCreate",
  run: async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
      let command = client.commands.find(
        (x) => x.name == interaction.commandName
      );
      if (!command || !command.run)
        return interaction.reply(
          "Sorry the command you used doesn't have any run function"
        );
      command.run(client, interaction, interaction.options);
      return;
    }
  },
};
