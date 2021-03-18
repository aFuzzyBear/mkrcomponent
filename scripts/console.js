/**
 **         _     ______ _______                       _        
 **        | |   (_____ (_______)                     | |       
 **   ____ | |  _ _____) )       ___  ____   ___  ___ | | _____ 
 **  |    \| |_/ )  __  / |     / _ \|  _ \ /___)/ _ \| || ___ |
 **  | | | |  _ (| |  \ \ |____| |_| | | | |___ | |_| | || ____|
 **  |_|_|_|_| \_)_|   |_\______)___/|_| |_(___/ \___/ \_)_____)
 **                                                             
 ** 
 *
 *
 **    _     _   
 **   (c).-.(c)  
 **    / ._. \   
 **  __\( Y )/__  created by:
 ** (_.-/'-'\-._)    _         _ 
 **    ||   ||    _.|_  _ _   |_) _  _.._
 **  _.' `-' '._ (_|||_|/_/_\/|_)(/_(_||  
 ** (.-./`-'\.-.)           /        
 **  `-'     `-'   
 */




// import chalk from 'chalk'
const {default:chalk} = await import('chalk')

export const title_text =chalk.keyword('purple')( `

         _     ______ _______                                               
        | |   (_____ (_______)                                          _   
  _____ | |  _ _____) )|      ___  ____  ____   ___  ____  _____ ____ _| |_ 
 |     \\| |_/ )  __  / |     / _ \\|    \\|  _ \\ / _ \\|  _ \\| ___ |  _ (_   _)
 | | |  |  _ (| |  \\ \\ |____| |_| | | | | |_| | |_| | | | | ____| | | || |_ 
 |_|_|__|_| \\_)_|   |__\\_____)___/|_|_|_|  __/ \\___/|_| |_|_____)_| |_| \\__)
                                        |_|                              

`)
    
const theme_success = chalk.keyword('purple').bold.bgKeyword('white')('✔️\   Success! \t')
const theme_warn = chalk.keyword('purple').bold.bgKeyword('orange')
('⚠️\   Warning: \t')
const theme_error = chalk.keyword('purple').bold.bgKeyword('red')('❗❗\  Error: \t')
const theme_preference =(type)=> chalk.keyword('navy').bold.bgKeyword('green')('👉\ ' +' ' + type +' : ' )
const theme_link =(str) => chalk.hex('#D58B2A').underline(str)

export const display_preference = (type,value) => console.log(theme_preference(type) + '  ' + theme_link(value))
export const display_output = (...args)=> console.log(...args)

export const display_success = (...args) =>  console.log(theme_success+ args)

export const display_warn = (...args) => console.warn( theme_warn + args )

export const display_error = (...args) => console.error(theme_error + args)

let anime = [
    "🧙\ ___🖥️\ ",
    "🧙\ _🖥️\ ",
    "🧙\ 🖥️\ ",
    "🧙\ ⁉️\ 🖥️\ ",
    "🧙\ 💡\ 🖥️\ ",
    "🧙\ 🎇\ 🎆\🎇\ ",
    `🧙\ . 🖥️\ `,
    "🧙\ ..🖥️\ ",
    "🧙\ ...🐰\ ",
    theme_success + "🧙\ 🤦\ ",
]