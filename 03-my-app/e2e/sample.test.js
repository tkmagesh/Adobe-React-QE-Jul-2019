

/*describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        expect(title).toBe('WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});*/

describe('Application home page', () => {
	it('should greet the user', () => {
		browser.url('http://localhost:3000');
		$('input[type="text"]').setValue('Suresh');
		$('input[value="Greet').click();
		expect($('.highlight').getText()).toBe('Hi Magesh, Have a nice day!')
	})
})