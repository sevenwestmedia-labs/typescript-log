import { consoleLogger } from '.'

it('does not log to lower level', () => {
    const log = jest.fn()
    // tslint:disable-next-line:no-console
    console.log = log

    const logger = consoleLogger('warn')

    logger.info('Test info')

    expect(log).not.toBeCalled()
})

it('does not log to same level', () => {
    const log = jest.fn()
    // tslint:disable-next-line:no-console
    console.log = log

    const logger = consoleLogger('info')

    logger.info('Test info')

    expect(log).toBeCalled()
})
