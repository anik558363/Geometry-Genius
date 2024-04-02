function calculatePentagonArea(){
    // get pentagonPerimeter
    const pentagonPerimeter = parseFloat(document.getElementById('pentagon_perimeter').value);

     //  get pentagonBase
     const pentagonBase = parseFloat(document.getElementById('pentagon_base').value);

     // get areaContainer

     const areaContainer = document.getElementById('area_container');

     // create p(tag)
 
     const p = document.createElement('p');



     if (isNaN(pentagonPerimeter) || isNaN(pentagonBase)) {
        alert ('Invalid Number');
    }else{
        const area = pentagonPerimeter * pentagonBase ;

        p.innerText = `${sum++}. Parallelogram  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('parallelogram_base').value = '';
        document.getElementById('parallelogram_width').value = '';

    }


}