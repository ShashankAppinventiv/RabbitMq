const amqp = require('amqplib')
const queueName='testQueue';
const message='Hello world';
const receiveMsg=async ()=>{
    const connection=await amqp.connect('amqp://localhost');
    const channel=await connection.createChannel();
    const queue=await channel.assertQueue(queueName,{durable:false})
    channel.consume(queueName,msg=>{
        setTimeout(() => {
            console.log("Receive message :",msg.content.toString())
        }, 1000);
    },{noAck:true});
}
receiveMsg();