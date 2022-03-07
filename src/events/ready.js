const { ActivityType } = require("discord.js");
const color = require("colors");

module.exports = {
  name: "ready",
  run: async (client) => {
    console.log(
      color.green(`[CLIENT] ${client.user.username} is now Online!`)
    );
    console.log(
      color.green(`[CLIENT] Loaded [${client._eventsCount}] events.`)
    );
    console.log(
      color.green(`[CLIENT] Loaded [${client.commands.size}] commands.`)
    );

    client.user.setPresence({
      status: "online",
      activities: [
        {
          name: "My Potato Laptop",
          type: ActivityType.Competing,
        },
      ],
    });
  },
};
