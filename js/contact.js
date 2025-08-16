// alert("js")
$('.nameErr').hide()
$('.emailErr').hide()
$('.subErr').hide()
// name validation
$('#inputname').on('input',function(){
    let data=$('#inputname').val();
    if(data.length<1)
    {
        $('.nameErr').show()
        $('.nameErr').html("required feild")
    }
    else if(data.length<10)
    {
         $('.nameErr').show()
        $('.nameErr').html("minimum 10 character")
    }
    else{
         $('.nameErr').show()
        $('.nameErr').html("okay")
    }
})
// mail validation
$('#inputemail').on('input',function(){
    let data1=$('#inputemail').val();
    if(data1.length<1)
    {
        $('.emailErr').show()
        $('.emailErr').html("required feild")
    }
    else if(data1.length<10)
    {
         $('.emailErr').show()
        $('.emailErr').html("minimum 10 character")
    }
    else{
         $('.emailErr').show()
        $('.emailErr').html("okay")
    }
})
// sub validation
$('#inputsubject').on('input',function(){
    let data2=$('#inputsubject').val();
    if(data2.length<1)
    {
        $('.subErr').show()
        $('.subErr').html("required feild")
    }
    else if(data2.length<10)
    {
         $('.subErr').show()
        $('.subErr').html("minimum 1 subject name")
    }
    else{
         $('.subErr').show()
        $('.subErr').html("okay")
    }
})

