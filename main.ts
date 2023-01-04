
import inquirer from"inquirer"
import figlet from'figlet'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation';


figlet.defaults({ fontPath: "assets/fonts" });



function ready() {
    console.log(chalk.red(figlet.textSync('Counter App')));


}

ready()







async function counter(){

let text:{"count":string} =await inquirer.prompt([{
         
           type:"input",
           name:"count",
           message:"Enter the text you want to count: "

      
           


}])



if(text.count.length==0){

  console.log(chalk.redBright("Enter Some Thing First "));
  

}else{

  let a=text.count.length
  console.log(chalk.yellowBright(` Total World Count : ${a}`));
}


 

}




let repeat=  async ()=> {
    
  do{
    await counter()
 
    var again =await inquirer.prompt([{
         
        type:'list',
        name:"again1",
        message:"If you want to try again press Y : ",

        choices:["yes","NO"]
       
       

   
        


}])

  }

 while(again.again1=="yes"||again.again1=="y")
 if(again.again1=="NO"){

  const sleep=()=>{
      return new Promise((resolve) => {
          setTimeout(resolve,1000)
      })
  }
  async function welcome() {
      
      
                                    var by=chalkAnimation.rainbow("Thanks for using")
      await sleep()
      by.stop()

    
  }

  welcome()
  
}
}
repeat()