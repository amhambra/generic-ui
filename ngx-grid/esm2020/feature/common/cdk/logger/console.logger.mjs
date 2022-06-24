import { Logger } from './logger';
export class ConsoleLogger extends Logger {
    warn(text) {
        // eslint-disable-next-line no-console
        console.warn(text);
    }
    error(text) {
        // eslint-disable-next-line no-console
        console.error(text);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL2Nkay9sb2dnZXIvY29uc29sZS5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE9BQU8sYUFBYyxTQUFRLE1BQU07SUFFeEMsSUFBSSxDQUFDLElBQVk7UUFDaEIsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFZO1FBQ2pCLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2dnZXIgZXh0ZW5kcyBMb2dnZXIge1xuXG5cdHdhcm4odGV4dDogc3RyaW5nKTogdm9pZCB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblx0XHRjb25zb2xlLndhcm4odGV4dCk7XG5cdH1cblxuXHRlcnJvcih0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdGNvbnNvbGUuZXJyb3IodGV4dCk7XG5cdH1cblxufVxuIl19