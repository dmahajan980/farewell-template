$(document).ready(function () {
    $('.senior-link').click(function () {
        name = $(this).text().toLowerCase()
        $.getJSON('../seniors/' + name + '/senior.json', function (senior) {
            document.title = 'Farewell ' + senior.name
            $('.carlo_txt').html('<h2>' + senior.h2 + '</h2>')
            $('.carlo_txt').append('<p>' + senior.p1_desc + '<br><br>' + senior.p2_desc + '</p>')
            $('.carlo').attr('src', senior.imageOnRight)
            // $('.txt4').html(senior.txt4)
            $('.ravi_img3').attr('src', senior.profileimg)
            $('.record1').attr('src', senior.recordDivImages[0])
            $('.record2').attr('src', senior.recordDivImages[1])
            $('.record3').attr('src', senior.recordDivImages[2])
            $('.record4').attr('src', senior.recordDivImages[3])
            $('#section6bg').attr('src', senior.section6bg)
            $('#div_patch1').html(senior.shortText)
            $('#div_patch2').html(senior.shortText2)
            $('.btn-play').attr('href', senior.TvVideoLink)
            $('.ravi_pic').attr('src', senior.section7bg)
            $('.story1').attr('src', senior.swiperImages[0])
            $('.s_story1').attr('src', senior.swiperImages[1])
            $('.s_story2').attr('src', senior.swiperImages[2])
            $('.s_story3').attr('src', senior.swiperImages[3])
            $('.s_story4').attr('src', senior.swiperImages[4])
            $('.s_story5').attr('src', senior.swiperImages[4])
            $('.p_img1').attr('src', senior.swiperImages[0])
            $('.p_img2').attr('src', senior.swiperImages[1])
            $('.p_img3').attr('src', senior.swiperImages[2])
            $('.p_img4').attr('src', senior.swiperImages[3])
            $('.p_img5').attr('src', senior.swiperImages[4])
        })
    })
})