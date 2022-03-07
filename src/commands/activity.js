const SlashCommand = require("../utils/SlashCommands");
const fetch = require("node-fetch");

const command = new SlashCommand()
  .setName("activity")
  .setDescription("open activity session in voice channel")
  .addChannelOption((option) =>
    option
      .setName("channel")
      .setDescription(
        "Choose a voice-channel where do you want to open activity session"
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("activity")
      .setDescription("Choose actvity you want to open")
      .setRequired(true)
      .addChoice({
        name: "Betrayal.io",
        value: "betray",
      })
      .addChoice({
        name: "Checkers In The Park",
        value: "checkers",
      })
      .addChoice({
        name: "Chess In The Park",
        value: "chess",
      })
      .addChoice({
        name: "Doodle Crew",
        value: "doodle",
      })
      .addChoice({
        name: "Fishington.io",
        value: "fish",
      })
      .addChoice({
        name: "Letter League",
        value: "letter",
      })
      .addChoice({
        name: "Blazing 8s",
        value: "ocho",
      })
      .addChoice({
        name: "Poker Night",
        value: "poker",
      })
      .addChoice({
        name: "Sketch Heads",
        value: "sketch",
      })
      .addChoice({
        name: "Spell Cast",
        value: "spell",
      })
      .addChoice({
        name: "Watch Together",
        value: "youtube",
      })
      .addChoice({
        name: "Word Snacks",
        value: "word",
      })
  )

  .setRun(async (client, interaction, options) => {
    const channel = interaction.options.getChannel("channel");
    const choice = interaction.options.getString("activity");

    if (!channel.isVoice()) {
      return interaction.reply({
        content:
          "The channel you selected is not voice-channel. Please select voice-channel only",
        ephemeral: true,
      });
    }

    await interaction.deferReply();

    if (choice === "betray") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.betrayal,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Betrayal.io in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "checkers") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.checkers,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Checkers In The Park in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "chess") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.chess,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Chess In The Park in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "doodle") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.doodle,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Doodle Crew in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "fish") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.fishington,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Fishington.io in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "letter") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.letter,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Letter League in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "ocho") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.ocho,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Blazing 8s in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "poker") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.poker,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Poker Night in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "sketch") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.sketch,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Sketch Heads in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "spell") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.spell,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Spell Cast in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "youtube") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.watchtogether,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Watch Together in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }

    if (choice === "word") {
      fetch(`https://discord.com/api/v10/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: client.config.wordsnacks,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${client.config.token}`,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.status !== 200) {
          return interaction.editReply({
            content:
              "An error occured while trying to create invite link. Please try again later.",
          });
        }
        const invite = await res.json();
        return interaction.editReply({
          content: `[Click to open Word Snacks in ${channel}](https://discord.com/invite/${invite.code})`,
        });
      });
    }
  });

module.exports = command;
