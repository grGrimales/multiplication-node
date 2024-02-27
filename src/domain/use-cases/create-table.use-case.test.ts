import { number, option } from "yargs";
import { CreateTable } from "./create-table.use-case";
import { Options } from './save-file.use-case';



describe('CreateTableUseCase', () => {
    test('should create table with defaul values', () => {

        const createTableUseCase = new CreateTable();

        const table = createTableUseCase.execute({ base: 2, limit: 10 });
        const rows = table.split('\n').length;

        console.log(table)

        expect(createTableUseCase).toBeInstanceOf(CreateTable);

        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);

    });

    test('should create table with custom values', () => {

        const createTableUseCase = new CreateTable();
        const Options = {
            base: 3,
            limit: 20
        }


        const table = createTableUseCase.execute(Options);

        const rows = table.split('\n').length;

        expect(createTableUseCase).toBeInstanceOf(CreateTable);
        expect(table).toContain('3 x 1 = 3');
        expect(table).toContain('3 x 20 = 60');
        expect(rows).toBe(20);


    });
});