#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { titleTimer } from "./src/_AppTitle.js";
import { currency_list } from "./src/_Currency.js";
import { input_currency_amount } from "./src/_Input_func.js";

//
class _currenciesConverter {
  private input1: number;

  constructor() {
    this.input1 = 0;
  }

  // method to run the app
  public async Run(): Promise<void> {
    await this.AppTitle();
    await this.Converter();
  }

  // autor watermark on app at the begening
  private async AppTitle(): Promise<void> {
    const title = chalkAnimation.neon(`__________________Welcome to M.B Currency Converter App__________________`);
    await titleTimer();
    title.stop();
    console.log(chalk.bgRed.italic(`                                                             Autor:"M.B"`));
    return;
  }

  // main
  private async Converter(): Promise<void> {
    let continue_exit:boolean;
    do{
      let curr_type_1: string = await this.Currency1();
      let curr_type_2 = await this.Currency2();

      switch (curr_type_1) {
        case "Pakistani Rupee - Rs":
          this.input1 = await input_currency_amount();
          this.pak_ru_converter(this.input1, curr_type_2);
          break;
        case "Indian Rupee - ₹":
          this.input1 = await input_currency_amount();
          this.ind_ru_converter(this.input1, curr_type_2);
          break;
        case "Dollar - $":
          this.input1 = await input_currency_amount();
          this.usd_converter(this.input1, curr_type_2);
          break;
        case "Euro - €":
          this.input1 = await input_currency_amount();
          this.euro_converter(this.input1, curr_type_2);
          break;
        case "Pound - £":
          this.input1 = await input_currency_amount();
          this.pound_converter(this.input1, curr_type_2);
          break;
        case "Yen - ¥":
          this.input1 = await input_currency_amount();
          this.yen_converter(this.input1, curr_type_2);
          break;
        case "Franc - ₣":
          this.input1 = await input_currency_amount();
          this.franc_converter(this.input1, curr_type_2);
          break;
        case "Dinar - د.ك":
          this.input1 = await input_currency_amount();
          this.dinar_converter(this.input1, curr_type_2);
          break;
        case "Dirham - د.إ":
          this.input1 = await input_currency_amount();
          this.dirham_converter(this.input1, curr_type_2);
          break;
      }

      const continueORexit=await inquirer.prompt([{
        type:"confirm",
        name:"decision",
        message:"Want to Convert?"

      }]);
      continue_exit=continueORexit.decision

    }while(continue_exit===true)

    console.log(chalk.cyan("Thank you for Using M.B Curriency Converter"));
    
  }

  // method to choose currency to convert from
  private async Currency1(): Promise<string> {
    const currency1 = await inquirer.prompt([
      {
        type: "rawlist",
        name: "firstCurrency",
        message: "Select a Currency to Convert from",
        choices: currency_list,
      },
    ]);
    return currency1.firstCurrency;
  }

  // method to choose currency to convert to
  private async Currency2(): Promise<string> {
    const currency2 = await inquirer.prompt([
      {
        type: "rawlist",
        name: "firstCurrency",
        message: "Select a Currency to Convert to",
        choices: currency_list,
      },
    ]);
    return currency2.firstCurrency;
  }

// methods for convertion 
  private async pak_ru_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*1;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*0.37;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*0.0044;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*0.0041;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.0036;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*0.58;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.0041;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.0014;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*0.016;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    } 
  }

  private async ind_ru_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*2.74;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*1;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*0.012;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*0.011;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.0100;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*1.59;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.011;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.0037;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*0.044;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async usd_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*226.55;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*82.75;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*1;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*0.93;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.83;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*131.00;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.92;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.31;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*3.67;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async euro_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*242.36;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*88.52;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*1.07;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*1;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.88;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*140.64 ;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.93;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.33;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*3.93 ;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async pound_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*274.08;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*100.11 ;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*1.21 ;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*1.13;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*1;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*159.01 ;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*1.12;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.37 ;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*4.43;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async yen_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*1.73;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*0.63;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*0.0076;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*0.0071;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.0063;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*1;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.0071;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.024;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*0.028;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async franc_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*245.04;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*89.50;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*1.08;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*1.08;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.89;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*141.66;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*1;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.33;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*3.97;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async dinar_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*739.51;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*270.93;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*3.27;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*3.05;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*2.71;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*428.80;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*3.03;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*1;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*12.02;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  private async dirham_converter(input: number, convert_to: string) {
    let result:number;
    switch (convert_to) {
      case "Pakistani Rupee - Rs":
        result=input*61.69;
        console.log(chalk.green(`${result} Rs`)); 
        break;
      case "Indian Rupee - ₹":
        result=input*22.53;
        console.log(chalk.green(`${result} ₹`));
        break;
      case "Dollar - $":
        result=input*0.27;
        console.log(chalk.green(`${result} $`));
        break;
      case "Euro - €":
        result=input*0.25;
        console.log(chalk.green(`${result} €`));
        break;
      case "Pound - £":
        result=input*0.23;
        console.log(chalk.green(`${result} £`));
        break;
      case "Yen - ¥":
        result=input*35.66;
        console.log(chalk.green(`${result} ¥`));
        break;
      case "Franc - ₣":
        result=input*0.25;
        console.log(chalk.green(`${result} ₣`));
        break;
      case "Dinar - د.ك":
        result=input*0.083;
        console.log(chalk.green(`${result}  د.ك`));
        break;
      case "Dirham - د.إ":
        result=input*1;
        console.log(chalk.green(`${result}  د.إ`));
        break;
    }
  }

  // end of class
}

let run = new _currenciesConverter();
run.Run();
