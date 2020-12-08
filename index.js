const { serveLoop, Logger } = require('@oliveai/ldk');
class Loop {
    start(services) {
        this.services = services;
        this.services.clipboard.streamClipboard((err, input) => {
           this.services.whisper.markdownWhisper({label: "Clipboard Whisper", markdown: input});
        });
    }

    stop() {

    }
}

const logger = new Logger('example-loop');
const loop = new Loop(logger);
serveLoop(loop);