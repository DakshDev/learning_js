// Loops and Continue



// For Loop

for (let i = 1; i <= 20; i++) {
    
    if(i == 5){
        console.log("Print Middle is Complete");
        continue;
    }
    if(i > 10){
        break;
    }
    console.log(`Print ${i} is complete`);
}
