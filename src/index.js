const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();
client.config = require("./config");

process.on("unhandledRejection", async (error) => {
  return;
  // return console.log(error);
});

process.on("uncaughtException", (error) => {
  return;
  // return console.log(error);
});

readdirSync("./src/events/").forEach((file) => {
  const event = require(`./events/${file}`);
  let eventName = file.split(".")[0];
  client.on(event.name, (...args) => event.run(client, ...args));
});
readdirSync("./src/commands/").forEach((dir) => {
  const commandFiles = readdirSync(`./src/commands/`).filter((f) =>
    f.endsWith(".js")
  );
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }
});

client.login(client.config.token);
