/* Bài tập thay đổi màu sắc căn nhà **/

const ARRCOLOR = ['red', 'green', 'blue', 'orange', 'pink', 'black', 'yellow', 'silver'];


let renderButton = () => {
    let content = '';
    for (let color of ARRCOLOR) {
        content += `
            <button style="background-color:${color}" class="btn text-light mt-5 mx-2" onclick="changeColor('${color}')">${color}</button>
        `
    };
    document.querySelector('#colors').innerHTML = content;
};

window.changeColor = (color) => {
    document.querySelector('#home').style.color = color;
};

renderButton();



