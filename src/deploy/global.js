const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const config = require("../dev-config");
const fs = require("node:fs");
const color = require("colors");

const commands = [];
const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`../commands/${file}`);
  commands.push(command);
}

const clientId = config.clientId;
const rest = new REST({ version: "9" }).setToken(config.token);

(async () => {
  try {
    console.log(color.green("[CLIENT] Reloading Commands To Global."));

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log(
      color.green("[CLIENT] Successfully Deployed Commands To Global.")
    );
  } catch (error) {
    console.error(error);
  }
})();
