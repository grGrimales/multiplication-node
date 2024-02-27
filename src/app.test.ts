import { ServerApp } from "./presentation/server-app";


describe('App Test', () => {
    test('should call Server.run with values', async () => {
         

        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app', '--b', '1', '--l', '10', '--n', 'table', '--d', 'outputs'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 1,
            limit: 10,
            showTable: false,
            name: 'table',
            destination: 'outputs'
        });

    });
});