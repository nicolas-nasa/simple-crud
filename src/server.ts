import { app, prisma } from './config';

(async () => {
    await prisma.$connect();
    app.listen(4008, () => console.log('Server is running!'));
})();
