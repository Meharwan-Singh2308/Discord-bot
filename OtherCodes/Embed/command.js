require("dotenv").config();
const { REST, Routes , ApplicationCommandOptionType} = require("discord.js");

const commands = [
  {
    name:"embed",
    description:'sends an embed',
  }
  ,
  //Command With Options -
  {
    name:'hihi',
    description:'hi hi hu hu',
    options:[
      {name:'first-num',description:'first number',type:ApplicationCommandOptionType.Number,required:true},
      {name:'second-num',description:'second number',type:ApplicationCommandOptionType.Number,required:true},
    ]
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('first')

        rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })

        console.log('second')
    } catch (error) {
        console.error(error);
        
    }
})()