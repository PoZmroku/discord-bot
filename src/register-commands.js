require('dotenv').config();
const {REST, Routes} = require('discord.js');

const commands = [
    {
        name: 'check',
        description: 'Ответ',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Проверка команды...')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );
        console.log('Команда успешно прошла проверку');
    } catch (error) {
        console.log(`Ошибочка вышла: ${error}`);
    }
})();