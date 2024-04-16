const {Client , Interaction,EmbedBuilder} = require('discord.js')

module.exports = {
    name:'quiz',
    description:'Starts the quiz',

    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: async (client,interaction) => {
        try {
            const quizData = require('../../data/quizs.json');
            
            // console.log(`The quiz.json have Total ${quizData.length} questions`);


            await interaction.deferReply();
           const user = interaction.user;
            const channel = interaction.channel;
            // if (user.quiz) {
            //                 return await interaction.editReply({ content: `You're already in a quiz, ${user}! Finish the current one first.`, ephemeral: true });
            //             }
            
                        const randomIndex = Math.floor(Math.random() * quizData.length);
                        const question = quizData[randomIndex];
            
                        const currentQuiz = {
                            questionIndex: randomIndex,
                            score: 0,
                            timeout: null,
                        };
            
                        user.quiz = currentQuiz;
            
                        const embed = new EmbedBuilder()
                            .setTitle(`Random Programming Quiz!`)
                            .setDescription(`⭐ **${question.question}**`)
                            .setFields(
                                question.options.map((option, index) => ({ name: `${index + 1}.`, value: `**${option}**` }))
                            )
                            .setColor(0x00ffff)
                            .setFooter({text:' ✨ Give Answers in the form of Numbers from 1 to 4 \n ✨ For Feedbacks DM or Ping @Mehar '})
                            
                            ;
            
                        await interaction.editReply({ embeds: [embed] });
            
                        // // Set timer for user response (adjust timeout value as needed)
                        // currentQuiz.timeout = setTimeout(async () => {
                        //     channel.send(`${user}, time's up! The correct answer was ${question.options[question.correctAnswer]}.`);
                        //     user.quiz = null; // Clear quiz data from user
                        // }, 30000); // Timeout in milliseconds (30 seconds in this example)
            
                        const filter = m => m.author.id === user.id;
                        const collector = channel.createMessageCollector(filter, { time: 30000 });
            
                        collector.on('collect', async message => {
                            const answer = parseInt(message.content) - 1;
            
                            clearTimeout(currentQuiz.timeout);
            
                            if (answer < 0 || answer >= quizData.length) {
                                return channel.send(`${user}, Invalid answer! Please choose a number between 1 and ${quizData.length}.`);
                            }
            
                            if (answer === quizData[currentQuiz.questionIndex].correctAnswer) {
                                currentQuiz.score++;
                                channel.send(`${user}, Correct! `);
                                collector.stop();
                                return;
                            } else {
                                channel.send(`${user}, Incorrect. The correct answer was ${question.options[question.correctAnswer]}.`);
                                collector.stop();

                                return;
                            }
            
                            // // Handle quiz completion or continue to next question (similar logic)
                            // if (currentQuiz.questionIndex === quizData.length - 1) {
                            //     channel.send(`Congratulations! You finished the quiz with a score of ${currentQuiz.score}.`);
                            //     user.quiz = null;
                            // } else {
                            //     // Proceed to next question (similar logic to previous example)
                            // }
                        });
            
            
                    } catch (error) {
                        console.log(`An Error Occured in quiz.js : ${error}`);
            
                    }
                },
            
            }




































// module.exports = {

//     name:'quiz',
//     description:'Starts the quiz',
//     options:[]

//     // callback: async (client, interaction) => {
//     //     try {
//     //         const quizData = JSON.parse(require('./quizs.json'));
//     //         await interaction.deferReply();
//     //         const user = interaction.user;
//     //         const channel = interaction.channel;

//     //         if (user.quiz) {
//     //             return await interaction.editReply({ content: `You're already in a quiz, ${user}! Finish the current one first.`, ephemeral: true });
//     //         }

//     //         const randomIndex = Math.floor(Math.random() * quizData.length);
//     //         const question = quizData[randomIndex];

//     //         const currentQuiz = {
//     //             questionIndex: randomIndex,
//     //             score: 0,
//     //             timeout: null,
//     //         };

//     //         user.quiz = currentQuiz;

//     //         const embed = new EmbedBuilder()
//     //             .setTitle(`Random Programming Quiz!`)
//     //             .setDescription(question.question)
//     //             .setFields(
//     //                 question.options.map((option, index) => ({ name: `${index + 1}.`, value: option, inline: true }))
//     //             )
//     //             .setColor(0x00ffff);

//     //         await interaction.reply({ embeds: [embed] });

//     //         // Set timer for user response (adjust timeout value as needed)
//     //         currentQuiz.timeout = setTimeout(async () => {
//     //             channel.send(`${user}, time's up! The correct answer was ${question.options[question.correctAnswer]}.`);
//     //             user.quiz = null; // Clear quiz data from user
//     //         }, 30000); // Timeout in milliseconds (30 seconds in this example)

//     //         const filter = m => m.author.id === user.id;
//     //         const collector = channel.createMessageCollector(filter, { time: 30000 });

//     //         collector.on('collect', async message => {
//     //             const answer = parseInt(message.content) - 1;

//     //             clearTimeout(currentQuiz.timeout);

//     //             if (answer < 0 || answer >= quizData.length) {
//     //                 return channel.send(`${user}, Invalid answer! Please choose a number between 1 and ${quizData.length}.`);
//     //             }

//     //             if (answer === quizData[currentQuiz.questionIndex].correctAnswer) {
//     //                 currentQuiz.score++;
//     //                 channel.send(`${user}, Correct! You have ${currentQuiz.score} point(s).`);
//     //             } else {
//     //                 channel.send(`${user}, Incorrect. The correct answer was ${question.options[question.correctAnswer]}.`);
//     //             }

//     //             // Handle quiz completion or continue to next question (similar logic)
//     //             if (currentQuiz.questionIndex === quizData.length - 1) {
//     //                 channel.send(`Congratulations! You finished the quiz with a score of ${currentQuiz.score}.`);
//     //                 user.quiz = null;
//     //             } else {
//     //                 // Proceed to next question (similar logic to previous example)
//     //             }
//     //         });


//     //     } catch (error) {
//     //         console.log(`An Error Occured in quiz.js : ${error}`);

//     //     }
//     // },

   
// }