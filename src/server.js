import "dotenv/config"; 
import express from 'express';
import BullBoard from 'bull-board';
import UsersController from './app/controllers/UsersController';
import Queue from './app/lib/Queue';



const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UsersController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on the ${process.env.PORT}`)
}); 