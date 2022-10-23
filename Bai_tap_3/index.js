/* Bài tập Hover **/

let hoverText = () => {
    let content = ``;
    let string = document.querySelector('.heading').innerText;

    const HEADING = [...string];

    for (let chars of HEADING) {
        content += `<span>${chars}</span>`;
    };

    document.querySelector('.heading').innerHTML = content;
};

hoverText()