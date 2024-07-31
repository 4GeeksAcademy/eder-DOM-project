let pronoun = ['the', 'our'];
let adj = ['great', 'big','test2'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com','.net','.us','.io']

function newDoms(params) {
    let newDOM ="";
    for (let x = 0; x < pronoun.length; x++) {
        for (let y = 0; y < adj.length; y++) {
            for (let z = 0; z < noun.length; z++) {
                for (let i = 0; i < extensions.length; i++) {
                    newDOM = pronoun[x] + adj[y] + noun[z] + extensions[i];
                    console.log(newDOM);                       
                }                
            }            
        }        
    }    
}
newDoms()