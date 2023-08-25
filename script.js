//ASSIGNMENT 1
//CHANGE BACKGROUND COLOR
function getRandomColor()
{
    let l='0123456789ABCDEF';
    let col='#';
    for(var i=0;i<6;i++)
    {
        col+=l[Math.floor(Math.random()*16)];

    }
    return col;
}
function changeBackgroundColor()
{
    const newcolor=getRandomColor();
    document.body.style.backgroundColor=newcolor;

}
document .onclick=changeBackgroundColor;

