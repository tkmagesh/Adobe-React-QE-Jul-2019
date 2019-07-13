import calculator from './calculator';

describe('A Calculator', function(){
	it('Should be able to add 2 numbers', function(){
		//Arrange
		let x = 100,
			y = 200,
			expectedResult = 300;

		//Act
		let actualResult = calculator.add(x,y);

		//Assert

		expect(actualResult).toBe(expectedResult);
	});
});