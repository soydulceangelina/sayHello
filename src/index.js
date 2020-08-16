const messages = [
    'Hello',
    'Hi',
    'how are you?',
    'Nice to see you',
    'Good day'
];

const sayHello = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { sayHello() };