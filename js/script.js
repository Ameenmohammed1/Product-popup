let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');//click cheytha product nte data name eduthu
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');//target name eduthu
      if(name == target){//target um name um onnayal 
        preview.classList.add('active');//aa name ulla preview nu active add cheyum
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    console.log(close);
    close.classList.remove('active');//active ulla prewview nu active remove cheyum
    preveiwContainer.style.display = 'none';
  };
});