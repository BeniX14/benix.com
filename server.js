const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

app.get('/download', async(req, res) => {
    const videoUrl = req.query.videoUrl;
    const format = req.query.format;

    try {
        const info = await ytdl.getInfo(videoUrl);
        const videoTitle = info.videoDetails.title;
        const fileName = `${videoTitle}.${format}`;

        res.header('Content-Disposition', `attachment; filename="${fileName}"`);
        ytdl(videoUrl, { format: format })
            .pipe(res);
    } catch (error) {
        console.error('Hiba történt a videó letöltése közben:', error);
        res.status(500).send('Hiba történt a videó letöltése közben.');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`A szerver fut a ${port}-es porton...`);
});