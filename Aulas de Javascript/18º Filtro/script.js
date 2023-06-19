function myFunction(){
    let input, ul, li, a, filtro, i;
    input = document.getElementById('myInput');
    filtro = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    li = ul.getElementByTagName('li');

    for( i = 0; i < li.length; i++)
    {
        a = li[i].getElementByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filtro) > -1)
        {
            li[i].style.display = '';
        }
        else
        {
            li[i].style.display = 'none';
        }
    }
}