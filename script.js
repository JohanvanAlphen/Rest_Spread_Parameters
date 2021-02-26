// const huiswerkMaken = (vak, callback) => {
//     console.log(`Ok, ok ik ga nu mijn ${vak} huiswerk maken.`);
//     setTimeout(() => {
//         callback();
//     }, 2000);
// };

// const klaarMetHuiswerk = () => {
//     console.log(`Kijk! Ik ben klaar met huiswerk maken!`);
// };

// huiswerkMaken('Wiskunde', klaarMetHuiswerk);

function huiswerkMaken(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken.`);
    setTimeout(() => {
        callback();
    }, 3000);
};
function klaarMetHuiswerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("Engels", klaarMetHuiswerk);