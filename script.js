
const div_vertical = document.querySelector('#div_vertical');

const p_text_power = document.createElement('p');
const p_text_machine = document.createElement('p');
const p_text_sleep = document.createElement('p');

const button_on = document.createElement('button');
const button_off = document.createElement('button');
const button_reboot = document.createElement('button');

const div_power = document.querySelector('#div_power');
const div_machine = document.querySelector('#div_machine');
const div_sleep = document.querySelector('#div_sleep');
const div_button_on = document.querySelector('#div_btn_on');
const div_button_off = document.querySelector('#div_btn_off');
const div_button_reboot = document.querySelector('#div_btn_reboot');

const POWER_ON = 1;
const POWER_OFF = 0;

const MACHINE_NONE = 0;
const MACHINE_ON = 1;
const MACHINE_OFF = 2;
const MACHINE_REBOOT = 3;

let flag_button_on_off = false;
let flag_button_reboot = false;
let flag_power = false;
let flag_machine = false;
let flag_sleep = false;
let flag_print = false;

let variable_power;
let var_machine;
let variable_sleep;
const variable_state = MACHINE_ON;

function insert_text(element, child, text, add_del) {
	child.textContent = text;
	child.className = 'text_size';
	if (add_del === true) {
		element.append(child);
	} else {
		child.remove();
	}
}

function insert_button(element, child, click, text, add_del) {
	if (add_del === true) {
		child.addEventListener('click', click);
		child.textContent = text;
		child.className = 'btn_size';
		element.append(child);
	} else {
		child.remove();
	}
}

function page_clear() {
	if (flag_print === true) {
		flag_print = false;
		if (flag_button_on_off === true) {
			insert_button(div_button_on, button_on, click_button_on, 'ON', false);
		} else {
			insert_button(div_button_off, button_off, click_button_off, 'OFF', false);
		}

		if (flag_button_reboot === true) {
			flag_button_reboot = false;
			insert_button(div_button_reboot, button_reboot, click_button_reboot, 'REBOOT', true);
		}
	}
}

function page_print() {
	if(flag_power === false){
		flag_power = true;
		insert_text(div_power, p_text_power, 'Power: ', true);
	}
	if(flag_machine === false){
		flag_machine = true;
		insert_text(div_machine, p_text_machine, "Machine state: ", true);
	}
	if (flag_print === false) {
		flag_print = true;
		switch (variable_state) {
			case MACHINE_NONE: {
				flag_button_reboot = false;

				break;
			}

			case MACHINE_ON: {
				flag_button_reboot = true;
				flag_button_on_off = false;
				insert_button(div_button_off, button_off, click_button_off, 'OFF', true);
				insert_button(div_button_reboot, button_reboot, click_button_reboot, 'REBOOT', true);

				break;
			}

			case MACHINE_OFF: {
				flag_button_reboot = true;
				flag_button_on_off = true;
				insert_button(div_button_on, button_on, click_button_on, 'ON', true);
				insert_button(div_button_reboot, button_reboot, click_button_reboot, 'REBOOT', true);

				break;
			}

			case MACHINE_REBOOT: {
				flag_button_reboot = false;

				break;
			}
		// No default
		}
	}
}

function page_update() {
	if (flag_print === true) {
		if (flag_button_on_off === true) {
			flag_button_on_off = false;
			insert_button(div_button_on, button_on, click_button_on, 'ON', false);
			insert_button(div_button_off, button_off, click_button_off, 'OFF', true);
		} else {
			flag_button_on_off = true;
			insert_button(div_button_off, button_off, click_button_off, 'OFF', false);
			insert_button(div_button_on, button_on, click_button_on, 'ON', true);
		}

		if (flag_button_reboot === false) {
			flag_button_reboot = true;
			insert_button(div_button_reboot, button_reboot, click_button_reboot, 'REBOOT', true);
		}
	}
}

function click_button_on() {
	page_update();
}

function click_button_off() {
	page_update();
}

function click_button_reboot() {
	// Insert_button(div_button_reboot, button_reboot, '', false);
}

function init() {}

init();
// Insert_button(div_button_on, button_on, click_button_on, 'ON', true);
// insert_button(div_button_off, button_off, click_button_off, 'OFF', true);
// insert_button(div_button_reboot, button_reboot, click_button_reboot, 'REBOOT', true);
page_print();
// insert_text(div_power, p_text_power, 'Power: ', true);
// insert_text(div_sleep, p_text_sleep, 'Sleep: ', true);
