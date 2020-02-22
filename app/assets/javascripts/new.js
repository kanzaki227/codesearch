$(function () {
  var buildPrompt = `<option value>---</option>`
  var buildHtmlOption = function (cat) {
    var option = `<option value ="${cat.id}">${cat.name}</option>`
    return option
  }
  var buildInputFile = function (num) {
    var input = `<input data-id="${num}" type="file" name="product[images_attributes][${num}][image_url]" id="product_images_attributes_${num}_image_url">`
    return input
  }
  var product_img = $('.product_image')
  
    product_img.parents('.sell__image-select__ul-text').css('opacity', 1);
  product_img.parent().next('.btn-box').css('display', 'block')


  
  

});