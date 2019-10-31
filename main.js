$(clickMe).on('click', function(e) {
    if(popover.style.display==='block'){
      $(popover).hide()
    }else{
      $(popover).show()
    }
    setTimeout(function() {
      $(document).one('click', function() {
        console.log('hide')
        $(popover).hide()
      })
    }, 0)
  })
  $(wrapper).on('click', function(e){
    e.stopPropagation()
  })
  