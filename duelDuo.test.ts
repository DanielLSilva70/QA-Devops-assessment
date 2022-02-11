
import { Builder, Capabilities, By } from "selenium-webdriver"
// const {Builder...} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    // await driver.sleep(3000)
})

test('can you draw the bots', async () => {
    const draw = await driver.findElement(By.css('button#draw'))
    await draw.click()
    await driver.sleep(2000)
} )
test('can you see all bots', async () => {
    const add = await driver.findElement(By.css('button#see-all'))
    await add.click()
    await driver.sleep(3000)
})