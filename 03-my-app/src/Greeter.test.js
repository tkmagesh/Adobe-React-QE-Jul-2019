import React from 'react';
import Greeter from './Greeter';
import { shallow } from 'enzyme';

describe('Greeter Component', () => {
	test('should match the snapshot', () => {
		let greeter = shallow(<Greeter msg="Have a nice day"/>);

		expect(greeter).toMatchSnapshot();
	});

	test('should display the greet message', () => {
		let greeter = shallow(<Greeter msg="Have a nice day"/>);

		greeter.setState({userName : 'Magesh'});
		greeter
			.find('input[value="Greet"]')
			.simulate('click');

		expect(greeter
			.find('.highlight')
			.text()
		)
		.toBe('Hi Magesh, Have a nice day');

		expect(greeter).toMatchSnapshot();
	});

	test('should update the state with the greet message', () => {
		let greeter = shallow(<Greeter msg="Have a nice day"/>);

		greeter.setState({userName : 'Magesh'});
		greeter
			.find('input[value="Greet"]')
			.simulate('click');

		expect(greeter.state('message'))
			.toBe('Hi Magesh, Have a nice day');

		expect(greeter).toMatchSnapshot();
	});

})