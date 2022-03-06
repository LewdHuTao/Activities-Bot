const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { readdirSync } = require("fs")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.commands = new Collection();
client.config = require("./dev-config");

readdirSync("./src/events/").forEach((file) => {
    const events = require(`./events/${file}`);
    client.on(events.name, (...args) => events.run(client, ...args))
})
readdirSync("./src/commands/").forEach((file) => {{
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
    }
  });

client.login(client.config.token)