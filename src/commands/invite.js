const SlashCommand = require("../utils/SlashCommands");

const command = new SlashCommand()
  .setName("invite")
  .setDescription("Get invite link")
  .setRun(async (client, interaction, options) => {
    await interaction.deferReply();

    return interaction.editReply({
      content: `[Click to add ${client.user.username} to your server.](https://discord.com/api/oauth2/authorize?client_id=${client.config.clientId}&scope=bot%20applications.commands)`,
    });
  });

module.exports = command;
