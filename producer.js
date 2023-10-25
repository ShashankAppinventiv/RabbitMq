const amqp = require('amqplib')
const queueName='testQueue';
const message='Hello world';
const sendMsg=async ()=>{
    const connection=await amqp.connect('amqp://localhost');
    const channel=await connection.createChannel();
    const queue=await channel.assertQueue(queueName,{durable:false})
    channel.sendToQueue(queueName,Buffer.from(message))
    console.log("Msg send :",message)
    setTimeout(() => {
    //    connection.close();
       process.exit(); 
    }, );
}
sendMsg();