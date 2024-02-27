import { ServerApp } from "./server-app";
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

describe('Test server-app.ts', () => {

    test('should return default values', async () => {
        const logSpy = jest.spyOn(console, 'log');
        const CreateTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const SaveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        const options ={
            base: 1,
            limit: 10,
            showTable: false,
            name: 'table',
            destination: 'outputs'
        }

   

      ServerApp.run(options);

      expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('"Server running...');


        expect(CreateTableSpy).toHaveBeenCalledTimes(1);
        expect(CreateTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options
            .limit  });


        expect(SaveFileSpy).toHaveBeenCalledTimes(1);
        expect(SaveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileDestination: options.destination,
            fileName: options.name,

        });

        

    });

    test('should return custom values', async () => {
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock   = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        const options ={
            base: 1,
            limit: 20,
            showTable: false,
            name: 'table',
            destination: 'outputs'
        }

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
    
    
        ServerApp.run(options);
    
        expect( logMock ).toHaveBeenCalledWith('Server running...');
        expect( createMock ).toHaveBeenCalledWith({"base": options.base, "limit": options.limit });
        expect( saveFileMock ).toHaveBeenCalledWith({
          fileContent: '1 x 2 = 2',
          fileDestination: options.destination,
          fileName: options.name,
        });
        // expect( logMock ).toHaveBeenCalledWith('File created!');
        expect( logErrorMock ).not.toBeCalledWith();
    

        });
});