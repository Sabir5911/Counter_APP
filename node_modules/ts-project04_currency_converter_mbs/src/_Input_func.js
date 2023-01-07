import inquirer from "inquirer";
export async function input_currency_amount() {
    let user_input = await inquirer.prompt([{
            type: "input",
            name: "curr_amount",
            message: "Please Enter Amount to Convert",
            validate: function validateInput(input) {
                let str_to_num = parseInt(input);
                if (isNaN(str_to_num) || input.length === 0) {
                    return "Please Enter a Number";
                }
                return true;
            },
        }]);
    let input_num = parseInt(user_input.curr_amount);
    return input_num;
}
