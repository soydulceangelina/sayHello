const messages = [
    'Hello',
    'Hi',
    'how are you?',
    'Nice to see you',
    'Good day',
    'Hola',
    'Como estas?',
    'Que tal?',
    'Salut',
    'comment ça va?'
];

const sayHello = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { sayHello };