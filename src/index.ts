import { createApp } from './createApp.ts';

const app = createApp();

const PORT = 8000;

const server = app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
